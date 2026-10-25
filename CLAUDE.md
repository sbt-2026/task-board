# CLAUDE.md

このファイルは、このリポジトリで作業する Claude Code 向けのガイドです。

## プロジェクト概要

- プロジェクト名: task-bord（タスクボードアプリ。GitHub リポジトリ名は task-board）
- 機能: タスクの追加・完了／未完了の切り替え・削除。完了済みタスクはグレー表示
- タスクはブラウザの localStorage（キー: `task-board.tasks`）に保存する
- 主なファイル: [src/App.jsx](src/App.jsx)（画面とロジック）、[src/App.css](src/App.css)（スタイル）

## 技術スタック

- 言語: JavaScript（JSX）。TypeScript は使っていない
- UI ライブラリ: React 19（関数コンポーネント + フック。状態管理は `useState`、保存は `useEffect`）
- ビルドツール: Vite 6（`@vitejs/plugin-react`）
- 静的チェック: ESLint 9（`eslint-plugin-react-hooks`、`eslint-plugin-react-refresh`）
- スタイル: 素の CSS（CSS フレームワークや CSS-in-JS は使っていない）
- データ保存: ブラウザの localStorage（サーバーやデータベースはない）
- ホスティング: GitHub Pages（GitHub Actions で自動デプロイ）
- 実行環境: Node.js 22 以上（CI は 22、開発 PC は 24）

## コンポーネントの命名規約

現在のコンポーネントは `App` のみ。新しく作るときも同じ書き方にそろえる。

- **コンポーネント名・ファイル名**: パスカルケース（例: `App` → `App.jsx`、`TaskItem` → `TaskItem.jsx`）。1ファイルに1コンポーネント
- **配置**: `App` 以外のコンポーネントは `src/components/` に置く
- **定義の書き方**: `function コンポーネント名() { ... }` で定義し、ファイル末尾で `export default コンポーネント名`
- **CSS**: コンポーネントと同じ名前の CSS ファイルを作り、コンポーネント内で import する（例: `App.jsx` → `App.css`）
- **CSS クラス名**: 小文字のケバブケース（例: `add-form`、`task-list`）。状態は追加のクラスで表す（例: 完了済みは `task done`）
- **イベント処理の関数**: 「動詞 + 対象」のキャメルケース（例: `addTask`、`toggleTask`、`deleteTask`）
- **state**: キャメルケースの名詞と `set` + 名詞の組（例: `tasks` / `setTasks`、`text` / `setText`）
- **定数**: 大文字のスネークケース（例: `STORAGE_KEY`）

## よく使うコマンド

- `npm install` — 依存パッケージのインストール
- `npm run dev` — 開発サーバーの起動
- `npm run lint` — ESLint による静的チェック
- `npm run build` — 本番用ビルド（`dist/` に出力）

## デプロイ先

https://sbt-2026.github.io/task-board/

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
