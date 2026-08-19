---
type: exercise
textbook: selective-1
chapter: 11
section: 1
number: 12
difficulty: hard
category: practice
group: C
is_exam_question: false
knowledge_points:
  - space-vector-operations
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P7 练习C 第2题"
---

**题目：** 在平行六面体 $ABCD\text{-}A'B'C'D'$ 中，$AB = 4$，$AD = 3$，$AA' = 5$，$\angle BAD = 90°$，$\angle BAA' = 60°$，$\angle DAA' = 60°$。设 $\overrightarrow{AB} = \vec{a}$，$\overrightarrow{AD} = \vec{b}$，$\overrightarrow{AA'} = \vec{c}$。

(1) 求 $\vec{a} \cdot \vec{b}$，$\vec{a} \cdot \vec{c}$，$\vec{b} \cdot \vec{c}$；

(2) 求 $|\overrightarrow{AC'}|$。

---

**解答：**

**第1步：** 计算各数量积
> 📌 运用知识点：空间向量的运算

$\angle BAD = 90°$，所以 $\vec{a} \cdot \vec{b} = |\vec{a}||\vec{b}|\cos 90° = 4 \times 3 \times 0 = 0$。

$\angle BAA' = 60°$，所以 $\vec{a} \cdot \vec{c} = |\vec{a}||\vec{c}|\cos 60° = 4 \times 5 \times \frac{1}{2} = 10$。

$\angle DAA' = 60°$，所以 $\vec{b} \cdot \vec{c} = |\vec{b}||\vec{c}|\cos 60° = 3 \times 5 \times \frac{1}{2} = \frac{15}{2}$。

**第2步：** 表示 $\overrightarrow{AC'}$ 并求模
> 📌 运用知识点：空间向量的运算

$$\overrightarrow{AC'} = \vec{a} + \vec{b} + \vec{c}$$

$$|\overrightarrow{AC'}|^2 = |\vec{a}|^2 + |\vec{b}|^2 + |\vec{c}|^2 + 2\vec{a} \cdot \vec{b} + 2\vec{a} \cdot \vec{c} + 2\vec{b} \cdot \vec{c}$$

$$= 16 + 9 + 25 + 2 \times 0 + 2 \times 10 + 2 \times \frac{15}{2}$$

$$= 50 + 0 + 20 + 15 = 85$$

$$|\overrightarrow{AC'}| = \sqrt{85}$$

**⚠️ 易错提醒：** 平行六面体中基向量不一定两两垂直！必须根据题目给出的角度分别计算每个数量积，不能默认都为零。

**💡 解题思路总结：** 平行六面体的体对角线向量为 $\overrightarrow{AC'} = \vec{a} + \vec{b} + \vec{c}$，求模的平方需要展开为六项（三个模的平方加三个交叉项的两倍），每一项都要根据已知角度计算。
