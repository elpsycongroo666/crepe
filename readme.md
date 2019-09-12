# 前言

6 个人 3 天 世界最好的旅游网站

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

# 项目结构

```
.
├── assets
│   └── styles
│       ├── main.less
│       ├── reset.less
│       └── variables.less
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
│   └── tool.js
├── readme.md
├── static
│   └── images
│       └── favicon.ico
└── store
    ├── air.js
    ├── post.js
    └── user.js
```
