# gatsby-remark-text-decoration

マークダウン文章を手軽に装飾するために拡張タグを追加します。

# インストール方法

```bash
npm install gatsby-remark-text-decoration --save-dev
```

## 設定方法

### プラグインの登録

`gatsby-config.js` に以下の設定を追加します。

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


## 下線やマーカーの装飾を使う例

| 効果 | 書き方 | 書き方の例 | 出力内容 |
| ---| --- | --- | --- |
| 色 | {c-色} | {c-blue}青色{/}色です | <span style='color: blue;'>青色</span>です |
| 太字 | {b} | {b}太字{/}です | <span style='font-weight: bold;'>太字</span>です |
| イタリック |{i} | {i}イタリック{/}です | <span style='font-style: italic;'>イタリック</span>です |
| 斜め文字 | {o} | {o}斜め文字{/}です | <span style='font-style: oblique;'>斜め文字</span>です |
| 下線 | {u-色} | {u-pink}桃色い下線{/}です | <span style='border-bottom: solid 2px pink;'>桃色の下線</span>です |
| 点線の下線 | {udot-色} | {udot-red}赤色の下線{/}です | <span style='border-bottom: dotted  2px red;'>赤色の下線</span>です |
| 下線マーカー| {um-色}| {um-blue}青色マーカーの下線{/}です | <span style='background:rgba(0, 0, 0, 0) linear-gradient(transparent 60%, ${1} 0%) repeat scroll 0 0;'>青色マーカーの下線</span>です |
| マーカー | {m-色} | {m-#00aa00}緑色マーカー{/}です | <span style='background:rgba(0, 0, 0, 0) linear-gradient(transparent 0%, ${1} 0%) repeat scroll 0 0;'>緑色マーカー</span>です |


## キーボードっぽい装飾

{keybutton} でキーボードっぽい装飾ができます。

## クラスを指定

CSS のクラスを指定します。

{class-クラス名} でクラスを指定できます。自前で予め定義した CSS クラスを使用する場合は
こちらを使用します。

| 書き方の例 | 変換後の HTML 内容 |
| --- | --- |
| {class-info}クラス装飾{/}です | \<span class='info'\>クラス装飾\</span\> |

# 自前で装飾タグを追加する

gatsby-config.js の設定に追記することで、
自分が欲しいスタイルを装飾タグとして機能追加できます。

```javascript:title=色指定のgatsby-config.js:clipboard
{
  resolve: 'gatsby-remark-text-decoration',
  options: {
    addTags : {
      "mytag" : "style='border-bottom: dotted 3px yellow;'"
    }
  }
},
```

これで mytag の装飾タグが利用可能になります。

下のようにマークダウンで書くことができます。


| 書き方の例 | 変換後の HTML 内容 |
| --- | --- |
| これは{mytag}拡張タグ{/}です | これは \<span style='border-bottom: dotted 3px yellow;'\>拡張タグ\</span\>です |

この追加した拡張タグは、Gatsby のレンダリング時に HTML へ変換されます。指定したスタイルなどが、span の属性部分に差し込まれています。

また、{/} は全て \<\/span\> の閉じタグで変換されます。

タグ変換は Gatsby としてのコンパイル時に行われるため、リリースされたページを表示するときの速度が落ちたりはしないです。

## 自前の装飾タグに変数を使う

以下の用に「${1}」という文字列を addTags の中の変換後の中身に記載すると、
{bg-文字列} と書いた内容が \<span style='background-color: 文字列'\> と HTML 出力されます。

```javascript:title=背景色指定のgatsby-config.js:clipboard
{
  resolve: 'gatsby-remark-text-decoration',
  options: {
    addTags : {
      "bg" : "style='background-color: ${1}'"
    }
  }
},
```

# 装飾タグをエスケープする

文章の中で、{u} のように、装飾タグの文字列をそのまま表示したい場合は、
マークダウンの中で「\\{u\\} 」のように「\」バックスラッシュを記号の前に記載することで
エスケープすることができます。


# 感想、改善点など

[こちら https://nodachisoft.com/common/jp/contact/](https://nodachisoft.com/common/jp/contact/)
からご連絡いただくか、twitter に DM 頂ければ喜びます！

お気軽にー。

Twitter: @NodachiSoft_jp
作者: Amaji

