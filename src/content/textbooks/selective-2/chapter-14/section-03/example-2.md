---
type: example
textbook: selective-2
chapter: 14
section: 3
number: 2
knowledge_points:
  - sequence-sum-methods
source: "人教A版2019"
references: "选择性必修第二册 P20 例2"
---

**例题：** 求数列 $1+\dfrac{1}{2},\; 2+\dfrac{1}{4},\; 3+\dfrac{1}{8},\; \cdots,\; n+\dfrac{1}{2^n}$ 的前 $n$ 项和 $S_n$。

---

**解答：**

**第1步：** 写出通项公式并分析结构
> 📌 运用知识点：分组求和法

数列的第 $k$ 项为：

$$a_k = k + \dfrac{1}{2^k}$$

通项由两部分组成：$k$（等差部分）和 $\dfrac{1}{2^k}$（等比部分），适合使用**分组求和法**。

**第2步：** 分别求两部分的和
> 📌 运用知识点：等差数列求和、等比数列求和

**第一部分（等差部分）：**

$$\sum_{k=1}^{n} k = 1 + 2 + 3 + \cdots + n = \dfrac{n(n+1)}{2}$$

**第二部分（等比部分）：**

$$\sum_{k=1}^{n} \dfrac{1}{2^k} = \dfrac{1}{2} + \dfrac{1}{4} + \dfrac{1}{8} + \cdots + \dfrac{1}{2^n}$$

这是首项 $a_1 = \dfrac{1}{2}$、公比 $q = \dfrac{1}{2}$、共 $n$ 项的等比数列：

$$\sum_{k=1}^{n} \dfrac{1}{2^k} = \dfrac{\dfrac{1}{2}\left[1 - \left(\dfrac{1}{2}\right)^n\right]}{1 - \dfrac{1}{2}} = \dfrac{\dfrac{1}{2}\left(1 - \dfrac{1}{2^n}\right)}{\dfrac{1}{2}} = 1 - \dfrac{1}{2^n}$$

**第3步：** 合并结果
> 📌 运用知识点：分组求和法

$$S_n = \dfrac{n(n+1)}{2} + 1 - \dfrac{1}{2^n}$$

$$= \boxed{\dfrac{n(n+1)}{2} + 1 - \dfrac{1}{2^n}}$$

**💡 解题思路总结：** 当数列的通项可以拆分为"等差部分 + 等比部分"时，使用**分组求和法**：将 $a_k$ 拆成两部分，分别对每部分求和，最后合并。本题中整数部分构成等差数列，分数部分构成等比数列，各自求和后相加即可。
