---
type: exercise
textbook: selective-2
chapter: 16
section: 0
number: 9
difficulty: basic
category: review
group: A
is_exam_question: false
knowledge_points:
  - binomial-theorem
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P80 复习参考题"
---

**题目：** 求 $\left(x + \dfrac{1}{x}\right)^6$ 的展开式中的第4项。

---

**解答：**

**第1步：** 写出二项式展开的通项公式
> 📌 运用知识点：二项式定理

根据二项式定理，$(a+b)^n$ 的通项为：

$$T_{r+1} = C_n^r \cdot a^{n-r} \cdot b^r$$

本题中 $a = x$，$b = \dfrac{1}{x}$，$n = 6$，所以通项为：

$$T_{r+1} = C_6^r \cdot x^{6-r} \cdot \left(\frac{1}{x}\right)^r = C_6^r \cdot x^{6-2r}$$

**第2步：** 求第4项（$r = 3$）
> 📌 运用知识点：二项式定理

第4项对应 $r+1 = 4$，即 $r = 3$：

$$T_4 = C_6^3 \cdot x^{6-2 \times 3} = C_6^3 \cdot x^0 = 20$$

所以第4项为 $T_4 = 20$（常数项）。

**⚠️ 易错提醒：** 第 $k$ 项对应的 $r = k-1$，不要将第4项误认为 $r=4$。另外，通项中 $x$ 的指数为 $6-2r$，当 $r=3$ 时指数恰好为 $0$，该项为常数项。

**💡 解题思路总结：** 二项式展开求指定项的步骤：①写出通项公式 $T_{r+1}$；②根据"第几项"确定 $r$ 的值；③代入通项公式计算。注意第 $k$ 项对应 $r = k-1$。
