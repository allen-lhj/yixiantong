<template>
  <div class="view-item">
    <router-link to="{path: '/detail', query: 'view',id: data.id}"></router-link>
    <div class="img">
      <img :src="data.img" :alt="data.name" class="view-img">
    </div>
    <div class="info">
      <h1 class="title">{{data.name}}</h1>
      <p class="stars">
        <stars :starNum="Number(data.star)" />
        <span class="score">{{data.score}}分</span>
      </p>
      <p class="others">
        <span class="item">
          <span class="price">￥{{data.default_price}}起</span>
          <span class="item">{{data.city_name}}</span>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import Stars from '../Sub/Stars'
export default {
  name: 'ViewListSub',
  components: {
    Stars
  },
  props: {
    data:Object
  }
}
</script>

<style llang="scss" scoped>

</style>