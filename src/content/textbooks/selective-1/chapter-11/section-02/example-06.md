---
type: example
textbook: selective-1
chapter: 11
section: 2
number: 6
knowledge_points:
  - space-vector-coordinate
  - space-vector-fundamental-theorem
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P18 例6"
---

**例题：** 已知空间四边形 $ABCD$ 中，$A(1, 0, 0)$，$B(0, 1, 0)$，$C(0, 0, 1)$，$D(2, 2, 2)$。设 $M$ 是 $AB$ 的中点，$N$ 是 $CD$ 上满足 $CN : ND = 1 : 2$ 的点。求 $\overrightarrow{MN}$ 的坐标和模。

---

**解答：**

**第1步：** 求 $M$ 的坐标
> 📌 运用知识点：空间向量的坐标运算

$M$ 是 $AB$ 的中点：

$$M = \frac{A + B}{2} = \frac{(1,0,0) + (0,1,0)}{2} = \left(\frac{1}{2}, \frac{1}{2}, 0\right)$$

**第2步：** 求 $N$ 的坐标
> 📌 运用知识点：空间向量基本定理

$N$ 在 $CD$ 上且 $CN : ND = 1 : 2$，即 $N$ 将 $CD$ 分为 $1:2$，所以：

$$N = C + \frac{1}{3}\overrightarrow{CD} = C + \frac{1}{3}(D - C)$$

$$= (0,0,1) + \frac{1}{3}(2-0, 2-0, 2-1) = (0,0,1) + \frac{1}{3}(2, 2, 1)$$

$$= \left(\frac{2}{3}, \frac{2}{3}, 1 + \frac{1}{3}\right) = \left(\frac{2}{3}, \frac{2}{3}, \frac{4}{3}\right)$$

**第3步：** 求 $\overrightarrow{MN}$ 的坐标和模
> 📌 运用知识点：空间向量的坐标运算

$$\overrightarrow{MN} = N - M = \left(\frac{2}{3} - \frac{1}{2}, \frac{2}{3} - \frac{1}{2}, \frac{4}{3} - 0\right) = \left(\frac{1}{6}, \frac{1}{6}, \frac{4}{3}\right)$$

$$|\overrightarrow{MN}| = \sqrt{\left(\frac{1}{6}\right)^2 + \left(\frac{1}{6}\right)^2 + \left(\frac{4}{3}\right)^2} = \sqrt{\frac{1}{36} + \frac{1}{36} + \frac{16}{9}}$$

$$= \sqrt{\frac{1 + 1 + 64}{36}} = \sqrt{\frac{66}{36}} = \frac{\sqrt{66}}{6}$$

**💡 解题思路总结：** 求线段上分点的坐标，利用定比分点公式：$N = C + \frac{m}{m+n}\overrightarrow{CD}$（$CN:ND = m:n$）。中点公式是分点公式的特殊情况（$m = n$）。
