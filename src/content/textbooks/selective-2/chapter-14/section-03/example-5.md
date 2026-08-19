---
type: example
textbook: selective-2
chapter: 14
section: 3
number: 5
knowledge_points:
  - sequence-sum-methods
source: "人教A版2019"
references: "选择性必修第二册 P23 例5"
---

**例题：** 已知 $f(x) = \dfrac{x^2}{1+x^2}$，求 $f(1)+f(2)+\cdots+f(10)+f\left(\dfrac{1}{2}\right)+f\left(\dfrac{1}{3}\right)+\cdots+f\left(\dfrac{1}{10}\right)$ 的值。

---

**解答：**

**第1步：** 发现 $f(x) + f\left(\dfrac{1}{x}\right)$ 的规律
> 📌 运用知识点：倒序相加法

计算 $f(x) + f\left(\dfrac{1}{x}\right)$：

$$f(x) + f\left(\dfrac{1}{x}\right) = \dfrac{x^2}{1+x^2} + \dfrac{\left(\dfrac{1}{x}\right)^2}{1+\left(\dfrac{1}{x}\right)^2}$$

$$= \dfrac{x^2}{1+x^2} + \dfrac{\dfrac{1}{x^2}}{1+\dfrac{1}{x^2}}$$

$$= \dfrac{x^2}{1+x^2} + \dfrac{\dfrac{1}{x^2}}{\dfrac{x^2+1}{x^2}}$$

$$= \dfrac{x^2}{1+x^2} + \dfrac{1}{x^2+1}$$

$$= \dfrac{x^2+1}{1+x^2} = 1$$

因此，对任意 $x \neq 0$，都有 $f(x) + f\left(\dfrac{1}{x}\right) = 1$。

**第2步：** 配对求和
> 📌 运用知识点：倒序相加法

将所求式中的项按 $f(k)$ 与 $f\left(\dfrac{1}{k}\right)$ 配对：

$$f(2) + f\left(\dfrac{1}{2}\right) = 1$$
$$f(3) + f\left(\dfrac{1}{3}\right) = 1$$
$$\vdots$$
$$f(10) + f\left(\dfrac{1}{10}\right) = 1$$

共 $9$ 对（$k = 2, 3, \cdots, 10$），每对之和为 $1$。

剩余 $f(1)$ 无法配对（因为 $\dfrac{1}{1} = 1$，不在求和范围内单独出现两次），单独计算：

$$f(1) = \dfrac{1^2}{1+1^2} = \dfrac{1}{2}$$

**第3步：** 合并结果
> 📌 运用知识点：倒序相加法

$$\text{原式} = f(1) + \sum_{k=2}^{10}\left[f(k) + f\left(\dfrac{1}{k}\right)\right] = \dfrac{1}{2} + 9 \times 1 = \dfrac{1}{2} + 9 = \dfrac{19}{2}$$

$$= \boxed{\dfrac{19}{2}}$$

**💡 解题思路总结：** 当求和式中出现 $f(k)$ 与 $f\left(\dfrac{1}{k}\right)$ 的对称结构时，先探索 $f(x) + f\left(\dfrac{1}{x}\right)$ 是否为常数。若为常数，则可将对应项**配对求和**，大幅简化计算。这种**倒序相加法**（又称对称配对法）的关键在于发现函数值的对称性质。
