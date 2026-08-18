---
type: example
textbook: required-2
chapter: 6
section: 4
number: 4
knowledge_points:
  - vector-dot-product
source: "人教A版2019"
---

**例题：** 已知 $\vec{a} \perp \vec{b}$，$|\vec{a}| = 2$，$|\vec{b}| = 3$，求 $(2\vec{a} + 3\vec{b}) \cdot (\vec{a} - \vec{b})$。

---

**解答：**

**第1步：** 利用垂直条件
> 📌 运用知识点：向量垂直

因为 $\vec{a} \perp \vec{b}$，所以 $\vec{a} \cdot \vec{b} = 0$。

**第2步：** 展开计算
> 📌 运用知识点：向量的数量积——分配律

$(2\vec{a} + 3\vec{b}) \cdot (\vec{a} - \vec{b}) = 2\vec{a} \cdot \vec{a} - 2\vec{a} \cdot \vec{b} + 3\vec{b} \cdot \vec{a} - 3\vec{b} \cdot \vec{b}$

$= 2|\vec{a}|^2 - 2(\vec{a} \cdot \vec{b}) + 3(\vec{a} \cdot \vec{b}) - 3|\vec{b}|^2$

$= 2|\vec{a}|^2 + \vec{a} \cdot \vec{b} - 3|\vec{b}|^2$

代入 $\vec{a} \cdot \vec{b} = 0$，$|\vec{a}| = 2$，$|\vec{b}| = 3$：

$= 2 \times 4 + 0 - 3 \times 9 = 8 - 27 = -19$

**💡 方法总结：** 先利用垂直条件得到 $\vec{a} \cdot \vec{b} = 0$，再展开数量积表达式，将已知的模和数量积代入计算。
