<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" :alt="item.title">
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '1',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1706/63/63d29ac8a2abdd39a3.water.jpg_200x200_29000f23.jpg',
        title: '大连绅士环氧世界',
        desc: '流浪地球盛世美景在良辰吉日的美景,流浪地球盛世美景在良辰吉日的美景'
      }, {
        id: '2',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1706/63/63d29ac8a2abdd39a3.water.jpg_200x200_29000f23.jpg',
        title: '大连绅士环氧世界',
        desc: '流浪地球盛世美景在良辰吉日的美景,流浪地球盛世美景在良辰吉日的美景'
      }, {
        id: '3',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1706/63/63d29ac8a2abdd39a3.water.jpg_200x200_29000f23.jpg',
        title: '大连绅士环氧世界',
        desc: '流浪地球盛世美景在良辰吉日的美景,流浪地球盛世美景在良辰吉日的美景'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .recommend-title
    margin-top .2rem
    line-height .8rem
    background #eee
    text-indent .2rem
  .item
    overflow hidden
    display flex
    height 1.9rem
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      min-width 0
      .item-title
        line-height .54rem
        font-size .32rem
        ellipse()
      .item-desc
        line-height .4rem
        color #ccc
        ellipse()
      .item-button
        line-height .44rem
        margin-top .16rem
        background #ff9300
        padding 0 .2rem
        border-radius .06rem
        color #fff
</style>
