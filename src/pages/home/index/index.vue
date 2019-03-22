<template>
  <div>
    <!--内容开始-->
    <div class="am-container">
      <!--banner-->
      <div class="am-g am-slider am-slider-default" data-am-flexslider="{playAfterPaused:3000}" id="bannerSlider">
        <ul class="am-slides">
          <li>
            <a href="https://m.yiqiandai.com/event/novice">
              <img src="http://58.221.193.236/pic/5b62bc8ce4b085504dd75095"/>
            </a>
          </li>
        </ul>
      </div>
      <!--公告-->
      <div class="notice">
        <a class="more" href="/article/notice/"><i class="icon-font icon-more am-text-default"></i></a>
        <div class="am-g">
          <div class="am-u-sm-1">
            <i class="icon-font icon-laba1 am-text-primary"></i>
          </div>
          <div class="am-u-sm-11 list">
            <ul id="noticeList">
              <li>
                <span class="am-text-truncate am-text-middle"><a
                  href="/article/notice/fde9edf477b149078444e11d8b16d85c">关于新增微企贷项目期限的通知</a></span>
                <i class="am-text-middle">2018-11-13</i>
              </li>
              <li>
                <span class="am-text-truncate am-text-middle"><a
                  href="/article/notice/839b54d153bd4d66806d3211b0f859d3">双十一“做任务，领好礼”活动公告</a></span>
                <i class="am-text-middle">2018-11-07</i>
              </li>
              <li>
                <span class="am-text-truncate am-text-middle"><a
                  href="/article/notice/ad225fc8dbbb47128f339beb5a9ee511">神秘礼包来袭</a></span>
                <i class="am-text-middle">2018-11-01</i>
              </li>
              <li>
                <span class="am-text-truncate am-text-middle"><a
                  href="/article/notice/7ba75029a88344b9b6d1d78dd0f112ef">关于10月活动奖励发放的公告</a></span>
                <i class="am-text-middle">2018-11-01</i>
              </li>
              <li>
                <span class="am-text-truncate am-text-middle"><a
                  href="/article/notice/d72e2b33db9f4139ba64d4c225e035c2">关于微花贷出借奖励调整的公告</a></span>
                <i class="am-text-middle">2018-10-30</i>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--menu-->
      <div class="am-g header-menu am-text-center">
        <div class="am-u-sm-10 am-u-sm-centered">
          <div class="am-u-sm-4 my-coupons">
            <a href="/event/novice">
              <i class="ball"></i>
              <p>新手红包</p>
            </a>
          </div>
          <div class="am-u-sm-4">
            <a href="/static/depositoryInfo">
              <i class="ball"><!--图标--></i>
              <p>银行存管</p>
            </a>
          </div>
          <div class="am-u-sm-4">
            <a href="/static/companyList">
              <i class="ball"><!--图标--></i>
              <p>上市背景</p>
            </a>
          </div>
        </div>
      </div>
      <!--首页标的-->
      <!--易智投  -->
      <div id="recommendProductLayer" class="home-product-info">
        <h4 class="target-prdname am-text-primary">易智投<span class="target-prdno">易智投3月期</span></h4>
        <p class="am-text-muted am-text-sm">协议约定年化利率<i
          data-am-popover="{trigger:'click',content: '此利率不构成亿钱贷对出借人的任何承诺，最终收益以实际为准'}"
          class="icon-font icon-wenhao pop-show"></i></p>
        <p class="rate am-text-secondary"><span class="target-rate span-rate">9.5%+3%</span>
          <span class="target-award-rate-div span-rate"></span>
        </p>
        <div class="detail am-text-center am-g">
          <div class="am-u-sm-6">
            <strong class="target-month">3个月</strong>
            <p class="am-text-muted">委托期限</p>
          </div>
          <div class="am-u-sm-6">
            <strong><span class="target-min">1,000.00</span>元</strong>
            <p class="am-text-muted">最低委托金额</p>
          </div>
        </div>
        <a class="am-btn am-btn-secondary am-btn-block am-round am-btn-xl invest-btn link-btn"
           href="/product/index?defineId=2e2ffb91479843b5a951d76af08ae2b3">委托出借</a>
      </div>
      <!--信披-->
      <div class="am-g xinpi-layer am-text-center">
        <div class="am-u-sm-6">
          <a class="boxer" href="/static/data">
            <i class="icon-font icon-ptyy am-text-primary"></i>
            <p class="am-text-muted">运营数据</p>
          </a>
        </div>
        <div class="am-u-sm-6">
          <a class="boxer" href="/static/hegui">
            <i class="icon-font icon-hgjc am-text-primary"></i>
            <p class="am-text-muted">合规进程</p>
          </a>
        </div>
      </div>
      <p class="am-text-center am-text-muted">
        <i class="icon-font icon-aqhg- vertical-middle"></i>
        <span class="vertical-middle">资金已由新网银行存管，安全更合规</span>
      </p>
      <!--客服热线-->
      <div class="am-g kefu am-text-center">
        <p class="am-text-primary">
          客服热线 <a class="am-text-primary" href="tel:400-090-9968">400-090-9968</a>
        </p>
        <p class="am-text-muted time">
          服务时间 9:00-18:00
        </p>
      </div>
      <!--app下载-->
      <div class="bottom-download-app am-text-center">
        <p class="title">了解更多精选产品</p>
        <p>
          <a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.yiqiandai.p2p"
             class="am-btn btn-download am-round">下载亿钱贷 APP</a>
        </p>
      </div>
    </div>
    <footerMenu/>
  </div>
</template>

<script>
  import footerMenu from '@layout/footerMenu.vue'

  export default {
    name: 'Index',
    components: {
      footerMenu
    },
    data() {
      return {}
    }
  }
</script>

<style lang="less">
  @import "~@/style/less/global.less";
  @import "~@components/amaze/styles/variables";
  body {
    background: #F3F3F3; /* 一些不支持背景渐变的浏览器 */
    background: linear-gradient(to bottom, #F3F3F3 0%, #E2E3E3 100%);
  }
  .am-header-left{
    display: none;
  }
  .download-app {
    padding: 0.1rem;
    background-color: #fff;
    .logo {
      img {
        width: 2rem;
        max-width: 100%;
      }
      .logo-text {
        width: 1.2rem;
        font-size: 12px;
        margin: 0px 0 0 5px;
        p {
          margin: 0;
          line-height: 1.2;
        }
      }
    }
  }

  .header-menu {
    line-height: 1.4;
    padding: .1rem 0;
    background-color: #fff;
    .ball {
      display: block;
      width:.5rem;
      height:.5rem;
      padding:.07rem 0 0;
      margin:0 auto .06rem;
      background: url(/src/assets/home_info_list.png) no-repeat;
      background-size: cover;

    }
    .am-u-sm-4:nth-child(2){
      .ball{
        background-position:-1.95rem 0;
      }
    }
    .am-u-sm-4:nth-child(3){
      .ball{
        background-position:-2.9rem 0;
      }
    }
    .my-coupons{
      .ball{
        background-position:-1rem 0;
      }
    }
    .my-coupons-active{
      .ball{
        width:.72rem;
        background-position:-1rem 0;
      }
      p{
        text-align: left;
        padding:0 0 0 .15rem;
      }
    }
    p {
      color: #534838;
      margin: 0;
      font-size:12px;
    }
  }

  .notice {
    position: relative;
    padding: .05rem .15rem;
    line-height: 1.3;
    background-color: #fff;
    .more {
      position: absolute;
      top: .01rem;
      right: .08rem;
      font-size: 20px;
      z-index: 999;
    }
    .icon-laba {
      font-size: 18px;
    }
    .list {
      height: .2rem;
      line-height: .2rem;
      overflow: hidden;
      padding:.02rem 0 0 0;
      ul {
        position: relative;
        color: #333;
        height: .2rem;
        transition: top .3s ease;
        li {
          line-height: 1.4;
          span {
            display: inline-block;
            width: 2rem;
            a{
              color:#333;
            }
          }
          i {
            font-style: normal;
          }
        }

      }
    }
  }
  .home-product-info{
    position: relative;
    background: #fff;
    box-shadow: 0 5px 9px 2px rgba(26,111,255,0.05);
    margin:.1rem 0 0;
    padding:.1rem 0 .2rem;
    &.no-login{
      margin-bottom:1.3rem;
    }
    .new-hard-icon{
      position: absolute;
      top:0rem;
      right:.3rem;
      width:.48rem;
    }
    .new-hard-tips{
      height: .26rem;
      line-height: .24rem;
      border:2px solid #ffd570;
      background-color: #fefae2;
      color:#7a552b;
      width:1.8rem;
      margin:0 auto .2rem;
      font-weight: bold;
      border-radius: 6px;
    }
    .target-prdname{
      padding:0 0 .1rem;
      margin:0 .15rem .2rem;
      font-size: 16px;
      font-weight: bold;
      border-bottom:1px solid #ececec;
      span{
        color:#999;
        font-size: 12px;
        margin:0 0 0 5px;
      }
    }
    i{
      font-size: 14px;
      color:#888;
      margin:0 0 0 .03rem;
    }
    p{
      text-align: center;
      margin:0;
      &.rate{
        line-height: 1.4;
        span{
          font-size: 24px;
          &.span-rate{
            font-size:40px;
          }
        }
      }
    }
    .detail{
      padding:.1rem .2rem;
      margin:0 0 .1rem;
      color:#666;
      strong{
        font-size: 16px;
      }
      span.split{
        color:#b28850;
        margin:0 .2rem;
      }
      p{
        font-size: 12px;
      }
    }
    .invest-btn{
      margin:0 auto .1rem;
      width:80%;
      display: block;
    }
  }
  .xinpi-layer{
    margin:.2rem .1rem;
    .boxer{
      margin:0 .07rem;
      padding:.1rem 0;
      background-color: #fff;
      border-radius: 8px;
      display: block;
      i{
        font-size: 22px;
      }
      p{
        margin:.05rem 0 0;
        font-size: 15px;
      }
    }
  }
  .kefu {
    padding: .12rem 0;
    margin: 0 0 .1rem;
    p {
      margin: 0;
      &.time {
        font-size: 12px;
      }
    }
  }

  .bottom-download-app {
    width:2.6rem;
    margin:0 auto;
    padding: .2rem 0;
    border-top:1px dotted #cacaca;
    color: #000;
    p {
      margin: 0;
      &.title {
        margin: 0 0 .06rem;
      }
    }
  }
  .new-hard-layer{
    background: #fff; /* 一些不支持背景渐变的浏览器 */
    background: linear-gradient(135deg, #fff, #d8d8d8);
    margin:.2rem 0 0;
    padding:0 0 .12rem;
    border-bottom:1px solid #e9e9e9;
    border-top:1px solid #e9e9e9;
    color:#666;
    .title-info{
      font-weight: bold;
      margin:0;
    }
    img{
      width:100%;
      margin:-.06rem 0 .2rem;
    }
    .info{
      padding:.1rem .2rem;
      margin:.25rem 0 .15rem;
      p{
        margin:0 0 .1rem;
        line-height: 1;
        font-size: 16px;
        font-weight: 600;
        &.rate{
          margin:-.22rem 0 .06rem;
          font-size: 18px;
          font-weight: normal;
          span{
            font-size: 42px;
          }
        }
      }
    }
    .am-btn{
      width:1.4rem;
    }
  }
  .list-title{
    margin:.15rem .5rem;
    background: url('/src/assets/title_split.png') no-repeat center center;
    background-size: contain;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
  }
</style>
