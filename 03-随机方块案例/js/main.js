






var parent = document.getElementById( 'container' );
var arr = [];
for (var i = 0; i < 10; i++) {
    var r = Tool.getRandom( 0, 255 );
    var g = Tool.getRandom( 0, 255 );
    var b = Tool.getRandom( 0, 255 );
    var box = new Box( parent, {
        backgroundColor: 'rgb(' + r + ',' + g + ',' + b + ')'
    } );
    arr.push( box );
}
randomBox();
setInterval( randomBox, 500 );
function randomBox() {
    //给每一个box随机生成坐标
    for (var i = 0; i < arr.length; i++) {
        var box = arr[i];
        box.random();
    }
}