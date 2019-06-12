# 网易云课堂

## 安装项目所需依赖
```
npm install
```

### 启动本地服务
```
npm run serve
```

### 打包项目上线
```
npm run build
```

### 自动修复 ESLint 相关问题
```
npm run lint
```

### 项目数据写在 /public 下的 home.json 里，需要启动文件服务才能访问
```
cd public

json-server --watch home.json
```
