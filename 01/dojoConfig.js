var locationPath = window.location.pathname.replace(/\/[^\/]+$/, '/');
window.dojoConfig = {
    // Dojo加载后立即加载的资源路径数组：
    deps: ['app/main'], //通过声明[app/main ]是项目的依赖项，当应用程序启动时，app/main模块将自动加载。你实际上可以在这个数组中列出在应用程序之前需要加载的任何模块。
    // 提供包名称和位置的对象数组
    packages: [{ 
        name: 'app',//包的名字
        location: locationPath + 'dist/app',//包的地址
    }]
};
console.log(window.dojoConfig);

