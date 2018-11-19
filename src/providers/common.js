import Vue from 'vue';

/**
 * 项目配置相关文件，存放一些通用方法
 */

const methods = {
    /**
     * 事件中转，用于全部通用组件
     * @param {string} eventName 事件名称
     * @param {object} item 当前对象
     * @param {any} param 参数
     */
    eventsTransfer(eventName, item, param) {

        item['events'] = item['events'] || {};

        const event = item['events'][eventName];

        event && typeof event['fn'] == "function" ?
            event['fn'].apply(this, event['params'] ? [param, ...event['params']] : [param]) :
            "";
    },

    /**
     * 校验手机号码
     * @param {string | number} tel 
     * @returns {boolean} 真或否
     */
    isPhoneNum: function (tel) {
        return /^1(3[0-9]|4[57]|5[0-35-9]|7[0-9]|8[0-9])\d{8}$/.test(tel);
    },

    /**
     * 校验固话
     * @param {string | number} tel 
     * @returns {boolean} 真或否
     */
    isFixedPhone: function (tel) {
        return /(0[1-9]\d{1,2}-)?[1-9]\d{6,7}/.test(tel);
    },

    /**
     * 校验邮箱
     * @param {string} email 邮箱地址
     * @returns {boolean} 真或否
     */
    isEmail: function (email) {
        return /^\w+@[a-z0-9\-]+(\.[a-z]{2,6}){1,2}$/i.test(email);
    },

    /**
     * 是否银行卡
     * @param {string} cardNo 银行卡号
     * @returns {boolean} 真或否
     */
    isBankCard: function (cardNo) {
        return /^(\d{16}|\d{19})$/.test(cardNo);
    },

    /**
     * 校验六位密码
     * @param {string} pwd 密码
     * @returns {boolean} 真或否
     */
    isTradePwd: function (pwd) {
        return /^\d{6}$/.test(pwd);
    },

    /**
     * 校验身份证号码
     * @param {string} id 身份证号
     * @returns {boolean} 真或否
     */
    isId: function (id) {
        if (id.length != 18) { return false; }
        //  系数
        var coefficient = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
        //  校验位
        var parity = [1, 0, 'x', 9, 8, 7, 6, 5, 4, 3, 2];
        var total = 0;
        for (var i = 0; i < coefficient.length; i++) {
            if (isNaN(id[i])) return false;
            total += id[i] * coefficient[i];
        }

        if (parity[total % 11] != id[17].toLowerCase()) {
            return false;
        }

        return true;
    }
}

/**
 * 设置Vue原型属性
 * @param {Array} objArr 
 */
function setAttrToVue(objArr) {

    !Array.isArray(objArr) && (objArr = [objArr]);

    objArr.forEach((item) => {
        for (let i in item) {
            Vue.prototype[i] ?
                window["console"]["info"](`${i}已经存在，类型是${typeof (Vue.prototype[i])}。为避免篡改已有属性，不做覆盖。`) :
                Vue.prototype[i] = item[i];
        }
    });
}

setAttrToVue(methods);

export { setAttrToVue, methods }