---
type: exercise
textbook: required-1
chapter: 2
section: 3
number: 8
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - basic-inequality
source: "人教A版2019"
references: "必修第一册 P48 习题 第8题"
---

**题目：** 已知正数 $a, b$ 满足 $2a + b = 1$，求 $\frac{1}{a} + \frac{2}{b}$ 的最小值。

---

**解答：**

**第1步：** 利用"1的代换"
> 📌 运用知识点：基本不等式

因为 $2a + b = 1$，所以：

$$\frac{1}{a} + \frac{2}{b} = \left(\frac{1}{a} + \frac{2}{b}\right) \times 1 = \left(\frac{1}{a} + \frac{2}{b}\right)(2a + b)$$

**第2步：** 展开
> 📌 运用知识点：基本不等式

$$\left(\frac{1}{a} + \frac{2}{b}\right)(2a + b) = \frac{2a}{a} + \frac{b}{a} + \frac{4a}{b} + \frac{2b}{b} = 2 + \frac{b}{a} + \frac{4a}{b} + 2 = 4 + \frac{b}{a} + \frac{4a}{b}$$

**第3步：** 对 $\frac{b}{a} + \frac{4a}{b}$ 应用基本不等式
> 📌 运用知识点：基本不等式

因为 $a, b > 0$，$\frac{b}{a} > 0$，$\frac{4a}{b} > 0$，由基本不等式：

$$\frac{b}{a} + \frac{4a}{b} \geq 2\sqrt{\frac{b}{a} \cdot \frac{4a}{b}} = 2\sqrt{4} = 4$$

所以 $\frac{1}{a} + \frac{2}{b} \geq 4 + 4 = 8$。

**第4步：** 验证等号成立条件
> 📌 运用知识点：基本不等式

等号成立：$\frac{b}{a} = \frac{4a}{b}$，即 $b^2 = 4a^2$，$b = 2a$（$a, b > 0$）。

代入 $2a + b = 1$：$2a + 2a = 1$，$a = \frac{1}{4}$，$b = \frac{1}{2}$。

所以 $\frac{1}{a} + \frac{2}{b}$ 的最小值为 $8$。

**⚠️ 易错提醒：** "1的代换"是基本不等式中的重要技巧。将常数 $1$ 替换为已知条件表达式，展开后利用基本不等式求最值。

**💡 解题思路总结：** 已知 $ma + nb = 1$，求 $\frac{p}{a} + \frac{q}{b}$ 的最小值：将 $1$ 代换为 $ma + nb$，展开后用基本不等式。注意验证等号成立条件的一致性。
