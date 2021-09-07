<template>
  <div class="container">
    <common-header />
    <city-scroll-wrapper />
  </div>
</template>
<script>
import CommonHeader from '@/components/header/Common'
import CityScrollWrapper from '@/components/ScrollWrapper/City'
export default {
  name: 'City',
  components: {
    CommonHeader,
    CityScrollWrapper
  }

}
</script>
<style lang="scss" scoped>

</style>