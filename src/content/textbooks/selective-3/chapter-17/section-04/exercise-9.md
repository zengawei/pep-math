---
type: exercise
textbook: selective-3
chapter: 17
section: 4
number: 9
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - hypergeometric-distribution
  - distribution-table
source: "人教A版2019"
references: "人教A版选择性必修第三册 P26 练习B 第1题"
---

**题目：** 某批产品共 $20$ 件，其中一等品 $12$ 件、二等品 $5$ 件、三等品 $3$ 件。从中不放回地随机抽取 $3$ 件，设抽到的一等品件数为 $X$。

(1) 求 $X$ 的分布列。

(2) 求 $P(X \geqslant 2)$。

---

**解答：**

**第1步：** 确定分布类型
> 📌 运用知识点：超几何分布

将产品分为"一等品"和"非一等品"两类。$N = 20$，一等品 $M = 12$，$n = 3$。$X$ 服从超几何分布。

$\mathrm{C}_{20}^3 = \dfrac{20 \times 19 \times 18}{6} = 1140$。

**第2步：** 计算各概率
> 📌 运用知识点：超几何分布的概率公式

非一等品共 $20 - 12 = 8$ 件。

$$P(X = 0) = \frac{\mathrm{C}_{12}^0 \cdot \mathrm{C}_8^3}{1140} = \frac{1 \times 56}{1140} = \frac{56}{1140} = \frac{14}{285}$$

$$P(X = 1) = \frac{\mathrm{C}_{12}^1 \cdot \mathrm{C}_8^2}{1140} = \frac{12 \times 28}{1140} = \frac{336}{1140} = \frac{28}{95}$$

$$P(X = 2) = \frac{\mathrm{C}_{12}^2 \cdot \mathrm{C}_8^1}{1140} = \frac{66 \times 8}{1140} = \frac{528}{1140} = \frac{44}{95}$$

$$P(X = 3) = \frac{\mathrm{C}_{12}^3 \cdot \mathrm{C}_8^0}{1140} = \frac{220 \times 1}{1140} = \frac{220}{1140} = \frac{11}{57}$$

验证：$\dfrac{14}{285} + \dfrac{28}{95} + \dfrac{44}{95} + \dfrac{11}{57} = \dfrac{14 + 84 + 132 + 55}{285} = \dfrac{285}{285} = 1$ ✓

| $X$ | $0$ | $1$ | $2$ | $3$ |
|:---:|:---:|:---:|:---:|:---:|
| $P$ | $\dfrac{14}{285}$ | $\dfrac{28}{95}$ | $\dfrac{44}{95}$ | $\dfrac{11}{57}$ |

**第3步：** 求 $P(X \geqslant 2)$
> 📌 运用知识点：概率的加法法则

$$P(X \geqslant 2) = P(X = 2) + P(X = 3) = \frac{44}{95} + \frac{11}{57}$$

通分（公分母 $285$）：

$$= \frac{132}{285} + \frac{55}{285} = \frac{187}{285}$$

**⚠️ 易错提醒：** 本题有三类产品，但只关注"一等品"与"非一等品"两类。不要混淆二等品和三等品。

**💡 解题思路总结：** 多类别问题中，超几何分布只关心"目标类"与"非目标类"的划分。将非目标类合并计算即可。
