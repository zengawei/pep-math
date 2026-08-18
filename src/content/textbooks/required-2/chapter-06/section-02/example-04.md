---
type: example
textbook: required-2
chapter: 6
section: 2
number: 4
knowledge_points:
  - vector-addition-subtraction
source: "人教A版2019"
---

**例题：** 已知 $\overrightarrow{OA} + \overrightarrow{OB} + \overrightarrow{OC} = \vec{0}$，且 $|\overrightarrow{OA}| = |\overrightarrow{OB}| = |\overrightarrow{OC}| = 1$。求 $|\overrightarrow{AB}|$。

---

**解答：**

**第1步：** 分析条件
> 📌 运用知识点：向量的加法

$\overrightarrow{OA} + \overrightarrow{OB} + \overrightarrow{OC} = \vec{0}$ 说明 $O$ 是三角形 $ABC$ 的重心。

又因为 $|\overrightarrow{OA}| = |\overrightarrow{OB}| = |\overrightarrow{OC}| = 1$，$O$ 到三个顶点距离相等，所以 $O$ 也是三角形 $ABC$ 的外心。

重心与外心重合，说明三角形 $ABC$ 是等边三角形。

**第2步：** 求 $|\overrightarrow{AB}|$
> 📌 运用知识点：向量的减法

$\overrightarrow{AB} = \overrightarrow{OB} - \overrightarrow{OA}$

由 $\overrightarrow{OA} + \overrightarrow{OB} + \overrightarrow{OC} = \vec{0}$，得 $\overrightarrow{OC} = -\overrightarrow{OA} - \overrightarrow{OB}$。

$|\overrightarrow{OC}|^2 = |\overrightarrow{OA} + \overrightarrow{OB}|^2 = |\overrightarrow{OA}|^2 + |\overrightarrow{OB}|^2 + 2\overrightarrow{OA} \cdot \overrightarrow{OB} = 1$

$1 + 1 + 2\overrightarrow{OA} \cdot \overrightarrow{OB} = 1$，$\overrightarrow{OA} \cdot \overrightarrow{OB} = -\frac{1}{2}$。

$|\overrightarrow{AB}|^2 = |\overrightarrow{OB} - \overrightarrow{OA}|^2 = 1 + 1 - 2(-\frac{1}{2}) = 3$

$|\overrightarrow{AB}| = \sqrt{3}$

**💡 方法总结：** 当 $\overrightarrow{OA} + \overrightarrow{OB} + \overrightarrow{OC} = \vec{0}$ 且三个向量模相等时，三点构成等边三角形。利用模的平方展开求内积是常用技巧。
