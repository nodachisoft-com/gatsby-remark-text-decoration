"use strict";

const visit = require("unist-util-visit")
const convertDecoTagsToHtml = require('./convert.js');

module.exports = ({ markdownAST }, pluginOptions) => {
  visit(markdownAST, "text", node => {
    const result = convertDecoTagsToHtml(node.value,  pluginOptions.addTags);
    if ( result.isConverted ) {
      node.type="html";
      node.value = result.html;
    }
  })
  return markdownAST
}
