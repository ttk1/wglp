exports.start = canvas => {
    canvas.width = 500;
    canvas.height = 500;

    const gl = require('./glContext').getContext(canvas);
    const sp = require('./shaderProgram').getShaderProgram(gl);
    require('./attribute').setAttributes(gl, sp);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
}