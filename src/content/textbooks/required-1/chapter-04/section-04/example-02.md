---
type: example
textbook: required-1
chapter: 4
section: 4
number: 2
knowledge_points:
  - exponential-function
source: "人教A版2019"
references: "必修第一册 P107 例1"
---

**例题：** 某工厂2020年的产量为 $a$，若每年的产量增长率为 $r$，写出 $n$ 年后产量的表达式，并计算当 $a = 10000$，$r = 5\%$ 时，产量翻一番大约需要多少年。（参考数据：$\lg 2 \approx 0.301$，$\lg 1.05 \approx 0.021$）

**解答：**

**第1步：** 建立模型
> 📌 运用知识点：指数型函数应用

$n$ 年后产量 $y = a(1+r)^n = a \times 1.05^n$

**第2步：** 求翻番时间
> 📌 运用知识点：指数型函数应用

$y = 2a$ 时，$a \times 1.05^n = 2a$

$1.05^n = 2$

$n \lg 1.05 = \lg 2$

$n = \frac{\lg 2}{\lg 1.05} = \frac{0.301}{0.021} \approx 14.3$

产量翻一番大约需要15年。

**⚠️ 易错提醒：** "翻一番"是变为原来的2倍，不是增加2倍。

**💡 解题思路总结：** 翻番问题：$a(1+r)^n = 2a$，两边取对数解出 $n$，向上取整。
