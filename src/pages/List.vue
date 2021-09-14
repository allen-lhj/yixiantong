<template>
  <div class="container">
    <CommonHeader :title="title"></CommonHeader>
    <tab />
    <ListScrollWrapper />
  </div>
</template>
<script>
import fieldDatas from 'data/fields'
import { mapState } from 'vuex'
import CommonHeader from 'components/header/Common'
import ListScrollWrapper from 'components/ScrollWrapper/List'
import Tab from 'components/Tab/Index'
export default {
  name: 'List',
  components: {
    CommonHeader,
    ListScrollWrapper,
    Tab
  },
  computed: {
    ...mapState(['field']),
    title() {
      if (this.field) {
        return fieldDatas.filter((item) => item.field === this.field)[0].iconText + '列表'
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>