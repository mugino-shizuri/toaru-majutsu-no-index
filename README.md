# 魔法禁书目录 · 学园都市档案

> 一个《魔法禁书目录》主题的单页资料站。
> 科学与魔术在同一座城市里互相否定，而暗部组织 ITEM 在城市的背面运转。

## 内容

- **序**：学园都市、超能力开发、暗部与魔术侧的世界观速写
- **学园都市**：能力开发、统括理事会、暗部
- **ITEM**：麦野沈利 / 滝壺理后 / フレンダ＝セイヴェルン / 絹旗最愛
- **年表**：旧约 → 新约 → 创约
- **外传**：《某科学的超电磁炮》《某暗部的少女共栖》

## 技术

纯静态：`index.html` + `style.css` + `script.js`，零依赖、零构建、无外部字体与图片请求。
背景网格、颗粒、扫描线全部由 CSS 与内联 SVG 生成，离线可看。

- 响应式：960px / 600px 两档断点
- 无障碍：`prefers-reduced-motion` 下关闭全部动效
- 字体：宋体系衬线做标题，等宽字体做标签，无网络字体加载

## 本地预览

直接双击 `index.html`，或在目录内起一个静态服务：

```bash
python -m http.server 8000
```

然后访问 http://localhost:8000

## 部署

GitHub Pages：仓库 `Settings → Pages`，Source 选 `main` 分支 `/ (root)`，保存即可。

线上地址：<https://mugino-shizuri.github.io/toaru-majutsu-no-index/>

## 声明

粉丝向资料站，非官方。作品版权归 KADOKAWA、镰池和马及 PROJECT-ITEM 所有。
站内文字为原创概述，未使用任何官方图像素材。
