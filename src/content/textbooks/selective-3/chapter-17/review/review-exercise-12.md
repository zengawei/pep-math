---
type: exercise
textbook: selective-3
chapter: 17
section: 0
number: 12
difficulty: basic
category: review
group: A
is_exam_question: false
knowledge_points:
  - expected-value-variance
source: "人教A版2019"
references: "选择性必修第三册 P36 复习参考题 第12题"
---

**题目：** 已知随机变量 $X$ 满足 $E(X) = 3$，$D(X) = 2$。设 $Y = 2X + 1$，求 $E(Y)$ 和 $D(Y)$。

---

**解答：**

**第1步：** 求 $E(Y)$
> 📌 运用知识点：数学期望的线性性质

$$E(Y) = E(2X + 1) = 2E(X) + 1 = 2 \times 3 + 1 = 7$$

**第2步：** 求 $D(Y)$
> 📌 运用知识点：方差的性质

$$D(Y) = D(2X + 1) = 2^2 \cdot D(X) = 4 \times 2 = 8$$

**⚠️ 易错提醒：** 方差性质 $D(aX + b) = a^2 D(X)$ 中，常数 $b$ 不影响方差（加常数只改变位置不改变离散程度），系数 $a$ 要**平方**。不要误写为 $D(2X+1) = 4D(X) + 1$ 或 $D(2X+1) = 2D(X)$。

**💡 解题思路总结：** 期望的线性性质：$E(aX + b) = aE(X) + b$。方差的性质：$D(aX + b) = a^2 D(X)$。这两个性质在解题中非常常用。
