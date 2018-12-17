define(['esri/Map', 'esri/views/SceneView'], function (_Map, _SceneView) {
	'use strict';

	var _Map2 = _interopRequireDefault(_Map);

	var _SceneView2 = _interopRequireDefault(_SceneView);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	// 声明map对象
	// 导入esri相关包
	var map = new _Map2.default({ basemap: 'topo' });
	// 声明view对象，进行地图显示设置
	var view = new _SceneView2.default({
		container: 'viewDiv', //地图容器id
		map: map, //map对象
		center: [-118.182, 33.913], //显示中心
		scale: 836023 //比例尺
	});
});
//# sourceMappingURL=main.js.map