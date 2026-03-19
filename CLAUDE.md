# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

静的な教育コンテンツポータル「9 × 2 = 3 の部屋」。ゼロ依存のシングルページアプリケーション（SPA）。ビルドステップ不要。

## Development

ビルドツール・パッケージマネージャー・テストフレームワークは存在しない。ブラウザで `index.html` を直接開くか、シンプルなHTTPサーバーで配信するだけで動作する。

```bash
# ローカルで確認する場合
python3 -m http.server 8000
```

## Architecture

2ファイルで完結するアーキテクチャ:

- **`index.html`** — HTML構造・CSSデザインシステム（CSS変数）・JavaScriptルーター・ビュー関数をすべて含む
- **`site-data.js`** — コンテンツ全体の定義。`SITE` オブジェクトにカテゴリ→サブカテゴリ→記事の階層構造が入っている

### ルーティング

ハッシュベースのクライアントサイドルーティング（`#/category/subcategory` 形式）。URLのハッシュを解析してビュー関数に振り分ける。

ビュー関数: `renderHome()`, `renderCategory()`, `renderSubcategory()`, `renderArticle()`

### コンテンツ追加

`site-data.js` の `SITE` オブジェクトを編集する。カテゴリは最大2階層のネスト（Category → Subcategories → Children → Articles）をサポート。記事URLはGoogle Cloud Storage・AWS S3・ローカル `/articles/` パスを指す。

### デザインシステム

CSS変数は `index.html` の `<style>` タグ内に定義されている:
- `--brand: #3b82f6`（プライマリ）
- `--brand-2: #06b6d4`（セカンダリ）
- `--max: 1200px`（コンテナ幅）
- `--radius: 20px`（ボーダーラジウス）
