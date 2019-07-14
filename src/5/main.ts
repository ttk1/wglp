exports.start = (canvas : HTMLCanvasElement) => {
    canvas.width = 500;
    canvas.height = 500;

    const gl : WebGLRenderingContext = require('./glContext').getContext(canvas);
    const sp : WebGLProgram = require('./shaderProgram').getShaderProgram(gl);
    require('./attribute').setAttributes(gl, sp);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
}