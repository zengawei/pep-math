---
type: exercise
textbook: selective-2
chapter: 16
section: 0
number: 18
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - binomial-theorem
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P82 复习参考题"
---

**题目：** 求 $\left(2\sqrt{x} - \dfrac{1}{\sqrt{x}}\right)^6$ 的展开式中的常数项。

---

**解答：**

**第1步：** 写出展开式的通项公式
> 📌 运用知识点：二项式定理

由二项式定理，展开式的通项为：

$$T_{r+1} = C_6^r \left(2\sqrt{x}\right)^{6-r} \left(-\frac{1}{\sqrt{x}}\right)^r$$

$$= C_6^r \cdot 2^{6-r} \cdot (-1)^r \cdot x^{\frac{6-r}{2}} \cdot x^{-\frac{r}{2}}$$

$$= C_6^r \cdot 2^{6-r} \cdot (-1)^r \cdot x^{\frac{6-2r}{2}}$$

$$= C_6^r \cdot 2^{6-r} \cdot (-1)^r \cdot x^{3-r}$$

其中 $r = 0, 1, 2, \cdots, 6$。

**第2步：** 令 $x$ 的指数为0，求 $r$ 的值
> 📌 运用知识点：二项式定理

常数项要求 $x$ 的指数为 $0$：

$$3 - r = 0 \implies r = 3$$

**第3步：** 代入 $r = 3$ 计算常数项
> 📌 运用知识点：二项式定理

$$T_4 = C_6^3 \cdot 2^{6-3} \cdot (-1)^3 = 20 \times 8 \times (-1) = -160$$

所以展开式中的常数项为 $T_4 = -160$。

**⚠️ 易错提醒：** ①通项中 $(-1)^r$ 的符号容易遗漏，当 $r = 3$ 时 $(-1)^3 = -1$，常数项为负数；②化简 $x$ 的指数时要仔细：$(\sqrt{x})^{6-r} = x^{\frac{6-r}{2}}$，$\left(\dfrac{1}{\sqrt{x}}\right)^r = x^{-\frac{r}{2}}$，两者相乘指数为 $\dfrac{6-2r}{2} = 3-r$；③$2^{6-r}$ 中当 $r=3$ 时为 $2^3 = 8$，不要算成 $2^6$。

**💡 解题思路总结：** 求二项式展开式中的特定项（常数项、某次幂的项等），关键是写出通项公式，整理出 $x$ 的指数表达式，令其等于目标值解出 $r$，再代回通项计算。注意系数的符号和幂的运算。

