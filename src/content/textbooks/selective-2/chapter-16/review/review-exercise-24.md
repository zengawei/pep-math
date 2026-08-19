---
type: exercise
textbook: selective-2
chapter: 16
section: 0
number: 24
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - binomial-theorem
  - binomial-properties
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P86 复习参考题"
---

**题目：** 已知 $(1 + x)^n$ 的展开式中，第3项的系数为 $a_n$。

（1）求 $a_n$ 的表达式；

（2）求 $\dfrac{1}{a_2} + \dfrac{1}{a_3} + \dfrac{1}{a_4} + \cdots + \dfrac{1}{a_{10}}$ 的值。

---

**解答：**

**第1步：** 求 $a_n$ 的表达式
> 📌 运用知识点：二项式定理

$(1+x)^n$ 展开式的通项为：

$$T_{r+1} = C_n^r x^r$$

第3项（$r = 2$）的系数为：

$$a_n = C_n^2 = \frac{n(n-1)}{2}$$

其中 $n \geqslant 2$，$n \in \mathbb{N}^*$。

**第2步：** 求 $\dfrac{1}{a_n}$ 的表达式
> 📌 运用知识点：裂项法

$$\frac{1}{a_n} = \frac{1}{C_n^2} = \frac{2}{n(n-1)}$$

利用裂项：

$$\frac{2}{n(n-1)} = 2 \left(\frac{1}{n-1} - \frac{1}{n}\right)$$

**第3步：** 用裂项相消法求和
> 📌 运用知识点：数列求和（裂项相消）

$$\sum_{k=2}^{10} \frac{1}{a_k} = \sum_{k=2}^{10} 2\left(\frac{1}{k-1} - \frac{1}{k}\right)$$

$$= 2\left[\left(\frac{1}{1} - \frac{1}{2}\right) + \left(\frac{1}{2} - \frac{1}{3}\right) + \left(\frac{1}{3} - \frac{1}{4}\right) + \cdots + \left(\frac{1}{9} - \frac{1}{10}\right)\right]$$

中间项逐项相消：

$$= 2\left(1 - \frac{1}{10}\right) = 2 \times \frac{9}{10} = \frac{9}{5}$$

所以 $\dfrac{1}{a_2} + \dfrac{1}{a_3} + \cdots + \dfrac{1}{a_{10}} = \dfrac{9}{5}$。

**⚠️ 易错提醒：** ①第3项的系数是 $C_n^2$（$r=2$），不是 $C_n^3$——注意"第 $k$ 项"对应 $r = k-1$；②裂项公式 $\dfrac{2}{n(n-1)} = 2\left(\dfrac{1}{n-1} - \dfrac{1}{n}\right)$ 需要验证：右边 $= 2 \cdot \dfrac{n - (n-1)}{n(n-1)} = \dfrac{2}{n(n-1)}$ ✓；③求和的下标从 $k=2$ 开始（因为 $a_n = C_n^2$ 要求 $n \geqslant 2$），不要从 $k=1$ 开始。

**💡 解题思路总结：** 二项式系数与数列综合题的解题路径：①用二项式定理写出系数的表达式；②对系数的倒数进行变形（裂项、配方等）；③利用数列求和方法（本题为裂项相消）得出结果。关键是识别出 $\dfrac{1}{C_n^2}$ 可以裂项。

