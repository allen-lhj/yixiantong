<template>
  <div class="container">
    <CommonHeader :title="title"></CommonHeader>
    </div>
</template>
<script>

import CommonHeader from 'components/header/Common'
export default {
  name: 'Search',
  components: {
    CommonHeader
  },
  data() {
    return {
      title: '商家搜索'
    }
  }
}
</script>
<style lang="scss" scoped>

</style>