---
type: exercise
textbook: selective-2
chapter: 16
section: 3
number: 5
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - binomial-theorem
  - binomial-properties
source: "人教A版2019"
references: "选择性必修第二册 P72 练习A 第5题"
---

**题目：** 求 $\left(\sqrt{x} + \dfrac{1}{2\sqrt{x}}\right)^8$ 展开式中的常数项。

---

**解答：**

**第1步：** 写出通项
> 📌 运用知识点：二项式定理

$$T_{r+1} = \binom{8}{r} \left(\sqrt{x}\right)^{8-r} \left(\frac{1}{2\sqrt{x}}\right)^r = \binom{8}{r} \cdot x^{\frac{8-r}{2}} \cdot \frac{1}{2^r} \cdot x^{-\frac{r}{2}} = \binom{8}{r} \cdot \frac{1}{2^r} \cdot x^{\frac{8-2r}{2}}$$

化简指数：

$$T_{r+1} = \binom{8}{r} \cdot \frac{1}{2^r} \cdot x^{4-r}$$

**第2步：** 求常数项
> 📌 运用知识点：二项式定理

常数项要求 $x$ 的指数为 $0$：

$$4 - r = 0 \implies r = 4$$

**第3步：** 代入计算
> 📌 运用知识点：二项式定理

$$T_5 = \binom{8}{4} \cdot \frac{1}{2^4} = 70 \times \frac{1}{16} = \frac{70}{16} = \frac{35}{8}$$

所以常数项为 $\dfrac{35}{8}$。

**⚠️ 易错提醒：** 含根式的二项式展开，先将 $\sqrt{x}$ 写成 $x^{1/2}$，再合并指数。注意 $\dfrac{1}{2^r}$ 的系数不要遗漏。

**💡 解题思路总结：** 含根式的二项式问题，关键是正确写出通项并化简 $x$ 的指数。令指数为 $0$ 解出 $r$，再代入计算系数。
