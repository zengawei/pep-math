---
type: definition
textbook: selective-3
chapter: 17
section: 1
name: 条件概率
related_knowledge_points:
  - conditional-probability
  - probability-addition-multiplication
---

**定义（精确表述）：** 设 $A$, $B$ 为两个随机事件，且 $P(A) > 0$。在事件 $A$ 发生的条件下，事件 $B$ 发生的概率称为**条件概率**，记作 $P(B|A)$，定义为：

$$P(B|A) = \frac{P(AB)}{P(A)}$$

其中 $P(AB)$ 表示事件 $A$ 与事件 $B$ 同时发生的概率。

**条件概率的性质：**

1. **非负性：** $P(B|A) \geqslant 0$。
2. **规范性：** $P(\Omega|A) = 1$，其中 $\Omega$ 为样本空间。
3. **可列可加性：** 若 $B_1, B_2, \cdots$ 两两互斥，则 $P\!\left(\bigcup_{i=1}^{\infty} B_i \,\Big|\, A\right) = \sum_{i=1}^{\infty} P(B_i|A)$。

**乘法公式：** 由条件概率的定义可直接得到**乘法公式**：

$$P(AB) = P(A) \cdot P(B|A) \quad (P(A) > 0)$$

对称地，当 $P(B) > 0$ 时：

$$P(AB) = P(B) \cdot P(A|B)$$

乘法公式可以推广到多个事件的情形。例如，设 $P(ABC) > 0$，则：

$$P(ABC) = P(A) \cdot P(B|A) \cdot P(C|AB)$$

**通俗解释：** 条件概率就是"已知某事发生了，另一件事发生的可能性有多大"。它的本质是**缩小样本空间**——当我们知道事件 $A$ 已经发生后，样本空间就从原来的 $\Omega$ 缩小到了 $A$ 本身，此时 $B$ 发生的概率就是 $AB$（$A$ 与 $B$ 同时发生）占 $A$ 的比例。

例如：一个班有 $40$ 名男生和 $30$ 名女生，已知随机选到的人是男生，求他身高超过 $170$ cm 的概率。这里"选到男生"就是已知条件 $A$，样本空间从全班 $70$ 人缩小到了 $40$ 名男生，再在这 $40$ 人中算身高超过 $170$ cm 的比例。
