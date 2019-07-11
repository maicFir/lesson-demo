### 安装
npm install

### mock服务
npm run mock

### webpack启动
npm run start


### 异步加载编码示例，需要的时候使用
```
(async ()=> {
	const asyncModule import(/* webpackChunkName: "moduleName" */'moduleName');
})();
```
