---
type: definition
textbook: selective-2
chapter: 16
section: 1
name: 计数原理与排列
related_knowledge_points:
  - counting-principle-addition
  - counting-principle-multiplication
  - permutation
---

**定义（精确表述）：**

**加法原理（分类计数原理）：** 完成一件事有 $n$ 类方案，第 $1$ 类有 $m_1$ 种方法，第 $2$ 类有 $m_2$ 种方法，……，第 $n$ 类有 $m_n$ 种方法，各类之间彼此独立。那么完成这件事共有
$$N = m_1 + m_2 + \cdots + m_n$$
种方法。

**乘法原理（分步计数原理）：** 完成一件事需要 $n$ 个步骤，第 $1$ 步有 $m_1$ 种方法，第 $2$ 步有 $m_2$ 种方法，……，第 $n$ 步有 $m_n$ 种方法，每步都必须完成才能达成目标。那么完成这件事共有
$$N = m_1 \times m_2 \times \cdots \times m_n$$
种方法。

**排列：** 从 $n$ 个不同元素中取出 $m$（$m \leqslant n$）个元素，按照一定的顺序排成一列，叫做从 $n$ 个不同元素中取出 $m$ 个元素的一个排列。排列数为
$$A_n^m = \frac{n!}{(n-m)!} = n(n-1)(n-2)\cdots(n-m+1)$$

**通俗解释：** 加法原理就是"分类选一类就行"——坐火车能到、坐汽车也能到，任选一种方式都算完成。乘法原理就是"分步每步都做才完成"——先选上衣再选裤子，两步都做完才算穿好。排列就是"排队有顺序"——甲乙丙和丙乙甲是不同的排法，谁站哪儿很重要。

