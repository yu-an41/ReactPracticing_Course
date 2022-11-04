export const appConfig = {
  debug: true,
  devUrl: 'http://localhost:3000',
  prodUrl: 'http://www.abc.com',
}
// 開發期間(debug: true) 用devUrl存取圖片
// 完成後(debug: false) 用prodUrl存取

export const imgUrl = appConfig.debug ? appConfig.devUrl : appConfig.prodUrl

export const logger = (v) => {
  return appConfig.debug ? console.log(v) : ''
}
