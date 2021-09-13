<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <detail-swiper :picDatas="detailData.pics" />
      <detail-food 
	       v-if="field === 'food'"
	       :name="detailData.name"
	       :starNum="Number(detailData.star)"
	       :score="detailData.score"
	       :address="detailData.address"
	       :price="Number(detailData.default_price)"
	       :openDateTime="detailData.open_datetime"
	       :recom="detailData.recom"
	       :commentKeyword="detailData.comment_keyword"
	      />
        <detail-hotel
	       v-if="field === 'hotel'"
	       :name="detailData.name"
	       :starNum="Number(detailData.star)"
	       :score="detailData.score"
	       :address="detailData.address"
	       :price="Number(detailData.default_price)"
	       :service="detailData.service"
	       />

        <detail-view
	       v-if="field === 'view'"
	       :name="detailData.name"
	       :starNum="Number(detailData.star)"
	       :score="detailData.score"
	       :address="detailData.address"
	       :price="Number(detailData.default_price)"
	       :openDateTime="detailData.open_datetime"
	       :tip="detailData.tip"
	       :intro="detailData.intro"
	       :ticketInfo="detailData.ticket_info"
	       />

        <detail-massage
	       v-if="field === 'massage'"
	       :name="detailData.name"
	       :starNum="Number(detailData.star)"
	       :score="detailData.score"
	       :address="detailData.address"
	       :price="Number(detailData.default_price)"
	       :openDateTime="detailData.open_datetime"
	       :commentKeyword="detailData.comment_keyword"
	       :service="detailData.service"
	       />

	      <detail-ktv
	       v-if="field === 'ktv'"
	       :name="detailData.name"
	       :starNum="Number(detailData.star)"
	       :score="detailData.score"
	       :address="detailData.address"
	       :price="Number(detailData.default_price)"
	       :service="detailData.service"
	       />
    </div>
  </div>
</template>

<script>
  import DetailSwiper from './Sub/Swiper'
  import DetailFood from './Detail/Food'
  import DetailHotel from './Detail/Hotel'
  import DetailView from './Detail/View'
  import DetailMassage from './Detail/Massage';
	import DetailKtv from './Detail/Ktv'
  import BetterScroll from 'better-scroll'
  import { DetailModel } from 'models/detail'
  import { jsonToArr, replaceToSpace, strToArr} from '@/utils/tool'
  export default {
    name: 'DetailScrollWrapper',
    components: {
      DetailSwiper,
      DetailFood,
      DetailHotel,
      DetailMassage,
			DetailKtv,
      DetailView,
    },
    data() {
      return {
        field: '',
        id: 0,
        detailData: {}
      }
    },
    mounted() {
      this.scroll = new BetterScroll(this.$refs.wrapper)
      this.field = this.$route.query.field
      this.id = this.$route.query.id
      console.log(this.field, this.id)
      this.getDetail(this.field, this.id)
    },
    methods: {
      getDetail(field, id) {
        const detailModel = new DetailModel()
        detailModel.getDetail(field, id).then((res) => {
          if (res&&res.status===0) {
            const data = res.data
            data.pics && (data.pics = jsonToArr(data.pics));
      			data.comment_keyword && (data.comment_keyword = strToArr(data.comment_keyword));
      			data.recom && (data.recom = replaceToSpace(data.recom));
      			data.service && (data.service = jsonToArr(data.service));
            this.detailData = data
            console.log(this.detailData)
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>