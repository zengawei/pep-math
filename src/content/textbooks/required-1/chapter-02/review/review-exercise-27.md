---
type: exercise
textbook: required-1
chapter: 2
section: 0
number: 27
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - basic-inequality
source: "人教A版2019"
references: "必修第一册 P55 复习题 第27题"
---

**题目：** 已知正数 $a, b, c$ 满足 $a + b + c = 1$，求证：$\sqrt{a} + \sqrt{b} + \sqrt{c} \leq \sqrt{3}$。

---

**解答：**

**第1步：** 平方处理
> 📌 运用知识点：基本不等式

设 $S = \sqrt{a} + \sqrt{b} + \sqrt{c}$，则：

$$S^2 = a + b + c + 2(\sqrt{ab} + \sqrt{bc} + \sqrt{ca}) = 1 + 2(\sqrt{ab} + \sqrt{bc} + \sqrt{ca})$$

**第2步：** 估计 $\sqrt{ab} + \sqrt{bc} + \sqrt{ca}$
> 📌 运用知识点：基本不等式

由基本不等式：

$$\sqrt{ab} \leq \frac{a + b}{2}, \quad \sqrt{bc} \leq \frac{b + c}{2}, \quad \sqrt{ca} \leq \frac{c + a}{2}$$

三式相加：

$$\sqrt{ab} + \sqrt{bc} + \sqrt{ca} \leq \frac{2(a + b + c)}{2} = a + b + c = 1$$

**第3步：** 得出结论
> 📌 运用知识点：基本不等式

$$S^2 \leq 1 + 2 \times 1 = 3$$

所以 $S \leq \sqrt{3}$，即 $\sqrt{a} + \sqrt{b} + \sqrt{c} \leq \sqrt{3}$。

**第4步：** 验证等号条件
> 📌 运用知识点：基本不等式

等号成立：$a = b$，$b = c$，$c = a$，即 $a = b = c = \frac{1}{3}$。

此时 $\sqrt{a} + \sqrt{b} + \sqrt{c} = 3\sqrt{\frac{1}{3}} = 3 \cdot \frac{1}{\sqrt{3}} = \sqrt{3}$。✓

**⚠️ 易错提醒：** 证明含根号的不等式时，可以先平方再估计。关键是利用基本不等式将 $\sqrt{ab}$ 放缩为 $\frac{a+b}{2}$。

**💡 解题思路总结：** 证明 $\sum \sqrt{a_i} \leq M$ 的方法：平方后利用基本不等式 $\sqrt{xy} \leq \frac{x+y}{2}$ 将根号消去，再代入已知条件。
