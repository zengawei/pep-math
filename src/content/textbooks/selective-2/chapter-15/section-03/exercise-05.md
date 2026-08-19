---
type: exercise
textbook: selective-2
chapter: 15
section: 3
number: 5
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - derivative-max-min
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P48 练习A 第5题"
---

**题目：** 求函数 $f(x) = x + \dfrac{4}{x}$ 在 $[1, 4]$ 上的最大值和最小值。

---

**解答：**

**第1步：** 求导并找驻点
> 📌 运用知识点：导数与最值

$$f'(x) = 1 - \frac{4}{x^2} = \frac{x^2 - 4}{x^2} = \frac{(x+2)(x-2)}{x^2}$$

令 $f'(x) = 0$，得 $x = 2$（$x = -2$ 不在 $[1, 4]$ 内，舍去）。

**第2步：** 计算驻点和端点处的函数值
> 📌 运用知识点：导数与最值

$f(1) = 1 + \dfrac{4}{1} = 5$

$f(2) = 2 + \dfrac{4}{2} = 4$

$f(4) = 4 + \dfrac{4}{4} = 5$

**第3步：** 比较得出最值
> 📌 运用知识点：导数与最值

比较 $f(1) = 5$，$f(2) = 4$，$f(4) = 5$：

最大值为 $f(1) = f(4) = 5$，最小值为 $f(2) = 4$。

**⚠️ 易错提醒：** $f(x) = x + \frac{4}{x}$ 的导数是 $1 - \frac{4}{x^2}$，不要写成 $1 + \frac{4}{x^2}$。求导时 $\left(\frac{4}{x}\right)' = \left(4x^{-1}\right)' = -4x^{-2} = -\frac{4}{x^2}$。注意 $x = -2$ 不在定义区间 $[1, 4]$ 内。

**💡 解题思路总结：** 含分式的函数求最值，先求导通分化简，再找驻点。本题中 $f(x) = x + \frac{4}{x}$ 是"对勾函数"，在 $x = 2$（即 $x = \sqrt{4}$）处取最小值。
