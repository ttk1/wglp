exports.start = canvas => {
    canvas.width = 500;
    canvas.height = 500;

    const gl = require('./glContext').getContext(canvas);
    require('./shaderProgram').getShaderProgram(gl);
    require('./transformFeedback').setTransformFeedback(gl);

    gl.enable(gl.RASTERIZER_DISCARD);
    gl.beginTransformFeedback(gl.POINTS);
    gl.drawArrays(gl.POINTS, 0, 1);
    gl.endTransformFeedback();
    gl.disable(gl.RASTERIZER_DISCARD);

    const arr = new Float32Array([0.0, 0.0, 0.0, 0.0]);
    gl.getBufferSubData(gl.TRANSFORM_FEEDBACK_BUFFER, 0, arr);
    console.log(arr);
}