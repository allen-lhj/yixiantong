<template>
  <div class="container">
    <CommonHeader :title="title"></CommonHeader>
    <search-input @onSearch="onSearch"></search-input>
  </div>
</template>

<script>
import CommonHeader from 'components/header/Common'
import SearchInput from 'components/SearchInput'
export default {
  name: 'Search',
  components: {
    CommonHeader,
    SearchInput
  },
  data() {
    return {
      title: '商家搜索',
      data: {}
    }
  }
}
</script>
<style lang="scss" scoped>

</style>