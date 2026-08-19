---
type: exercise
textbook: selective-2
chapter: 15
section: 1
number: 7
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - derivative-operations
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P30 练习B 第1题"
---

**题目：** 求函数 $f(x) = \dfrac{x^2 + 1}{x - 1}$ 的导数。

---

**解答：**

**第1步：** 识别函数结构，选择求导法则
> 📌 运用知识点：导数运算法则——除法法则

$f(x)$ 是分式形式，设 $u = x^2 + 1$，$v = x - 1$，使用除法法则：

$$\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$$

**第2步：** 分别求分子分母的导数
> 📌 运用知识点：导数运算法则——除法法则

$u' = 2x$，$v' = 1$

**第3步：** 代入除法法则公式
> 📌 运用知识点：导数运算法则——除法法则

$$f'(x) = \frac{2x(x - 1) - (x^2 + 1) \cdot 1}{(x - 1)^2}$$

$$= \frac{2x^2 - 2x - x^2 - 1}{(x - 1)^2}$$

$$= \frac{x^2 - 2x - 1}{(x - 1)^2}$$

**⚠️ 易错提醒：** 除法法则中分子是 $u'v - uv'$（减法），不是加法。展开 $2x(x-1)$ 时要仔细，不要漏掉 $-2x$ 这一项。注意定义域 $x \neq 1$。

**💡 解题思路总结：** 分式函数求导使用除法法则，关键是分子部分的展开和合并同类项。最后结果要检查是否可以进一步化简。
