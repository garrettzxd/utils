# mono-test

### 概述

本仓库使用mono-repo模式上搭建仓库，其中

- `lerna mono-repo`
- `yarn包管理`
- `rollup`
- `eslint`
- `commitlint`
- `TS`
- `husky(eslint commitlint)`
- `jest自动化测试(TODO)`
- `Doc文档(TODO)`

### 🍻初始化应用
```shell
yarn bootstrap

或

make init
```

### 🚧开始开发

文件目录概况

- `b2b-components`，通用vue组件包
- `constants` 常量
- `regular`，通用正则包
- `utils`，通用方法包

需要在哪个包内开发直接更改相应代码即可

### 💡代码提交

代码提交有两步校验
- `eslint校验`
- `commitlint校验`

其中commitlint继承[conventional & lerna-scopes](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint)规则，提交范例如下

```shell
# type(scope): subject
feat(utils): new feature
```

其中scope如果是根目录文件更改需要如下写法
```shell
# scope is root
feat(root): new feature
```

### 🚀包发布

- 切换到公司内部私有npm源[lianlian npm registry](http://npm.lianlianpay-dc.com/#/detail/@all/tutorial)
- 执行发布流程
- ⚠️ 开发时发布alpha或beta版本的包，正式上线之前发正式包

```shell
npm adduser
...

make publish
```

### 其他

- 建议使用nrm做包管理替代`npm set registry`命令
```shell
npm i nrm -g

nrm add lianlian http://npm.lianlianpay-dc.com

nrm use lianlian
```
