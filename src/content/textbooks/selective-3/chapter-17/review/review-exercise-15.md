---
type: exercise
textbook: selective-3
chapter: 17
section: 0
number: 15
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - conditional-probability
  - probability-addition-multiplication
source: "人教A版2019"
references: "选择性必修第三册 P38 复习参考题 第15题"
---

**题目：** 某地区发生某种疾病的概率为 $0.01$。已知该病患者检测呈阳性的概率为 $0.99$，未患病者检测呈阳性的概率为 $0.02$。

（1）求该地区某人检测呈阳性的概率；

（2）若某人检测呈阳性，求此人确实患病的概率。

---

**解答：**

**第1步：** 设定事件并求检测阳性概率
> 📌 运用知识点：全概率公式

设事件 $D$ = "患病"，事件 $T$ = "检测阳性"。

已知：$P(D) = 0.01$，$P(\overline{D}) = 0.99$，$P(T|D) = 0.99$，$P(T|\overline{D}) = 0.02$。

由全概率公式：

$$P(T) = P(D)P(T|D) + P(\overline{D})P(T|\overline{D}) = 0.01 \times 0.99 + 0.99 \times 0.02$$

$$= 0.0099 + 0.0198 = 0.0297$$

**第2步：** 求检测阳性时确实患病的概率
> 📌 运用知识点：贝叶斯公式

$$P(D|T) = \frac{P(D)P(T|D)}{P(T)} = \frac{0.0099}{0.0297} = \frac{99}{297} = \frac{1}{3} \approx 0.333$$

**⚠️ 易错提醒：** 即使检测准确率达 $99\%$，由于患病率极低（$1\%$），检测阳性后真正患病的概率仅约 $33\%$。这是因为未患病者人数远多于患病者，假阳性的绝对数量超过了真阳性。这就是"基率谬误"。

**💡 解题思路总结：** 医学检测问题是全概率公式和贝叶斯公式的经典应用。注意区分"检测准确率"（$P(T|D)$）和"阳性预测值"（$P(D|T)$），两者截然不同。
