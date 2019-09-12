# 前言

6 个人 3 天 世界最好的旅游网站

# ssh key 生成

```
ssh-keygen -t rsa -C "你的github邮箱"
回车后键入 id_rsa.crepe 后面全部回车
cd ~/.ssh
vi is_ras.crepe.pub
```

# 项目运行

```
git clone git@github.com:elpsycongroo666/crepe.git
cd crepe
npm install && yarn (推荐)
npm run dev && yarn dev
```
