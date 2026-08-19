---
type: example
textbook: selective-2
chapter: 14
section: 3
number: 3
knowledge_points:
  - sequence-sum-methods
source: "人教A版2019"
references: "选择性必修第二册 P21 例3"
---

**例题：** 求和：$\dfrac{1}{1 \times 3} + \dfrac{1}{3 \times 5} + \dfrac{1}{5 \times 7} + \cdots + \dfrac{1}{(2n-1)(2n+1)}$。

---

**解答：**

**第1步：** 写出通项并进行裂项分解
> 📌 运用知识点：裂项相消法

通项公式为：

$$a_k = \dfrac{1}{(2k-1)(2k+1)}$$

注意到 $(2k+1) - (2k-1) = 2$，因此：

$$a_k = \dfrac{1}{2}\left(\dfrac{1}{2k-1} - \dfrac{1}{2k+1}\right)$$

**验证：** $\dfrac{1}{2}\left(\dfrac{1}{2k-1} - \dfrac{1}{2k+1}\right) = \dfrac{1}{2} \cdot \dfrac{(2k+1)-(2k-1)}{(2k-1)(2k+1)} = \dfrac{1}{2} \cdot \dfrac{2}{(2k-1)(2k+1)} = \dfrac{1}{(2k-1)(2k+1)}$，正确。

**第2步：** 逐项展开，利用相消求和
> 📌 运用知识点：裂项相消法

$$S_n = \dfrac{1}{2}\left[\left(\dfrac{1}{1} - \dfrac{1}{3}\right) + \left(\dfrac{1}{3} - \dfrac{1}{5}\right) + \left(\dfrac{1}{5} - \dfrac{1}{7}\right) + \cdots + \left(\dfrac{1}{2n-1} - \dfrac{1}{2n+1}\right)\right]$$

中间项逐对抵消（$-\dfrac{1}{3}$ 与 $+\dfrac{1}{3}$ 抵消，$-\dfrac{1}{5}$ 与 $+\dfrac{1}{5}$ 抵消，依此类推），只剩首尾：

$$S_n = \dfrac{1}{2}\left(1 - \dfrac{1}{2n+1}\right)$$

**第3步：** 化简最终结果
> 📌 运用知识点：裂项相消法

$$S_n = \dfrac{1}{2} \cdot \dfrac{2n+1-1}{2n+1} = \dfrac{1}{2} \cdot \dfrac{2n}{2n+1} = \dfrac{n}{2n+1}$$

$$= \boxed{\dfrac{n}{2n+1}}$$

**💡 解题思路总结：** 对于分母为两个等差数列之积的通项 $a_k = \dfrac{1}{(2k-1)(2k+1)}$，利用两因子之差为常数（此处差为 $2$），将通项裂为两项之差，展开后中间项全部抵消。这就是**裂项相消法**的核心思想：化繁为简，以消代算。
