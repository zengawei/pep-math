---
type: exercise
textbook: selective-2
chapter: 14
section: 0
number: 13
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - arithmetic-sequence
  - arithmetic-sequence-sum
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P21 复习参考题"
---

**题目：** 在等差数列 $\{a_n\}$ 中，$a_1 = 25$，$d = -2$。

（1）求前 $n$ 项和 $S_n$ 的最大值；

（2）求 $|a_1| + |a_2| + |a_3| + \cdots + |a_{20}|$ 的值。

---

**解答：**

**第1步：** 求通项公式并分析正负
> 📌 运用知识点：等差数列

通项公式为：

$$a_n = 25 + (n-1) \times (-2) = 27 - 2n$$

令 $a_n \geqslant 0$：$27 - 2n \geqslant 0 \implies n \leqslant 13.5$

所以 $a_1, a_2, \cdots, a_{13}$ 为正，$a_{14}, a_{15}, \cdots$ 为负。

**第2步：** 求 $S_n$ 的最大值
> 📌 运用知识点：等差数列前n项和

当所有正项都累加时 $S_n$ 最大，即 $n = 13$ 时：

$$S_{13} = 13 \times 25 + \frac{13 \times 12}{2} \times (-2) = 325 - 156 = 169$$

**第3步：** 求绝对值之和
> 📌 运用知识点：等差数列前n项和

$$|a_1| + |a_2| + \cdots + |a_{20}| = (a_1 + a_2 + \cdots + a_{13}) - (a_{14} + a_{15} + \cdots + a_{20})$$

$$= S_{13} - (S_{20} - S_{13}) = 2S_{13} - S_{20}$$

计算 $S_{20}$：

$$S_{20} = 20 \times 25 + \frac{20 \times 19}{2} \times (-2) = 500 - 380 = 120$$

因此：

$$|a_1| + |a_2| + \cdots + |a_{20}| = 2 \times 169 - 120 = 338 - 120 = 218$$

**⚠️ 易错提醒：** 求 $S_n$ 最大值时，需找到最后一个非负项的位置。求绝对值之和时，要将正项和负项分开处理：$|a_1|+\cdots+|a_n| = 2S_k - S_n$（其中 $k$ 为最后一个正项的下标）。

**💡 解题思路总结：** 等差数列公差为负时，$S_n$ 在最后一个非负项处取最大值。绝对值之和的关键是找到正负分界点，利用 $2S_k - S_n$ 计算。
