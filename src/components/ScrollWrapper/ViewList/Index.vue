<template>
  <div class="list-wrapper">
    <view-list-sub
    v-for="(item,index) of viewDatas"
    :data="item"
    :key="index"
    ></view-list-sub>
  </div>
</template>

<script>
import ViewListSub from './Sub'
export default {
  name: 'ViewList',
  components: {
    ViewListSub
  },
  props: {
    viewDatas: Array
  }
}
</script>

<style lang="scss" scoped>

</style>