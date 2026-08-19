---
type: example
textbook: selective-2
chapter: 16
section: 2
number: 2
knowledge_points:
  - combination
source: "人教A版2019"
references: "选择性必修第二册 P62 例2"
---

**例题：** 计算 $\mathrm{C}_{100}^{98} + \mathrm{C}_{100}^{2}$ 的值。

---

**解答：**

**第1步：** 利用对称性化简
> 📌 运用知识点：组合数的对称性

由组合数的对称性 $\mathrm{C}_n^m = \mathrm{C}_n^{n-m}$：

$$\mathrm{C}_{100}^{98} = \mathrm{C}_{100}^{100-98} = \mathrm{C}_{100}^{2}$$

**第2步：** 计算结果
> 📌 运用知识点：组合数公式

$$\mathrm{C}_{100}^{98} + \mathrm{C}_{100}^{2} = 2\mathrm{C}_{100}^{2} = 2 \times \frac{100 \times 99}{2 \times 1} = 2 \times 4950 = 9900$$

**💡 解题思路总结：** 当组合数的上标很大时（如 $\mathrm{C}_{100}^{98}$），利用对称性 $\mathrm{C}_n^m = \mathrm{C}_n^{n-m}$ 转化为小上标（$\mathrm{C}_{100}^{2}$），大大简化计算。
