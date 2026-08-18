---
type: example
textbook: required-1
chapter: 4
section: 4
number: 4
knowledge_points:
  - exponential-function
source: "人教A版2019"
references: "必修第一册 P108 例3"
---

**例题：** 已知某放射性元素的半衰期为5730年（即每经过5730年，该元素的含量减少为原来的一半）。若某古墓中该元素含量为活体中的 $\frac{1}{8}$，求该古墓大约距今多少年。

**解答：**

**第1步：** 建立衰减模型
> 📌 运用知识点：指数型函数应用

设初始含量为 $N_0$，经过 $t$ 年后含量为 $N = N_0 \times \left(\frac{1}{2}\right)^{\frac{t}{5730}}$

**第2步：** 代入求解
> 📌 运用知识点：指数型函数应用

$\frac{N_0}{8} = N_0 \times \left(\frac{1}{2}\right)^{\frac{t}{5730}}$

$\frac{1}{8} = \left(\frac{1}{2}\right)^{\frac{t}{5730}}$

$\left(\frac{1}{2}\right)^3 = \left(\frac{1}{2}\right)^{\frac{t}{5730}}$

$\frac{t}{5730} = 3$

$t = 17190$（年）

**⚠️ 易错提醒：** 半衰期模型中指数为 $\frac{t}{T}$（$T$ 为半衰期），不是直接 $t$。

**💡 解题思路总结：** 半衰期问题用 $N = N_0 \times (1/2)^{t/T}$，将比值化为底数的整数次幂即可直接求解。
