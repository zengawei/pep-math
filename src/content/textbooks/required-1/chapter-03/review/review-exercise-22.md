---
type: exercise
textbook: required-1
chapter: 3
section: 0
number: 22
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - function-concept
source: "人教A版2019"
references: "必修第一册 P56-P85 复习"
---

**题目：** 已知 $f(2x + 1) = x^2 - 3x + 1$，求 $f(x)$ 的解析式。

---

**解答：**

**第1步：** 换元
> 📌 运用知识点：函数解析式求法（换元法）

令 $t = 2x + 1$，则 $x = \frac{t - 1}{2}$。

**第2步：** 代入
> 📌 运用知识点：代数运算

$$f(t) = \left(\frac{t-1}{2}\right)^2 - 3 \cdot \frac{t-1}{2} + 1$$

$$= \frac{(t-1)^2}{4} - \frac{3(t-1)}{2} + 1$$

$$= \frac{t^2 - 2t + 1}{4} - \frac{3t - 3}{2} + 1$$

$$= \frac{t^2 - 2t + 1 - 6t + 6 + 4}{4}$$

$$= \frac{t^2 - 8t + 11}{4}$$

**第3步：** 写出结果

$$f(x) = \frac{x^2 - 8x + 11}{4}$$

**第4步：** 验证
> 📌 运用知识点：检验

$f(2x+1) = \frac{(2x+1)^2 - 8(2x+1) + 11}{4} = \frac{4x^2+4x+1-16x-8+11}{4} = \frac{4x^2-12x+4}{4} = x^2-3x+1$ ✓

**⚠️ 易错提醒：** 换元后代入展开容易算错。建议最后用验证确认结果正确。

**💡 解题思路总结：** 已知 $f(g(x))$ 求 $f(x)$：令 $t = g(x)$，反解 $x = g^{-1}(t)$，代入得 $f(t)$。
