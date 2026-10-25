import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // GitHub Pages は https://sbt-2026.github.io/task-board/ で公開されるため、
  // 本番ビルドのときだけ base をリポジトリ名に合わせる（開発サーバーは / のまま）
  base: command === 'build' ? '/task-board/' : '/',
}))
