"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  uniIcons();
}
const uniIcons = () => "../../components/uni-icons/uni-icons.js";
const _sfc_main = {
  __name: "login",
  setup(__props) {
    const loginType = common_vendor.ref("password");
    const showPassword = common_vendor.ref(true);
    const togglePasswordVisibility = () => {
      showPassword.value = !showPassword.value;
    };
    const countdown = common_vendor.ref(0);
    let timer = null;
    const sendVerificationCode = () => {
      if (countdown.value > 0) {
        return;
      }
      common_vendor.index.showToast({
        title: "验证码已发送",
        icon: "none"
      });
      countdown.value = 60;
      timer = setInterval(() => {
        if (countdown.value > 0) {
          countdown.value--;
        } else {
          clearInterval(timer);
        }
      }, 1e3);
    };
    const goSign = () => {
      return common_vendor.index.showToast({
        title: "暂未开发",
        icon: "none"
      });
    };
    const goWx = () => {
      return common_vendor.index.showToast({
        title: "暂未开发",
        icon: "none"
      });
    };
    const handleFocus = () => {
      setTimeout(() => {
        common_vendor.index.pageScrollTo({
          scrollTop: 0,
          duration: 0
        });
      }, 100);
    };
    const handleBlur = () => {
      setTimeout(() => {
        common_vendor.index.pageScrollTo({ scrollTop: 0, duration: 0 });
        common_vendor.index.hideKeyboard();
      }, 100);
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: loginType.value === "password" ? 1 : "",
        b: common_vendor.o(($event) => loginType.value = "password"),
        c: loginType.value === "sms" ? 1 : "",
        d: common_vendor.o(($event) => loginType.value = "sms"),
        e: loginType.value === "password"
      }, loginType.value === "password" ? {
        f: common_vendor.o(handleFocus),
        g: common_vendor.o(handleBlur),
        h: common_vendor.o(handleFocus),
        i: common_vendor.o(handleBlur),
        j: showPassword.value ? "password" : "text",
        k: !showPassword.value,
        l: common_vendor.p({
          type: "eye",
          size: "20",
          color: "#333"
        }),
        m: showPassword.value,
        n: common_vendor.p({
          type: "eye-slash",
          size: "20",
          color: "#333"
        }),
        o: common_vendor.o(togglePasswordVisibility)
      } : {}, {
        p: loginType.value === "sms"
      }, loginType.value === "sms" ? {
        q: common_vendor.o(handleFocus),
        r: common_vendor.o(handleBlur),
        s: common_vendor.o(handleFocus),
        t: common_vendor.o(handleBlur),
        v: common_vendor.t(countdown.value > 0 ? countdown.value + "秒后重发" : "发送验证码"),
        w: countdown.value > 0 ? 1 : "",
        x: common_vendor.o(sendVerificationCode)
      } : {}, {
        y: common_vendor.o(goSign),
        z: common_vendor.o(goWx),
        A: common_vendor.p({
          type: "weixin",
          size: "40",
          color: "rgb(2,187,17)"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e4e4508d"]]);
wx.createPage(MiniProgramPage);
