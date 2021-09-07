let cityinfo = {
  cityId: '0',
  cityName: '全部',
  field: 'all'
}
try {
  if (localStorage.cityinfo) {
    cityinfo = JSON.parse(localStorage.cityInfo)
  }
} catch(e){}
export default cityinfo