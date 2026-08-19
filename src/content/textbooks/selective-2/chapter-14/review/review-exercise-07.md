---
type: exercise
textbook: selective-2
chapter: 14
section: 0
number: 7
difficulty: basic
category: review
group: A
is_exam_question: false
knowledge_points:
  - arithmetic-sequence-sum
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P18 复习参考题"
---

**题目：** 在等差数列 $\{a_n\}$ 中，$S_5 = 25$，$S_{10} = 100$，求 $S_{15}$。

---

**解答：**

**第1步：** 利用等差数列前n项和的性质
> 📌 运用知识点：等差数列前n项和

在等差数列中，$S_n$，$S_{2n} - S_n$，$S_{3n} - S_{2n}$ 也成等差数列。

因此 $S_5$，$S_{10} - S_5$，$S_{15} - S_{10}$ 成等差数列。

**第2步：** 代入求解
> 📌 运用知识点：等差数列前n项和

已知 $S_5 = 25$，$S_{10} = 100$，则：

$$S_{10} - S_5 = 100 - 25 = 75$$

由等差中项性质：

$$2(S_{10} - S_5) = S_5 + (S_{15} - S_{10})$$

$$2 \times 75 = 25 + S_{15} - 100$$

$$150 = S_{15} - 75 \implies S_{15} = 225$$

**⚠️ 易错提醒：** 等差数列中 $S_n, S_{2n}-S_n, S_{3n}-S_{2n}$ 成等差数列，这是一个重要性质，注意不是 $S_n, S_{2n}, S_{3n}$ 成等差数列。

**💡 解题思路总结：** 等差数列前 $n$ 项和的分段性质 $S_n, S_{2n}-S_n, S_{3n}-S_{2n}$ 成等差，可以避免求首项和公差，直接建立方程求解。
