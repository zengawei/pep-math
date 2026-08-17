import { describe, it, expect } from 'vitest';
import { parseExerciseMarkdown } from '../../scripts/build-exercise-data';

describe('parseExerciseMarkdown', () => {
  const sampleMd = `---
type: exercise
textbook: required-1
chapter: 1
section: 1
number: 1
difficulty: basic
is_exam_question: false
knowledge_points:
  - set-concept
  - set-representation
source: "自编"
references: "课标1.1.1"
---

**题目：** 用列举法表示下列集合：

(1) 小于 5 的正整数组成的集合 $A$；

(2) 方程 $x^2 - 5x + 6 = 0$ 的解集 $B$。

---

**解答：**

**第1步：** 确定集合 A 的元素
> 📌 运用知识点：集合的列举法

小于 5 的正整数为 $1, 2, 3, 4$。

所以 $A = \\{1, 2, 3, 4\\}$。

**第2步：** 求解方程确定集合 B 的元素
> 📌 运用知识点：集合的列举法

$x^2 - 5x + 6 = 0$

$(x-2)(x-3) = 0$

$x = 2$ 或 $x = 3$

所以 $B = \\{2, 3\\}$。

**⚠️ 易错提醒：** 用列举法表示集合时，注意元素不重复（互异性），且用花括号括起来。

**💡 解题思路总结：** 列举法的关键是找出满足条件的所有元素，做到不重不漏。`;

  it('should parse frontmatter metadata', () => {
    const result = parseExerciseMarkdown(sampleMd);
    expect(result.textbook).toBe('required-1');
    expect(result.chapter).toBe(1);
    expect(result.section).toBe(1);
    expect(result.number).toBe(1);
    expect(result.difficulty).toBe('basic');
    expect(result.knowledge_points).toContain('set-concept');
    expect(result.knowledge_points).toContain('set-representation');
  });

  it('should generate correct exercise ID', () => {
    const result = parseExerciseMarkdown(sampleMd);
    expect(result.id).toBe('required-1-ch1-s1-ex1');
  });

  it('should extract question text', () => {
    const result = parseExerciseMarkdown(sampleMd);
    expect(result.question).toContain('用列举法表示下列集合');
  });

  it('should parse solution steps', () => {
    const result = parseExerciseMarkdown(sampleMd);
    expect(result.steps.length).toBe(2);
    expect(result.steps[0].title).toContain('确定集合 A 的元素');
    expect(result.steps[0].knowledge_point).toBe('集合的列举法');
    expect(result.steps[0].content).toContain('小于 5 的正整数');
    expect(result.steps[1].title).toContain('求解方程确定集合 B 的元素');
  });

  it('should extract warning if present', () => {
    const result = parseExerciseMarkdown(sampleMd);
    expect(result.warning).toBeDefined();
    expect(result.warning).toContain('互异性');
  });

  it('should extract summary if present', () => {
    const result = parseExerciseMarkdown(sampleMd);
    expect(result.summary).toBeDefined();
    expect(result.summary).toContain('不重不漏');
  });

  it('should return undefined for warning/summary when not present', () => {
    const minimalMd = `---
type: exercise
textbook: required-1
chapter: 1
section: 1
number: 2
difficulty: basic
is_exam_question: false
knowledge_points:
  - set-operations
source: "自编"
references: "课标1.1.2"
---

**题目：** 已知集合 $A = \\{1, 2\\}$，$B = \\{2, 3\\}$，求 $A \\cap B$。

---

**解答：**

**第1步：** 求交集
> 📌 运用知识点：交集的定义

$A \\cap B = \\{2\\}$。`;

    const result = parseExerciseMarkdown(minimalMd);
    expect(result.warning).toBeUndefined();
    expect(result.summary).toBeUndefined();
    expect(result.steps.length).toBe(1);
  });
});
