---
type: definition
textbook: selective-2
chapter: 15
section: 1
name: 导数运算法则
related_knowledge_points:
  - derivative-operations
---

**定义（精确表述）：**

**一、基本初等函数的导数公式：**

| 原函数 | 导函数 |
|--------|--------|
| $f(x) = c$（$c$ 为常数） | $f'(x) = 0$ |
| $f(x) = x^n$（$n \in \mathbb{Q}^*$） | $f'(x) = nx^{n-1}$ |
| $f(x) = \sin x$ | $f'(x) = \cos x$ |
| $f(x) = \cos x$ | $f'(x) = -\sin x$ |
| $f(x) = a^x$（$a > 0, a \neq 1$） | $f'(x) = a^x \ln a$ |
| $f(x) = e^x$ | $f'(x) = e^x$ |
| $f(x) = \log_a x$（$a > 0, a \neq 1$） | $f'(x) = \dfrac{1}{x \ln a}$ |
| $f(x) = \ln x$ | $f'(x) = \dfrac{1}{x}$ |

**二、导数的运算法则：**

设 $u(x)$，$v(x)$ 均可导，则：

1. **加减法则：** $[u(x) \pm v(x)]' = u'(x) \pm v'(x)$
2. **乘法法则：** $[u(x) \cdot v(x)]' = u'(x) \cdot v(x) + u(x) \cdot v'(x)$
3. **常数倍法则：** $[cu(x)]' = cu'(x)$（$c$ 为常数）
4. **除法法则：** $\left[\dfrac{u(x)}{v(x)}\right]' = \dfrac{u'(x)v(x) - u(x)v'(x)}{[v(x)]^2}$（$v(x) \neq 0$）
5. **复合函数求导法则（链式法则）：** 若 $y = f(u)$，$u = g(x)$，则 $y'_x = y'_u \cdot u'_x$，即 $[f(g(x))]' = f'(g(x)) \cdot g'(x)$

**通俗解释：** 就像加减乘除有固定的运算规则一样，求导也有固定的公式和法则。基本函数的导数公式是"查表"用的，运算法则是告诉你怎么把复杂函数拆成简单部分来求导。复合函数求导就像"剥洋葱"——一层一层地求导再乘起来。
