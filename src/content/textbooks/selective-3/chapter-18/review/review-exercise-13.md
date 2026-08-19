---
type: exercise
textbook: selective-3
chapter: 18
section: 0
number: 13
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - regression-analysis
  - correlation-analysis
source: "人教A版2019"
references: "选择性必修第三册 P63 复习参考题 第13题"
---

**题目：** 某研究收集了某种昆虫的产卵数 $y$（个）与温度 $x$（°C）的数据。经分析发现 $y$ 与 $x$ 之间不呈线性关系，但 $y$ 与 $e^x$ 有较好的线性关系。令 $z = \ln y$，得到 $z$ 关于 $x$ 的回归方程为 $\hat{z} = 0.2x + 1$。

（1）求 $y$ 关于 $x$ 的回归方程；

（2）当温度为 $15$°C 时，估计产卵数。

---

**解答：**

**第1步：** 转化为 $y$ 关于 $x$ 的方程
> 📌 运用知识点：非线性回归

已知 $\hat{z} = 0.2x + 1$，其中 $z = \ln y$。

$$\ln \hat{y} = 0.2x + 1$$

$$\hat{y} = e^{0.2x + 1}$$

**第2步：** 预测产卵数
> 📌 运用知识点：回归方程的应用

当 $x = 15$ 时：

$$\hat{y} = e^{0.2 \times 15 + 1} = e^{3 + 1} = e^4 \approx 54.6$$

估计产卵数约为 $55$ 个。

**⚠️ 易错提醒：** 非线性回归的关键是"变量替换"：通过 $z = \ln y$ 将非线性关系转化为线性关系，求出 $z$ 关于 $x$ 的回归方程后，再反变换得到 $y$ 关于 $x$ 的方程。注意 $e^4 \approx 54.6$，不是 $e^4 = 4e$。

**💡 解题思路总结：** 非线性回归的处理方法：①通过变量替换将非线性关系线性化（如 $z = \ln y$、$z = \frac{1}{x}$ 等）；②对变换后的变量求线性回归方程；③反变换得到原始变量的回归方程。
