<template>
   <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
     <category-icons />
     <div v-if="!errorShow">
        <home-title :title="homeTitle.viewTitle" />
        <view-list :viewDatas="homeDatas.viewDatas" />
        <home-title :title="homeTitle.foodTitle" />
        <food-list :foodDatas="homeDatas.foodDatas" />
        <home-title :title="homeTitle.hotelTitle" />
        <hotel-list :hotelDatas="homeDatas.hotelDatas" />
        <home-title :title="homeTitle.massageTitle" />
        <massage-list :massageDatas="homeDatas.massageDatas"></massage-list>
        <home-title :title="homeTitle.ktvTitle" />
        <ktv-list :ktvDatas="homeDatas.ktvDatas"></ktv-list>   
     </div>
     <error :errorShow="errorShow"></error>
    </div>
  </div>
</template>

<script>
import ViewList from './ViewList/Index.vue'
import FoodList from './FoodList'
import HotelList from './HotelList'
import MassageList from './MassageList';
import KtvList from './KtvList'
import Error from './Sub/Error';
import BetterScroll from 'better-scroll'
import CategoryIcons from './CategoryIcons/Index.vue'
import HomeTitle from './Sub/HomeTitle'
import { mapState } from 'vuex'
import { IndexModel } from 'models/index'

import {formatJSON} from '@/utils/tool'

export default {
  name: 'HomeScrollWrapper',
  components: {
    CategoryIcons,
    HomeTitle,
    ViewList,
    FoodList,
    HotelList,
    MassageList,
    KtvList,
    Error
  },
  data() {
    return {
      currentCityId: 0, // 缓存
      errorShow: false,
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
    console.log(1)
    this.scroll = new BetterScroll(this.$refs.wrapper)
    this.currentCityId = this.cityId
    this.getHomeDatas(this.cityId)
  },
  activated() {
    console.log(2)
    // 缓存时，城市改变，请求接口
    if (this.currentCityId !== this.cityId) {
      this.currentCityId = this.cityId
      this.getHomeDatas(this.currentCityId)
    }
  },
  methods: {
    getHomeDatas(cityId) {
      const indexModel = new IndexModel()
      indexModel.getHomeDatas(cityId).then(res => {
        console.log(res)
        if (res&&res.status===0) {
          const data = res.data
          this.errorShow = false
          this.homeDatas.foodDatas = formatJSON(data.foodDatas, 'keyword')
          this.homeDatas.foodDatas = data.foodDatas
          this.homeDatas.hotelDatas = data.hotelDatas
          this.homeDatas.ktvDatas = data.ktvDatas
          this.homeDatas.massageDatas = data.massageDatas
          this.homeDatas.viewDatas = data.viewDatas
        } else {
            this.errorShow = true;
            console.log({
              statusCode: res.status,
              errorMsg: res.error
            });
          }
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>