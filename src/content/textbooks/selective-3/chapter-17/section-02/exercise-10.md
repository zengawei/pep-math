---
type: exercise
textbook: selective-3
chapter: 17
section: 2
number: 10
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - expected-value-variance
  - distribution-table
source: "人教A版2019"
references: "人教A版选择性必修第三册 P26 练习B 第2题"
---

**题目：** 已知离散型随机变量 $X$ 的分布列为：

| $X$ | $0$ | $1$ | $2$ | $3$ |
|:---:|:---:|:---:|:---:|:---:|
| $P$ | $\dfrac{1}{12}$ | $\dfrac{1}{4}$ | $\dfrac{1}{3}$ | $\dfrac{1}{3}$ |

令 $Y = 3X - 2$，求 $E(Y)$ 和 $D(Y)$。

---

**解答：**

**第1步：** 求 $E(X)$
> 📌 运用知识点：数学期望公式

$$E(X) = 0 \times \frac{1}{12} + 1 \times \frac{1}{4} + 2 \times \frac{1}{3} + 3 \times \frac{1}{3}$$

$$= 0 + \frac{1}{4} + \frac{2}{3} + 1 = \frac{3}{12} + \frac{8}{12} + \frac{12}{12} = \frac{23}{12}$$

**第2步：** 求 $D(X)$
> 📌 运用知识点：方差公式

$$D(X) = \left(0 - \frac{23}{12}\right)^2 \times \frac{1}{12} + \left(1 - \frac{23}{12}\right)^2 \times \frac{1}{4} + \left(2 - \frac{23}{12}\right)^2 \times \frac{1}{3} + \left(3 - \frac{23}{12}\right)^2 \times \frac{1}{3}$$

$$= \frac{529}{144} \times \frac{1}{12} + \frac{121}{144} \times \frac{1}{4} + \frac{1}{144} \times \frac{1}{3} + \frac{289}{144} \times \frac{1}{3}$$

$$= \frac{529}{1728} + \frac{121}{576} + \frac{1}{432} + \frac{289}{432}$$

通分为 $1728$：

$$= \frac{529}{1728} + \frac{363}{1728} + \frac{4}{1728} + \frac{1156}{1728} = \frac{2052}{1728} = \frac{57}{48} = \frac{19}{16}$$

**第3步：** 利用线性性质求 $E(Y)$ 和 $D(Y)$
> 📌 运用知识点：$E(aX+b) = aE(X)+b$，$D(aX+b) = a^2 D(X)$

由 $Y = 3X - 2$，即 $a = 3, b = -2$：

$$E(Y) = 3E(X) - 2 = 3 \times \frac{23}{12} - 2 = \frac{69}{12} - 2 = \frac{23}{4} - 2 = \frac{15}{4}$$

$$D(Y) = 3^2 \cdot D(X) = 9 \times \frac{19}{16} = \frac{171}{16}$$

**⚠️ 易错提醒：** 方差的线性性质中 $D(aX+b) = a^2 D(X)$，常数 $b$ 不影响方差（平移不改变离散程度），系数 $a$ 要平方。不要误写为 $D(3X-2) = 9D(X) - 4$。

**💡 解题思路总结：** 线性变换 $Y = aX + b$ 不需要重新列分布列，直接用性质 $E(Y) = aE(X) + b$ 和 $D(Y) = a^2 D(X)$ 即可。
