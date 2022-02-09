# nplate

この nplate は n0pj が汎用的かつシンプルに、HTML と CSS のみの静的なサイト、PHP や ECMAScript を使用した動的なサイトを作成するために作ったテンプレートである。

"description": "This template(nplate) is very simple and generally, versatilely, HTML and CSS only static site development, PHP and ECMAScript used to dynamic site can development.",

# Features

使用技術&使用できる技術

- ECMAScript, JavaScript, HTML, Sass, CSS, PHP, gulp, webpack...
- React, Vue.js, Next.js に対応
- webpack 5.4.0 を使用し、ES をコンパイル・トランスパイル
- esbuild に対応し、js, jsx, ts, tsx を高速にコンパイル
- Sass では、全探索コンパイル、Importer を使用したコンパイルのどちらかを選択できる。Importer を使用したコンパイルが推奨で、この方式ではキャッシュを利用しており、コンパイルが高速
- EJS が使用できる
- CSS を縮小し、ベンダープレフィックスを自動で付加する。標準で stylelint が入っている
- コンパイルされた ES を超縮小化、gulp ではなく webpack 使用
- HTML を縮小
- 自動で公開用のプロジェクトを作成 ( Default public/ )
- 標準で HTML サーバーを搭載、PHP をインストールしていれば、PHP も使用可
- ソースの更新があればオートリロード
- Bootstrap5 (必要に応じて削除、追加すること)

# Requirement

- Yarn 1.17.3
- node 10.16.3 ( 14.17.0 でも 動作確認 )
- npm 6.9.0
  ※これは n0pj の開発環境であり、これ以外でも動作する可能性がある。動かない場合は、Yarn, node, npm のバージョンを確認。

# Usage

```
git clone git@github.com:n0pj/nplate.git project-name && rm -rf project-name/.git && cd project-name
cp Config.example.js Config.js
```

最初に、nplate ルートにある Config.js にそれぞれの環境に応じた設定をする必要がある。

nplate 内で node_modules のインストール

```bash
yarn
```

- コマンド

ビルドと共にサーバーを立ち上げる。

```bash
yarn start
```

本番用にビルドを行う。

```bash
yarn build
```

## Config.js 設定例

### Next.js 設定例

```js
{
  server_settings: {
    host: 'localhost:3003',
    browsersync_port: 4000,
    proxy_port: 3003, // next.js の設定
    use: {
      proxy: true,
    }
  },
  ecmascript_settings: {
    use: {
      next: true,
    }
  },
}
```

- ディレクトリ構成

使用するディレクトリは以下のようになっている。

src 以下を開発ディレクトリとする。

```bash
nplate
├─ build ( build 先 )
└┬ src
 ├── images
 ├── scripts
 ├── setup_files ( Laravel, WordPress 用に nplate を変換するためのファイル群)
 ├── styles
 ├── vendors ( font awesome 等を入れる場合に使用 )
 ├─┬ views ( HTML, PHP 等を入れる場所 )
 │ └── partials //header, footer, content等に分ける場合に使うディレクトリ、削除してもよい
 └─┬ styles //FLOCSSを参照 https://github.com/hiloki/flocss
   ├── foundations
   ├── layouts
   ├─┬ objects
   │ ├── components
   │ ├── projects
   │ └── utilities
   └─ main.css ( Importer の役割であり、エントリーポイントでもある )
.
.
.
```

- jQuery

```bash
import $ from 'jquery'
// or
const $ = require('jquery')
```

こうすることで、\$()の構文を使うことができる。

- Bootstrap4

Bootstrap4 は標準で搭載しており、ビルド時にも一緒にビルドされるようになっている。無効にするには、src/styles/foundations/custom-bootstrap-importer.scss を削除またはコメントアウトする。Bootstrap の JS を無効にするには、src/scripts/bootstrap.js を削除またはコメントアウトする。

# Author

- 作成者: n0pj
- 問い合わせ: admin@n0pj.com, https://n0pj.com/contactus/

# License

MIT


また、この nplate を使用する限りでなく、HTML, CSS, PHP, ECMAScript でプログラミングをする場合は、以下のコーディング規約、設計方法などを参照し、可能な限り命名等は守ること。

- HTML & CSS Style Guide

https://google.github.io/styleguide/htmlcssguide.html

インデントは 2 スペース。
ただし、PHP で HTML を書く場合は、PHP のファイルなので、HTML は PHP のインデントに合わせる。
また、可能な限り、`html<script>`, `html<style>` タグは控えること。( .js, .css 等に書く )

- CSS 設計 ( 他にいいものがあれば紹介してほしい )

https://github.com/hiloki/flocss

stylelint を使用すること。

- ECMAScript, JavaScript Standard Style

https://standardjs.com/rules.html

インデントは 2 スペース。
セミコロン無しの記法、邪魔なもの ( 無くても動くものは邪魔と考える ) は書かないという考え。
ESLint を使用すること。

- PHP, PSR-1, PSR-2

https://qiita.com/katsukii/items/e68183f14407722de9cc

インデントは 4 スペース。
WordPress 実装時によく見られる、以下はアウト。

```php
<?php
// $wp_query = new WP_Query(); // ☓
$wpQuery = new WP_Query(); // ○

```

- Python

https://pep8-ja.readthedocs.io/ja/latest/

インデントは 4 スペース。

- データベース

https://qiita.com/genzouw/items/35022fa96c120e67c637

どのデータベース、Web フレームワークを使用するなどで変わる。PHP only, Python only といった場合にはある程度以下に従う。
Web フレームワークを使用する場合、Table 名は、Model であり、Class になる事が多いため、顧客テーブルの場合は Customer、ユーザーテーブルの場合は User のようにする。
また、User テーブルのユーザー名、ユーザーパスワード等は、user_name, user_password のようにせず、これらは User テーブルに属しているのは明らかであるため、name, password のように prefix を付けない。

- その他

型付けできる言語は極力、型付けをしよう。
実装した関数がどういう関数なのか、docstring を付けよう。
難しそうな処理にはコメントを付けるようにしよう。

```bash
<?php if(true):>
  is that true?
<?php endif?>

// どれが見やすくて、スマートだろうか？
// 1行で書けるものは1行で書き、1行の式にはセミコロンはいらない
<?php $isTrue = true?>
<?php !$isTrue ?: print('is that true?')?>
<?php $isTrue ? print('not, that is false.') : print('is that true?')?>
<?php echo $isTrue?>

<?php
$isTrue = true;
?>
<?php
if($isTrue) {?>
  'is that true?'
<?php
}
?>
<?php
if($isTrue) : ?>
  'not, that is false.'
<?php
else:?>
  'is that true?'
<?php endif; ?>
<?php echo $isTrue; ?>
```

基本的に php を 1 行で書く場合は、セミコロンは省く ( 書き方による )。省略できるものは省略し、可読性と記述速度を高める。

```php
<?php echo $test; ?>
<?php echo $test ?>
<?php print($test); ?>
<?php print($test) ?>
<?= $test; ?>
<?= $test ?>
// この中だと、これの可読性が高い。すっきりしていて、スマート。
<?= $test ?>
```

ただし、複数行で書く場合は含めたほうが保守性は上がる。( 次、追加で書く時に前の行にセミコロンを入れないといけなくなる )

```php
<?php
$hoo = 'hoo';
$foo = 'foo';
$fooln = "foo\n";
$number = 2525;
?>
```

論外

```php
<?php $bool = true; if($bool) {echo 1;} else {echo 2;};?>

// こうだとしても論外
<?php
$bool = true;
?>
<?php if($bool) {echo 1;} else {echo 2;};?>

// これはギリギリセーフだが、省略して書けるので、もっと考えたほうがいい
// ただし、echo 1, 2 のところで HTML を書きたいという場合は OK
<?php
$bool = true;
?>
<?php if($bool) : ?>
    <?= 1 ?>
<?php else : ?>
    <?= 2 ?>
<?php endif ?>
```

これも論外

```php
<?php
$bool = true;
?>
<?php
$bool = false;
if($bool) {?>
    true?
<?php
}
?>
// 分けて書いたほうがいい
<?php
$bool = true;
$bool = false;
?>
<?php if($bool) : ?>
    true?
<?php endif ?>
```

n0pj の場合

```php
<?php
$bool = true;
?>
<?= $bool ? 1 : 2 ?>
```


|| ユーザーファーストも大事だが、開発者ファーストも大事 ||

