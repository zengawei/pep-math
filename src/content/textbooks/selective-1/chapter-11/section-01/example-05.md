---
type: example
textbook: selective-1
chapter: 11
section: 1
number: 5
knowledge_points:
  - space-vector-operations
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P7 例5"
---

**例题：** 在正方体 $ABCD\text{-}A'B'C'D'$ 中，$E$ 是 $BB'$ 的中点，$F$ 是 $D'C'$ 的中点。设 $\overrightarrow{AB} = \vec{a}$，$\overrightarrow{AD} = \vec{b}$，$\overrightarrow{AA'} = \vec{c}$。用 $\vec{a}, \vec{b}, \vec{c}$ 表示 $\overrightarrow{EF}$。

---

**解答：**

**第1步：** 确定 $E$ 的位置向量
> 📌 运用知识点：空间向量的运算

$E$ 是 $BB'$ 的中点，所以：

$$\overrightarrow{AE} = \overrightarrow{AB} + \overrightarrow{BE} = \vec{a} + \frac{1}{2}\overrightarrow{BB'} = \vec{a} + \frac{1}{2}\vec{c}$$

**第2步：** 确定 $F$ 的位置向量
> 📌 运用知识点：空间向量的运算

$F$ 是 $D'C'$ 的中点。先求 $\overrightarrow{AF}$：

$$\overrightarrow{AF} = \overrightarrow{AD} + \overrightarrow{DD'} + \overrightarrow{D'F}$$

其中 $\overrightarrow{D'F} = \frac{1}{2}\overrightarrow{D'C'} = \frac{1}{2}\overrightarrow{DC} = \frac{1}{2}\overrightarrow{AB} = \frac{1}{2}\vec{a}$。

$$\overrightarrow{AF} = \vec{b} + \vec{c} + \frac{1}{2}\vec{a}$$

**第3步：** 求 $\overrightarrow{EF}$
> 📌 运用知识点：空间向量的运算

$$\overrightarrow{EF} = \overrightarrow{AF} - \overrightarrow{AE} = \left(\frac{1}{2}\vec{a} + \vec{b} + \vec{c}\right) - \left(\vec{a} + \frac{1}{2}\vec{c}\right) = -\frac{1}{2}\vec{a} + \vec{b} + \frac{1}{2}\vec{c}$$

**💡 解题思路总结：** 求两点间向量时，先分别求出两点相对于同一原点的位置向量，再做差。对于中点，位置向量等于两端点位置向量的平均值。关键是准确找到每个点的位置向量。
