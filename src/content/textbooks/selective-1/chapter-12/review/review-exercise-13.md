---
type: exercise
textbook: selective-1
chapter: 12
section: 0
number: 13
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - line-equation
  - line-equation-application
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P61 复习参考题 第13题"
---

**题目：** 已知直线 $l$ 经过点 $P(2, 1)$，且与 $x$ 轴、$y$ 轴的正半轴分别交于 $A, B$ 两点。当 $\triangle AOB$ 的面积最小时，求直线 $l$ 的方程。

---

**解答：**

**第1步：** 设截距式方程
> 📌 运用知识点：直线的方程

设直线 $l$ 的截距式为 $\dfrac{x}{a} + \dfrac{y}{b} = 1$（$a > 0, b > 0$）。

代入 $P(2, 1)$：$\dfrac{2}{a} + \dfrac{1}{b} = 1$。

**第2步：** 用不等式求最小值
> 📌 运用知识点：直线方程的应用

$S_{\triangle AOB} = \dfrac{1}{2}ab$。

由 $\dfrac{2}{a} + \dfrac{1}{b} = 1$，利用均值不等式：

$$1 = \frac{2}{a} + \frac{1}{b} \geq 2\sqrt{\frac{2}{ab}}$$

$$\frac{1}{4} \geq \frac{2}{ab} \Rightarrow ab \geq 8$$

等号成立条件：$\dfrac{2}{a} = \dfrac{1}{b} = \dfrac{1}{2}$，即 $a = 4, b = 2$。

$S_{\min} = \dfrac{1}{2} \times 8 = 4$。

**第3步：** 写出直线方程
> 📌 运用知识点：直线的方程

$$\frac{x}{4} + \frac{y}{2} = 1 \Rightarrow x + 2y - 4 = 0$$

**⚠️ 易错提醒：** 题目要求与正半轴相交，所以 $a > 0, b > 0$。均值不等式的等号成立条件必须验证。

**💡 解题思路总结：** 面积最值问题：设截距 → 用约束条件 → 均值不等式求最值 → 验证等号成立条件。
