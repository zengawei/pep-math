---
type: exercise
textbook: selective-3
chapter: 17
section: 0
number: 22
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - total-probability
  - conditional-probability
source: "人教A版2019"
references: "选择性必修第三册 P39 复习参考题 第22题"
---

**题目：** 某公司有甲、乙、丙三个车间生产同一种产品，产量分别占总产量的 $25\%$、$35\%$、$40\%$。三个车间的合格率分别为 $98\%$、$96\%$、$95\%$。

（1）从该公司产品中随机取一件，求合格的概率；

（2）若取出的产品不合格，求它来自丙车间的概率。

---

**解答：**

**第1步：** 求合格概率
> 📌 运用知识点：全概率公式

设事件 $A_1, A_2, A_3$ 分别表示产品来自甲、乙、丙车间，事件 $B$ 表示产品合格。

$$P(A_1) = 0.25, \quad P(A_2) = 0.35, \quad P(A_3) = 0.40$$

$$P(B|A_1) = 0.98, \quad P(B|A_2) = 0.96, \quad P(B|A_3) = 0.95$$

$$P(B) = \sum_{i=1}^{3} P(A_i)P(B|A_i) = 0.25 \times 0.98 + 0.35 \times 0.96 + 0.40 \times 0.95$$

$$= 0.245 + 0.336 + 0.380 = 0.961$$

**第2步：** 求不合格品来自丙车间的概率
> 📌 运用知识点：贝叶斯公式

设事件 $\overline{B}$ 表示产品不合格。

$$P(\overline{B}) = 1 - P(B) = 1 - 0.961 = 0.039$$

$$P(\overline{B}|A_3) = 1 - P(B|A_3) = 1 - 0.95 = 0.05$$

由贝叶斯公式：

$$P(A_3|\overline{B}) = \frac{P(A_3)P(\overline{B}|A_3)}{P(\overline{B})} = \frac{0.40 \times 0.05}{0.039} = \frac{0.02}{0.039} = \frac{20}{39} \approx 0.513$$

**⚠️ 易错提醒：** 第（2）问是在"不合格"的条件下求来源，注意用 $P(\overline{B}|A_3) = 1 - 0.95 = 0.05$，不是 $0.95$。贝叶斯公式的分母是 $P(\overline{B})$，不是 $P(B)$。

**💡 解题思路总结：** 多来源产品质量问题：全概率公式用于"正向"求合格率，贝叶斯公式用于"反向"推断来源。注意不合格率是合格率的补。
