var ConvertDecoTagsToHtml = require('../convert.js');

// Test begin tags of decoration.
describe('Valid Decoration Tags Test', () => {

  // test colorname replacement
  it('x-colorname', () => {
    var origin = "This is a {u-yellow}test{/} code";
    var expectedRawHtml = "This is a <span style='border-bottom: solid 2px yellow;'>test</span> code";
    var result = ConvertDecoTagsToHtml(origin)
    expect(result.html).toBe(expectedRawHtml);
    expect(result.isConverted).toBe(true);
  });

  // test lowercase-colorname replacement
  it('x-colorcode lowercase', () => {
    var origin = "This is a {u-#8833af}test{/} code";
    var expectedRawHtml = "This is a <span style='border-bottom: solid 2px #8833af;'>test</span> code";
    var result = ConvertDecoTagsToHtml(origin)
    expect(result.html).toBe(expectedRawHtml);
    expect(result.isConverted).toBe(true);
  });

  // test uppercase-colorname replacement 
  it('x-colorcode uppercase', () => {
    var origin = "This is a {u-#8833AF}test{/} code";
    var expectedRawHtml = "This is a <span style='border-bottom: solid 2px #8833AF;'>test</span> code";
    var result = ConvertDecoTagsToHtml(origin)
    expect(result.html).toBe(expectedRawHtml);
    expect(result.isConverted).toBe(true);
  });

  // test upper&lower-mixed-colorname replacement 
  it('x-colorcode uppercase', () => {
    var origin = "This is a {u-#ac12AF}test{/} code";
    var expectedRawHtml = "This is a <span style='border-bottom: solid 2px #ac12AF;'>test</span> code";
    var result = ConvertDecoTagsToHtml(origin)
    expect(result.html).toBe(expectedRawHtml);
    expect(result.isConverted).toBe(true);
  });

  // test 2 colorname replacement
  it('x-colorname 2 same tags', () => {
    var origin = "This is a {u-yellow}t{/}{u-red}e{/}st code";
    var expectedRawHtml = "This is a <span style='border-bottom: solid 2px yellow;'>t</span><span style='border-bottom: solid 2px red;'>e</span>st code";
    var result = ConvertDecoTagsToHtml(origin)
    expect(result.html).toBe(expectedRawHtml);
    expect(result.isConverted).toBe(true);
  });

  // test replacement that the text has many types decoration tags in
  it('x-colorname many-types', () => {
    var origin = "This {b}is{/} a {u-yellow}t{/}{u-red}e{/}st code";
    var expectedRawHtml = "This <span style='font-weight: bold;'>is</span> a <span style='border-bottom: solid 2px yellow;'>t</span><span style='border-bottom: solid 2px red;'>e</span>st code";
    var result = ConvertDecoTagsToHtml(origin)
    expect(result.html).toBe(expectedRawHtml);
    expect(result.isConverted).toBe(true);
  });


  // test one close tag convertion
  it('x-only-close', () => {
    var origin = "This is a test{/} code";
    var expectedRawHtml = "This is a test</span> code";
    var result = ConvertDecoTagsToHtml(origin)
    expect(result.html).toBe(expectedRawHtml);
    expect(result.isConverted).toBe(true);
  });

  // test triple close tag convertion
  it('x-only-close many tags', () => {
    var origin = "This is a test{/}{/} code{/}";
    var expectedRawHtml = "This is a test</span></span> code</span>";
    var result = ConvertDecoTagsToHtml(origin)
    expect(result.html).toBe(expectedRawHtml);
    expect(result.isConverted).toBe(true);
  });
});

// using uncorrect decoration tags
describe('inValid Decoration Tags Test', () => {

  // missing close brace
  it('close-tag-invalid', () => {
    var origin = "This is a test{/ {/} code{/}";
    var expectedRawHtml = "This is a test{/ </span> code</span>"
    var result = ConvertDecoTagsToHtml(origin)
    expect(result.html).toBe(expectedRawHtml);
    expect(result.isConverted).toBe(true);
  });

  // missing close brace
  it('close-tag-invalid', () => {
    var origin = "This is a {b}test/} code{/}";
    var expectedRawHtml = "This is a <span style='font-weight: bold;'>test/} code</span>";
    var result = ConvertDecoTagsToHtml(origin)
    expect(result.html).toBe(expectedRawHtml);
    expect(result.isConverted).toBe(true);
  });

  // not decoration tag
  it('dectag-invalid', () => {
    var origin = "This is a {not_decoration_tag}test{/notclose} code";
    var expectedRawHtml = "This is a {not_decoration_tag}test{/notclose} code";
    var result = ConvertDecoTagsToHtml(origin)
    expect(result.html).toBe(expectedRawHtml);
    expect(result.isConverted).toBe(false);
  });
});


