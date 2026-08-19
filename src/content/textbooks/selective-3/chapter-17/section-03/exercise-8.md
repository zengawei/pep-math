---
type: exercise
textbook: selective-3
chapter: 17
section: 3
number: 8
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - binomial-distribution
  - probability-addition-multiplication
source: "人教A版2019"
references: "人教A版选择性必修第三册 P34 练习A 第5题"
---

**题目：** 某型号电子元件的合格率为 $0.95$。现独立地检验 $10$ 个元件，设合格元件的个数为 $X$。

(1) 求至少有一个不合格品的概率。

(2) 求 $E(X)$。

---

**解答：**

**第1步：** 确定分布类型
> 📌 运用知识点：二项分布的判定

$X \sim B(10, 0.95)$。

**第2步：** 求至少有一个不合格品的概率
> 📌 运用知识点：对立事件

"至少有一个不合格品"等价于"不是全部合格"，即 $X < 10$。

$$P(X < 10) = 1 - P(X = 10) = 1 - \binom{10}{10}(0.95)^{10}(0.05)^0$$

$$= 1 - (0.95)^{10}$$

计算 $(0.95)^{10}$：

$(0.95)^2 = 0.9025$，$(0.95)^4 \approx 0.8145$，$(0.95)^5 \approx 0.7738$

$(0.95)^{10} \approx (0.7738)^2 \approx 0.5987$

$$P(X < 10) \approx 1 - 0.5987 = 0.4013$$

**第3步：** 求 $E(X)$
> 📌 运用知识点：二项分布的期望公式

$$E(X) = np = 10 \times 0.95 = 9.5$$

**⚠️ 易错提醒：** "至少有一个不合格"不等于"$X = 1$"。不合格品个数是 $10 - X$，"至少一个不合格"即 $10 - X \geqslant 1$，即 $X \leqslant 9$，等价于 $X \neq 10$。

**💡 解题思路总结：** "至少有一个"用对立事件 $1 - P(\text{全部})$ 最简便。二项分布中 $P(X = n) = p^n$，直接计算即可。
