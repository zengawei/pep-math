---
type: exercise
textbook: selective-3
chapter: 17
section: 3
number: 4
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - binomial-distribution
source: "人教A版2019"
references: "人教A版选择性必修第三册 P32 练习A 第1题"
---

**题目：** 某篮球运动员每次罚球的命中率为 $0.8$，各次罚球相互独立。该运动员共罚球 $4$ 次，设命中次数为 $X$。

(1) 判断 $X$ 服从什么分布，并写出参数。

(2) 求 $P(X = 3)$。

---

**解答：**

**第1步：** 判断分布类型
> 📌 运用知识点：二项分布的判定

每次罚球只有"命中"与"未命中"两种结果，各次罚球相互独立，每次命中率均为 $p = 0.8$，共罚球 $n = 4$ 次。

因此 $X \sim B(4, 0.8)$。

**第2步：** 求 $P(X = 3)$
> 📌 运用知识点：二项分布的概率计算

$$P(X = 3) = \binom{4}{3}(0.8)^3(0.2)^1 = 4 \times 0.512 \times 0.2 = 0.4096$$

**⚠️ 易错提醒：** 二项分布公式 $P(X=k) = \binom{n}{k}p^k(1-p)^{n-k}$ 中，$(1-p)$ 的指数是 $n-k$，不是 $k$。注意不要搞反。

**💡 解题思路总结：** "独立重复试验 + 每次概率相同"→ 二项分布 $B(n, p)$。代入公式时注意 $n, k, p$ 的对应关系。
