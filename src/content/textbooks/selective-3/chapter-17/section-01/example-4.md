---
type: example
textbook: selective-3
chapter: 17
section: 1
number: 4
knowledge_points:
  - conditional-probability
  - total-probability
source: "人教A版2019"
references: "人教A版选择性必修第三册 P13 例4"
---

**例题：** 某地区成年居民中，吸烟者占 $30\%$。已知吸烟者患某疾病的概率为 $0.12$，不吸烟者患该疾病的概率为 $0.04$。现从该地区随机选取一人，已知此人患有该疾病，求此人是吸烟者的概率。

---

**解答：**

**第1步：** 设事件并整理条件
> 📌 运用知识点：事件设定

设事件 $S$ = "吸烟"，$\overline{S}$ = "不吸烟"，$D$ = "患病"。

$$P(S) = 0.3, \quad P(\overline{S}) = 0.7$$

$$P(D|S) = 0.12, \quad P(D|\overline{S}) = 0.04$$

**第2步：** 用全概率公式求 $P(D)$
> 📌 运用知识点：全概率公式

$$P(D) = P(S) \cdot P(D|S) + P(\overline{S}) \cdot P(D|\overline{S})$$

$$= 0.3 \times 0.12 + 0.7 \times 0.04 = 0.036 + 0.028 = 0.064$$

**第3步：** 用贝叶斯公式求 $P(S|D)$
> 📌 运用知识点：贝叶斯公式

$$P(S|D) = \frac{P(S) \cdot P(D|S)}{P(D)} = \frac{0.3 \times 0.12}{0.064} = \frac{0.036}{0.064} = \frac{36}{64} = \frac{9}{16} = 0.5625$$

**结论：** 已知此人患病，此人是吸烟者的概率为 $\dfrac{9}{16} = 56.25\%$。

**💡 解题思路总结：** "已知结果，反推原因"是贝叶斯公式的核心。先用全概率公式算出总患病率（作为分母），再用贝叶斯公式计算特定原因的后验概率。
