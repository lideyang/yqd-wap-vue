<template>
  <!--底部菜单-->
  <div data-am-widget="navbar" class="am-navbar am-cf">
    <ul class="am-navbar-nav am-cf am-avg-sm-4">
      <li>
        <a id="nav_index" href="/index">
          <i class="icon-font icon-home"></i>
          <span class="am-navbar-label">首页</span>
        </a>
      </li>
      <li>
        <a id="nav_invest" href="/product/index" class="">
          <i class="icon-font icon-case"></i>
          <span class="am-navbar-label">出借</span>
        </a>
      </li>
      <li>
        <a id="nav_xinpi" href="/static/index" class="">
          <i class="icon-font icon-info_1"></i>
          <span class="am-navbar-label">信披</span>
        </a>
      </li>
      <li>
        <a id="nav_member" href="/member/account/index" class="">
          <i class="icon-font icon-my-account"></i>
          <span class="am-navbar-label">我的</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: "footerMenu",
    components: {

    }
  }
</script>
<style lang="less">

</style>
