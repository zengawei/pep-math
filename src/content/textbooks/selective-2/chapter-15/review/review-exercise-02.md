---
type: exercise
textbook: selective-2
chapter: 15
section: 0
number: 2
difficulty: basic
category: review
group: A
is_exam_question: false
knowledge_points:
  - derivative-concept
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P50 复习参考题"
---

**题目：** 用导数的定义求函数 $f(x) = \dfrac{1}{x}$ 在 $x = 2$ 处的导数。

---

**解答：**

**第1步：** 计算函数在 $x=2$ 处的增量 $\Delta y$
> 📌 运用知识点：导数的概念

$$f(2) = \frac{1}{2}$$

$$f(2 + \Delta x) = \frac{1}{2 + \Delta x}$$

$$\Delta y = f(2 + \Delta x) - f(2) = \frac{1}{2 + \Delta x} - \frac{1}{2}$$

通分化简：
$$\Delta y = \frac{2 - (2 + \Delta x)}{2(2 + \Delta x)} = \frac{-\Delta x}{2(2 + \Delta x)}$$

**第2步：** 计算 $\dfrac{\Delta y}{\Delta x}$ 并取极限
> 📌 运用知识点：导数的概念

$$\frac{\Delta y}{\Delta x} = \frac{-\Delta x}{2(2 + \Delta x) \cdot \Delta x} = \frac{-1}{2(2 + \Delta x)}$$

当 $\Delta x \to 0$ 时：

$$f'(2) = \lim_{\Delta x \to 0} \frac{-1}{2(2 + \Delta x)} = \frac{-1}{2 \times 2} = -\frac{1}{4}$$

所以 $f'(2) = -\dfrac{1}{4}$。

**⚠️ 易错提醒：** 分式函数求增量时，通分化简是关键步骤。注意通分后分子中 $\Delta x$ 必须能被约掉，否则说明化简有误。另外，分母中 $2+\Delta x$ 不能写成 $2$，必须在取极限时才代入 $\Delta x = 0$。

**💡 解题思路总结：** 对于分式函数，用定义求导数的核心在于通分化简，使 $\Delta y$ 的分子含有 $\Delta x$ 因子，从而在求比值时约去分母中的 $\Delta x$。这与多项式函数的处理方式不同，需要特别注意分式运算的准确性。
