<template>
  <div class="container">
      <HomeHeader />
      <HomeScrollWrapper />
  </div>
</template>
<script>
import HomeHeader from '@/components/Header/Home'
import HomeScrollWrapper from 'components/ScrollWrapper/Home'
export default {
  name: 'Index',
  components: { 
    HomeHeader,
    HomeScrollWrapper
     }
}
</script>
<style lang="scss" scoped>

</style>