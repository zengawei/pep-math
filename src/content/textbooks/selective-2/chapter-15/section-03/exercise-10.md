---
type: exercise
textbook: selective-2
chapter: 15
section: 3
number: 10
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - derivative-max-min
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P50 练习B 第4题"
---

**题目：** 求函数 $f(x) = x^2 e^{-x}$ 在 $[0, 3]$ 上的最大值和最小值。

---

**解答：**

**第1步：** 求导并找驻点
> 📌 运用知识点：导数与最值

使用乘法法则，设 $u = x^2$，$v = e^{-x}$：

$f'(x) = 2x \cdot e^{-x} + x^2 \cdot (-e^{-x}) = e^{-x}(2x - x^2) = xe^{-x}(2 - x)$

令 $f'(x) = 0$：因为 $e^{-x} > 0$，所以 $x(2 - x) = 0$，得 $x = 0$ 或 $x = 2$。

两个驻点都在 $[0, 3]$ 内。

**第2步：** 计算驻点和端点处的函数值
> 📌 运用知识点：导数与最值

$f(0) = 0^2 \cdot e^0 = 0$

$f(2) = 4 \cdot e^{-2} = \dfrac{4}{e^2}$

$f(3) = 9 \cdot e^{-3} = \dfrac{9}{e^3}$

**第3步：** 比较大小
> 📌 运用知识点：导数与最值

比较 $\dfrac{4}{e^2}$ 和 $\dfrac{9}{e^3}$：

$\dfrac{4}{e^2} = \dfrac{4e}{e^3}$，因为 $4e \approx 4 \times 2.718 = 10.872 > 9$，

所以 $\dfrac{4}{e^2} > \dfrac{9}{e^3}$。

**结论：**

最大值为 $f(2) = \dfrac{4}{e^2}$，最小值为 $f(0) = 0$。

**⚠️ 易错提醒：** 乘法法则求导时 $(e^{-x})' = -e^{-x}$，不要漏掉负号。比较 $\frac{4}{e^2}$ 和 $\frac{9}{e^3}$ 时，通分为 $\frac{4e}{e^3}$ 和 $\frac{9}{e^3}$，比较分子 $4e$ 和 $9$ 即可。

**💡 解题思路总结：** 含 $e^{-x}$ 的函数求最值，求导后提取 $e^{-x}$ 作为公因子简化分析。比较函数值时，利用 $e \approx 2.718$ 进行估算。
