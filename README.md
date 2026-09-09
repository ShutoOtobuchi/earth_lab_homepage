# アースラボ ホームページ（リニューアル版）

## 概要
現行サイト https://aslabpro.com/ を、下記2サイトを参考にリニューアルするためのプロジェクトです。

- https://www.earth-academy.jp/ … ページ構成・ナビゲーション・教室案内の作り方の参考
- https://www.craft-plus.jp/#features … 特長（Features）セクションの見せ方の参考

詳細な分析メモは `docs/reference-notes.md` を参照してください。

## 技術構成
プレーンHTML/CSS/JS（ビルド不要）。理由：更新頻度が高くなく、少人数運営のサイトに適しているため。

- ホスティング候補：Netlify / Vercel / GitHub Pages / さくら等の共有サーバー（未定）
- CSSプリプロセッサ・JSフレームワークは使用しない
- レスポンシブ対応必須（PC / タブレット / スマホ）

## フォルダ構成
```
earth_lab_homepage/
├── index.html          # トップページ
├── about.html          # スクール紹介・理念
├── courses.html        # コース案内
├── locations.html      # 教室案内
├── tuition.html        # 料金・時間割
├── faq.html            # よくある質問
├── news.html           # お知らせ一覧
├── contact.html        # お問い合わせ
├── css/
│   ├── reset.css       # 最低限のリセットCSS
│   └── style.css       # 共通スタイル（変数・レイアウト・コンポーネント）
├── js/
│   └── main.js         # ハンバーガーメニュー等の共通スクリプト
├── images/
│   ├── logo/
│   ├── hero/
│   ├── icons/
│   ├── courses/
│   ├── locations/
│   └── news/
└── docs/
    └── reference-notes.md  # 参考サイトの分析・構成方針メモ
```

## ページ構成の方針（earth-academy.jp型）
ナビゲーション: Home / About / Courses / Location / Tuition & Timetable / FAQ / News / Contact

各ページは共通のヘッダー（ロゴ＋ナビ＋ハンバーガーメニュー）とフッター（ナビ再掲・著作権・プライバシーポリシー）を持ちます。
現時点ではプレーンHTMLのため、ヘッダー/フッターは各ページに直接記述しています（共通化する場合は将来的にビルドツール導入を検討）。

## 現在の状態
- [x] フォルダ・ファイルの雛形作成
- [ ] 実際のコンテンツ（コピー・画像・料金・教室情報）の流し込み
- [ ] craft-plus.jp を参考にした「特長」セクションのデザイン反映
- [ ] レスポンシブ実装・動作確認

## ローカルプレビュー方法
Node.jsがある場合:
```
npx serve .
```
またはVS Codeの「Live Server」拡張機能でindex.htmlを開いてください。
