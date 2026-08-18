---
type: exercise
textbook: required-1
chapter: 2
section: 1
number: 10
difficulty: hard
category: practice
group: C
is_exam_question: false
knowledge_points:
  - inequality-properties
source: "人教A版2019"
references: "必修第一册 P30 习题 第10题"
---

**题目：** 已知 $a, b, c$ 为正数，且 $a + b + c = 1$，求证：

$$\left(\frac{1}{a} - 1\right)\left(\frac{1}{b} - 1\right)\left(\frac{1}{c} - 1\right) \geq 8$$

---

**解答：**

**第1步：** 化简各因子
> 📌 运用知识点：不等式的性质

因为 $a + b + c = 1$，所以：

$$\frac{1}{a} - 1 = \frac{1 - a}{a} = \frac{b + c}{a}$$

同理：

$$\frac{1}{b} - 1 = \frac{a + c}{b}, \quad \frac{1}{c} - 1 = \frac{a + b}{c}$$

所以原式变为：

$$\frac{(b+c)(a+c)(a+b)}{abc}$$

**第2步：** 对每个因子应用基本不等式
> 📌 运用知识点：不等式的性质

因为 $a, b, c > 0$，由基本不等式：

$$b + c \geq 2\sqrt{bc}$$
$$a + c \geq 2\sqrt{ac}$$
$$a + b \geq 2\sqrt{ab}$$

**第3步：** 三式相乘
> 📌 运用知识点：不等式的性质

$$(b+c)(a+c)(a+b) \geq 2\sqrt{bc} \cdot 2\sqrt{ac} \cdot 2\sqrt{ab} = 8\sqrt{a^2b^2c^2} = 8abc$$

因此：

$$\frac{(b+c)(a+c)(a+b)}{abc} \geq \frac{8abc}{abc} = 8$$

**第4步：** 验证等号条件
> 📌 运用知识点：不等式的性质

等号成立条件：$b = c$，$a = c$，$a = b$，即 $a = b = c = \frac{1}{3}$。

所以原不等式成立，等号在 $a = b = c = \frac{1}{3}$ 时取得。

**⚠️ 易错提醒：** 关键步骤是利用 $a+b+c=1$ 将 $\frac{1}{a}-1$ 化简为 $\frac{b+c}{a}$，这一步转化是解题的核心。

**💡 解题思路总结：** 条件 $a+b+c=1$ 的常用技巧：将 $\frac{1}{a}-1$ 化为 $\frac{b+c}{a}$ 的形式，再利用基本不等式对每个因子放缩。等号成立条件要验证一致性。
