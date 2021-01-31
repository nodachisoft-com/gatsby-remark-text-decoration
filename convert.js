"use strict";

var getDecTags = require('./dectags.js');

// === Precompile for speed ===
// Decoration-Tags format
const tagRegExp = new RegExp("{([a-zA-Z0-9\-#]*)}","g");
// Decoration Variable
const decVarRegExp = new RegExp("\\$\\{1\\}", "g");

/**
 * Convert Decoration Tags in string.
 * Like:
 *   ConvertDecoTagsToHtml( "This {b}is{/} a test.");
 * This returns:
 *   {convert:true, html: "This <span style='font-weight: bold;'>is</span> a test.}
 * 
 * This function return below object:
 * { 
 *   convert: isConverted,
 *   html : convertedText(if no convertion, this equals to input str)
 * }
 */
module.exports = function convertDecoTagsToHtml ( str , addTags = {} ) {
   
    const decTags = Object.assign( getDecTags() , addTags );
    const getRegTags = tagRegExp[Symbol.matchAll](str);
    const foundBeginTags = Array.from(getRegTags, x => x[0]);
    var isConverted = false;

    // Convert Open Decoration-Tag
    foundBeginTags.forEach( e => {
       var innerDecTag = e.substring(1, e.length - 1 );
       var decSplit = innerDecTag.split("-");
       var decType = decSplit[0];
       for (var [cmdSpec, replaceSpec] of Object.entries(decTags)) {
           if ( decType != cmdSpec ) continue;
           // decoration variable convert preparation
           var decVar = "";
           if ( decSplit.length == 2 ) {
               decVar = decSplit[1];
               replaceSpec = replaceSpec.replace( decVarRegExp , decVar);
           }
           str = str.replace( e, "<span " + replaceSpec +">");
           isConverted = true;
       }
    });
   
    // Convert Close Decoration-Tag
    const strSplitCloseTags = str.split("{\/}");
    if ( strSplitCloseTags.length > 1 ) {
        str = strSplitCloseTags.join("</span>");
        isConverted = true;
    }
    
    const result = {isConverted: isConverted, html : str};
    return result;
}
