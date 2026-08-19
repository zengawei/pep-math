---
type: exercise
textbook: selective-2
chapter: 16
section: 0
number: 7
difficulty: basic
category: review
group: A
is_exam_question: false
knowledge_points:
  - combination
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P78 复习参考题"
---

**题目：** 从7名同学中选出3名参加志愿者活动，共有多少种不同的选法？

---

**解答：**

**第1步：** 判断是排列还是组合
> 📌 运用知识点：组合

从7名同学中选3名参加志愿者活动，选出的3人没有角色区分（不考虑顺序），因此是组合问题。

**第2步：** 运用组合数公式计算
> 📌 运用知识点：组合数公式

$$C_7^3 = \frac{A_7^3}{A_3^3} = \frac{7 \times 6 \times 5}{3 \times 2 \times 1} = \frac{210}{6} = 35$$

共有 $35$ 种不同的选法。

**⚠️ 易错提醒：** 判断排列与组合的关键是看选出的元素是否需要"排序"。本题选出的3人只是参加活动，不区分先后顺序，所以是组合。如果题目改为"选出3人分别担任班长、副班长、学习委员"，则需要排序，变为排列问题。

**💡 解题思路总结：** 组合问题的核心特征是"选出不排序"。组合数公式 $C_n^m = \dfrac{n!}{m!(n-m)!}$，也可以先算排列数 $A_n^m$ 再除以 $m!$ 来消除顺序的影响。
