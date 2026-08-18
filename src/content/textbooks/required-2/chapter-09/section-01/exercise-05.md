---
type: exercise
textbook: required-2
chapter: 9
section: 1
number: 5
difficulty: basic
category: practice
is_exam_question: false
knowledge_points:
  - random-sampling
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 某单位有 $1000$ 名职工，现用系统抽样的方法抽取一个容量为 $50$ 的样本。将 $1000$ 名职工编号为 $1, 2, 3, \cdots, 1000$，求抽样间隔，并写出第一段中随机起点为 $8$ 时，第 $6$ 段抽取的职工编号。

---

**解答：**

**第1步：** 求抽样间隔
> 📌 运用知识点：随机抽样

抽样间隔 $k = \frac{N}{n} = \frac{1000}{50} = 20$

**第2步：** 求第 $6$ 段的编号
> 📌 运用知识点：随机抽样

系统抽样中，第 $i$ 段抽取的编号为 $a + (i-1)k$，其中 $a$ 为随机起点。

第 $6$ 段编号 $= 8 + (6-1) \times 20 = 8 + 100 = 108$

**💡 易错提醒：** 系统抽样要求 $\frac{N}{n}$ 为整数。若不能整除，需先从总体中随机剔除若干个体使剩余总数能被 $n$ 整除。

**💡 解题思路总结：** 系统抽样公式：第 $i$ 个样本编号 $= a + (i-1)k$，其中 $a$ 为第一段随机抽取的编号，$k$ 为间隔。
