<template>
  <div>
    <CityHeader></CityHeader>
    <CitySearch></CitySearch>
    <CityList :cities="cities" :hot="hotCities" :letter="letter"></CityList>
    <CityAlphabet :cities="cities" @change="handleLetterChange"></CityAlphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  mounted () {
    this.getCityInfo()
  },
  methods: {
    getCityInfo () {
      axios.get('api/city.json').then(this.handleGetCityInfoSuccess)
    },
    handleGetCityInfoSuccess (res) {
      // console.log(res)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleLetterChange (letter) {
      // console.log(letter)
      this.letter = letter
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
