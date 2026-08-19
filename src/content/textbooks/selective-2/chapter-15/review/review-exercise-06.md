---
type: exercise
textbook: selective-2
chapter: 15
section: 0
number: 6
difficulty: basic
category: review
group: A
is_exam_question: false
knowledge_points:
  - derivative-operations
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P52 复习参考题"
---

**题目：** 求下列函数的导数：

（1）$f(x) = x^2 \cdot e^x$；

（2）$f(x) = \dfrac{\ln x}{x}$。

---

**解答：**

**第1步：** 求第（1）题的导数（乘法法则）
> 📌 运用知识点：导数的运算法则——乘法法则

设 $u = x^2$，$v = e^x$，利用乘法法则 $(uv)' = u'v + uv'$：

$$f'(x) = (x^2)' \cdot e^x + x^2 \cdot (e^x)'$$

$$= 2x \cdot e^x + x^2 \cdot e^x$$

$$= e^x(2x + x^2)$$

$$= x(x + 2)e^x$$

**第2步：** 求第（2）题的导数（除法法则）
> 📌 运用知识点：导数的运算法则——除法法则

设 $u = \ln x$，$v = x$，利用除法法则 $\left(\dfrac{u}{v}\right)' = \dfrac{u'v - uv'}{v^2}$：

$$f'(x) = \frac{(\ln x)' \cdot x - \ln x \cdot (x)'}{x^2}$$

$$= \frac{\frac{1}{x} \cdot x - \ln x \cdot 1}{x^2}$$

$$= \frac{1 - \ln x}{x^2}$$

**⚠️ 易错提醒：** ①乘法法则 $(uv)' = u'v + uv'$，不是 $u'v'$；②除法法则分子是"$u'v - uv'$"（子减母），顺序不能颠倒；③第（2）题中 $\frac{1}{x} \cdot x = 1$，不要写成 $\frac{1}{x^2}$。

**💡 解题思路总结：** 遇到两个函数相乘或相除的形式，分别使用乘法法则和除法法则。乘法法则"前导后不导加前不导后导"；除法法则"子减母，母的平方做分母"。求导后注意提取公因式化简。
