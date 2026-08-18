---
type: exercise
textbook: required-2
chapter: 10
section: 0
number: 18
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - event-independence
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 某射手每次射击命中概率为 $0.8$，各次独立。

(1) 射击 $4$ 次，求恰好命中 $3$ 次的概率；

(2) 射击 $4$ 次，求至少命中 $2$ 次的概率。

---

**解答：**

**第1步：** (1) 恰好命中 $3$ 次
> 📌 运用知识点：事件的相互独立性

$4$ 次中恰好 $3$ 次命中：$C_4^3 = 4$ 种情况

每种概率 $= 0.8^3 \times 0.2 = 0.512 \times 0.2 = 0.1024$

$P(\text{恰好3次}) = 4 \times 0.1024 = 0.4096$

**第2步：** (2) 至少命中 $2$ 次
> 📌 运用知识点：事件的相互独立性

对立事件："命中 $0$ 次" + "命中 $1$ 次"

$P(0\text{次}) = 0.2^4 = 0.0016$

$P(1\text{次}) = C_4^1 \times 0.8 \times 0.2^3 = 4 \times 0.8 \times 0.008 = 0.0256$

$P(\text{至少2次}) = 1 - 0.0016 - 0.0256 = 0.9728$

**💡 易错提醒：** "至少 $k$ 次"的对立事件是"少于 $k$ 次"，需计算 $0, 1, \cdots, k-1$ 次的概率之和。

**💡 解题思路总结：** 独立重复试验：$P(\text{恰好}k\text{次}) = C_n^k p^k (1-p)^{n-k}$。
