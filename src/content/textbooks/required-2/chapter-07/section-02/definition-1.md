---
type: definition
textbook: required-2
chapter: 7
section: 2
name: 复数的四则运算
related_knowledge_points:
  - complex-number-operations
---

**定义（精确表述）：** 设 $z_1 = a + bi$，$z_2 = c + di$（$a, b, c, d \in \mathbb{R}$），则：

- **加法：** $z_1 + z_2 = (a + c) + (b + d)i$
- **减法：** $z_1 - z_2 = (a - c) + (b - d)i$
- **乘法：** $z_1 \cdot z_2 = (ac - bd) + (ad + bc)i$
- **除法（$z_2 \neq 0$）：** $\dfrac{z_1}{z_2} = \dfrac{z_1 \cdot \overline{z_2}}{|z_2|^2} = \dfrac{(ac + bd) + (bc - ad)i}{c^2 + d^2}$

其中 $\overline{z_2} = c - di$ 是 $z_2$ 的共轭复数。

**通俗解释：** 复数的加减法就是"实部与实部相加减，虚部与虚部相加减"。乘法和多项式乘法类似，展开后把 $i^2$ 替换为 $-1$。除法的核心技巧是"分母实数化"——分子分母同乘分母的共轭复数。
