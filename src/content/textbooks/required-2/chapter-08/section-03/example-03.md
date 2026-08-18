---
type: example
textbook: required-2
chapter: 8
section: 3
number: 3
knowledge_points:
  - spatial-position-relation
source: "人教A版2019"
---

**例题：** 在四棱锥 $P\text{-}ABCD$ 中，底面 $ABCD$ 是平行四边形，$M$ 是 $PC$ 的中点。求证：$PA \parallel$ 平面 $MBD$。

---

**解答：**

**第1步：** 连接辅助线
> 📌 运用知识点：线面平行的判定定理

连接 $AC$，设 $AC$ 与 $BD$ 交于点 $O$。

因为 $ABCD$ 是平行四边形，所以 $O$ 是 $AC$ 的中点。

连接 $MO$。

**第2步：** 证明 $PA \parallel MO$
> 📌 运用知识点：三角形中位线定理

在 $\triangle PAC$ 中，$M$ 是 $PC$ 的中点，$O$ 是 $AC$ 的中点。

由三角形中位线定理：$MO \parallel PA$，$MO = \frac{1}{2}PA$。

**第3步：** 应用线面平行判定定理
> 📌 运用知识点：线面平行的判定定理

$MO \subset$ 平面 $MBD$（$M$ 和 $O$ 都在平面 $MBD$ 内），$PA \not\subset$ 平面 $MBD$，$PA \parallel MO$，

所以 $PA \parallel$ 平面 $MBD$。

**💡 方法总结：** 在棱锥中证明线面平行的常用策略：①在底面中找对角线交点（中点）；②利用棱锥侧面上的三角形中位线得到平行关系。本题的核心是发现 $O$ 是 $AC$ 中点，从而在 $\triangle PAC$ 中构造中位线。
