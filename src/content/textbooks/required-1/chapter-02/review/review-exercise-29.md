---
type: exercise
textbook: required-1
chapter: 2
section: 0
number: 29
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - basic-inequality
  - inequality-properties
source: "人教A版2019"
references: "必修第一册 P55 复习题 第29题"
---

**题目：** 已知 $a, b, c$ 为正数，且 $abc = 1$，求证：$\frac{a}{b+c} + \frac{b}{a+c} + \frac{c}{a+b} \geq \frac{3}{2}$。

---

**解答：**

**第1步：** 变量替换
> 📌 运用知识点：基本不等式

令 $S = a + b + c$。则：

$$\frac{a}{b+c} = \frac{a}{S - a} = \frac{S}{S - a} - 1$$

所以：

$$\frac{a}{b+c} + \frac{b}{a+c} + \frac{c}{a+b} = S\left(\frac{1}{S-a} + \frac{1}{S-b} + \frac{1}{S-c}\right) - 3$$

**第2步：** 利用调和-算术平均不等式
> 📌 运用知识点：基本不等式

由基本不等式（或 Cauchy-Schwarz 不等式）：

$$\frac{1}{S-a} + \frac{1}{S-b} + \frac{1}{S-c} \geq \frac{9}{(S-a)+(S-b)+(S-c)} = \frac{9}{3S - S} = \frac{9}{2S}$$

**第3步：** 代入
> 📌 运用知识点：基本不等式

$$S \cdot \frac{9}{2S} - 3 = \frac{9}{2} - 3 = \frac{3}{2}$$

所以 $\frac{a}{b+c} + \frac{b}{a+c} + \frac{c}{a+b} \geq \frac{3}{2}$。

**第4步：** 验证等号条件
> 📌 运用知识点：基本不等式

等号成立：$S - a = S - b = S - c$，即 $a = b = c$。

由 $abc = 1$ 且 $a = b = c$，得 $a = b = c = 1$。

此时 $\frac{1}{2} + \frac{1}{2} + \frac{1}{2} = \frac{3}{2}$。✓

**⚠️ 易错提醒：** 本题的关键技巧是将 $\frac{a}{b+c}$ 写成 $\frac{S}{S-a} - 1$ 的形式，再利用 $\frac{1}{x} + \frac{1}{y} + \frac{1}{z} \geq \frac{9}{x+y+z}$。注意本题条件 $abc = 1$ 实际上在证明过程中没有直接使用（不等式对任意正数 $a, b, c$ 都成立，这就是 Nesbitt 不等式）。

**💡 解题思路总结：** Nesbitt 不等式的证明方法：令 $S = a+b+c$，将各项化为 $\frac{S}{S-a} - 1$，再利用调和平均不等式。
