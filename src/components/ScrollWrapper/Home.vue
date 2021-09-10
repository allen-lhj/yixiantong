<template>
   <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
     <category-icons />
     <home-title :title="homeTitle.viewTitle" />
     <view-list :viewDatas="homeDatas.viewDatas" />
     <home-title :title="homeTitle.foodTitle" />
     <home-title :title="homeTitle.hotelTitle" />
     <home-title :title="homeTitle.ktvTitle" />
     <home-title :title="homeTitle.massageTitle" />
    </div>
  </div>
</template>

<script>
import ViewList from './ViewList/Index.vue'
import BetterScroll from 'better-scroll'
import CategoryIcons from './CategoryIcons/Index.vue'
import HomeTitle from './Sub/HomeTitle'
import { mapState } from 'vuex'
import { IndexModel } from 'models/index'
export default {
  name: 'HomeScrollWrapper',
  components: {
    CategoryIcons,
    HomeTitle,
    ViewList
  },
  data() {
    return {
      homeTitle: {
        viewTitle: '推荐景点',
        foodTitle: '推荐美食',
        hotelTitle: '推荐酒店',
        ktvTitle: '推荐KTV',
        massageTitle: '推荐按摩',
      },
      homeDatas: {
        foodDatas: [],
        hotelDatas: [],
        ktvDatas: [],
        massageDatas: [],
        viewDatas: []
      }
    }
  },
  computed: {
    ...mapState(['cityId'])
  },
  mounted() {
    this.scroll = new BetterScroll(this.$refs.wrapper)
    this.getHomeDatas()
  },
  methods: {
    getHomeDatas(cityId) {
      const indexModel = new IndexModel()
      indexModel.getHomeDatas(cityId).then(res => {
        console.log(res)
        if (res&&res.status===0) {
          const data = res.data
          this.homeDatas.foodDatas = data.foodDatas
          this.homeDatas.hotelDatas = data.hotelDatas
          this.homeDatas.ktvDatas = data.ktvDatas
          this.homeDatas.massageDatas = data.massageDatas
          this.homeDatas.viewDatas = data.viewDatas
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>