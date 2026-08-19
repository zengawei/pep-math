---
type: exercise
textbook: selective-3
chapter: 17
section: 4
number: 4
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - hypergeometric-distribution
source: "人教A版2019"
references: "人教A版选择性必修第三册 P22 练习A 第1题"
---

**题目：** 一批产品共 $12$ 件，其中 $4$ 件是次品，$8$ 件是正品。从中不放回地随机抽取 $3$ 件，设抽到的次品数为 $X$。

(1) 指出 $X$ 服从什么分布，并写出参数 $N, M, n$。

(2) 求 $P(X = 1)$。

---

**解答：**

**第1步：** 判断分布类型
> 📌 运用知识点：超几何分布的判定

有限总体 $N = 12$ 件，其中次品 $M = 4$ 件，不放回抽取 $n = 3$ 件。$X$ 服从超几何分布。

**第2步：** 求 $P(X = 1)$
> 📌 运用知识点：超几何分布的概率公式

$$P(X = k) = \frac{\mathrm{C}_4^k \cdot \mathrm{C}_8^{3-k}}{\mathrm{C}_{12}^3}, \quad k = 0, 1, 2, 3$$

其中 $\mathrm{C}_{12}^3 = \dfrac{12 \times 11 \times 10}{3 \times 2 \times 1} = 220$。

$$P(X = 1) = \frac{\mathrm{C}_4^1 \cdot \mathrm{C}_8^2}{\mathrm{C}_{12}^3} = \frac{4 \times 28}{220} = \frac{112}{220} = \frac{28}{55}$$

**⚠️ 易错提醒：** 超几何分布的公式中，分子是"从次品中取 $k$ 件"乘以"从正品中取 $n-k$ 件"的组合数之积，不要搞混分子中两个组合数的对象。

**💡 解题思路总结：** 超几何分布的参数：$N$ = 总体数，$M$ = 特殊类数，$n$ = 抽取数。概率公式 $P(X=k) = \frac{\mathrm{C}_M^k \cdot \mathrm{C}_{N-M}^{n-k}}{\mathrm{C}_N^n}$。
