---
type: exercise
textbook: selective-2
chapter: 16
section: 2
number: 4
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - combination
source: "人教A版2019"
references: "选择性必修第二册 P64 练习A 第4题"
---

**题目：**

(1) 计算 $\mathrm{C}_{8}^{2}$ 的值。

(2) 计算 $\mathrm{C}_{10}^{3} - \mathrm{C}_{10}^{2}$ 的值。

(3) 已知 $\mathrm{C}_n^3 = \mathrm{C}_n^5$，求 $n$ 的值。

---

**解答：**

**第1步：** 计算 $\mathrm{C}_{8}^{2}$
> 📌 运用知识点：组合数公式

$$\mathrm{C}_{8}^{2} = \frac{8 \times 7}{2 \times 1} = 28$$

**第2步：** 计算 $\mathrm{C}_{10}^{3} - \mathrm{C}_{10}^{2}$
> 📌 运用知识点：组合数公式

$$\mathrm{C}_{10}^{3} = \frac{10 \times 9 \times 8}{3 \times 2 \times 1} = 120$$

$$\mathrm{C}_{10}^{2} = \frac{10 \times 9}{2 \times 1} = 45$$

$$\mathrm{C}_{10}^{3} - \mathrm{C}_{10}^{2} = 120 - 45 = 75$$

**第3步：** 求 $n$ 的值
> 📌 运用知识点：组合数的对称性

由组合数的对称性 $\mathrm{C}_n^m = \mathrm{C}_n^{n-m}$，可知 $\mathrm{C}_n^3 = \mathrm{C}_n^{n-3}$。

又已知 $\mathrm{C}_n^3 = \mathrm{C}_n^5$，所以 $n - 3 = 5$，解得 $n = 8$。

**⚠️ 易错提醒：** 第(3)题利用对称性 $\mathrm{C}_n^m = \mathrm{C}_n^{n-m}$ 时，要注意 $\mathrm{C}_n^a = \mathrm{C}_n^b$ 意味着 $a = b$ 或 $a + b = n$。本题 $3 \neq 5$，所以 $3 + 5 = n$。

**💡 解题思路总结：** 组合数计算直接用公式展开；对称性 $\mathrm{C}_n^m = \mathrm{C}_n^{n-m}$ 可以简化计算和反求 $n$。
