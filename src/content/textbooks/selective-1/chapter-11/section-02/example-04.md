---
type: example
textbook: selective-1
chapter: 11
section: 2
number: 4
knowledge_points:
  - space-vector-coordinate
  - space-vector-fundamental-theorem
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P14 例4"
---

**例题：** 在正方体 $ABCD\text{-}A'B'C'D'$ 中，棱长为 $1$。以 $A$ 为原点，$\overrightarrow{AB}, \overrightarrow{AD}, \overrightarrow{AA'}$ 分别为 $x, y, z$ 轴正方向建立空间直角坐标系。求点 $A'$ 到直线 $BD'$ 的距离。

---

**解答：**

**第1步：** 确定各点坐标
> 📌 运用知识点：空间向量的坐标运算

$A(0,0,0)$，$B(1,0,0)$，$D(0,1,0)$，$A'(0,0,1)$，$D'(0,1,1)$。

**第2步：** 求相关向量
> 📌 运用知识点：空间向量的坐标运算

$$\overrightarrow{BD'} = D' - B = (-1, 1, 1)$$

$$\overrightarrow{BA'} = A' - B = (-1, 0, 1)$$

**第3步：** 利用投影求距离
> 📌 运用知识点：空间向量基本定理

点 $A'$ 到直线 $BD'$ 的距离 $d = |\overrightarrow{BA'}| \sin\alpha$，其中 $\alpha$ 是 $\overrightarrow{BA'}$ 与 $\overrightarrow{BD'}$ 的夹角。

$$\overrightarrow{BA'} \cdot \overrightarrow{BD'} = (-1)(-1) + 0 \times 1 + 1 \times 1 = 2$$

$$|\overrightarrow{BD'}| = \sqrt{1 + 1 + 1} = \sqrt{3}$$

$$|\overrightarrow{BA'}| = \sqrt{1 + 0 + 1} = \sqrt{2}$$

$\overrightarrow{BA'}$ 在 $\overrightarrow{BD'}$ 方向上的投影长度：

$$|\text{proj}| = \frac{|\overrightarrow{BA'} \cdot \overrightarrow{BD'}|}{|\overrightarrow{BD'}|} = \frac{2}{\sqrt{3}}$$

$$d = \sqrt{|\overrightarrow{BA'}|^2 - |\text{proj}|^2} = \sqrt{2 - \frac{4}{3}} = \sqrt{\frac{2}{3}} = \frac{\sqrt{6}}{3}$$

**💡 解题思路总结：** 点到直线的距离可以用向量方法求解：$d = \sqrt{|\overrightarrow{BA'}|^2 - \left(\frac{\overrightarrow{BA'} \cdot \overrightarrow{BD'}}{|\overrightarrow{BD'}|}\right)^2}$。核心思想是利用勾股定理，从总长度中减去投影部分。
