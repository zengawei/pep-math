---
type: example
textbook: required-2
chapter: 6
section: 3
number: 4
knowledge_points:
  - vector-scalar-multiplication
source: "人教A版2019"
---

**例题：** 在三角形 $ABC$ 中，$D$ 是 $BC$ 的中点，$E$ 是 $AD$ 的中点。用 $\overrightarrow{AB}$ 和 $\overrightarrow{AC}$ 表示 $\overrightarrow{BE}$。

---

**解答：**

**第1步：** 求 $\overrightarrow{AD}$
> 📌 运用知识点：向量的加法——中线向量

$D$ 是 $BC$ 的中点：

$$\overrightarrow{AD} = \frac{1}{2}(\overrightarrow{AB} + \overrightarrow{AC})$$

**第2步：** 求 $\overrightarrow{AE}$
> 📌 运用知识点：向量的数乘——中点

$E$ 是 $AD$ 的中点：

$$\overrightarrow{AE} = \frac{1}{2}\overrightarrow{AD} = \frac{1}{4}(\overrightarrow{AB} + \overrightarrow{AC})$$

**第3步：** 求 $\overrightarrow{BE}$
> 📌 运用知识点：向量的减法

$$\overrightarrow{BE} = \overrightarrow{AE} - \overrightarrow{AB} = \frac{1}{4}(\overrightarrow{AB} + \overrightarrow{AC}) - \overrightarrow{AB} = \frac{1}{4}\overrightarrow{AB} + \frac{1}{4}\overrightarrow{AC} - \overrightarrow{AB} = -\frac{3}{4}\overrightarrow{AB} + \frac{1}{4}\overrightarrow{AC}$$

**💡 方法总结：** 多次利用中点条件，逐步推导目标向量。路径法：$\overrightarrow{BE} = \overrightarrow{AE} - \overrightarrow{AB}$。
