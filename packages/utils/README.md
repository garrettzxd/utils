## b2b-utils
`b2b的通用或常用方法`

### 下载使用
```shell
npm install @b2b/utils

or

yarn add @b2b/utils
```

### 开发
使用了rollup自带的开发配置，命令如下
```shell
yarn dev
```

### 文档
`@b2b/utils`使用`typedoc`自动生成文档，生成命令如下：

```shell
yarn doc
```

### 注意

- 由于是使用typedoc自动生成的文档，因此需要遵循相关注释规范，详细参考 [typedoc](https://typedoc.org/guides/installation/)
- 日期使用的是day.js，作为peerDependencies依赖存在
- 最终需要统一导出到`utils根目录下`的index.ts
- 
