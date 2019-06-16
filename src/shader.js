exports.initShaders = gl => {
    // シェーダの取得
    const vs = require('./glsl/test.vs');console.log( vs);
    const fs = require('./glsl/test.fs');

    // シェーダプログラムの作成
    const sp = gl.createProgram();
    gl.attachShader(sp, vs);
    gl.attachShader(sp, fs);
    gl.linkProgram(sp);
    gl.useProgram(sp);

    var idx = gl.getAttribLocation(sp, "aVertexPosition");
    gl.enableVertexAttribArray(idx);
}
