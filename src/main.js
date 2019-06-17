window.onload = () => {
    // canvasの作成
    const container = document.getElementById('container');
    const canvas = document.createElement('canvas');
    container.appendChild(canvas);

    canvas.width = 500;
    canvas.height = 500;

    const gl = require('./context').getContext(canvas);
    const buf = require('./buffer').getBuffer(gl);
    const sp = require('./shader').getShaderProgram(gl);

    var idx = gl.getAttribLocation(sp, "aVertexPosition");
    gl.enableVertexAttribArray(idx);

    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.vertexAttribPointer(idx, 3, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    require('./uniform').init(gl, sp);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    const myclass = require('./matrix').myclass;
    const hoge = new myclass();
    hoge.hoge();
}
