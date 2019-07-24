function Box(parent,options) {
    //设置对象属性
    options = options || {};
    this.width = options.width || 20;
    this.height = options.height || 20;
    this.backgroundColor = options.backgroundColor || 'red';
    this.x = options.x || 0;
    this.y = options.y ||0;

    //创建div
    this.div = document.createElement('div');
    parent.appendChild(this.div);
    this.parent = parent;

    //设置div样式
    this.init();
}

//设置样式
Box.prototype.init = function () {
    var div = this.div;
    div.style.backgroundColor = this.backgroundColor;
    div.style.width = this.width + 'px';
    div.style.height = this.height + 'px';
    div.style.left = this.x + 'px';
    div.style.top = this.y + 'px';
    div.style.position = 'absolute';
}

//随机生成
Box.prototype.random = function () {
    var x = Tool.getRandom(0,this.parent.offsetWidth / this.width) * this.width;
    var y = Tool.getRandom(0,this.parent.offsetHeight / this.height) * this.height;
    this.div.style.left = x + 'px';
    this.div.style.top = y + 'px';
}