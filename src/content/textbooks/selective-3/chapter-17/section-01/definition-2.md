---
type: definition
textbook: selective-3
chapter: 17
section: 1
name: 全概率公式
related_knowledge_points:
  - total-probability
  - conditional-probability
---

**定义（精确表述）：** 设样本空间 $\Omega$ 的一个划分（完备事件组）为 $B_1, B_2, \cdots, B_n$，即 $B_1, B_2, \cdots, B_n$ 两两互斥，且 $B_1 \cup B_2 \cup \cdots \cup B_n = \Omega$，$P(B_i) > 0$（$i = 1, 2, \cdots, n$）。则对任意事件 $A$，有：

$$P(A) = \sum_{i=1}^{n} P(B_i) \cdot P(A|B_i) = P(B_1)P(A|B_1) + P(B_2)P(A|B_2) + \cdots + P(B_n)P(A|B_n)$$

这个公式称为**全概率公式**。

**贝叶斯公式（Bayes' formula）：** 在全概率公式的条件下，若 $P(A) > 0$，则在事件 $A$ 发生的条件下，事件 $B_j$ 发生的条件概率为：

$$P(B_j|A) = \frac{P(B_j) \cdot P(A|B_j)}{\displaystyle\sum_{i=1}^{n} P(B_i) \cdot P(A|B_i)} \quad (j = 1, 2, \cdots, n)$$

这个公式称为**贝叶斯公式**。

**通俗解释：**

- **全概率公式——"化整为零"，由因推果：** 把复杂事件 $A$ 按照不同的原因（划分 $B_1, B_2, \cdots, B_n$）分解成若干简单情形，分别算出每种情形下 $A$ 发生的概率，再加权求和。好比一家工厂有三条生产线，要算产品的总次品率，就分别算每条生产线的次品率，再按各条线的产量比例加权平均。

- **贝叶斯公式——"由果推因"：** 已知结果（事件 $A$ 发生了），反过来推断是某个原因（$B_j$）造成的可能性有多大。好比已知拿到了一件次品，用贝叶斯公式算它来自第 $j$ 条生产线的概率。
