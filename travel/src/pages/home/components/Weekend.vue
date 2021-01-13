<template>
  <div>
    <div class="weekend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" :alt="item.title">
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '1',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1812/b4/e9d7f043c4fadf.jpg_r_640x214_713df0cf.jpg',
        title: '大连绅士环氧世界',
        desc: '流浪地球盛世美景在良辰吉日的美景,流浪地球盛世美景在良辰吉日的美景'
      }, {
        id: '2',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1812/b4/e9d7f043c4fadf.jpg_r_640x214_713df0cf.jpg',
        title: '大连绅士环氧世界',
        desc: '流浪地球盛世美景在良辰吉日的美景,流浪地球盛世美景在良辰吉日的美景'
      }, {
        id: '3',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1812/b4/e9d7f043c4fadf.jpg_r_640x214_713df0cf.jpg',
        title: '大连绅士环氧世界',
        desc: '流浪地球盛世美景在良辰吉日的美景,流浪地球盛世美景在良辰吉日的美景'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/mixins.styl"
.weekend-title
  margin-top .2rem
  line-height .8rem
  background #eee
  text-indent .2rem
.item-img-wrapper
  overflow hidden
  height 0
  padding-bottom 33.9%
  .item-img
    width 100%
.item-info
  padding .1rem
  .item-title
    line-height .54rem
    font-size .32rem
    ellipse()
  .item-desc
    line-height .4rem
    color #ccc
    ellipse()
</style>
