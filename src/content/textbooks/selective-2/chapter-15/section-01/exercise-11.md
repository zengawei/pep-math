---
type: exercise
textbook: selective-2
chapter: 15
section: 1
number: 11
difficulty: hard
category: practice
group: C
is_exam_question: false
knowledge_points:
  - derivative-operations
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P32 练习C 第1题"
---

**题目：** 已知 $f(x) = e^x \cdot \sin x$，求 $f'(x)$ 并求 $f(x)$ 的图象在 $x = 0$ 处的切线方程。

---

**解答：**

**第1步：** 用乘法法则求 $f'(x)$
> 📌 运用知识点：导数运算法则——乘法法则

设 $u = e^x$，$v = \sin x$，则 $u' = e^x$，$v' = \cos x$。

$$f'(x) = u'v + uv' = e^x \sin x + e^x \cos x = e^x(\sin x + \cos x)$$

**第2步：** 求切点坐标
> 📌 运用知识点：导数运算法则——切线方程

$f(0) = e^0 \cdot \sin 0 = 1 \times 0 = 0$，切点为 $(0, 0)$。

**第3步：** 求切线斜率
> 📌 运用知识点：导数运算法则——切线方程

$$f'(0) = e^0(\sin 0 + \cos 0) = 1 \times (0 + 1) = 1$$

**第4步：** 写出切线方程
> 📌 运用知识点：导数运算法则——切线方程

$$y - 0 = 1 \cdot (x - 0) \implies y = x$$

**⚠️ 易错提醒：** 乘法法则求导后要注意提取公因子 $e^x$ 化简。计算 $f'(0)$ 时注意 $\sin 0 = 0$，$\cos 0 = 1$，$e^0 = 1$，不要混淆三角函数值。

**💡 解题思路总结：** 本题综合考查乘法法则求导和切线方程的求解。$e^x$ 与三角函数的乘积求导是高频考点，结果中 $e^x$ 可以提取为公因子，使表达式更简洁。
