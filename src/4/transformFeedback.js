exports.setTransformFeedback = gl => {
    const vbo = gl.createBuffer();
    const tf = gl.createTransformFeedback();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
    gl.bufferData(gl.ARRAY_BUFFER, Float32Array.BYTES_PER_ELEMENT * 4, gl.DYNAMIC_COPY);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, tf);
    gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 0, vbo);
}