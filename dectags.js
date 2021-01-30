/**
 * Decoration Tags
 */
const decTags = {
    // color font
    "c" : "style='color: ${1};'"
    // bold 
    ,"b" : "style='font-weight: bold;'"
    // italic
    ,"i" : "style='font-style: italic;'"
    // oblique
    ,"o" : "style='font-style: oblique;'"
    // underline
    ,"u" : "style='border-bottom: solid 2px ${1};'"
    // dotted underline
    ,"udot" : "style='border-bottom: dotted  2px ${1};'"
    // underline with marker pen
    ,"um" : "style='background:rgba(0, 0, 0, 0) linear-gradient(transparent 60%, ${1} 0%) repeat scroll 0 0;'"
    // marker pen
    ,"m" : "style='background:rgba(0, 0, 0, 0) linear-gradient(transparent 0%, ${1} 0%) repeat scroll 0 0;'"

    // class style
    ,"class" : "class='${1}'"

    // keyboard button
    ,"keybutton" : "class='font-size: 0.9rem; background: linear-gradient(white 93% ,white 93%  ,brown 100%); "
                    +"padding: 0.04rem 0.24rem; border: 1px solid; border-radius: 0.3rem; box-shadow: 0px 1px 1px 0px 3px;'"

}

module.exports = GetDecTags = () => decTags;
