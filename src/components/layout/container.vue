<template>
  <header data-am-widget="header" class="am-header am-header-default" id="topHeader">
    <div class="am-header-left am-header-nav">
      <a id="nextBtn" href="javascript:;;" class="">
        <i class="am-header-icon icon-font icon-prev"></i>
        返回
      </a>
    </div>

    <h1 class="am-header-title">
      <a id="headerTitle" href="#title-link" class="">
        {{title}}
      </a>
    </h1>
    <div class="am-header-right am-header-nav">
      <a href="#right-link" class="">
        <i class="am-header-icon am-icon-bars"></i>
      </a>
    </div>
  </header>
</template>
<script>
  export default {
    components: {

    },
    props: {
      title: {
        type: String,
        default: "亿钱贷"
      }
    }
  }
</script>
<style lang="less">

</style>
