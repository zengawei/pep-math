---
type: exercise
textbook: selective-2
chapter: 14
section: 0
number: 23
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - sequence-sum-methods
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P18 复习参考题"
---

**题目：** 已知数列 $\{a_n\}$ 的通项公式为 $a_n = (2n - 1) \cdot 3^n$，求数列 $\{a_n\}$ 的前 $n$ 项和 $S_n$。

---

**解答：**

**第1步：** 写出 $S_n$ 和 $3S_n$
> 📌 运用知识点：错位相减法

$$S_n = 1 \cdot 3^1 + 3 \cdot 3^2 + 5 \cdot 3^3 + \cdots + (2n-1) \cdot 3^n \quad \cdots (1)$$

两边同乘以公比 $3$：

$$3S_n = 1 \cdot 3^2 + 3 \cdot 3^3 + 5 \cdot 3^4 + \cdots + (2n-1) \cdot 3^{n+1} \quad \cdots (2)$$

**第2步：** 两式相减
> 📌 运用知识点：错位相减法

$(1) - (2)$：

$$S_n - 3S_n = 1 \cdot 3^1 + (3-1) \cdot 3^2 + (5-3) \cdot 3^3 + \cdots + [(2n-1)-(2n-3)] \cdot 3^n - (2n-1) \cdot 3^{n+1}$$

$$-2S_n = 3 + 2 \cdot 3^2 + 2 \cdot 3^3 + \cdots + 2 \cdot 3^n - (2n-1) \cdot 3^{n+1}$$

$$-2S_n = 3 + 2(3^2 + 3^3 + \cdots + 3^n) - (2n-1) \cdot 3^{n+1}$$

**第3步：** 计算等比部分并化简
> 📌 运用知识点：等比数列前n项和

$$3^2 + 3^3 + \cdots + 3^n = \frac{9(1 - 3^{n-1})}{1 - 3} = \frac{9(3^{n-1} - 1)}{2} = \frac{3^{n+1} - 9}{2}$$

代入：

$$-2S_n = 3 + 2 \cdot \frac{3^{n+1} - 9}{2} - (2n-1) \cdot 3^{n+1}$$

$$-2S_n = 3 + 3^{n+1} - 9 - (2n-1) \cdot 3^{n+1}$$

$$-2S_n = -6 + 3^{n+1}[1 - (2n-1)] = -6 + 3^{n+1}(2 - 2n) = -6 - 2(n-1) \cdot 3^{n+1}$$

$$S_n = 3 + (n-1) \cdot 3^{n+1} = (n-1) \cdot 3^{n+1} + 3$$

**验证：** $n = 1$ 时，$S_1 = 0 \cdot 9 + 3 = 3 = 1 \cdot 3$ ✓；$n = 2$ 时，$S_2 = 1 \cdot 27 + 3 = 30 = 3 + 3 \cdot 9 = 30$ ✓。

**⚠️ 易错提醒：** 错位相减时，第一项 $1 \cdot 3^1 = 3$ 单独提出，中间部分是从 $3^2$ 到 $3^n$ 共 $n-1$ 项的等比数列求和，项数不要数错。最后除以 $-2$ 时注意符号变化。

**💡 解题思路总结：** 通项为 $(2n-1) \cdot 3^n$ 是典型的"等差 × 等比"结构。错位相减后，第一项单独处理，中间部分形成新的等比数列。关键是仔细处理系数和项数，最后用 $n=1, 2$ 验证结果。
