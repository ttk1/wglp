window.onload = () => {
    // canvasの作成
    const container = document.getElementById('container');
    const canvas = document.createElement('canvas');
    canvas.width = 500;
    canvas.height = 500;
    container.appendChild(canvas);

    const gl = require('./glContext').getContext(canvas);
    const sp = require('./shaderProgram').getShaderProgram(gl);
    require('./attribute').setAttributes(gl, sp);
    const sp2 = require('./shaderProgram').getShaderProgram(gl);
    require('./attribute').setAttributes(gl, sp2);

    gl.useProgram(sp);
    require('./uniform').setUniforms(gl, sp);

    gl.useProgram(sp2);
    require('./uniform').setUniforms(gl, sp2);

    gl.useProgram(sp);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    gl.useProgram(sp2);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
}
