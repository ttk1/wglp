exports.start = canvas => {
    const gl = require('./glContext').getContext(canvas);
    require('./shaderProgram').getShaderProgram(gl);
    require('./transformFeedback').setTransformFeedback(gl);

    gl.enable(gl.RASTERIZER_DISCARD);
    gl.beginTransformFeedback(gl.POINTS);
    gl.drawArrays(gl.POINTS, 0, 1);
    gl.endTransformFeedback();
    gl.disable(gl.RASTERIZER_DISCARD);

    const arr = new Float32Array(4);
    gl.getBufferSubData(gl.TRANSFORM_FEEDBACK_BUFFER, 0, arr);
    console.log(arr); // Float32Array [ 2, 4, 6, 8 ] が表示される
}