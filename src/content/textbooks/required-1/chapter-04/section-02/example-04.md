---
type: example
textbook: required-1
chapter: 4
section: 2
number: 4
knowledge_points:
  - exponent-logarithm
source: "人教A版2019"
references: "必修第一册 P95 例3"
---

**例题：** 已知 $\log_{18} 9 = a$，$18^b = 5$，用 $a, b$ 表示 $\log_{36} 45$。

**解答：**

**第1步：** 利用换底公式
> 📌 运用知识点：换底公式

$\log_{36} 45 = \frac{\lg 45}{\lg 36}$

**第2步：** 用已知量表示
> 📌 运用知识点：对数运算

由 $\log_{18} 9 = a$ 得 $\frac{\lg 9}{\lg 18} = a$，即 $\frac{2\lg 3}{\lg 18} = a$

由 $18^b = 5$ 得 $\log_{18} 5 = b$，即 $\frac{\lg 5}{\lg 18} = b$

$\lg 45 = \lg(9 \times 5) = \lg 9 + \lg 5 = a\lg 18 + b\lg 18 = (a+b)\lg 18$

$\lg 36 = \lg(18 \times 2) = \lg 18 + \lg 2$

而 $\lg 2 = \lg\frac{18}{9} = \lg 18 - \lg 9 = \lg 18 - a\lg 18 = (1-a)\lg 18$

$\lg 36 = \lg 18 + (1-a)\lg 18 = (2-a)\lg 18$

**第3步：** 代入

$\log_{36} 45 = \frac{(a+b)\lg 18}{(2-a)\lg 18} = \frac{a+b}{2-a}$

**⚠️ 易错提醒：** 换底公式要统一底数，所有对数最终用同一底数表示才能约分。

**💡 解题思路总结：** 换底公式 + 用已知对数关系表示目标对数，关键是统一底数后约去公因子。
