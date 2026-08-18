---
type: exercise
textbook: required-2
chapter: 6
section: 2
number: 8
difficulty: medium
category: practice
is_exam_question: false
knowledge_points:
  - vector-addition-subtraction
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 在三角形 $ABC$ 中，$D$ 是 $BC$ 的中点。用 $\overrightarrow{AB}$ 和 $\overrightarrow{AC}$ 表示 $\overrightarrow{AD}$。

---

**解答：**

**第1步：** 利用中点条件
> 📌 运用知识点：向量的加法——中线向量

因为 $D$ 是 $BC$ 的中点，所以 $\overrightarrow{BD} = \frac{1}{2}\overrightarrow{BC}$。

**第2步：** 用 $\overrightarrow{AB}$ 和 $\overrightarrow{AC}$ 表示 $\overrightarrow{AD}$
> 📌 运用知识点：向量的加法与减法

$$\overrightarrow{AD} = \overrightarrow{AB} + \overrightarrow{BD} = \overrightarrow{AB} + \frac{1}{2}\overrightarrow{BC}$$

又因为 $\overrightarrow{BC} = \overrightarrow{AC} - \overrightarrow{AB}$，代入得：

$$\overrightarrow{AD} = \overrightarrow{AB} + \frac{1}{2}(\overrightarrow{AC} - \overrightarrow{AB}) = \overrightarrow{AB} + \frac{1}{2}\overrightarrow{AC} - \frac{1}{2}\overrightarrow{AB} = \frac{1}{2}\overrightarrow{AB} + \frac{1}{2}\overrightarrow{AC}$$

$$\overrightarrow{AD} = \frac{1}{2}(\overrightarrow{AB} + \overrightarrow{AC})$$

**💡 易错提醒：** 三角形中线向量公式 $\overrightarrow{AD} = \frac{1}{2}(\overrightarrow{AB} + \overrightarrow{AC})$ 是一个重要结论，要记住。注意 $\overrightarrow{BC} = \overrightarrow{AC} - \overrightarrow{AB}$（终点减起点），不要搞反。

**💡 解题思路总结：** 用路径法：$\overrightarrow{AD} = \overrightarrow{AB} + \overrightarrow{BD}$，再将 $\overrightarrow{BD}$ 用已知向量表示。中点对应系数 $\frac{1}{2}$。
