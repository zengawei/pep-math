---
type: exercise
textbook: selective-2
chapter: 15
section: 0
number: 1
difficulty: basic
category: review
group: A
is_exam_question: false
knowledge_points:
  - derivative-concept
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P50 复习参考题"
---

**题目：** 用导数的定义求函数 $f(x) = 3x^2 - 2x + 1$ 在 $x = 1$ 处的导数。

---

**解答：**

**第1步：** 计算函数在 $x=1$ 处的增量 $\Delta y$
> 📌 运用知识点：导数的概念

设自变量在 $x=1$ 处的增量为 $\Delta x$，则函数的增量为：

$$\Delta y = f(1 + \Delta x) - f(1)$$

先计算 $f(1)$：
$$f(1) = 3 \times 1^2 - 2 \times 1 + 1 = 2$$

再计算 $f(1 + \Delta x)$：
$$f(1 + \Delta x) = 3(1 + \Delta x)^2 - 2(1 + \Delta x) + 1$$
$$= 3(1 + 2\Delta x + (\Delta x)^2) - 2 - 2\Delta x + 1$$
$$= 3 + 6\Delta x + 3(\Delta x)^2 - 2 - 2\Delta x + 1$$
$$= 2 + 4\Delta x + 3(\Delta x)^2$$

因此：
$$\Delta y = 2 + 4\Delta x + 3(\Delta x)^2 - 2 = 4\Delta x + 3(\Delta x)^2$$

**第2步：** 计算 $\dfrac{\Delta y}{\Delta x}$ 并取极限
> 📌 运用知识点：导数的概念

$$\frac{\Delta y}{\Delta x} = \frac{4\Delta x + 3(\Delta x)^2}{\Delta x} = 4 + 3\Delta x$$

当 $\Delta x \to 0$ 时：

$$f'(1) = \lim_{\Delta x \to 0} \frac{\Delta y}{\Delta x} = \lim_{\Delta x \to 0} (4 + 3\Delta x) = 4$$

所以 $f'(1) = 4$。

**⚠️ 易错提醒：** 展开 $(1+\Delta x)^2$ 时容易漏掉 $(\Delta x)^2$ 项。注意 $(1+\Delta x)^2 = 1 + 2\Delta x + (\Delta x)^2$，三项缺一不可。另外，取极限前必须先约去分母中的 $\Delta x$。

**💡 解题思路总结：** 用定义求导数的三步法：①求增量 $\Delta y$；②求比值 $\frac{\Delta y}{\Delta x}$ 并化简；③令 $\Delta x \to 0$ 取极限。这是导数最基本的方法，务必熟练掌握。
