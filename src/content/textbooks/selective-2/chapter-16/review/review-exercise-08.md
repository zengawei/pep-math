---
type: exercise
textbook: selective-2
chapter: 16
section: 0
number: 8
difficulty: basic
category: review
group: A
is_exam_question: false
knowledge_points:
  - combination
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P78 复习参考题"
---

**题目：** 计算 $C_{10}^3 + C_{10}^7$ 的值。

---

**解答：**

**第1步：** 利用组合数的对称性质
> 📌 运用知识点：组合数性质

根据组合数的性质 $C_n^m = C_n^{n-m}$，可知：

$$C_{10}^7 = C_{10}^{10-7} = C_{10}^3$$

**第2步：** 计算 $C_{10}^3$ 并求和
> 📌 运用知识点：组合数公式

$$C_{10}^3 = \frac{10 \times 9 \times 8}{3 \times 2 \times 1} = \frac{720}{6} = 120$$

因此：

$$C_{10}^3 + C_{10}^7 = 120 + 120 = 240$$

**⚠️ 易错提醒：** 组合数的对称性质 $C_n^m = C_n^{n-m}$ 可以简化计算。如果不知道这个性质而硬算 $C_{10}^7$，计算量会大很多。另外，不要将 $C_{10}^3 + C_{10}^7$ 误用为 $C_{10}^{10}$，加法没有类似的合并公式。

**💡 解题思路总结：** 组合数有两个重要性质：① $C_n^m = C_n^{n-m}$（对称性）；② $C_n^m + C_n^{m-1} = C_{n+1}^m$（帕斯卡恒等式，即杨辉三角的递推关系）。灵活运用性质可以大大简化计算。
