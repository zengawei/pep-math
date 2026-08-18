---
type: example
textbook: required-2
chapter: 8
section: 2
number: 5
knowledge_points:
  - solid-surface-area-volume
source: "人教A版2019"
---

**例题：** 一个圆锥形容器（开口朝上），底面半径为 $6$ cm，高为 $8$ cm。容器中装有水，水面高度为 $4$ cm。求容器中水的体积。若将一个半径为 $2$ cm 的铁球放入容器中（完全浸没），水面将升高多少？

---

**解答：**

**第1步：** 求水的体积
> 📌 运用知识点：圆锥的体积、相似比

水面处的圆形成一个小圆锥（与原圆锥相似），小圆锥的高为 $4$ cm。

由相似比：水面半径 $r' = 6 \times \frac{4}{8} = 3$ cm

$V_{\text{水}} = \frac{1}{3}\pi r'^2 \times 4 = \frac{1}{3}\pi \times 9 \times 4 = 12\pi$ cm³

**第2步：** 求铁球体积
> 📌 运用知识点：球的体积

$V_{\text{球}} = \frac{4}{3}\pi \times 2^3 = \frac{32\pi}{3}$ cm³

**第3步：** 求水面升高量
> 📌 运用知识点：组合体的体积

设水面升高 $\Delta h$，则升高后水面半径为 $r'' = 6 \times \frac{4 + \Delta h}{8} = \frac{3(4 + \Delta h)}{4}$

升高后的水+球体积 = 新的小圆锥体积

$12\pi + \frac{32\pi}{3} = \frac{1}{3}\pi \left(\frac{3(4+\Delta h)}{4}\right)^2 (4 + \Delta h)$

$\frac{68\pi}{3} = \frac{1}{3}\pi \times \frac{9(4+\Delta h)^2}{16} \times (4+\Delta h) = \frac{3\pi(4+\Delta h)^3}{16}$

$(4+\Delta h)^3 = \frac{68 \times 16}{3 \times 3} = \frac{1088}{9}$

$4 + \Delta h = \sqrt[3]{\frac{1088}{9}} \approx \sqrt[3]{120.9} \approx 4.94$

$\Delta h \approx 0.94$ cm

精确值：$(4+\Delta h)^3 = \frac{1088}{9}$，$\Delta h = \sqrt[3]{\frac{1088}{9}} - 4$

**💡 方法总结：** 圆锥形容器中的液体问题利用相似比求液面半径。放入物体后，液面上升的体积等于物体排开水的体积（即物体体积），利用新液面处的小圆锥体积等于原水体积加物体体积列方程。
