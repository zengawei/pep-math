---
type: exercise
textbook: required-2
chapter: 10
section: 0
number: 12
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - random-event-probability
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 从 $4$ 名男生和 $2$ 名女生中任选 $3$ 人参加演讲比赛，求至少有 $1$ 名女生的概率。

---

**解答：**

**第1步：** 确定基本事件总数
> 📌 运用知识点：随机事件的概率

从 $6$ 人中选 $3$ 人：$C_6^3 = 20$ 种

**第2步：** 利用对立事件
> 📌 运用知识点：随机事件的概率

对立事件："都是男生" $= C_4^3 = 4$ 种

$P(\text{至少1名女生}) = 1 - \frac{4}{20} = 1 - \frac{1}{5} = \frac{4}{5}$

**💡 易错提醒：** "至少 $1$ 名女生"的对立事件是"没有女生"（即全是男生），不是"全是女生"。

**💡 解题思路总结：** 选人中"至少"问题用对立事件法：$P = 1 - \frac{C_{\text{男生}}^k}{C_{\text{总}}^k}$。
