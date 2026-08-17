# SDD ledger — plan: docs/plans/2026-08-17-plan-2-core-features.md

## Task 1: 安装新依赖
- **Status:** DONE
- **Commit:** 8605962a685d71f81a40fc6c2c3b3a9c92743c0a
- **Implementer:** general-purpose subagent
- **Summary:** Installed katex, cytoscape, @types/katex, @types/cytoscape, pagefind. Added prebuild and build:section-data scripts. Updated build:scripts to include build-section-data.ts.

## Task 6: 更新知识图谱关系
- **Status:** DONE
- **Commit:** a21108d
- **Implementer:** general-purpose subagent
- **Summary:** Fixed 12 one-directional related links, modified 7 YAML files. Validation passed with 0 errors, 0 warnings. 19 nodes, 70 edges, 42 exercises in final graph.

## Task 7-12: React 组件 (6个)
- **Status:** DONE
- **Commits:** 07dedd6 (MathFormula), 5bef2da (DifficultyBadge), a40f877 (ExerciseCard), 99e5092 (SolutionSteps), 0d202a7 (RelatedExercises), cc8f182 (Navigation)
- **Implementer:** general-purpose subagent
- **Summary:** Created 6 React components + 6 test files (21 tests). TDD workflow. Updated vitest.config.ts for jsdom environment. All tests passing.

## Task 13: build-section-data 脚本
- **Status:** DONE
- **Commit:** ba04294
- **Implementer:** general-purpose subagent
- **Summary:** Created build-section-data.ts + test (2 tests). Aggregates section data to public/data/sections/. 14 section JSON files generated. Full suite 53/53 tests passing.

## Task 14-18: 核心页面 (5个)
- **Status:** DONE
- **Commits:** a6bfdba (textbook browse), 657e3c5 (section detail), ae58333 (knowledge list), e7cdaf7 (knowledge detail), 8428e00 (layout+homepage)
- **Implementer:** general-purpose subagent
- **Summary:** Created 5 pages. Build generates 36 pages total (1 home + 1 textbook browse + 14 section details + 1 knowledge list + 19 knowledge details). Navigation updated, homepage shows live counts.

## Task 19-21: 知识图谱可视化
- **Status:** DONE
- **Commits:** abd6902 (build script enhancement), a0fd974 (KnowledgeGraph component), eea87ef (knowledge graph page)
- **Implementer:** general-purpose subagent
- **Summary:** Enhanced build-knowledge-graph.ts with layout pre-computation. Created KnowledgeGraph.tsx (Cytoscape.js) + test (5 tests). Created knowledge-graph.astro page with textbook filtering. 64/64 tests passing, 37 pages built.

## Task 22-24: 搜索与筛选
- **Status:** DONE
- **Commits:** 8c564ed (SearchBox), e419636 (search page), 4e1d936 (knowledge filtering)
- **Implementer:** general-purpose subagent
- **Summary:** Created SearchBox.tsx with Pagefind integration + test (2 tests). Created search.astro page with postbuild script for Pagefind index generation. Added client-side knowledge point filtering (by category + textbook). Pagefind indexed 38 pages, 666 words. 66/66 tests passing.
