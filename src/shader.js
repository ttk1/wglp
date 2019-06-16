exports.initShaders = gl => {
    console.log(require('./glsl/test.vert'));
    // シェーダの取得
    const vs = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vs, require('./glsl/test.vert').default);
    gl.compileShader(vs);
    console.log(vs);
    console.log(gl.getShaderParameter(vs, gl.COMPILE_STATUS));

    const fs = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fs, require('./glsl/test.frag').default);
    gl.compileShader(fs);
    console.log(fs);
    console.log(gl.getShaderParameter(fs, gl.COMPILE_STATUS));

    // シェーダプログラムの作成
    const sp = gl.createProgram();
    gl.attachShader(sp, vs);
    gl.attachShader(sp, fs);
    gl.linkProgram(sp);
    gl.useProgram(sp);

    var idx = gl.getAttribLocation(sp, "aVertexPosition");
    gl.enableVertexAttribArray(idx);
}
