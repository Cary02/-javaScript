//创建蛇对象
//属性：蛇节width ， 蛇节height  ，蛇生体body ，蛇的初始位置direction

(function () {
    var position = 'absolute';
    //记录蛇节
    var elements = [];

    function Snake(options) {
        options = options || {};
        //蛇节宽度
        this.width = options.width || 20;
        this.height = options.height || 20;
        this.body = [
            {x: 3, y: 2, color: 'red'},
            {x: 2, y: 2, color: 'blue'},
            {x: 1, y: 2, color: 'blue'}
        ];
        this.direction = options.direction || 'right';
    }

    //渲染
    Snake.prototype.render = function (map) {
        //渲染前先删除之前的蛇身体
        remove(elements);
        for (var i = 0, len = this.body.length; i < len; i++) {
            var snakeNode = this.body[i];
            //创建蛇节
            var div = document.createElement( 'div' );
            map.appendChild( div );
            elements.push( div );
            div.style.position = position;
            div.style.width = this.width + 'px';
            div.style.height = this.height + 'px';
            div.style.left = snakeNode.x * this.width + 'px';
            div.style.top = snakeNode.y * this.height + 'px';
            div.style.backgroundColor = snakeNode.color;
        }
    }

    //控制蛇移动的方法
    Snake.prototype.move = function (food,map) {
        //蛇身体移动   取代上一个蛇节的坐标
        for (var i = this.body.length - 1; i > 0; i--) {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }
        //蛇头移动  改变蛇头的坐标  right ，top, left down
        //判断舌头移动方向 direction
        var head = this.body[0];
        switch (this.direction) {
            case 'right':
                head.x += 1;
                break;
            case 'top':
                head.y -= 1;
                break;
            case 'left':
                head.x -= 1;
                break;
            case 'down':
                head.y += 1;
                break;
        }
        //2.4当蛇遇到食物  相应的处理
        //判断蛇头的坐标是否和食物的坐标一致
        var headX = this.body[0].x * this.width;
        var headY = this.body[0].y * this.height;
        if (food.x ===headX && food.y === headY) {
            //1.让蛇增加一节
            //获取蛇的最后一节
            var last = this.body[this.body.length - 1];
            /*this.body.push({
                x: last.x,
                y: last.y,
                color: last.color
            });*/
            var obj = {};
            extend(last, obj);
            this.body.push(obj);
            //2.让食物随机生成
            food.render(map);
        }

    }
    //拷贝对象
    function extend(parent, child) {
        for (var key in parent) {
            //如果child中有这个属性则跳出此次循环，不用赋值
            if (child[key]) {
                continue;
            }
            child[key] = parent[key];
        }
    }

    //删除蛇身体
    function remove(elements) {
        for (var i = elements.length - 1; i >= 0; i--) {
            var element = elements[i];
            element.parentNode.removeChild(element);
            elements.splice(i,1);
        }
    }

    window.Snake = Snake;
})();

