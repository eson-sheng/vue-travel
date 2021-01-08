<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" :alt="item.id">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '1',
        imgUrl: 'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/f120bd9310af9b72bbac8d005f1ef146.jpg'
      }, {
        id: '2',
        imgUrl: 'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/baa26b15ba14d443feeb78df47160524.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background #fff
  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 53.33%
    background-color: #eee;
    .swiper-img
      width 100%
</style>
