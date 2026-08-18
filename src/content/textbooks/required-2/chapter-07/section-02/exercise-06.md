---
type: exercise
textbook: required-2
chapter: 7
section: 2
number: 6
difficulty: basic
category: practice
is_exam_question: false
knowledge_points:
  - complex-number-operations
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 计算 $i + i^2 + i^3 + i^4 + \cdots + i^{2024}$。

---

**解答：**

**第1步：** 分析 $i$ 的幂的周期性
> 📌 运用知识点：虚数单位的幂

$i^1 = i$，$i^2 = -1$，$i^3 = -i$，$i^4 = 1$

$i^5 = i$，$i^6 = -1$，$\cdots$

$i$ 的幂以 $4$ 为周期循环。

**第2步：** 计算每四个连续项的和
> 📌 运用知识点：复数的加法

$i^n + i^{n+1} + i^{n+2} + i^{n+3} = i + (-1) + (-i) + 1 = 0$

每四个连续项的和为 $0$。

**第3步：** 计算总和
> 📌 运用知识点：分组求和

$2024 \div 4 = 506$，恰好分成 $506$ 组，每组和为 $0$。

所以 $i + i^2 + i^3 + \cdots + i^{2024} = 506 \times 0 = 0$。

**💡 易错提醒：** $i$ 的幂以 $4$ 为周期，四个连续幂的和为零。注意 $2024$ 恰好是 $4$ 的倍数，所以总和为零。

**💡 解题思路总结：** 利用 $i$ 的幂的周期性（周期为 $4$），将连续四项分组合并，每组和为零。
