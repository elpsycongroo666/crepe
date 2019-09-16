const path = require('path')
export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Crepe旅游网',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '//at.alicdn.com/t/font_1168872_ehvuah8v57g.css'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  //quill/dist/quill.snow.css 富文本框样式
  css: ['element-ui/lib/theme-chalk/index.css', 'assets/styles/main.less'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/element-ui',
    // axios的拦截插件
    '@/plugins/axios',
    '@/plugins/tool',
    '@/plugins/amap',
    //  本地存储的插件
    { src: '@/plugins/localStorage.js', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    // baseURL: 'http://127.0.0.1:1337' // 新增axios默认请求路径
    baseURL: 'http://157.122.54.189:9095' //线上地址
  },
  //配置别名
  alias: {
    img: path.join(__dirname, './assets/images/'),
    components: path.join(__dirname, './components'),
    styles: path.join(__dirname, './assets/styles')
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  //打包
  // router: {
  //   base: '/crepe/'
  // },
  name: 'title',
  data() {
    return {
      config: {
        modules: {
          // 工具栏
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'], // toggled buttons
            ['blockquote', 'code-block'],
            ['image', 'video'],

            [{ header: 1 }, { header: 2 }], // custom button values
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
            [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
            [{ direction: 'rtl' }] // text direction
          ]
        },
        // 主题
        theme: 'snow',
        uploadImage: {
          url: 'http://localhost:1337/upload',
          name: 'files',
          uploadBefore(file) {
            return true
          },
          uploadProgress(res) {},
          uploadSuccess(res, insert) {
            insert('http://localhost:1337' + res.data[0].url)
          },
          uploadError() {},
          showProgress: false
        },

        uploadVideo: {
          //url: "http://157.122.54.189:9095/upload",
          url: 'http://localhost:1337/upload',
          name: 'files',
          uploadBefore(file) {
            return true
          },
          uploadProgress(res) {},
          uploadSuccess(res, insert) {
            insert('http://localhost:1337' + res.data[0].url)
          },
          uploadError() {}
        }
      }
    }
  }
}
