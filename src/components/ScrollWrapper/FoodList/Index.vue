<template>
  <div class="list-wrapper">
    <FoodListSub 
    v-for="(item, index) of foodDatas"
    :data="item"
    :key="index" />
  </div>
</template>

<script>
import FoodListSub from './Sub.vue'
export default {
  name: 'FoodList',
  components: {
    FoodListSub
  },
  props: {
    foodDatas: Array
  }
}
</script>

<style lang="scss" scoped>

</style>