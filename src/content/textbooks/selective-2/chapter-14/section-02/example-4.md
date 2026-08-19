---
type: example
textbook: selective-2
chapter: 14
section: 2
number: 4
knowledge_points:
  - arithmetic-sequence
  - arithmetic-sequence-sum
source: "人教A版2019"
references: "选择性必修第二册 P14 例4"
---

**例题：** 在等差数列 $\{a_n\}$ 中，$a_1 = 20$，$d = -3$，求前 $n$ 项和 $S_n$ 的最大值。

---

**解答：**

**第1步：** 写出通项公式
> 📌 运用知识点：等差数列通项公式

$$a_n = a_1 + (n-1)d = 20 + (n-1) \times (-3) = 20 - 3n + 3 = 23 - 3n$$

**第2步：** 确定 $S_n$ 取最大值时 $n$ 的值
> 📌 运用知识点：等差数列前 $n$ 项和的最值

由于 $a_1 = 20 > 0$，$d = -3 < 0$，数列递减。当 $a_n \geq 0$ 时，$S_n$ 递增；当 $a_n < 0$ 时，$S_n$ 递减。因此 $S_n$ 在最后一个非负项处取最大值。

令 $a_n \geq 0$：

$$23 - 3n \geq 0 \implies n \leq \dfrac{23}{3} \approx 7.67$$

由于 $n \in \mathbb{N}^*$，当 $n \leq 7$ 时 $a_n > 0$，当 $n \geq 8$ 时 $a_n < 0$。

验证：$a_7 = 23 - 21 = 2 > 0$，$a_8 = 23 - 24 = -1 < 0$。

因此 $S_n$ 在 $n = 7$ 时取最大值。

**第3步：** 计算 $S_7$
> 📌 运用知识点：等差数列前 $n$ 项和公式

$$S_7 = 7 \times a_1 + \dfrac{7 \times 6}{2} \times d = 7 \times 20 + 21 \times (-3) = 140 - 63 = 77$$

**💡 解题思路总结：** 求等差数列前 $n$ 项和的最值，关键步骤为：① 求通项公式 $a_n$；② 令 $a_n \geq 0$ 求出 $n$ 的范围；③ 取满足条件的最大正整数 $n$，代入前 $n$ 项和公式计算。当公差 $d < 0$ 时 $S_n$ 有最大值；当 $d > 0$ 且 $a_1 < 0$ 时 $S_n$ 有最小值。

$$\boxed{S_n \text{ 的最大值为 } 77，\text{此时 } n = 7}$$
