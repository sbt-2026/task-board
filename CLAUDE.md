# CLAUDE.md

このファイルは、このリポジトリで作業する Claude Code 向けのガイドです。

## プロジェクト概要

- プロジェクト名: task-bord（タスクボードアプリ）
- 技術スタック: React 19 + Vite 6（JavaScript）
- タスクはブラウザの localStorage（キー: `task-board.tasks`）に保存する
- 主なファイル: [src/App.jsx](src/App.jsx)（画面とロジック）、[src/App.css](src/App.css)（スタイル）

## よく使うコマンド

- `npm install` — 依存パッケージのインストール
- `npm run dev` — 開発サーバーの起動
- `npm run lint` — ESLint による静的チェック
- `npm run build` — 本番用ビルド（`dist/` に出力）

## 公開（GitHub Pages）

- 公開URL: https://sbt-2026.github.io/task-board/
- `main` に push すると [.github/workflows/deploy.yml](.github/workflows/deploy.yml) が lint・ビルドして自動で公開する
- 本番ビルドの base パスは `/task-board/`（[vite.config.js](vite.config.js) で設定。開発サーバーは `/` のまま）

## 作業ルール

- 回答・コメント・コミットメッセージは日本語で書く
- コマンド実行時の説明（確認画面に表示される説明）は日本語で書く

## Git運用ルール

- **コードを変更するたびに、コミットして GitHub にプッシュする**
  - 1つの変更（機能追加・修正など）が完了したら、その都度 `git add` → `git commit` → `git push` まで行う
  - 複数の無関係な変更をまとめて1コミットにしない
- コミットメッセージは日本語で、変更内容が分かるように簡潔に書く
  - 例: `タスク追加フォームを実装`、`タスク削除時のバグを修正`
- プッシュ前に、動作確認やテスト（用意されている場合）を行う
- 機密情報（APIキー、パスワード、`.env` など）はコミットしない。必要に応じて `.gitignore` に追加する
- `git push --force` や履歴の書き換えなど、取り消しが難しい操作はユーザーに確認してから行う
