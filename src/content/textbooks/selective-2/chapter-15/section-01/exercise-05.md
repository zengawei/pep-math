---
type: exercise
textbook: selective-2
chapter: 15
section: 1
number: 5
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - derivative-operations
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P28 练习A 第5题"
---

**题目：** 求函数 $f(x) = x \cdot e^x$ 的导数。

---

**解答：**

**第1步：** 识别函数结构，选择求导法则
> 📌 运用知识点：导数运算法则——乘法法则

$f(x) = x \cdot e^x$ 是两个函数 $u(x) = x$ 和 $v(x) = e^x$ 的乘积，需要使用乘法法则：

$$(u \cdot v)' = u'v + uv'$$

**第2步：** 分别求各因子的导数并代入公式
> 📌 运用知识点：导数运算法则——乘法法则

$u'(x) = 1$，$v'(x) = e^x$

$$f'(x) = 1 \cdot e^x + x \cdot e^x = e^x + xe^x = (1 + x)e^x$$

**⚠️ 易错提醒：** 乘法法则 $(uv)' = u'v + uv'$ 不要与 $(uv)' = u'v'$ 混淆。注意 $e^x$ 的导数仍然是 $e^x$。

**💡 解题思路总结：** 当函数是两个基本函数的乘积时，使用乘法法则。先分别求出各因子的导数，再按公式组合。最后可以提取公因子化简结果。
