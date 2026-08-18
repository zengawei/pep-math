---
type: definition
textbook: selective-1
chapter: 12
section: 3
name: 直线与圆、圆与圆的位置关系
related_knowledge_points:
  - line-circle-position
  - circle-circle-position
---

**定义（精确表述）：**

**直线与圆的位置关系**：设圆心到直线的距离为 $d$，圆的半径为 $r$：
- $d > r \Leftrightarrow$ 直线与圆相离（无交点）
- $d = r \Leftrightarrow$ 直线与圆相切（一个交点）
- $d < r \Leftrightarrow$ 直线与圆相交（两个交点）

圆心 $(a, b)$ 到直线 $Ax + By + C = 0$ 的距离：$d = \dfrac{|Aa + Bb + C|}{\sqrt{A^2 + B^2}}$

弦长公式：$|AB| = 2\sqrt{r^2 - d^2}$

**圆与圆的位置关系**：设两圆圆心距为 $d$，半径分别为 $r_1, r_2$（$r_1 \geq r_2$）：
- $d > r_1 + r_2 \Leftrightarrow$ 外离
- $d = r_1 + r_2 \Leftrightarrow$ 外切
- $|r_1 - r_2| < d < r_1 + r_2 \Leftrightarrow$ 相交
- $d = |r_1 - r_2| \Leftrightarrow$ 内切
- $d < |r_1 - r_2| \Leftrightarrow$ 内含

**通俗解释：** 判断直线和圆的关系，核心就是比较"距离 $d$"和"半径 $r$"——离得远就相离，刚好碰到就相切，穿过去就相交。两圆的关系则看"圆心距"和"两半径之和/差"的大小关系。
