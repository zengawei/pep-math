---
type: example
textbook: required-2
chapter: 6
section: 4
number: 5
knowledge_points:
  - vector-dot-product
source: "人教A版2019"
---

**例题：** 在三角形 $ABC$ 中，$\overrightarrow{AB} = (2, 3)$，$\overrightarrow{AC} = (1, k)$。若三角形 $ABC$ 是直角三角形，求 $k$ 的值。

---

**解答：**

**第1步：** 分析直角三角形的三种情况
> 📌 运用知识点：向量垂直的条件

直角可能在 $A$、$B$ 或 $C$ 处。

$\overrightarrow{BC} = \overrightarrow{AC} - \overrightarrow{AB} = (1 - 2, k - 3) = (-1, k - 3)$

**第2步：** 分类讨论
> 📌 运用知识点：向量垂直——数量积为零

**情况一：** 直角在 $A$，$\overrightarrow{AB} \perp \overrightarrow{AC}$：

$\overrightarrow{AB} \cdot \overrightarrow{AC} = 2 \times 1 + 3 \times k = 2 + 3k = 0$，$k = -\frac{2}{3}$

**情况二：** 直角在 $B$，$\overrightarrow{BA} \perp \overrightarrow{BC}$：

$\overrightarrow{BA} \cdot \overrightarrow{BC} = (-2)(-1) + (-3)(k-3) = 2 - 3k + 9 = 11 - 3k = 0$，$k = \frac{11}{3}$

**情况三：** 直角在 $C$，$\overrightarrow{CA} \perp \overrightarrow{CB}$：

$\overrightarrow{CA} \cdot \overrightarrow{CB} = (-1)(1) + (-k)(3-k) = -1 - 3k + k^2 = k^2 - 3k - 1 = 0$

$k = \frac{3 \pm \sqrt{13}}{2}$

所以 $k = -\frac{2}{3}$ 或 $k = \frac{11}{3}$ 或 $k = \frac{3 \pm \sqrt{13}}{2}$。

**💡 方法总结：** 直角三角形问题要分三种情况讨论（直角在不同顶点），每种情况利用两向量垂直（数量积为零）列方程求解。
