<script>
export default {
  props: ['urlIcon', 'urlLink', 'namaIcon'],
  setup(props) {
    const urlIcon = props.urlIcon
    const urlLink = props.urlLink
    const namaIcon = props.namaIcon
    return { urlIcon, urlLink, namaIcon }
  }
}
</script>
<template>
  <div class="content">
    <i :class="`${urlIcon}`"></i>
    <a :href="`${urlLink}`" target='_blank'>{{ namaIcon }}</a>
  </div>
</template>

<style scoped>
.content{
  display: flex;
  flex-direction: column;
  gap: 5px;
  border: 1px solid black;
}
</style>