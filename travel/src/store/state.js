let defaultCity = '成都'
try {
  defaultCity = localStorage.city
} catch (e) {
  console.log(e)
}

export default {
  city: defaultCity || '成都'
}
