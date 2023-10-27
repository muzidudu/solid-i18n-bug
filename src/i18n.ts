import { I18nState } from '@i18n-pro/solid'
import zh from './i18n/zh.json'
import ja from './i18n/ja.json'

export default {
    namespace: 'testNamespace',
    locale: 'zh',
    langs: {
        zh,
        ja
    }
} as I18nState