<template>
  <div class="main_container">
    <button @click="$router.push('rule')">{{ configText['go'] }}</button>
  </div>
</template>

<script lang="ts" scoped>
import { Component } from 'vue-property-decorator';
import baseComponent from '../../js/base';
@Component
export default class MyComponent extends baseComponent {
  userUid = '';
  generic_token = '';
  get configText(): Record<string, any> {
    return this.getLanauge();
  }
  mounted(): void {
    // 新token获取 6.38以后支持 如不需要更新，直接获取用户信息即可
    this.$mc.MicoJSBridge('h5_obtainGenericToken').then((res: any) => {
      this.generic_token = res.generic_token;
      //获取用户信息
      this.$mc.MicoJSBridge('h5_obtainProfile').then((res: any) => {
        this.userUid = res.user.uid;
        // this.get_star_info(this.userUid)
      });
    });
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
      }
    });
  }
  // 新token接口调用示例
  // async get_star_info(uid: string): Promise<any> {
  //   //获取用户申请状态
  //   const res = await this.$mc.request({
  //     url: this.$mc.proxyUrl('/api/go/live/star_headlines/get_star_info', 'proxyApi'),
  //     method: 'get',
  //     headers: {
  //       Authorization: `Bearer ${this.generic_token}`,
  //       uid
  //     }
  //   });
  //   this.star_info = res.data.data;
  // }
}
</script>
<style lang="less" scoped>
@import './index.less';
</style>
