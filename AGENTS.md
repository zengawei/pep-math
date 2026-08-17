# AGENTS.md — pep-math

## 项目概述
人教版高中数学知识库静态网站。Astro + Tailwind + KaTeX + Vitest。

## 开发规范
- TDD：先写测试，再写实现
- Conventional Commits：feat/fix/content/test/docs/refactor/style/chore
- 构建脚本用 TypeScript（npx tsx 运行），不用 Python
- 内容文件在 src/content/，构建输出在 public/data/（gitignore）
- 所有习题 source 必须为 "自编"

## 常用命令
- `npm test` — 运行测试
- `npm run validate` — 内容校验
- `npm run build:scripts` — 运行构建脚本
- `npm run build` — 构建网站
- `npm run report` — 生成质量报告

## 目录结构
- `src/content/textbooks/` — 教材内容（Markdown + YAML frontmatter）
- `src/content/knowledge-points/` — 知识点定义（YAML）
- `scripts/` — 构建时脚本
- `tests/` — 测试文件
- `public/data/` — 构建脚本输出（自动生成，不手动修改）
