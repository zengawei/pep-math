---
type: exercise
textbook: selective-3
chapter: 17
section: 0
number: 19
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - discrete-random-variable
  - distribution-table
  - expected-value-variance
source: "人教A版2019"
references: "选择性必修第三册 P38 复习参考题 第19题"
---

**题目：** 一个盒子中有 $8$ 个球，其中 $5$ 个红球、$3$ 个白球。从中不放回地依次取出 $2$ 个球。设 $X$ 为取出的红球数。

（1）求 $X$ 的分布表和数学期望 $E(X)$；

（2）求方差 $D(X)$。

---

**解答：**

**第1步：** 确定 $X$ 的可能取值和分布
> 📌 运用知识点：超几何分布

$X$ 的可能取值为 $0, 1, 2$。$\binom{8}{2} = 28$。

$$P(X = 0) = \frac{\binom{5}{0}\binom{3}{2}}{\binom{8}{2}} = \frac{3}{28}$$

$$P(X = 1) = \frac{\binom{5}{1}\binom{3}{1}}{\binom{8}{2}} = \frac{15}{28}$$

$$P(X = 2) = \frac{\binom{5}{2}\binom{3}{0}}{\binom{8}{2}} = \frac{10}{28} = \frac{5}{14}$$

分布表：

| $X$ | $0$ | $1$ | $2$ |
|:---:|:---:|:---:|:---:|
| $P$ | $\frac{3}{28}$ | $\frac{15}{28}$ | $\frac{5}{14}$ |

**第2步：** 求 $E(X)$
> 📌 运用知识点：数学期望

$$E(X) = 0 \times \frac{3}{28} + 1 \times \frac{15}{28} + 2 \times \frac{5}{14} = \frac{15}{28} + \frac{10}{14} = \frac{15}{28} + \frac{20}{28} = \frac{35}{28} = \frac{5}{4}$$

**第3步：** 求 $D(X)$
> 📌 运用知识点：方差

$$E(X^2) = 0^2 \times \frac{3}{28} + 1^2 \times \frac{15}{28} + 2^2 \times \frac{5}{14} = \frac{15}{28} + \frac{20}{14} = \frac{15}{28} + \frac{40}{28} = \frac{55}{28}$$

$$D(X) = E(X^2) - [E(X)]^2 = \frac{55}{28} - \left(\frac{5}{4}\right)^2 = \frac{55}{28} - \frac{25}{16} = \frac{220 - 175}{112} = \frac{45}{112}$$

**⚠️ 易错提醒：** 计算 $D(X)$ 时通分要仔细：$\frac{55}{28} - \frac{25}{16}$，公分母为 $\text{lcm}(28, 16) = 112$。

**💡 解题思路总结：** 超几何分布的分布表通过组合计数逐项求出，期望和方差由定义计算。也可以直接用超几何分布公式 $E(X) = \frac{nM}{N} = \frac{2 \times 5}{8} = \frac{5}{4}$ 验证。
