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

<style lang="scss" scoped>
@import '~styles/mixins.scss';
@import '~styles/variables.scss';
.view-item {
  width: 50%;
  padding: .1rem;
  .img {
    width: 100%;
    height: 1.1rem;
    overflow: hidden;
    .view-img {
      width: 100%;
      min-height: 1.1rem
    }
  }
  .info {
    .title {
      @include ellipsis;
      height: .3rem;
      font-size: .16rem;
      line-height: .3rem;
      color: #000;
    }
    .stars {
      height: .3rem;
      line-height: .3rem;
      font-size: .14rem;
      color: #ccc;
    }
  }
}
</style>