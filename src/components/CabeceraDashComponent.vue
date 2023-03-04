<template>
  <div id="dashcab">
    <h2>{{titulo }}</h2>
  </div>
</template>

<script lang="ts" setup>
const titulo:string=process.env.VUE_APP_NOMBREAPP

console.log(process.env.VUE_APP_NOMBREAPP);

</script>
<style scoped lang="scss">
#dashcab{
    height: 12%;
    width: 100%;

}
</style>
