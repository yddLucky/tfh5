<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
import {getPremium} from 'api/premium'
export default {
  created() {
    getPremium().then((res) => {
      console.log(res)
    })
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
