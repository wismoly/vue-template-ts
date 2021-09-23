import language from '../json/language.json';
import { Vue, Component } from 'vue-property-decorator';
import { mc, getPlatform } from 'mico-base-common';
mc.install(getPlatform);
@Component
export default class BaseJson extends Vue {
  getLanauge(): Record<string, any> {
    const lang = mc.getPlatform().lang || 'zh_CN';
    if (lang === 'ar') {
      document.body.style.direction = 'rtl';
    }
    if (lang === 'id' || lang === 'in') {
      return language['id'];
    }
    document.title = (language[lang] && language[lang].title) || language['en'].title;
    return language[lang] || language['en'];
  }
}
