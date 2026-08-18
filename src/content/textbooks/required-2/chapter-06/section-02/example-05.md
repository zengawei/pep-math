---
type: example
textbook: required-2
chapter: 6
section: 2
number: 5
knowledge_points:
  - vector-addition-subtraction
source: "人教A版2019"
---

**例题：** 在四边形 $ABCD$ 中，$\overrightarrow{AB} = \vec{a}$，$\overrightarrow{BC} = \vec{b}$，$\overrightarrow{CD} = \vec{c}$，$\overrightarrow{DA} = \vec{d}$。已知 $\vec{a} + \vec{b} + \vec{c} + \vec{d} = \vec{0}$，且 $\vec{a} \cdot \vec{b} = \vec{b} \cdot \vec{c} = \vec{c} \cdot \vec{d} = \vec{d} \cdot \vec{a}$。判断四边形 $ABCD$ 的形状。

---

**解答：**

**第1步：** 分析条件
> 📌 运用知识点：向量的加法

$\vec{a} + \vec{b} + \vec{c} + \vec{d} = \vec{0}$ 是四边形闭合条件（恒成立）。

由 $\vec{a} \cdot \vec{b} = \vec{b} \cdot \vec{c}$，得 $\vec{b} \cdot (\vec{a} - \vec{c}) = 0$，即 $\vec{b} \perp (\vec{a} - \vec{c})$。

由 $\vec{c} \cdot \vec{d} = \vec{d} \cdot \vec{a}$，得 $\vec{d} \cdot (\vec{c} - \vec{a}) = 0$，即 $\vec{d} \perp (\vec{c} - \vec{a})$。

**第2步：** 推导形状
> 📌 运用知识点：向量的性质

$\vec{b} \perp (\vec{a} - \vec{c})$ 且 $\vec{d} \perp (\vec{a} - \vec{c})$，说明 $\vec{b}$ 与 $\vec{d}$ 都与 $(\vec{a} - \vec{c})$ 垂直。

在平面内，与同一非零向量垂直的两个向量平行，所以 $\vec{b} \parallel \vec{d}$。

同理，由 $\vec{a} \cdot \vec{b} = \vec{d} \cdot \vec{a}$ 得 $\vec{a} \cdot (\vec{b} - \vec{d}) = 0$，由 $\vec{b} \cdot \vec{c} = \vec{c} \cdot \vec{d}$ 得 $\vec{c} \cdot (\vec{b} - \vec{d}) = 0$。

所以 $\vec{a} \parallel \vec{c}$。

因此 $ABCD$ 是平行四边形。又因为 $\vec{b} \parallel \vec{d}$ 且 $\vec{b} \perp (\vec{a} - \vec{c})$，结合平行四边形性质可推出邻边垂直。

四边形 $ABCD$ 是矩形。

**💡 方法总结：** 利用向量内积条件推导几何关系。$\vec{b} \cdot (\vec{a} - \vec{c}) = 0$ 说明垂直关系，在平面内两个向量与同一向量垂直则它们平行，由此推出平行四边形，再进一步推出矩形。
