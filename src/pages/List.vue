<template>
  <div class="container">
    <CommonHeader :title="title"></CommonHeader>
  </div>
</template>
<script>
import CommonHeader from 'components/header/Common'
export default {
  name: 'List',
  components: {
    CommonHeader
  },
  data() {
    return {
      title: '列表'
    }
  }
}
</script>
<style lang="scss" scoped>

</style>