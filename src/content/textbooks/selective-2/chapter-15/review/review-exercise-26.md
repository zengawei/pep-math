---
type: exercise
textbook: selective-2
chapter: 15
section: 0
number: 26
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - derivative-applications
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P58 复习参考题"
---

**题目：** 利用导数证明：当 $x > 0$ 时，$e^x \geqslant x + 1$。

---

**解答：**

**第1步：** 构造辅助函数
> 📌 运用知识点：导数与不等式证明

构造辅助函数 $h(x) = e^x - x - 1$（$x > 0$）。

要证 $e^x \geqslant x + 1$，只需证 $h(x) \geqslant 0$ 对 $x > 0$ 恒成立。

**第2步：** 求导分析单调性
> 📌 运用知识点：导数与单调性

对 $h(x)$ 求导：

$$h'(x) = e^x - 1$$

当 $x > 0$ 时，$e^x > e^0 = 1$，所以 $h'(x) > 0$。

因此 $h(x)$ 在 $(0, +\infty)$ 上单调递增。

**第3步：** 利用端点值得出结论
> 📌 运用知识点：导数与最值

因为 $h(x)$ 在 $(0, +\infty)$ 上单调递增，所以对任意 $x > 0$：

$$h(x) > h(0) = e^0 - 0 - 1 = 0$$

即 $e^x - x - 1 > 0$，即 $e^x > x + 1$（$x > 0$）。

等号在 $x = 0$ 时成立。证毕。

**⚠️ 易错提醒：** ①本题定义域是 $x > 0$（开区间），所以 $h(x) > h(0) = 0$ 是严格大于，等号在 $x = 0$ 取到但 $x = 0$ 不在定义域内，所以严格来说是 $e^x > x + 1$（$x > 0$）；②不要混淆"$x > 0$ 时 $e^x > x + 1$"和"$x \geqslant 0$ 时 $e^x \geqslant x + 1$"，两者的等号条件不同。

**💡 解题思路总结：** 证明 $e^x \geqslant x + 1$ 是导数应用的经典题型。方法同上一题：构造辅助函数 → 求导分析单调性 → 利用最值或端点值证明不等式。$e^x$ 的导数仍为 $e^x$，这使得分析特别简洁。
