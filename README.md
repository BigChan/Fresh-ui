<p align="center">
    <a href="https://github.com/BigChan/Fresh-ui">
        <img width="200" src="https://github.com/BigChan/Fresh-ui/blob/master/examples/pages/images/logo.jpg">
    </a>
</p>

# Fresh UI

### 整合iview、min、wux，基于小程序的UI组件库

## 文档
[https://github.com/BigChan/Fresh-ui]


## 快速上手
### 使用之前
在开始使用 Fresh UI 之前，你需要先阅读 [微信小程序自定义组件](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/) 的相关文档。

### 如何使用
到 [GitHub](https://github.com/BigChan/Fresh-ui) 下载 Fresh UI 的代码，将 `dist` 目录拷贝到自己的项目中。然后按照如下的方式使用组件，以 Button 为例，其它组件在对应的文档页查看：

1. 添加需要的组件。在页面的 json 中配置（路径根据自己项目位置配置）：
```json
"usingComponents": {
    "f-button": "../../dist/button/index"
}
```
2. 在 wxml 中使用组件：
```html
<f-button type="primary" bind:click="handleClick">这是一个按钮</f-button>
```

### 预览所有组件
我们内置了所有组件的示例，您可以按以下方式在微信开发者工具中查看：

```shell
# 从 GitHub 下载后，安装依赖
npm install

# 编译组件
npm run dev
```
然后，将 `examples` 目录在微信开发者工具中打开即可(注意是 `examples` 目录)。