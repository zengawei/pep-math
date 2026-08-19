---
type: exercise
textbook: selective-3
chapter: 17
section: 1
number: 9
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - total-probability
  - conditional-probability
source: "人教A版2019"
references: "人教A版选择性必修第三册 P15 练习B 第1题"
---

**题目：** 某学校有 A、B 两个食堂。已知周一中午，有 $60\%$ 的学生去 A 食堂就餐，$40\%$ 的学生去 B 食堂就餐。A 食堂的菜品满意率为 $0.85$，B 食堂的菜品满意率为 $0.75$。

(1) 求随机询问一名学生，该学生对菜品满意的概率。

(2) 若已知某学生对菜品满意，求他去 A 食堂就餐的概率。

---

**解答：**

**第1步：** 设事件并整理已知条件
> 📌 运用知识点：全概率公式

设事件 $S$ = "对菜品满意"，$A$ = "去 A 食堂"，$B$ = "去 B 食堂"。

$$P(A) = 0.6, \quad P(B) = 0.4$$

$$P(S|A) = 0.85, \quad P(S|B) = 0.75$$

**第2步：** 用全概率公式求 $P(S)$
> 📌 运用知识点：全概率公式

$A$ 与 $B$ 构成样本空间的划分，由全概率公式：

$$P(S) = P(A) \cdot P(S|A) + P(B) \cdot P(S|B)$$

$$= 0.6 \times 0.85 + 0.4 \times 0.75 = 0.51 + 0.30 = 0.81$$

**第3步：** 用贝叶斯公式求 $P(A|S)$
> 📌 运用知识点：贝叶斯公式

$$P(A|S) = \frac{P(A) \cdot P(S|A)}{P(S)} = \frac{0.6 \times 0.85}{0.81} = \frac{0.51}{0.81} = \frac{51}{81} = \frac{17}{27} \approx 0.630$$

**⚠️ 易错提醒：** 贝叶斯公式的分子是 $P(A) \cdot P(S|A)$（即"去A且满意"的概率），不是 $P(S|A)$ 本身。分母是全概率 $P(S)$。

**💡 解题思路总结：** 本题是"先分来源求总概率，再由结果反推来源"的标准两步流程。第一步全概率公式求总满意率，第二步贝叶斯公式反推来源概率。
