---
type: example
textbook: required-2
chapter: 8
section: 4
number: 5
knowledge_points:
  - perpendicular-judgment
source: "人教A版2019"
---

**例题：** 在四棱锥 $P\text{-}ABCD$ 中，底面 $ABCD$ 是正方形，$PA \perp$ 底面 $ABCD$，$PA = AB = 2$。在线段 $PC$ 上是否存在点 $E$，使得 $BE \perp PC$？若存在，确定 $E$ 的位置。

---

**解答：**

**第1步：** 建立坐标系
> 📌 运用知识点：坐标法

以 $A$ 为原点，$AB$ 沿 $x$ 轴，$AD$ 沿 $y$ 轴，$AP$ 沿 $z$ 轴。

$A(0,0,0)$，$B(2,0,0)$，$C(2,2,0)$，$D(0,2,0)$，$P(0,0,2)$

**第2步：** 设 $E$ 在 $PC$ 上
> 📌 运用知识点：向量的参数表示

$\vec{PC} = (2, 2, -2)$

$E = P + t \cdot \vec{PC} = (2t, 2t, 2 - 2t)$，$t \in [0, 1]$

$\vec{BE} = E - B = (2t - 2, 2t, 2 - 2t)$

**第3步：** 由 $BE \perp PC$ 求 $t$
> 📌 运用知识点：向量垂直的条件

$\vec{BE} \cdot \vec{PC} = 0$

$(2t - 2)(2) + (2t)(2) + (2 - 2t)(-2) = 0$

$4t - 4 + 4t - 4 + 4t = 0$

$12t - 8 = 0$

$t = \frac{2}{3}$

**第4步：** 验证和结论
> 📌 运用知识点：存在性问题的验证

$t = \frac{2}{3} \in [0, 1]$，所以存在满足条件的点 $E$。

$E = \left(\frac{4}{3}, \frac{4}{3}, \frac{2}{3}\right)$

$E$ 在线段 $PC$ 上，且 $PE = \frac{2}{3}PC$，即 $E$ 将 $PC$ 分为 $2:1$ 的两段。

**💡 方法总结：** 存在性问题的坐标法解题策略：①建立坐标系；②用参数表示动点；③由垂直条件列方程求参数；④验证参数是否在允许范围内。
