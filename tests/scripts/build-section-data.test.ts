import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import fs from 'fs';
import path from 'path';
import { buildSectionData } from '../../scripts/build-section-data';

const tmpDir = path.join(__dirname, '..', '__tmp_section_test');

beforeEach(() => {
  fs.mkdirSync(path.join(tmpDir, 'textbooks', 'required-1', 'chapter-01', 'section-01'), { recursive: true });

  // Write exercise
  fs.writeFileSync(
    path.join(tmpDir, 'textbooks', 'required-1', 'chapter-01', 'section-01', 'exercise-1.md'),
    `---
type: exercise
textbook: required-1
chapter: 1
section: 1
number: 1
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - set-concept
source: "人教A版2019"
references: "必修第一册 P5 练习A 第1题"
---

**题目：** 测试题目

---

**解答：**

**第1步：** 步骤一
> 📌 运用知识点：集合的概念

解答内容
`
  );

  // Write definition
  fs.writeFileSync(
    path.join(tmpDir, 'textbooks', 'required-1', 'chapter-01', 'section-01', 'definition-1.md'),
    `---
type: definition
textbook: required-1
chapter: 1
section: 1
name: 集合
related_knowledge_points:
  - set-concept
---

**定义（精确表述）：** 测试定义

**通俗解释：** 通俗解释
`
  );
});

afterEach(() => {
  fs.rmSync(tmpDir, { recursive: true, force: true });
});

describe('buildSectionData', () => {
  it('aggregates exercises and definitions per section', () => {
    const result = buildSectionData(path.join(tmpDir, 'textbooks'));
    const sectionKey = 'required-1/ch1/s1';
    expect(result[sectionKey]).toBeDefined();
    expect(result[sectionKey].exercises.length).toBe(1);
    expect(result[sectionKey].definitions.length).toBe(1);
  });

  it('generates correct exercise IDs', () => {
    const result = buildSectionData(path.join(tmpDir, 'textbooks'));
    const sectionKey = 'required-1/ch1/s1';
    expect(result[sectionKey].exercises[0].id).toBe('required-1-ch1-s1-ex1');
  });

  it('includes category and group fields in exercise data', () => {
    const result = buildSectionData(path.join(tmpDir, 'textbooks'));
    const sectionKey = 'required-1/ch1/s1';
    expect(result[sectionKey].exercises[0].category).toBe('practice');
    expect(result[sectionKey].exercises[0].group).toBe('A');
  });

  it('defaults category to "practice" when omitted', () => {
    // Write exercise without category
    fs.writeFileSync(
      path.join(tmpDir, 'textbooks', 'required-1', 'chapter-01', 'section-01', 'exercise-2.md'),
      `---
type: exercise
textbook: required-1
chapter: 1
section: 1
number: 2
difficulty: medium
is_exam_question: false
knowledge_points:
  - set-operations
source: "人教A版2019"
references: "必修第一册 P6"
---

**题目：** 测试题目2

---

**解答：**

**第1步：** 步骤一
> 📌 运用知识点：集合运算

解答内容
`
    );
    const result = buildSectionData(path.join(tmpDir, 'textbooks'));
    const sectionKey = 'required-1/ch1/s1';
    const ex2 = result[sectionKey].exercises.find(e => e.number === 2);
    expect(ex2?.category).toBe('practice');
  });

  it('parses review/ subdirectory for chapter review exercises', () => {
    const reviewDir = path.join(tmpDir, 'textbooks', 'required-1', 'chapter-01', 'review');
    fs.mkdirSync(reviewDir, { recursive: true });
    fs.writeFileSync(
      path.join(reviewDir, 'review-exercise-1.md'),
      `---
type: exercise
textbook: required-1
chapter: 1
section: 0
number: 1
difficulty: medium
category: review
group: A
is_exam_question: false
knowledge_points:
  - set-concept
  - set-operations
source: "人教A版2019"
references: "必修第一册 P20 复习参考题 第1题"
---

**题目：** 复习题

---

**解答：**

**第1步：** 步骤一
> 📌 运用知识点：集合

解答内容
`
    );
    const result = buildSectionData(path.join(tmpDir, 'textbooks'));
    const sectionKey = 'required-1/ch1/s1';
    expect(result[sectionKey].review_exercises).toBeDefined();
    expect(result[sectionKey].review_exercises.length).toBe(1);
    expect(result[sectionKey].review_exercises[0].id).toBe('required-1-ch1-review-ex1');
    expect(result[sectionKey].review_exercises[0].category).toBe('review');
  });
});
