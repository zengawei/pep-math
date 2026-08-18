---
type: exercise
textbook: required-1
chapter: 2
section: 1
number: 7
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - inequality-properties
source: "人教A版2019"
references: "必修第一册 P28 练习 第7题"
---

**题目：** 已知 $a > b > 0$，用作差法比较 $a^3$ 与 $b^3$ 的大小。

---

**解答：**

**第1步：** 作差
> 📌 运用知识点：不等式的性质（作差法）

$$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$$

**第2步：** 分析各因子的符号
> 📌 运用知识点：不等式的性质

因为 $a > b > 0$，所以：
- $a - b > 0$
- $a^2 > 0$，$ab > 0$，$b^2 > 0$，故 $a^2 + ab + b^2 > 0$

**第3步：** 判断差值正负
> 📌 运用知识点：不等式的性质

两个正数之积为正数，所以：
$$a^3 - b^3 = (a - b)(a^2 + ab + b^2) > 0$$

即 $a^3 > b^3$。

**⚠️ 易错提醒：** 因式分解 $a^3 - b^3 = (a-b)(a^2+ab+b^2)$ 是常用公式，注意不要与 $a^3 + b^3 = (a+b)(a^2-ab+b^2)$ 混淆。

**💡 解题思路总结：** 比较幂的大小常用作差法，利用因式分解将差值化为若干因子的乘积，再逐一判断各因子的正负。推广：若 $a > b > 0$，$n$ 为正整数，则 $a^n > b^n$。
