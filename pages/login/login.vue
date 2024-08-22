<template>
  <view class="content">
    <view class="topBox">
      <h3>WELCOME</h3>
      <h3>欢迎使用某某应用</h3>
    </view>
    <view class="inputBox">
      <view class="tab">
        <view
          class="tab-item"
          :class="{ active: loginType === 'password' }"
          @click="loginType = 'password'"
        >
          密码登录
        </view>
        <view
          class="tab-item"
          :class="{ active: loginType === 'sms' }"
          @click="loginType = 'sms'"
        >
          短信登录
        </view>
      </view>
      <view v-if="loginType === 'password'" class="ipt">
        <h4>手机号</h4>
        <input 
        adjust-position="false"
   @focus="handleFocus"
        @blur="handleBlur"
          type="text" 
          placeholder="请输入手机号码" 
        />
        <h4>密码</h4>
        <view class="password-wrapper">
          <input
           :adjust-position="false"
     @focus="handleFocus"
        @blur="handleBlur"
            :type="showPassword ? 'password' : 'text'"
            placeholder="请输入密码"
          />
          <view class="icon-btn" @click="togglePasswordVisibility">
            <uni-icons
              v-show="!showPassword"
              type="eye"
              size="20"
              color="#333"
            ></uni-icons>
            <uni-icons
              v-show="showPassword"
              type="eye-slash"
              size="20"
              color="#333"
            ></uni-icons>
          </view>
        </view>
        <view class="loginBtn">登录</view>
      </view>
      <view v-if="loginType === 'sms'" class="ipt">
        <h4>手机号</h4>
        <input 
           @focus="handleFocus"
        @blur="handleBlur"
          type="text" 
          placeholder="请输入手机号码" 
        />
        <h4>验证码</h4>
        <view class="code-input">
          <input 
             @focus="handleFocus"
        @blur="handleBlur"
            type="text" 
            placeholder="请输入验证码" 
          />
          <view
            class="send-code-btn"
            :class="{ disabled: countdown > 0 }"
            @click="sendVerificationCode"
          >
            {{ countdown > 0 ? countdown + "秒后重发" : "发送验证码" }}
          </view>
        </view>
        <view class="loginBtn">登录</view>
      </view>
      <view class="registerBtn" @click="goSign">注册</view>
      <view class="tipbox">
        <view class="txt">
          —— 其他账号登录 ——
        </view>
        <view class="otherUser">
          <uni-icons
            @click="goWx"
            type="weixin"
            size="40"
            color="rgb(2,187,17)"
          ></uni-icons>
        </view>
      </view>
    </view>
  </view>
</template>
<script setup>
import { ref } from "vue";
import uniIcons from "@/components/uni-icons/uni-icons.vue";

// 切换登录方式  可选 'password' 或 'sms'
const loginType = ref("password");
const showPassword = ref(true); // 控制密码是否显示

// 切换密码显示状态
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const countdown = ref(0);
let timer = null;

// 发送验证码
const sendVerificationCode = () => {
  if (countdown.value > 0) {
    return; // 如果倒计时未结束，不允许重新发送
  }

  // 模拟发送验证码的逻辑
  uni.showToast({
    title: "验证码已发送",
    icon: "none",
  });

  // 开始倒计时
  countdown.value = 60;
  timer = setInterval(() => {
    if (countdown.value > 0) {
      countdown.value--;
    } else {
      clearInterval(timer);
    }
  }, 1000);
};

// 点击注册提示
const goSign = () => {
  return uni.showToast({
    title: "暂未开发",
    icon: "none",
  });
};

// 点击WX提示
const goWx = () => {
  return uni.showToast({
    title: "暂未开发",
    icon: "none",
  });
};

const handleFocus = () => {
  setTimeout(() => {
    uni.pageScrollTo({
      scrollTop: 0,
      duration: 0,
    });
  }, 100);
};

const handleBlur = () => {
  setTimeout(() => {
    uni.pageScrollTo({ scrollTop: 0, duration: 0 });
    uni.hideKeyboard(); // 手动收起键盘
  }, 100);
};

</script>
<style scoped>
.content {
  height: 100vh;
  background-color: aquamarine;
  background: url("https://www.galaxyclub.cn/Upload/IMAGES/15/0615/38af439784544e95b7c64cad64a14157_650x650.jpg") no-repeat;
  background-size: cover;
}

.topBox {
  font-size: 34rpx;
  color: #fff;
  padding: 80rpx 50rpx;
}

h3 {
  margin-bottom: 10rpx;
}


.inputBox {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 85vh;
  background-color: #fff;
  border-top-left-radius: 40rpx;
  border-top-right-radius: 40rpx;
  padding: 30rpx;
  box-sizing: border-box;
  z-index: 100;
}


.tab {
  display: flex;
  margin-bottom: 30rpx;
}

.tab-item {
  flex: 1;
  text-align: center;
  padding: 20rpx 0;
  font-size: 28rpx;
  color: #333;
  cursor: pointer;
  position: relative;
  transition: color 1s ease;
}

.tab-item.active {
  color: #4a90e2;
}

.tab-item.active::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 20%;
  width: 60%;
  height: 4rpx;
  background-color: #4a90e2;
  border-radius: 2rpx;
}

.ipt {
  margin-bottom: 50rpx;
}

.password-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.password-wrapper input {
  flex: 1;
  border-bottom: 1px solid #dedede;
  padding-bottom: 20rpx;
  font-size: 28rpx;
  padding-right: 40rpx; /* Space for the icon */
}

.icon-btn {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}

.code-input {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.code-input input {
  flex: 1;
  padding-right: 120rpx;
  border-bottom: 1px solid #dedede;
  padding-bottom: 20rpx;
  font-size: 28rpx;
}

.send-code-btn {
  position: absolute;
  right: 0;
  top: 30%;
  transform: translateY(-50%);
  padding: 10rpx 20rpx 10rpx 20rpx;
  background-color: #4a90e2;
  color: white;
  cursor: pointer;
  font-size: 28rpx;
  border-radius: 5rpx;
  transition: background-color 0.3s;
}

.send-code-btn.disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.ipt h4 {
  margin-bottom: 20rpx;
  font-size: 36rpx;
  color: #333;
}

.ipt input {
  border-bottom: 1px solid #dedede;
  padding-bottom: 20rpx;
  font-size: 28rpx;
}

.loginBtn {
  margin-top: 20rpx;
  line-height: 85rpx;
  text-align: center;
  background: linear-gradient(to right, rgb(86, 104, 214), rgb(86, 104, 214));
  border-radius: 40rpx;
  color: #fff;
  margin-top: 50rpx;
}

.registerBtn {
  margin-top: 20rpx;
  line-height: 85rpx;
  text-align: center;
  border-radius: 40rpx;
  color: rgb(86, 104, 214);
  margin-top: 50rpx;
  border: none;
}

.otherUser {
  margin-top: 30rpx;
  display: flex;
  justify-content: center;
}

.txt {
  font-size: 28rpx;
  color: #969696;
  text-align: center;
  margin-top: 36rpx;
}

.otherUser .uni-icons {
  margin-left: 20rpx;
}
input, textarea {
  outline: none;
  border: none;
  width: 100%;
}

</style>
