---
type: exercise
textbook: selective-2
chapter: 15
section: 3
number: 2
difficulty: medium
category: practice
group: A
is_exam_question: false
knowledge_points:
  - derivative-applications
source: "人教A版2019"
references: "课标15.3.2"
---

**题目：** 利用导数证明：当 $x > 0$ 时，$e^x > 1 + x$。

---

**解答：**

**第1步：** 构造辅助函数
> 📌 运用知识点：导数的综合应用——不等式证明

令 $h(x) = e^x - 1 - x$，则需证当 $x > 0$ 时 $h(x) > 0$。

**第2步：** 求导分析单调性
> 📌 运用知识点：导数的综合应用——不等式证明

$h'(x) = e^x - 1$

当 $x > 0$ 时，$e^x > e^0 = 1$，故 $h'(x) = e^x - 1 > 0$。

因此 $h(x)$ 在 $(0, +\infty)$ 上单调递增。

**第3步：** 利用端点值得出结论
> 📌 运用知识点：导数的综合应用——不等式证明

$h(0) = e^0 - 1 - 0 = 0$

因为 $h(x)$ 在 $(0, +\infty)$ 上单调递增，且 $h(0) = 0$，所以当 $x > 0$ 时 $h(x) > h(0) = 0$。

即 $e^x - 1 - x > 0$，亦即 $e^x > 1 + x$。$\blacksquare$

**💡 解题思路总结：** 证明不等式的标准方法：构造辅助函数 $h(x) = $ 左边 $-$ 右边，用导数证 $h(x)$ 单调递增（或递减），再结合端点值说明 $h(x) > 0$。

