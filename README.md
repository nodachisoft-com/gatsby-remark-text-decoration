# gatsby-remark-text-decoration

Add decoration tags to the  Gatsby markdown and you can decorate text easily.

# How to install

```bash
npm install gatsby-remark-text-decoration --save-dev
```

## Configuration

### Registering plug-ins

Add the following settings to `gatsby-config.js`.

```javascript
plugins: [
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        {
          resolve: 'gatsby-remark-text-decoration',
          options: {
          }
        }
      ]
    }
  }
]
```


## Examples of using underline and marker decoration

| Effect | Format | Example | Output |
| ---| --- | --- | --- |
| color | {c-color} | This is {c-blue}Blue{/} | This is \<span style='color: blue;'>Blue\</span> |
| Bold | {b} | {b}Here{/} is bold | \<span style='font-weight: bold;'>Here\</span> is bold |
| Italic |{i} | {i}Here{/} is italic | \<span style='font-style: italic;'>Here\</span> is italic |
| Oblique |{o} | {o}Here{/} is oblique | \<span style='font-style: oblique;'>Here\</span> is oblique |
| Underline | {u-color} | This is {u-pink}Pink underline{/} | This is \<span style='border-bottom: solid 2px pink;'>Pink underline\</span>です |
| Dotted Unerline | {udot-color} | This is {udot-red}Red line{/}. | This is \<span style='border-bottom: dotted  2px red;'>Red line\</span>. |
| UnderMarker | {um-color}| {um-blue}Blue underline marker{/} here. | \<span style='background:rgba(0, 0, 0, 0) linear-gradient(transparent 60%, ${1} 0%) repeat scroll 0 0;'>Blue underline marker\</span> here. |
| Marker pen | {m-color} | {m-#00aa00}Green Marker pen{/} here. | \<span style='background:rgba(0, 0, 0, 0) linear-gradient(transparent 0%, ${1} 0%) repeat scroll 0 0;'>Green Marker pen\</span> here. |


## Keyboard-like decoration

You can use {keybutton} deco-Tag to create a keyboard-like decoration.

## Specify the CSS class

Specifies a CSS class.

The class can be specified with {class-ClassName}.
If you want to use your own pre-defined CSS class, use this tag.

| Example | Converted HTML |
| --- | --- |
| {class-info}Here{/} is decorated. | \<span class='info'\>Here\</span\> is decorated. |

# Add your own decoration tags.

By adding to the gatsby-config.js configuration,
You can add the style you want as a decoration tag.

```javascript:title=gatsby-config.js:clipboard
{
  resolve: 'gatsby-remark-writing-decoration',
  options: {
    addTags : {
      "mytag" : "style='border-bottom: dotted 3px yellow;'"
    }
  }
},
```

Now the mytag decoration tag will be available.

It can be written in markdown as shown below.


| Example | Converted HTML |
| --- | --- |
| This is {mytag}my dec tag {/}! | This is \<span style='border-bottom: dotted 3px yellow;'\>my dec tag\</span\>! |

The added extension tags will be converted to HTML when Gatsby renders.
The style and other information you specified are inserted into the attribute part of the SPAN, HTML tag.

Also, all {/} will be converted to \<\/span\> closing decoration tags.

The tag conversion is done at compile time as Gatsby, so it won't slow down when displaying the released page.

## Use variables for your own decoration tags.

If you put the string "${1}" in the converted content of addTags likes as follows

```javascript
{
  resolve: 'gatsby-remark-writing-decoration',
  options: {
    addTags : {
      "bg" : "style='background-color: ${1}'"
    }
  }
},
```

{bg-stringXXX} will be output as \<span style='background-color: stringXXX'\> in the HTML output.

# Escaping decoration tags

If you want to display the string of the Decoration Tag as it is in the text, as in {u}

You can escape it by including a "\" backslash in front of the symbol in the markdown, such as "\\{u\\\}".


# Contact

Here is my hopepage:[https://nodachisoft.com/common/jp/contact/](https://nodachisoft.com/common/jp/contact/)

or If you DM me on twitter, I'll be happy!
Please feel free to contact me.

Twitter: @NodachiSoft_jp

Author: amaji


