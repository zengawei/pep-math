---
type: example
textbook: selective-1
chapter: 11
section: 1
number: 4
knowledge_points:
  - space-vector-operations
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P6 例4"
---

**例题：** 已知空间中 $\vec{a}, \vec{b}$ 是两个单位向量，且 $\vec{a} \cdot \vec{b} = \frac{1}{2}$。求 $|\vec{a} + \vec{b}|$ 与 $|\vec{a} - \vec{b}|$。

---

**解答：**

**第1步：** 分析已知条件
> 📌 运用知识点：空间向量的运算

$\vec{a}, \vec{b}$ 是单位向量，所以 $|\vec{a}| = 1$，$|\vec{b}| = 1$。

又 $\vec{a} \cdot \vec{b} = \frac{1}{2}$，可得 $\cos\theta = \frac{1}{2}$，即 $\theta = 60°$。

**第2步：** 求 $|\vec{a} + \vec{b}|$
> 📌 运用知识点：空间向量的运算

$$|\vec{a} + \vec{b}|^2 = |\vec{a}|^2 + 2\vec{a} \cdot \vec{b} + |\vec{b}|^2 = 1 + 2 \times \frac{1}{2} + 1 = 3$$

所以 $|\vec{a} + \vec{b}| = \sqrt{3}$。

**第3步：** 求 $|\vec{a} - \vec{b}|$
> 📌 运用知识点：空间向量的运算

$$|\vec{a} - \vec{b}|^2 = |\vec{a}|^2 - 2\vec{a} \cdot \vec{b} + |\vec{b}|^2 = 1 - 2 \times \frac{1}{2} + 1 = 1$$

所以 $|\vec{a} - \vec{b}| = 1$。

**💡 解题思路总结：** 求向量和（差）的模，核心方法是先平方展开：$|\vec{a} \pm \vec{b}|^2 = |\vec{a}|^2 \pm 2\vec{a} \cdot \vec{b} + |\vec{b}|^2$。已知单位向量时 $|\vec{a}|^2 = |\vec{b}|^2 = 1$，代入即可。
