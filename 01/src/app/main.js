// 导入esri相关包
import Map from 'esri/Map';
import SceneView from 'esri/views/SceneView';
// 声明map对象
const map = new Map({ basemap: 'topo' });
// 声明view对象，进行地图显示设置
const view = new SceneView({
	container: 'viewDiv',//地图容器id
	map,//map对象
	center: [ -118.182, 33.913 ],//显示中心
	scale: 836023//比例尺
});
