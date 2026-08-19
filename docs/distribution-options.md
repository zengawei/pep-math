# pep-math 分发方案对比

> 目标：让任何人拿到后，用任意浏览器（Edge、Chrome、Firefox 等）、任意操作系统（Windows、Linux、macOS）都能使用。

## 方案总览

| 方案 | 用户体验 | 难度 | 成本 | 离线可用 | 搜索功能 | 适合场景 |
|------|---------|------|------|---------|---------|---------|
| A. 静态托管 | 发链接，点开即用 | ⭐ | 免费 | ❌ 需网络 | ✅ 完整 | 日常分享，最快捷 |
| B. 离线包 + 本地服务器 | 下载 zip，运行脚本，打开 localhost | ⭐⭐⭐ | 免费 | ✅ | ⚠️ 需特殊处理 | 无网络环境 |
| C. 桌面应用 | 双击 .exe/.dmg 打开 | ⭐⭐⭐⭐ | 免费 | ✅ | ✅ 完整 | 需要独立 App 体验 |
| **D. PWA** ⭐ | 安装到桌面，像原生 App | ⭐⭐ | 免费 | ✅ | ✅ 完整 | **最佳平衡点** |
| E. GitHub Pages | 发链接，点开即用 | ⭐ | 免费 | ❌ 需网络 | ✅ 完整 | 快速验证（国内慢） |

---

## 方案 A：静态托管（推荐）

### 原理

Astro 构建产物（`dist/`）是纯静态 HTML/CSS/JS。部署到任何静态文件服务器即可。

### 优势

- **用户体验最佳**：一个链接，点开即用，无需安装任何东西
- **部署最简单**：push 到 GitHub → 自动构建部署
- **跨平台跨浏览器**：只要有浏览器和网络就能用
- **自动 HTTPS**：托管平台自带证书
- **CDN 加速**：全球分发，加载快
- **持续更新**：push 代码即自动更新线上版本

### 平台选择

#### 国际平台（国内可用）

| 平台 | 国内速度 | 免费额度 | 部署方式 |
|------|---------|---------|---------|
| **Cloudflare Pages** | ⭐⭐⭐⭐ 最快 | 无限请求 | 连 GitHub，自动部署 |
| **Vercel** | ⭐⭐⭐ 较快 | 100GB/月 | 连 GitHub，自动部署 |
| **Netlify** | ⭐⭐⭐ 较快 | 100GB/月 | 连 GitHub，自动部署 |

#### 国内平台（需备案）

| 平台 | 速度 | 费用 | 说明 |
|------|------|------|------|
| 阿里云 OSS + CDN | ⭐⭐⭐⭐⭐ | 按量付费 | 需 ICP 备案 |
| 腾讯云静态托管 | ⭐⭐⭐⭐⭐ | 按量付费 | 需 ICP 备案 |
| Gitee Pages | ⭐⭐⭐⭐ | 免费 | 国内 GitHub 替代 |

### 最快路径（Cloudflare Pages）

1. 把 repo push 到 GitHub（已完成 ✅）
2. 登录 Cloudflare Dashboard → Pages → Create
3. 连接 GitHub repo，设置构建命令：`npm run build`，输出目录：`dist`
4. 得到 URL：`https://pep-math.pages.dev`
5. 分享链接即可

### 注意事项

- 如果不是部署在域名根路径，需调整 `astro.config.ts` 中的 `base` 配置
- 当前 `base: '/pep-math'`，部署到子路径时无需修改
- 部署到根域名时需改为 `base: '/'`

---

## 方案 B：离线包 + 本地服务器

### 原理

将构建产物打包，附带一个轻量本地服务器脚本，用户运行脚本后通过 `localhost` 访问。

### 优势

- **完全离线**：不需要网络连接
- **无需安装**：解压即用
- **数据隐私**：所有数据留在本地
- **无平台依赖**：不依赖任何第三方服务

### 包结构

```
pep-math-offline/
├── dist/                  # Astro 构建产物
├── start.sh               # Linux/macOS 启动脚本
├── start.bat              # Windows 启动脚本
└── README.md              # 使用说明
```

### 启动脚本示例

**start.sh (Linux/macOS):**
```bash
#!/bin/bash
echo "pep-math 正在启动..."
echo "请在浏览器中打开: http://localhost:4321/pep-math/"
echo "按 Ctrl+C 停止服务"
cd "$(dirname "$0")/dist"
python3 -m http.server 4321
```

**start.bat (Windows):**
```bat
@echo off
echo pep-math 正在启动...
echo 请在浏览器中打开: http://localhost:4321/pep-math/
echo 按 Ctrl+C 停止服务
cd /d "%~dp0dist"
python -m http.server 4321
```

### 问题与限制

- **搜索功能受限**：Pagefind 通过 `fetch()` 加载索引文件，`file://` 协议下会被 CORS 拦截。需要：
  - 方案 1：要求用户安装 Python（提供 `python3 -m http.server`）
  - 方案 2：禁用搜索功能，纯离线浏览
  - 方案 3：将搜索改为纯客户端实现（不依赖 fetch）
- **需要 Python**：启动脚本依赖 Python 3（大多数系统已预装）
- **用户需手动操作**：下载 → 解压 → 运行脚本 → 打开浏览器

---

## 方案 C：桌面应用（Electron / Tauri）

### 原理

将静态网站包装为原生桌面应用，内置 Webview 渲染。

### 技术选型

| 框架 | 体积 | 内存 | 安全性 | 学习成本 |
|------|------|------|--------|---------|
| **Tauri** | ~5-10 MB | ~30 MB | ⭐⭐⭐⭐ | 需学 Rust |
| **Electron** | ~150 MB | ~100 MB | ⭐⭐⭐ | 需学 Node.js |

### 优势

- **体验最好**：双击打开，像原生应用一样使用
- **完全离线**：内置所有资源
- **跨平台**：一套代码生成 .exe (Windows) / .dmg (macOS) / .AppImage (Linux)
- **搜索完整**：内置 HTTP 服务，Pagefind 正常工作
- **可扩展**：可添加本地存储、笔记、进度跟踪等功能

### 劣势

- **开发成本高**：需要学习 Tauri 或 Electron
- **打包配置**：需要配置构建流程、图标、签名等
- **体积问题**：Electron 打包体积大（~150MB），Tauri 较小（~5-10MB）
- **维护成本**：需要为三个平台分别测试

### Tauri 方案示例

```
pep-math-desktop/
├── src-tauri/             # Tauri (Rust) 后端
│   ├── Cargo.toml
│   └── src/main.rs
├── dist/                  # Astro 构建产物（作为前端资源）
├── package.json
└── tauri.conf.json
```

---

## 方案 D：PWA（渐进式 Web 应用）⭐ 最佳平衡点

### 原理

在现有静态站点上加一层 Service Worker + Web App Manifest。用户访问一次后可以"安装"到桌面，之后离线也能使用，体验接近原生 App。

### 优势

- **无需应用商店**：不需要打包 .exe，不需要签名
- **离线可用**：Service Worker 缓存所有资源，断网也能用
- **安装到桌面**：浏览器提示"添加到桌面"，打开后像独立 App（无浏览器地址栏）
- **跨平台**：Windows / macOS / Linux / Android / iOS 全支持
- **任何浏览器**：Chrome、Edge、Firefox、Safari 都支持 PWA
- **改动最小**：只需在现有项目上加两个文件（manifest.json + service-worker.js）
- **自动更新**：用户下次打开时自动获取最新版本
- **搜索完整**：首次加载后缓存 Pagefind 索引，离线搜索也能用

### 用户体验流程

1. 打开链接（通过方案 A 的静态托管）
2. 浏览器地址栏出现"安装"图标，或底部提示"添加到主屏幕"
3. 点击后桌面出现图标
4. 打开后没有浏览器地址栏，像独立 App
5. 断网也能正常使用

### 需要添加的文件

```
public/
├── manifest.json          # Web App Manifest（应用名称、图标、主题色等）
└── sw.js                  # Service Worker（缓存策略）

src/layouts/BaseLayout.astro
└── 添加 <link rel="manifest"> 和 Service Worker 注册代码
```

### manifest.json 示例

```json
{
  "name": "PEP Math - 人教版高中数学",
  "short_name": "PEP Math",
  "description": "人教版高中数学知识图谱与练习系统",
  "start_url": "/pep-math/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#2563eb",
  "icons": [
    { "src": "/pep-math/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/pep-math/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

### Service Worker 策略

```
首次访问 → 下载并缓存所有静态资源（HTML/CSS/JS/字体）
后续访问 → 优先从缓存加载（极快）
有新版本 → 后台更新缓存，下次打开生效
离线状态 → 从缓存加载，完整可用
```

### 与方案 A 的关系

PWA 不是替代方案 A，而是**增强**。最佳组合：

```
方案 A（静态托管）→ 提供在线访问入口
     +
方案 D（PWA）→ 用户可安装到桌面，获得离线能力
```

---

## 方案 E：GitHub Pages

### 原理

GitHub 自带的静态页面托管服务，直接在 repo 设置中开启。

### 优势

- **零配置**：repo 已有，开启即可
- **免费**：完全免费，100GB/月额度
- **自动 HTTPS**：GitHub 自动处理证书
- **与代码同步**：push 即部署

### 劣势

- **国内访问不稳定**：GitHub 在中国大陆速度时快时慢，部分地区无法访问
- **不适合正式分享**：作为正式产品分发给用户不够可靠
- **适合开发阶段**：自己预览、给技术人员看没问题

### 开启方式

1. GitHub repo → Settings → Pages
2. Source 选择 GitHub Actions
3. 添加 `.github/workflows/deploy.yml` 部署 workflow
4. 得到 URL：`https://<username>.github.io/pep-math/`

---

## 综合推荐

### 🏆 最优组合：方案 A + D（静态托管 + PWA）

```
部署到 Cloudflare Pages（方案 A）
     +
加上 PWA 支持（方案 D）
     =
用户打开链接 → 可安装到桌面 → 离线也能用
```

**为什么这个组合最好：**

| 需求 | 满足情况 |
|------|---------|
| 任何浏览器 | ✅ 网页天然跨浏览器 |
| 任何操作系统 | ✅ 网页天然跨平台 |
| 像 App 一样使用 | ✅ PWA 安装到桌面 |
| 离线可用 | ✅ Service Worker 缓存 |
| 搜索功能 | ✅ Pagefind 完整可用 |
| 开发成本 | ⭐⭐ 只需加 2 个文件 |
| 维护成本 | ⭐ 零维护 |
| 用户体验 | ⭐⭐⭐⭐⭐ 接近原生 |

### 其他场景推荐

| 场景 | 推荐方案 |
|------|---------|
| 快速分享给朋友看 | 方案 A（Cloudflare Pages） |
| 快速验证，不在乎国内速度 | 方案 E（GitHub Pages） |
| 教室/考场等无网络环境 | 方案 B（离线包） |
| 需要完整桌面 App 体验 | 方案 C（Tauri） |
| 长期正式产品 | **方案 A + D**（静态托管 + PWA） |

---

## 实施路线图

### 第一步：静态托管（30 分钟）

- [ ] 注册 Cloudflare 账号
- [ ] 连接 GitHub repo，配置自动部署
- [ ] 验证线上版本功能正常
- [ ] 分享链接

### 第二步：PWA 支持（1-2 小时）

- [ ] 创建 `public/manifest.json`
- [ ] 创建 `public/sw.js`（Service Worker）
- [ ] 生成应用图标（192x192, 512x512）
- [ ] 在 BaseLayout 中添加 manifest link 和 SW 注册
- [ ] 测试离线功能
- [ ] 测试"安装到桌面"功能

### 第三步（可选）：离线包

- [ ] 编写 start.sh / start.bat 启动脚本
- [ ] 处理 Pagefind 离线兼容
- [ ] 打包 zip 分发

### 第四步（可选）：桌面应用

- [ ] 评估是否真的需要（PWA 可能已够用）
- [ ] 如需要，选择 Tauri（体积小）
- [ ] 配置构建流程
- [ ] 打包三平台安装包

---

## 前置工作清单

不管选哪个方案，都需要完成：

- [ ] 确认 `npm run build` 产物完整（所有页面正确生成）
- [ ] 确认 Pagefind 文件在 `dist/` 中正确位置
- [ ] 根据部署目标调整 `astro.config.ts` 的 `base` 配置
- [ ] 测试构建产物在不同浏览器下的兼容性
- [ ] 添加 `README.md` 中的使用说明（面向最终用户）
