
var SERVER_URL = "http://10.192.2.66:8080";
//var SERVER_URL = "http://10.192.6.19:8080";

var SCANCODE_QUERY_PATH = "/common/foodsNrvAction!gotoDetail.action";
var SERVER_ROOT_PATH = '/salt_reduction';
//商品详情 出售超市
var SAIL_SUPERMARKET_LIST = '/common/foodsNrvAction!showSupermarketsApp.action';
//同类低盐推荐  （非减盐超市入口）
var SAME_KIND_PATH = "/common/foodsNrvAction!lowSaltrecommend.action";
//减盐食品入口
var ALL_FOOD_KIND_PATH = "/common/foodsClassAction!fetchFoodAllApp.action";
//减盐食品列表
var LOW_SALT_LIST = "/common/foodsNrvAction!getFoodsByProductType.action";

//减盐搜索
var SEARCH_FOOD = "/common/foodsNrvAction!appSearch.action";
//超市搜索
var SEARCH_SUPERMARKET = "/common/supermarketAction!appSearchSupermarket.action";
//餐厅搜索
var SEARCH_RESTAURANT = "/common/restaurantAppAction!searchAreaRestaurant.action";

//分享历史
var SHARE_HISTORY = "/common/shareHistoryAction!appAdd.action";
//是否可以签到
var CAN_SIGNIN = "/common/signInAction!canSignIn.action";
//签到
var SIGNIN = "/common/signInAction!signIn.action";

function varIsNull(saveuser) {

	if (saveuser == null || saveuser == '' || saveuser == undefined) {
		return true;
	}
	return false;
}

function processNetWorkErr(err) {
	if (!varIsNull(err)) {
		api.alert({
			msg : '请检测网络！',
			buttons : ['确定']
		}, function(ret, err) {
			//coding...
		});
		return true;
	}
}


function toFixedWithNoZeroEnd(num) {
			var strnum = String(num);
			if (strnum.indexOf(".00") > 0) {
			 return parseInt(strnum);
			}
			
			if (strnum.indexOf("0") == strnum.length -1) {
				return parseFloat(strnum).toFixed(1);
			}
			
			return num;
			
		}