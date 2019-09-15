# 前言

```
 6 个人 3 天 世界最好的旅游网站。
```

明月几时有？把酒问青天。不知天上宫阙，今夕是何年？

起舞弄清影，何似在人间。

但愿人长久，千里共婵娟。

coding....

```
/**
 *                    _ooOoo_
 *                   o8888888o
 *                   88" . "88
 *                   (| -_- |)
 *                    O\ = /O
 *                ____/`---'\____
 *              .   ' \\| |// `.
 *               / \\||| : |||// \
 *             / _||||| -:- |||||- \
 *               | | \\\ - /// | |
 *             | \_| ''\---/'' | |
 *              \ .-\__ `-` ___/-. /
 *           ___`. .' /--.--\ `. . __
 *        ."" '< `.___\_<|>_/___.' >'"".
 *       | | : `- \`.;`\ _ /`;.`/ - ` : | |
 *         \ \ `-. \_ __\ /__ _/ .-` / /
 * ======`-.____`-.___\_____/___.-`____.-'======
 *                    `=---='
 *
 * .............................................
 *          佛祖保佑             永无BUG
```

## 技术栈

```
nuxt.js + vue + vuex + axios + element-ui + html + less + es6/7
```

# ssh key 生成

```
//第一次生成key
ssh-keygen -t rsa -C "你的github邮箱"
全部回车
cd ~/.ssh
vi is_ras.pub
复制内容发送给组长
```

```
//已经有key的
ssh-keygen -t rsa -C "你的github邮箱"
回车后键入 id_rsa.crepe 后面全部回车
cd ~/.ssh
vi is_ras.crepe.pub
复制内容发送给组长
```

# 项目运行

```
git clone git@github.com:elpsycongroo666/crepe.git
cd crepe
npm install && yarn (推荐)
npm run dev && yarn dev
```

# 效果演示

暂时没有，留个坑位

# 目标功能

### 酒店首页

- [x] 静态布局-- 完成
- [x] 搜索模块 -- 完成
- [x] 星星组件 -- 完成
- [x] 地图组件 -- 完成
- [x] 过滤组件 -- 完成

# 项目结构

```
.
├── assets
│   └── styles
│       ├── main.less
│       ├── reset.less
│       └── variables.less //less变量网站主题
├── components
│   ├── air
│   │   ├── flightsAside.vue
│   │   ├── flightsFilters.vue
│   │   ├── flightsItem.vue
│   │   ├── flightsListHead.vue
│   │   ├── orderAside.vue
│   │   ├── orderForm.vue
│   │   └── searchForm.vue
│   ├── footer.vue
│   ├── header.vue
│   ├── post
│   │   └── item.vue
│   └── user
│       ├── loginForm.vue
│       └── registerForm.vue
├── layouts
│   └── default.vue
├── nuxt.config.js
├── package-lock.json
├── package.json
├── pages
│   ├── air
│   │   ├── flights.vue
│   │   ├── index.vue
│   │   ├── order.vue
│   │   └── pay.vue
│   ├── hotel
│   │   ├── index.vue
│   │   └── map.vue
│   ├── index.vue
│   ├── post
│   │   └── index.vue
│   ├── tab.vue
│   └── user
│       └── login.vue
├── plugins
│   ├── axios.js
│   ├── element-ui.js
│   ├── localStorage.js
│   └── tool.js //工具类
├── readme.md
├── static
│   └── images
│       └── favicon.ico
└── store
    ├── air.js
    ├── post.js
    └── user.js
```
