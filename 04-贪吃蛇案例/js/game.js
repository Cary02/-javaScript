//创建game对象
//属性：food对象， snake对象， 地图map

(function () {
    var that;//记录当前游戏对象

    function Game(map) {
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
        that = this;
    }


    //第一步：游戏开始把food，snake，map渲染出来
    Game.prototype.start = function () {
        //1把蛇和事物对象渲染到地图上
        this.food.render( this.map );
        this.snake.render( this.map );


        //2开始游戏的逻辑
        //2.1让蛇移动起来
        sankeRun();
        //2.2当蛇碰到边界 游戏结束
        //2.3通过键盘控制蛇移动的方向
        control();
        //2.4当蛇遇到食物  相应的处理  需要到蛇的移动js代码中写

    }

    //2.1让蛇移动起来
    function sankeRun() {
        var timeId = setInterval( function () {
            //在定时器中的this是指向window的 ，所以不能用this代表当前对象，得定义一个全局变量that让this赋值给他
            that.snake.move(that.food,that.map);
            that.snake.render( that.map );

            //2.2当蛇碰到边界 游戏结束
            var headx = that.snake.body[0].x;
            var heady = that.snake.body[0].y;
            var maxX = that.map.offsetWidth / that.snake.width;
            var maxY = that.map.offsetHeight / that.snake.height;
            if (headx < 0 || headx >= maxX) {
                alert( 'gave over' );
                clearInterval( timeId );
            }
            if (heady < 0 || heady >= maxY) {
                alert( 'gave over' );
                clearInterval( timeId );
            }
        }, 150 )
    }

    //2.3通过键盘控制蛇移动的方向
    function control() {
        //注册事件
        document.addEventListener('keydown',function (e) {
           switch (e.keyCode) {
               case 38 :
                   that.snake.direction = 'top';
                   break;
               case 40 :
                   that.snake.direction = 'down';
                   break;
               case 37 :
                   that.snake.direction = 'left';
                   break;
               case 39 :
                   that.snake.direction = 'right';
                   break;
           }
        },false)
    }



    window.Game = Game;
})()


