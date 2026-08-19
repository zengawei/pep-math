---
type: example
textbook: selective-1
chapter: 13
section: 1
number: 7
knowledge_points:
  - ellipse-properties
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P66 例7"
---

**例题：** 已知椭圆 $\dfrac{x^2}{4} + \dfrac{y^2}{3} = 1$ 的两个焦点为 $F_1, F_2$，$P$ 为椭圆上的点，且 $|PF_1| - |PF_2| = 1$，求 $\tan\angle F_1PF_2$。

**解答：**

**第1步：** 确定基本量
> 📌 运用知识点：椭圆的几何性质

$a^2 = 4$，$b^2 = 3$，$c^2 = 1$

$a = 2$，$c = 1$，$|F_1F_2| = 2$

**第2步：** 利用椭圆定义
> 📌 运用知识点：椭圆的定义与标准方程

$|PF_1| + |PF_2| = 2a = 4$

$|PF_1| - |PF_2| = 1$

解得：$|PF_1| = \dfrac{5}{2}$，$|PF_2| = \dfrac{3}{2}$

**第3步：** 利用余弦定理
> 📌 运用知识点：椭圆的几何性质

在 $\triangle F_1PF_2$ 中：

$\cos\angle F_1PF_2 = \dfrac{|PF_1|^2 + |PF_2|^2 - |F_1F_2|^2}{2|PF_1||PF_2|}$

$= \dfrac{\frac{25}{4} + \frac{9}{4} - 4}{2 \times \frac{5}{2} \times \frac{3}{2}} = \dfrac{\frac{34}{4} - 4}{\frac{15}{2}} = \dfrac{\frac{18}{4}}{\frac{15}{2}} = \dfrac{\frac{9}{2}}{\frac{15}{2}} = \dfrac{9}{15} = \dfrac{3}{5}$

**第4步：** 求 $\tan$
> 📌 运用知识点：椭圆的几何性质

$\cos\angle F_1PF_2 = \dfrac{3}{5}$

$\sin\angle F_1PF_2 = \sqrt{1 - \dfrac{9}{25}} = \sqrt{\dfrac{16}{25}} = \dfrac{4}{5}$

$\tan\angle F_1PF_2 = \dfrac{\sin}{\cos} = \dfrac{4/5}{3/5} = \dfrac{4}{3}$

**💡 解题思路总结：** 焦点三角形中求角：① 椭圆定义求 $|PF_1|, |PF_2|$；② 余弦定理求 $\cos$ 值；③ 由 $\cos$ 求 $\sin$ 再求 $\tan$。这是椭圆焦点三角形问题的标准套路。
