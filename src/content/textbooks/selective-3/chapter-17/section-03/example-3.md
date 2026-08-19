---
type: example
textbook: selective-3
chapter: 17
section: 3
number: 3
knowledge_points:
  - binomial-distribution
  - distribution-table
source: "人教A版2019"
references: "人教A版选择性必修第三册 P32 例3"
---

**例题：** 某工厂生产的产品次品率为 $0.05$。现随机抽检 $4$ 件产品（产品数量很大），设次品数为 $X$。

(1) 求 $X$ 的分布列。

(2) 求 $E(X)$ 和 $D(X)$。

---

**解答：**

**第1步：** 确定分布类型
> 📌 运用知识点：二项分布的判定

产品数量很大，近似有放回抽样。$X \sim B(4, 0.05)$。

**第2步：** 写出分布列
> 📌 运用知识点：二项分布的概率计算

$$P(X = k) = \binom{4}{k}(0.05)^k(0.95)^{4-k}, \quad k = 0, 1, 2, 3, 4$$

$$P(X = 0) = (0.95)^4 \approx 0.8145$$

$$P(X = 1) = 4 \times 0.05 \times (0.95)^3 \approx 4 \times 0.05 \times 0.8574 \approx 0.1715$$

$$P(X = 2) = 6 \times (0.05)^2 \times (0.95)^2 \approx 6 \times 0.0025 \times 0.9025 \approx 0.0135$$

$$P(X = 3) = 4 \times (0.05)^3 \times 0.95 \approx 4 \times 0.000125 \times 0.95 \approx 0.0005$$

$$P(X = 4) = (0.05)^4 \approx 0.000006$$

| $X$ | $0$ | $1$ | $2$ | $3$ | $4$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $P$ | $\approx 0.8145$ | $\approx 0.1715$ | $\approx 0.0135$ | $\approx 0.0005$ | $\approx 0.000006$ |

**第3步：** 求 $E(X)$ 和 $D(X)$
> 📌 运用知识点：二项分布的期望和方差公式

$$E(X) = np = 4 \times 0.05 = 0.2$$

$$D(X) = np(1-p) = 4 \times 0.05 \times 0.95 = 0.19$$

**💡 解题思路总结：** 次品率很低时，分布集中在 $X = 0$ 附近，这是合理的。二项分布的期望 $E(X) = np$ 表示平均次品数，方差 $D(X) = np(1-p)$ 反映波动大小。
