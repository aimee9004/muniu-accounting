
let validateObj = {
	// 股东比例
	checkNum: (rule, value, callback) => {
		if (!value) {
			return callback(new Error('股东比例不能为空'));
		}else if (!/^\s*\d+\s*$/.test(value)) {
			return callback(new Error('请输入股东比例'));
		}else{
			callback()
		}
	},

    vNotNull: (msg="") => {
        return (rule, value, callback) => {
            let reg = new RegExp(/^\s*\s*$/)        // 判断为空串
            if (!value || !!reg.test(value)) {
                return callback(new Error(`${msg}不能为空`));
            }else{
                callback()
            }
        }
    },

	// 手机
    vMobile: (rule, value, callback) => {
        var reg_mobile = new RegExp(/^\s*(((13[0-9]{1})|(14[5,7,9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})\s*$/);	//验证130-139,145:147:149,150-159,170-179,180-189号码段的手机号码
        var reg_phone = new RegExp(/^\s*((0\d{2,3})-)(\d{7,8})(-(\d{3}))?\s*$/);	//验证座机
        var reg_special = new RegExp(/^\s*[4,8]{1}00\d{7}\s*$/);	//400[0-9]/800[0-9]
        if (!!value && (!reg_mobile.test(value)) && (!reg_phone.test(value)) && (!reg_special.test(value))) {
            callback(new Error('手机号码格式有误'))
        }else {
            callback()
        }
    },
    
    // 价格
    vNumber: (rule, value, callback) => {
        // let reg = new RegExp(/(^[1-9]([0-9]){0,6}(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/); //开头数字若干位，可能有一个小数点，小数点后面可以有(两位)数字
        // let reg = new RegExp(/^[0-9][0-9]{0,6}$/); //限制输入1-9999999数字
        let reg = new RegExp(/^\s*[0-9]*\s*$/); //限制输入数字
        if(!reg.test(value) && !!value){
            callback(new Error('请输入数字'))
        }else{
            callback()
        }
    },

    // 金豆数量
    vDouNum: (rule, value, callback) => {
        // let reg = new RegExp(/(^[1-9]([0-9]){0,6}(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/); //开头数字若干位，可能有一个小数点，小数点后面可以有(两位)数字
        // let reg = new RegExp(/^[0-9][0-9]{0,6}$/); //限制输入1-9999999数字
        let reg = new RegExp(/^\s*[0-9]{0,9}\.?([0-9]{0,2})?\s*$/); //限制输入数字 '   12345678.000199999  '
        if(!reg.test(value) && !!value){
            callback(new Error('请输入不大于999999999.99的最多保留两位小数的正数'))
        }else{
            callback()
        }
    },
    
    vPrice: (rule, value, callback) => {
        let reg = new RegExp(/^\s*\d*(\.\d{1,})?\s*$/)
        if(!reg.test(value) && !!value) {
            callback(new Error('请输入正确的价格'))
        }else {
            callback()
        }
    },

    vComponyName: (rule, value, callback) => {
        let reg = new RegExp(/[\u4e00-\u9fa5\(\)\（\）]$/)
        if(!reg.test(value) && !!value) {
            callback(new Error('请输入正确的公司名称(需要输入中文)'))
        }else {
            callback()
        }
    }
}
export default validateObj
