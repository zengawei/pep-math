---
type: exercise
textbook: selective-2
chapter: 14
section: 3
number: 4
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - arithmetic-sequence-sum
source: "人教A版2019"
references: "选择性必修第二册 P17 练习A 第4题"
---

**题目：** 在等差数列 $\{a_n\}$ 中，$a_1 = 3$，$d = 4$，求前 $10$ 项和 $S_{10}$。

---

**解答：**

**第1步：** 确定已知量并选择求和公式
> 📌 运用知识点：等差数列前 $n$ 项和公式

已知 $a_1 = 3$，$d = 4$，$n = 10$。

等差数列前 $n$ 项和公式为：

$$S_n = na_1 + \dfrac{n(n-1)}{2}d$$

**第2步：** 代入数据计算
> 📌 运用知识点：等差数列前 $n$ 项和公式

将 $a_1 = 3$，$d = 4$，$n = 10$ 代入公式：

$$S_{10} = 10 \times 3 + \dfrac{10 \times 9}{2} \times 4$$

$$= 30 + 45 \times 4$$

$$= 30 + 180$$

$$= \boxed{210}$$

**⚠️ 易错提醒：** 代入公式时注意 $n(n-1)$ 的计算，$n=10$ 时 $n-1=9$，不要误算为 $n(n+1)$。另外注意运算顺序，先算乘法再算加法。

**💡 解题思路总结：** 等差数列求和的关键是准确识别 $a_1$、$d$、$n$ 三个基本量，直接代入前 $n$ 项和公式 $S_n = na_1 + \dfrac{n(n-1)}{2}d$ 即可。也可先求 $a_{10} = a_1 + 9d = 39$，再用 $S_{10} = \dfrac{10(3+39)}{2} = 210$ 验证。
