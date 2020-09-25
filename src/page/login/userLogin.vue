<template>
  <div class="login_container">
    <div class="rating-page">
      <div class="logo">
        <img :src="logo" alt="" />
      </div>
      <div class="nav_wrapper" style="display: none">
        <div
          class="nav_item"
          @click="toggleTab(0)"
          :class="{ selected: selectedTab === 0 }"
        >
          账号密码
        </div>
        <span class="divider-line"></span>
        <div
          class="nav_item"
          @click="toggleTab(1)"
          :class="{ selected: selectedTab === 1 }"
        >
          验证码
        </div>
      </div>
      <div class="login_form">
        <section class="field-item-container">
          <mt-field
            label="手机号码"
            placeholder="请输入手机号码"
            v-model="userInfo.username"
          ></mt-field>
          <div class="divider-block" style="background: #fff"></div>
          <mt-field
            v-show="selectedTab === 0"
            label="账号密码"
            placeholder="请输入账号密码"
            type="password"
            v-model="userInfo.password"
          ></mt-field>
          <mt-field
            v-show="selectedTab === 1"
            label="短信验证码"
            placeholder="请输入"
            v-model="userInfo.message"
            :attr="{ maxlength: 4 }"
          >
            <mt-button
              class="getMsgCode"
              type="primary"
              size="normal"
              @click.native="getMsgCode"
              :class="!isSendBtnEable && 'disabled'"
              v-text="btnText"
            ></mt-button>
          </mt-field>
        </section>
      </div>
      <!--底部下一步按钮组件-->
      <next-btn
        :enable="validSuc"
        formType="login"
        text="登录"
        @toNext="submitForm"
      ></next-btn>
      <div class="deal-wrapper">
        <span
          class="checkbox"
          :class="{ selected: userInfo.dealFlag }"
          @click="toggleDealStatus"
        ></span>
        <div>
          我已阅读并同意
          <router-link :to="{ path: '/deal/1' }"
            >《马上消费金融注册协议》</router-link
          >
          <br />
          <router-link :to="{ path: '/deal/2' }">《隐私权政策》</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import headTop from "@/components/header/headTop";
import nextBtn from "@/components/common/nextBtn";
import topProgress from "@/components/common/topProgress";
import { verifyRules } from "@/config/verifyRules";
import { MessageBox, Toast } from "mint-ui";
import { mapMutations, mapActions, mapGetters } from "vuex";
import { getLoginMsg, toLogin } from "@/service/getData";
import { Indicator } from "mint-ui";
export default {
  data() {
    return {
      logo: require("@/assets/top_logo.png"),
      selectedTab: 0,
      timer: null,
      count: 59,
      btnText: "发送验证码",
      isSendBtnEable: true,
      userInfo: {
        username: "",
        password: "",
        dealFlag: true,
      },
    };
  },
  computed: {
    validSuc: function () {
      if (
        verifyRules.phone(this.userInfo.username, false) &&
        this.userInfo.dealFlag
      ) {
        //手机号正确
        if (this.selectedTab === 0 && this.userInfo.password) {
          return true;
        }
      }
      return false;
    },
  },
  components: {
    headTop,
    nextBtn,
  },
  mounted() {},
  created() {},
  methods: {
    //切换登录方式
    toggleTab(index) {
      this.selectedTab = index;
    },
    //勾选协议
    toggleDealStatus() {
      this.userInfo.dealFlag = !this.userInfo.dealFlag;
    },
    submitForm() {
      Indicator.open('登录中...');
      // 校验输入是否正确
      if (verifyRules.phone(this.userInfo.username)) {
        //md5加密账号密码(提交上传)
        toLogin(this.userInfo).then((res) => {
          Indicator.close();
          const { code, data } = res;
          // 将token存入本地
          sessionStorage.setItem('token', data.token);
          if (res.code === 200) {
            Toast('登录成功!');
            this.$router.push("/confirmLoan");
          }
        }).catch(() => {
          Indicator.close();
        })
      }
    },
  },
};
</script>
<style lang="scss" scope>
@import "src/style/scss/mixin";
.logo {
  text-align: center;
  margin-bottom: 0.2rem;
}
.nav_wrapper {
  box-sizing: border-box;
  margin-bottom: 0.3rem;
  padding-left: 0.15rem;
  @include fj(flex-start);
  @include sc(24px, #000);
  div.nav_item {
    color: #ccc;
    position: relative;
    padding-bottom: 0.1rem;
    &.selected {
      color: #000;
    }
    &.selected:after {
      content: " ";
      background-color: $color-primary;
      width: 0.3rem;
      height: 3px;
      border-radius: 3px;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .divider-line {
    background-color: #ddd;
    width: 1px;
    height: 14px;
    position: relative;
    top: -6px;
    display: inline-block;
    margin: 0 0.13rem;
  }
}
.login_container {
  .rating-page {
    top: 0.5rem;
    background-color: #fff;
  }
}
.deal-wrapper {
  display: flex;
  padding: 0 0.15rem;
  height: 20px;
  line-height: 20px;
  div:last-child {
    margin-left: 0.05rem;
    line-height: 1.7;
  }
  a {
    color: $color-primary;
  }
}
.divider-block {
  width: 100%;
  height: 0.15rem;
}

.getCaptcha.mint-button {
  height: 35px;
  margin-left: 0.5rem;
}
</style>
