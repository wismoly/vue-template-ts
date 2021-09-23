<template>
  <div class="rules-container">
    <button @click="$router.go(-1)">{{ configText['back'] }}</button>
  </div>
</template>
<script lang="ts">
import baseComponent from '../../js/base';
import { Component } from 'vue-property-decorator';
@Component
export default class MyComponent extends baseComponent {
  get configText(): Record<string, any> {
    return this.getLanauge();
  }
  mounted(): void {}
}
</script>
<style lang="scss">
@import './index.less';
</style>
