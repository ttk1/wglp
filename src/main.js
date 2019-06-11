var container = document.getElementById('container');
var canvas = document.createElement('canvas');
container.appendChild(canvas);

canvas.width = 100;
canvas.height = 100;

var gl = canvas.getContext('webgl');

gl.clearColor(0.0, 0.0, 0.0, 1.0);
// 深度テストを有効化
gl.enable(gl.DEPTH_TEST);
// 近くにある物体は、遠くにある物体を覆い隠す
gl.depthFunc(gl.LEQUAL);
// カラーバッファや深度バッファをクリアする
gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);