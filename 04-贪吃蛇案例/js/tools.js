//求随机数的工具对象
(function () {
    var Tools = {
        getRandom : function (min, max) {
            return parseInt(Math.random() * (max - min) + min);
        }
    }
    window.Tools = Tools;
})()
