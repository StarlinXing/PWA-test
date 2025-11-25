# PWA 示例应用

这是一个最简单的PWA（渐进式Web应用）示例，支持一键添加到桌面功能。

## 功能特点

- ✅ 支持一键添加到桌面
- ✅ 离线访问能力
- ✅ 响应式设计，适配各种设备
- ✅ 符合PWA标准
- ✅ 简单美观的用户界面

## 文件结构

```
pwa-demo/
├── index.html          # 主页面
├── manifest.json       # PWA配置文件
├── service-worker.js   # 服务工作线程
├── icons/              # 应用图标
│   ├── icon-144x144.png
│   ├── icon-180x180.png
│   ├── icon-192x192.png
│   └── icon-512x512.png
└── README.md           # 说明文档
```

## 部署步骤

### 1. 本地测试

使用现代浏览器（Chrome、Edge、Firefox等）直接打开`index.html`文件。

### 2. 服务器部署

要使PWA功能正常工作，需要通过HTTPS协议访问。可以使用以下方法部署：

#### 方法一：使用GitHub Pages

1. 将项目推送到GitHub仓库
2. 在仓库设置中启用GitHub Pages
3. 通过`https://<username>.github.io/<repository-name>/`访问

#### 方法二：使用Netlify或Vercel

1. 注册Netlify或Vercel账号
2. 连接GitHub仓库
3. 部署应用

#### 方法三：使用本地服务器

可以使用Python的简单HTTP服务器进行本地测试：

```bash
# 在项目根目录运行
python3 -m http.server 8000
```

然后通过`http://localhost:8000`访问。注意：本地HTTP服务器不支持HTTPS，因此某些PWA功能可能无法正常工作。

## 测试PWA功能

### 1. 添加到桌面

- **Chrome/Edge**: 点击地址栏中的"安装"图标或使用菜单中的"安装"选项
- **Safari**: 使用分享菜单中的"添加到主屏幕"选项
- **Firefox**: 使用菜单中的"安装"选项

### 2. 离线功能测试

1. 在线访问应用，确保Service Worker已注册
2. 断开网络连接
3. 刷新页面，应用应仍能正常加载

## 浏览器兼容性

PWA功能在以下浏览器中得到良好支持：

- Chrome (Android/iOS/Desktop)
- Edge (Android/iOS/Desktop)
- Safari (iOS 11.3+, macOS 10.14.4+)
- Firefox (Android/Desktop)

## 注意事项

1. PWA功能需要通过HTTPS协议访问（localhost除外）
2. 不同浏览器的"添加到桌面"提示可能有所不同
3. 图标尺寸和格式需要符合manifest.json中的配置
4. Service Worker需要正确注册和缓存资源

## 自定义指南

要将此示例应用自定义为您自己的应用：

1. 修改`manifest.json`中的应用名称、描述、颜色等信息
2. 替换`icons/`目录中的图标文件
3. 修改`index.html`中的内容和样式
4. 更新`service-worker.js`中的缓存策略（如果需要）

## 许可证

MIT
