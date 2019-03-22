/**
 * Created by lidy on 2019/3/7.
 */

import Vue from "vue";
import VeeValidate from "vee-validate";
import VueI18n from "vue-i18n";
import zh_CN from "vee-validate/dist/locale/zh_CN";
import  { Validator } from "vee-validate";
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: "zh_CN"
});
Vue.use(VeeValidate, {
  errorBagName: 'veeErrors',
  i18n,
  i18nRootKey: "validation",
  dictionary: {
    zh_CN
  }
});
/*自定义方法*/
Validator.extend("mobile", {
  getMessage: field => "手机格式不正确",
  validate: value =>
    value.length === 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
});
Validator.extend("ID", {
  getMessage: field => "身份证格式不正确",
  validate: idNo =>{
      let city = {
        11: "北京",
        12: "天津",
        13: "河北",
        14: "山西",
        15: "内蒙古",
        21: "辽宁",
        22: "吉林",
        23: "黑龙江 ",
        31: "上海",
        32: "江苏",
        33: "浙江",
        34: "安徽",
        35: "福建",
        36: "江西",
        37: "山东",
        41: "河南",
        42: "湖北 ",
        43: "湖南",
        44: "广东",
        45: "广西",
        46: "海南",
        50: "重庆",
        51: "四川",
        52: "贵州",
        53: "云南",
        54: "西藏 ",
        61: "陕西",
        62: "甘肃",
        63: "青海",
        64: "宁夏",
        65: "新疆",
        71: "台湾",
        81: "香港",
        82: "澳门",
        91: "国外 "
      };

      if (!idNo || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(idNo)) {
        return false;
      }

      if (!city[idNo.substr(0, 2)]) {
        return false;
      }

      //18位身份证需要验证最后一位校验位
      if (idNo.length == 18) {
        var arrExp = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];//加权因子
        var arrValid = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2];//校验码
        var sum = 0, idx;
        for (var i = 0; i < idNo.length - 1; i++) {
          // 对前17位数字与权值乘积求和
          sum += parseInt(idNo.substr(i, 1), 10) * arrExp[i];
        }
        // 计算模（固定算法）
        idx = sum % 11;
        // 检验第18为是否与校验码相等
        return arrValid[idx] == idNo.substr(17, 1).toUpperCase();
      }
      return true
  }
});
// 自定义validate
const Dictionary = {
  zh_CN: {
    messages: {
      required: field => "请输入"+field
    }
  }
};
// 自定义validate error 信息
Validator.localize(Dictionary);

export const validName = value => {
  return value&&value.length<10
}


export const validMobile = value => {
  let length = value.length;
  let mobile = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
  return length===11&&mobile.test(value)
}

export const validCode = value => {
  let length = value.length;
  return length===6
}
