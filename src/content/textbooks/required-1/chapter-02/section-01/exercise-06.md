---
type: exercise
textbook: required-1
chapter: 2
section: 1
number: 6
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - inequality-properties
source: "人教A版2019"
references: "必修第一册 P28 练习 第6题"
---

**题目：** 已知 $a > 0$，$b > 0$，用作差法比较 $\frac{a+b}{2}$ 与 $\sqrt{ab}$ 的大小。

---

**解答：**

**第1步：** 作差
> 📌 运用知识点：不等式的性质（作差法）

$$\frac{a+b}{2} - \sqrt{ab} = \frac{a + b - 2\sqrt{ab}}{2}$$

**第2步：** 化简差值
> 📌 运用知识点：完全平方公式

注意到 $a + b - 2\sqrt{ab} = (\sqrt{a})^2 - 2\sqrt{a}\sqrt{b} + (\sqrt{b})^2 = (\sqrt{a} - \sqrt{b})^2$

所以：
$$\frac{a+b}{2} - \sqrt{ab} = \frac{(\sqrt{a} - \sqrt{b})^2}{2}$$

**第3步：** 判断正负
> 📌 运用知识点：不等式的性质

因为 $(\sqrt{a} - \sqrt{b})^2 \geq 0$，所以 $\frac{(\sqrt{a} - \sqrt{b})^2}{2} \geq 0$。

即 $\frac{a+b}{2} - \sqrt{ab} \geq 0$，故 $\frac{a+b}{2} \geq \sqrt{ab}$。

等号成立条件：$\sqrt{a} = \sqrt{b}$，即 $a = b$。

**⚠️ 易错提醒：** 作差法的关键是将差值化为容易判断正负的形式。本题中需要识别出完全平方式。

**💡 解题思路总结：** 作差法比较大小：①计算两式之差 ②将差值化简（配方、因式分解等）③判断差值的正负。本题证明了算术平均数不小于几何平均数（基本不等式的另一种形式）。
