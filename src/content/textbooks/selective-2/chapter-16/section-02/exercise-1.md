---
type: exercise
textbook: selective-2
chapter: 16
section: 2
number: 1
difficulty: basic
category: practice
is_exam_question: false
knowledge_points:
  - combination
source: "人教A版2019"
references: "教材P112"
---

**题目：**

(1) 计算 $\mathrm{C}_{10}^{3} + \mathrm{C}_{10}^{7}$ 的值。

(2) 解方程 $\mathrm{C}_n^2 = 15$。

---

**解答：**

**第1步：** 计算 $\mathrm{C}_{10}^{3} + \mathrm{C}_{10}^{7}$
> 📌 运用知识点：组合数公式、组合数的对称性

由组合数的对称性 $\mathrm{C}_n^m = \mathrm{C}_n^{n-m}$，可知 $\mathrm{C}_{10}^{7} = \mathrm{C}_{10}^{3}$。

因此：

$$\mathrm{C}_{10}^{3} + \mathrm{C}_{10}^{7} = 2\mathrm{C}_{10}^{3} = 2 \times \frac{10 \times 9 \times 8}{3 \times 2 \times 1} = 2 \times 120 = 240$$

**第2步：** 解方程 $\mathrm{C}_n^2 = 15$
> 📌 运用知识点：组合数公式

由组合数公式展开：

$$\mathrm{C}_n^2 = \frac{n(n-1)}{2} = 15$$

$$n(n-1) = 30$$

$$n^2 - n - 30 = 0$$

$$(n-6)(n+5) = 0$$

解得 $n = 6$ 或 $n = -5$。

因为 $n \in \mathbb{N}^*$，所以 $n = -5$ 舍去。

$$\boxed{n = 6}$$

**💡 解题思路总结：** 第(1)题利用组合数的对称性可以简化计算；第(2)题将组合数用公式展开后转化为一元二次方程求解，注意检验 $n$ 的取值范围。
