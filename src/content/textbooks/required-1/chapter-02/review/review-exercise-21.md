---
type: exercise
textbook: required-1
chapter: 2
section: 0
number: 21
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - inequality-properties
  - basic-inequality
source: "人教A版2019"
references: "必修第一册 P54 复习题 第21题"
---

**题目：** 已知 $a, b$ 为正数且 $a \neq b$，比较 $\frac{a+b}{2}$，$\sqrt{ab}$，$\frac{2ab}{a+b}$ 的大小。

---

**解答：**

**第1步：** 比较 $\frac{a+b}{2}$ 与 $\sqrt{ab}$
> 📌 运用知识点：基本不等式

由基本不等式，$a \neq b$ 时：

$$\frac{a+b}{2} > \sqrt{ab}$$

**第2步：** 比较 $\sqrt{ab}$ 与 $\frac{2ab}{a+b}$
> 📌 运用知识点：基本不等式

$$\sqrt{ab} - \frac{2ab}{a+b} = \frac{\sqrt{ab}(a+b) - 2ab}{a+b} = \frac{\sqrt{ab}(a + b - 2\sqrt{ab})}{a+b} = \frac{\sqrt{ab}(\sqrt{a} - \sqrt{b})^2}{a+b}$$

因为 $a \neq b$，$(\sqrt{a} - \sqrt{b})^2 > 0$，且 $\sqrt{ab} > 0$，$a + b > 0$。

所以 $\sqrt{ab} - \frac{2ab}{a+b} > 0$，即 $\sqrt{ab} > \frac{2ab}{a+b}$。

**第3步：** 综合
> 📌 运用知识点：基本不等式

$$\frac{a+b}{2} > \sqrt{ab} > \frac{2ab}{a+b}$$

即：算术平均数 $>$ 几何平均数 $>$ 调和平均数。

**⚠️ 易错提醒：** $\frac{2ab}{a+b}$ 是 $a, b$ 的调和平均数。三个平均数之间的大小关系是固定的：算术 $\geq$ 几何 $\geq$ 调和，等号在 $a = b$ 时成立。

**💡 解题思路总结：** 比较不同平均数的大小，用作差法配合因式分解。本题展示了 AM-GM-HM 不等式链。
