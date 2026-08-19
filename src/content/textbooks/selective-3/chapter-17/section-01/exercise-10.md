---
type: exercise
textbook: selective-3
chapter: 17
section: 1
number: 10
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - conditional-probability
  - total-probability
source: "人教A版2019"
references: "人教A版选择性必修第三册 P16 练习B 第2题"
---

**题目：** 某种疾病的发病率为 $0.01$。现有一种检测方法，已知患者检测呈阳性的概率为 $0.98$（即检测的灵敏度为 $0.98$），健康人检测呈阳性的概率为 $0.03$（即假阳性率为 $0.03$）。

(1) 求随机一人检测呈阳性的概率。

(2) 若某人检测呈阳性，求他确实患病的概率。

---

**解答：**

**第1步：** 设事件并整理条件
> 📌 运用知识点：全概率公式

设事件 $D$ = "患病"，$T$ = "检测阳性"。

$$P(D) = 0.01, \quad P(\overline{D}) = 0.99$$

$$P(T|D) = 0.98, \quad P(T|\overline{D}) = 0.03$$

**第2步：** 用全概率公式求 $P(T)$
> 📌 运用知识点：全概率公式

$$P(T) = P(D) \cdot P(T|D) + P(\overline{D}) \cdot P(T|\overline{D})$$

$$= 0.01 \times 0.98 + 0.99 \times 0.03$$

$$= 0.0098 + 0.0297 = 0.0395$$

**第3步：** 用贝叶斯公式求 $P(D|T)$
> 📌 运用知识点：贝叶斯公式

$$P(D|T) = \frac{P(D) \cdot P(T|D)}{P(T)} = \frac{0.01 \times 0.98}{0.0395} = \frac{0.0098}{0.0395} = \frac{98}{395} \approx 0.248$$

**⚠️ 易错提醒：** 检测阳性不代表一定患病！本题中阳性者真正患病的概率仅约 $24.8\%$。这是因为患病率很低（$1\%$），导致假阳性的绝对数量远多于真阳性。这就是著名的"基率谬误"。

**💡 解题思路总结：** 医学检测问题是贝叶斯公式的经典应用。即使检测准确率很高，当疾病发病率很低时，阳性结果中真正患病的比例也可能不高。关键是用全概率公式算出总阳性率，再用贝叶斯公式反推。
