---
type: exercise
textbook: required-1
chapter: 4
section: 4
number: 4
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - exponential-function
source: "人教A版2019"
references: "必修第一册 P108 练习1"
---

**题目：** 某城市2020年底人口为100万，若人口以每年2%的增长率增长，求2030年底该市人口（精确到0.1万）。

---

**解答：**

**第1步：** 建立指数增长模型
> 📌 运用知识点：指数型函数应用

设 $n$ 年后人口为 $P(n) = 100 \times (1 + 0.02)^n = 100 \times 1.02^n$（万）

**第2步：** 代入计算
> 📌 运用知识点：指数型函数应用

2030年底对应 $n = 10$：

$P(10) = 100 \times 1.02^{10} \approx 100 \times 1.219 = 121.9$（万）

**⚠️ 易错提醒：** 增长率模型是 $P = P_0(1+r)^n$，不要误用 $P_0 \cdot r \cdot n$（这是单利，不是复利）。

**💡 解题思路总结：** 增长率问题用指数模型 $y = y_0(1+r)^n$，$r$ 为增长率，$n$ 为时间。
