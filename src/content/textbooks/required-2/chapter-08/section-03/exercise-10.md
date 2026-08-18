---
type: exercise
textbook: required-2
chapter: 8
section: 3
number: 10
difficulty: hard
category: practice
is_exam_question: false
knowledge_points:
  - spatial-position-relation
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 在四棱锥 $P\text{-}ABCD$ 中，底面 $ABCD$ 是平行四边形，$E$ 是 $PD$ 的中点。

(1) 求证：$PB \parallel$ 平面 $ACE$。

(2) 在线段 $PB$ 上是否存在点 $F$，使得平面 $AEF \parallel$ 平面 $PCD$？若存在，确定 $F$ 的位置；若不存在，说明理由。

---

**解答：**

**第1步：** 证明 $PB \parallel$ 平面 $ACE$
> 📌 运用知识点：线面平行的判定定理

连接 $BD$，设 $BD$ 与 $AC$ 交于点 $O$。

因为 $ABCD$ 是平行四边形，所以 $O$ 是 $BD$ 的中点。

连接 $OE$。在 $\triangle PBD$ 中，$O$ 是 $BD$ 中点，$E$ 是 $PD$ 中点。

由中位线定理：$OE \parallel PB$。

$OE \subset$ 平面 $ACE$，$PB \not\subset$ 平面 $ACE$，

所以 $PB \parallel$ 平面 $ACE$。

**第2步：** 探索点 $F$ 的存在性
> 📌 运用知识点：面面平行的判定定理

取 $PB$ 的中点 $F$，连接 $EF$、$AF$。

在 $\triangle PBD$ 中，$E$ 是 $PD$ 中点，$F$ 是 $PB$ 中点，所以 $EF \parallel BD$。

因为 $ABCD$ 是平行四边形，$BD \parallel AC$... 不，需要 $EF \parallel$ 平面 $PCD$ 内的某条线。

$EF \parallel BD$，而 $BD$ 不在平面 $PCD$ 内。

换一种思路：在 $\triangle PAB$ 中，$F$ 是 $PB$ 中点。取 $PA$ 中点 $G$，则 $GF \parallel AB$。

需要 $AF \parallel$ 平面 $PCD$。取 $PC$ 中点 $M$，连接 $EM$，$EM \parallel DC$，$EM = \frac{1}{2}DC$。

当 $F$ 是 $PB$ 中点时，$AF$ 与 $EM$ 的关系... 

实际上，取 $F$ 为 $PB$ 中点。在 $\triangle PBC$ 中，$F$ 是 $PB$ 中点，取 $PC$ 中点 $M$，则 $FM \parallel BC$。

又 $AD \parallel BC$，所以 $FM \parallel AD$。

而 $E$ 是 $PD$ 中点，$M$ 是 $PC$ 中点，所以 $EM \parallel DC$。

要使平面 $AEF \parallel$ 平面 $PCD$，需要平面 $AEF$ 内两条相交线分别平行于平面 $PCD$ 内两条相交线。

$EF \parallel BD$... 这不在平面 $PCD$ 内。

当 $F$ 为 $PB$ 中点时，取 $PC$ 中点 $M$：$EM \parallel DC$（$\triangle PDC$ 中位线），$FM \parallel BC \parallel AD$。

但 $M$ 不在平面 $AEF$ 中。

实际上，当 $F$ 为 $PB$ 中点时，$EF \parallel BD$（$\triangle PBD$ 中位线），而 $BD$ 不平行于平面 $PCD$ 内的线。

所以不存在这样的点 $F$ 使平面 $AEF \parallel$ 平面 $PCD$。

**理由：** 若平面 $AEF \parallel$ 平面 $PCD$，则 $AE \parallel$ 平面 $PCD$。但 $E$ 在 $PD$ 上，$A$ 不在平面 $PCD$ 内，$AE$ 与平面 $PCD$ 交于 $E$，所以 $AE$ 不平行于平面 $PCD$。

因此，不存在满足条件的点 $F$。

**💡 易错提醒：** 面面平行要求一个平面内的两条相交线分别平行于另一个平面。分析存在性问题时，先检查必要条件是否满足。

**💡 解题思路总结：** 存在性问题的策略：先假设存在，推导必要条件，看是否矛盾。本题中 $AE$ 与平面 $PCD$ 有公共点 $E$，所以 $AE$ 不可能平行于平面 $PCD$，从而两面不可能平行。
