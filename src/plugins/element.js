import { ElButton } from 'element-plus'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import locale from 'element-plus/lib/locale'

export default (app) => {
  // TODO: whyyyyyyyy
  // locale.use(lang)
  app.use(ElButton)
}
