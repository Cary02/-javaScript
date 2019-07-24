//js代码中的代码都是全局作用域   这样会导致命名可能重复等问题
//食物对象
//具有的属性 x坐标  y坐标  width  height  backgroundColor


//自调用函数  开启一个新的作用域，避免命名冲突的问题

(function () {
    //作用：记录上一次的创建的food ，为删除做准备
    var arr = [];
    function Food(options) {
        //先判断是否传入options
        options = options || {};
        //设置属性
        this.width = options.width || 20;
        this.height = options.height || 20;
        this.x = options.x || 0;
        this.y = options.y || 0;
        this.backgroundColor = options.backgroundColor || 'green';

    }

//界面渲染
    Food.prototype.render = function (map) {
        //当蛇碰到food的时候删除之前创建的food
        remove(arr);
        //创建food的div
        var div = document.createElement( 'div' );
        map.appendChild( div );
        arr.push(div);

        //设置随机坐标
        this.x = Tools.getRandom( 0, map.offsetWidth / this.width - 1 ) * this.width;
        this.y = Tools.getRandom( 0, map.offsetHeight / this.height - 1 ) * this.height;
        //设置food属性
        div.style.position = 'absolute';
        div.style.left = this.x + 'px';
        div.style.top = this.y + 'px';
        div.style.width = this.width + 'px';
        div.style.height = this.height + 'px';
        div.style.backgroundColor = this.backgroundColor;
    }
    function remove(arr) {
        //遍历food元素
        for (var i = arr.length - 1; i >= 0; i--) {
            var element = arr[i];
            //删除div
            element.parentNode.removeChild(element);
            //删除数组中对应的food
            //splice(参数1， 参数2)
            //参数1：开始位置的索引
            //参数2：要删除的个数
            arr.splice(i, 1);
        }

    }
    //把构造函数能让外部能够访问
    window.Food = Food;
})();
