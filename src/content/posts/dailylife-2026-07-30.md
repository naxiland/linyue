---
title: dailylife-2026-07-30
published: 2026-07-30
description: ''
image: ''
tags: []
category: ''
draft: false 
lang: ''
---

直接开搞：Fuwari（Astro高颜值博客模板）+ Cloudflare Pages 保姆流程

# 直接开搞：Fuwari（Astro 高颜值博客模板）+ Cloudflare Pages 保姆流程

模板仓库：https://github.com/saicaca/fuwari 特点：明暗双主题、内置搜索、目录、代码高亮、RSS，**中文友好，改配色 / 导航只需要改配置文件**

## 前置准备

1. 安装 **Node.js 20 LTS** + Git
2. 安装包管理器 pnpm（终端执行）

```bash
npm install -g pnpm
```

1. GitHub 账号、Cloudflare 免费账号

## 方式 A：命令行一键生成新项目（推荐）

```bash
pnpm create fuwari@latest
# 项目名称随便填，例如 my-blog
cd my-blog
pnpm install
# 本地启动预览
pnpm dev
```

打开浏览器访问 `http://localhost:4321`，立刻看到博客效果。

### 本地基础修改（先改成你自己的信息）

打开 `src/config.ts`

```ts
export const siteConfig: SiteConfig = {
  title: "我的技术博客",
  subtitle: "随便写写开发笔记",
  lang: "zh_CN", // 设置中文
  themeColor: {
    hue: 210, // 主题色调 0红 / 120绿 / 210蓝 / 340粉，可以自由修改
    fixed: false,
  },
  // 下方还有社交链接、导航菜单，按需删掉/修改
}
```

### 新建文章命令

```bash
pnpm new-post test-article
```

文件自动生成在 `src/content/posts/`，markdown 直接写内容。

## 上传代码到 GitHub

1. GitHub 新建仓库，名称自定义（不要勾选 readme）
2. 项目目录终端执行：

```bash
git init
git add .
git commit -m "init blog"
git remote add origin https://github.com/你的用户名/仓库名.git
git branch -M main
git push -u origin main
```

## Cloudflare Pages 部署【关键配置】

1. 打开 https://dash.cloudflare.com → Workers & Pages → Create application → Pages → Connect to Git
2. 授权 GitHub，选中刚刚创建的仓库 → Begin setup
3. **填写构建设置（照着复制）**

- Framework preset：`Astro`
- Production branch：`main`
- Build command：`pnpm build`
- Build output directory：`dist`
- Root directory：**留空**

1. 点击 **Save and Deploy**

等待 2～3 分钟构建完成，Cloudflare 会分配地址：`xxx.pages.dev`，你的博客上线！

> 之后每次本地写完文章，git push 到 GitHub，Cloudflare **自动重新构建部署**。

# 常见踩坑

1. 构建失败：一定要用 `pnpm build`，不要用 npm；
2. 网站图标、图片不显示：检查 `astro.config.mjs` 里 `site` 地址，改成你的 pages.dev 域名；
3. `.pages.dev` 国内访问不稳定：只适合海外访问；想要国内稳定访问需要备案域名。

# 可选拓展（后续折腾）

1. 接入 Giscus：GitHub 评论系统，访客可以留言
2. 对接 Cloudflare R2：博客图片存放，免费 10GB
3. 修改 CSS，自定义卡片样式、字体
4. 增加访问统计

如果你现在环境准备好了，我可以给你一份**最简中文配置模板**直接复制覆盖 `src/config.ts`。 需要吗？
