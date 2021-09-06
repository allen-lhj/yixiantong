<template>
	<div class="container">
		<CommonHeader :title="title"></CommonHeader>
		<!-- <detail-scroll-wrapper></detail-scroll-wrapper> -->
	</div>
</template>

<script>
  import CommonHeader from 'components/header/Common'
  // import DetailScrollWrapper from 'components/ScrollWrapper/Detail';

	export default {
		name: 'Detail',
		components: {
			CommonHeader
			// DetailScrollWrapper
		},
		data () {
			return {
				title: '详细信息'
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>