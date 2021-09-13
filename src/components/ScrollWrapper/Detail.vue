<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <div v-if="!errorShow">
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
      <error :errorShow="errorShow" />
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
  import Error from './Sub/Error'
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
      Error
    },
    data() {
      return {
        field: '',
        id: 0,
        detailData: {},
        errorShow: false,
        currentField: undefined
      }
    },
    mounted() {
      this.scroll = new BetterScroll(this.$refs.wrapper)
      this.field = this.$route.query.field
      this.id = this.$route.query.id
      this.getDetail(this.field, this.id)
    },
    // 已经缓存，重新进入组件是不会在请求接口
    activated () {
      this.currentField = this.$route.query.field;
      this.currentId = this.$route.query.id;

      if (this.currentField !== this.field || this.currentId !== this.id) {
      	this.field = this.currentField;
      	this.id = this.currentId;
      	this.getDetail(this.field, this.id);
      }
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
          } else {
            this.errorShow = true
            console.log({ statusCode: res.status, errorMsg: res.error })
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>