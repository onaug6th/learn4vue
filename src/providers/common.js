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