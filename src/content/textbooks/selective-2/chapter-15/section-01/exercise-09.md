---
type: exercise
textbook: selective-2
chapter: 15
section: 1
number: 9
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - derivative-operations
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P30 练习B 第3题"
---

**题目：** 求曲线 $y = x \ln x$ 在 $x = e$ 处的切线方程。

---

**解答：**

**第1步：** 求切点坐标
> 📌 运用知识点：导数运算法则——切线方程

当 $x = e$ 时，$y = e \cdot \ln e = e \cdot 1 = e$，切点为 $(e, e)$。

**第2步：** 求导数并计算切线斜率
> 📌 运用知识点：导数运算法则——乘法法则

使用乘法法则，设 $u = x$，$v = \ln x$：

$$y' = 1 \cdot \ln x + x \cdot \frac{1}{x} = \ln x + 1$$

当 $x = e$ 时，$k = \ln e + 1 = 1 + 1 = 2$。

**第3步：** 写出切线方程
> 📌 运用知识点：导数运算法则——切线方程

$$y - e = 2(x - e)$$

$$y = 2x - 2e + e = 2x - e$$

**⚠️ 易错提醒：** $(x \ln x)'$ 要用乘法法则，不能直接写 $\ln x$。注意 $\ln e = 1$ 而不是 $e$。切线方程要用点斜式 $y - y_0 = k(x - x_0)$，代入切点 $(e, e)$ 而非原点。

**💡 解题思路总结：** 求切线方程三步走：①求切点（代入原函数）；②求斜率（代入导函数）；③用点斜式写出方程。乘法法则 $(uv)' = u'v + uv'$ 是本题核心。
