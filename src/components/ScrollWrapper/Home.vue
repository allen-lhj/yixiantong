<template>
   <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
     <category-icons />
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
import CategoryIcons from './CategoryIcons'
export default {
  name: 'HomeScrollWrapper',
  components: {
    CategoryIcons
  }
}
</script>

<style lang="scss" scoped>

</style>