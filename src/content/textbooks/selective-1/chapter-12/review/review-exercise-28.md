---
type: exercise
textbook: selective-1
chapter: 12
section: 0
number: 28
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - circle-equation
  - line-circle-position
  - coordinate-method
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P68 复习参考题 第28题"
---

**题目：** 已知圆 $O: x^2 + y^2 = 4$，点 $P(4, 2)$。过 $P$ 作圆 $O$ 的两条切线，切点分别为 $A, B$。

(1) 求切线 $PA, PB$ 的方程。

(2) 求直线 $AB$ 的方程。

(3) 求 $|AB|$ 的长度。

---

**解答：**

**第1步：** 求切线方程
> 📌 运用知识点：直线与圆的位置关系

$|OP| = \sqrt{16 + 4} = \sqrt{20} = 2\sqrt{5}$。切线长 $= \sqrt{20 - 4} = 4$。

设切线斜率为 $k$：$y - 2 = k(x - 4)$，即 $kx - y + 2 - 4k = 0$。

$$\frac{|2 - 4k|}{\sqrt{k^2 + 1}} = 2 \Rightarrow (2 - 4k)^2 = 4(k^2 + 1)$$

$$4 - 16k + 16k^2 = 4k^2 + 4 \Rightarrow 12k^2 - 16k = 0 \Rightarrow 4k(3k - 4) = 0$$

$k = 0$ 或 $k = \dfrac{4}{3}$。

切线：$y = 2$ 和 $y - 2 = \dfrac{4}{3}(x - 4)$，即 $4x - 3y - 10 = 0$。

**第2步：** 求切点弦方程
> 📌 运用知识点：直线与圆的位置关系

切点弦 $AB$ 的方程（极线公式）：$x_P \cdot x + y_P \cdot y = r^2$。

$4x + 2y = 4$，即 $2x + y - 2 = 0$。

**第3步：** 求 $|AB|$
> 📌 运用知识点：坐标法

圆心到 $AB$ 的距离 $d = \dfrac{|0 + 0 - 2|}{\sqrt{5}} = \dfrac{2}{\sqrt{5}}$。

$$|AB| = 2\sqrt{4 - \frac{4}{5}} = 2\sqrt{\frac{16}{5}} = \frac{8}{\sqrt{5}} = \frac{8\sqrt{5}}{5}$$

**⚠️ 易错提醒：** 切点弦方程（极线）$x_0x + y_0y = r^2$ 只适用于圆心在原点的圆。求切线时要检验斜率不存在的情况。

**💡 解题思路总结：** 圆外一点到圆的切线：设斜率用距离条件。切点弦（极线）方程可直接写出。弦长用圆心到弦的距离计算。
