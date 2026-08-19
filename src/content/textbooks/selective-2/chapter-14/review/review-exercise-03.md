---
type: exercise
textbook: selective-2
chapter: 14
section: 0
number: 3
difficulty: basic
category: review
group: A
is_exam_question: false
knowledge_points:
  - arithmetic-sequence
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P16 复习参考题"
---

**题目：** 在等差数列 $\{a_n\}$ 中，$a_3 = 7$，$a_7 = 19$，求公差 $d$ 和通项公式 $a_n$。

---

**解答：**

**第1步：** 利用等差数列性质求公差
> 📌 运用知识点：等差数列

由等差数列通项公式 $a_n = a_1 + (n-1)d$，得：

$$a_7 - a_3 = (a_1 + 6d) - (a_1 + 2d) = 4d$$

所以：

$$4d = 19 - 7 = 12 \implies d = 3$$

**第2步：** 求通项公式
> 📌 运用知识点：等差数列

由 $a_3 = a_1 + 2d = 7$，代入 $d = 3$：

$$a_1 + 6 = 7 \implies a_1 = 1$$

因此通项公式为：

$$a_n = 1 + (n-1) \times 3 = 3n - 2$$

**⚠️ 易错提醒：** 利用 $a_m - a_n = (m-n)d$ 求公差时，注意项数差与公差倍数的对应关系，不要搞混下标。

**💡 解题思路总结：** 已知等差数列中任意两项的值，利用 $a_m - a_n = (m-n)d$ 可直接求公差，再回代求首项，即可写出通项公式。
