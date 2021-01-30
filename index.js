var remark = require("remark")
var visit = require("unist-util-visit")
var ConvertDecoTagsToHtml = require('../convert.js');

module.exports = ({ markdownAST }, pluginOptions) => {
  visit(markdownAST, "text", node => {
    const result = ConvertDecoTagsToHtml(node.value,  pluginOptions.addTags);
    if ( result.isConverted ) {
      node.type="html";
      node.value = result.html;
    }
  })
  return markdownAST
}
