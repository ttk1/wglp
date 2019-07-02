window.onload = () => {
    const container = document.getElementById('container');
    const canvas = document.createElement('canvas');
    canvas.width = 500;
    canvas.height = 500;
    container.appendChild(canvas);

    const gl = require('./glContext').getContext(canvas);
    const sp = require('./shaderProgram').getShaderProgram(gl);
    require('./attribute').setAttributes(gl, sp);
    require('./uniform').setUniforms(gl, sp);

    let rad = 0;
    window.setInterval(() => {
        rad+=0.01;
        require('./uniform').setUniforms(gl, sp, rad);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }, 10);
}
