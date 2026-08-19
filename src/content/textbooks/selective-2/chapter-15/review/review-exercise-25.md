---
type: exercise
textbook: selective-2
chapter: 15
section: 0
number: 25
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - derivative-applications
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P58 复习参考题"
---

**题目：** 利用导数证明：当 $x > 0$ 时，$\ln x \leqslant x - 1$。

---

**解答：**

**第1步：** 构造辅助函数
> 📌 运用知识点：导数与不等式证明

构造辅助函数 $g(x) = x - 1 - \ln x$（$x > 0$）。

要证 $\ln x \leqslant x - 1$，只需证 $g(x) \geqslant 0$ 对 $x > 0$ 恒成立。

**第2步：** 求导分析单调性
> 📌 运用知识点：导数与单调性

对 $g(x)$ 求导：

$$g'(x) = 1 - \frac{1}{x} = \frac{x - 1}{x}$$

- 当 $0 < x < 1$ 时，$g'(x) < 0$，$g(x)$ 单调递减；
- 当 $x > 1$ 时，$g'(x) > 0$，$g(x)$ 单调递增。

所以 $x = 1$ 是 $g(x)$ 的极小值点，也是最小值点。

**第3步：** 求最小值并得出结论
> 📌 运用知识点：导数与最值

$$g(1) = 1 - 1 - \ln 1 = 0$$

所以 $g(x) \geqslant g(1) = 0$，即 $x - 1 - \ln x \geqslant 0$，即 $\ln x \leqslant x - 1$。

等号在 $x = 1$ 时成立。证毕。

**⚠️ 易错提醒：** ①构造辅助函数时方向搞反，应该是"右边减左边"使得结果 $\geqslant 0$；②忘记注明定义域 $x > 0$；③只说明极小值而不说明它是最小值——需要结合单调性说明 $x=1$ 是唯一的极小值点，因此也是全局最小值点。

**💡 解题思路总结：** 利用导数证明不等式的标准方法：①移项构造辅助函数 $g(x)$ → ②求 $g'(x)$ 分析单调性 → ③找到最小值（或最大值）→ ④证明最小值 $\geqslant 0$（或最大值 $\leqslant 0$）。核心思想是将不等式问题转化为函数最值问题。
