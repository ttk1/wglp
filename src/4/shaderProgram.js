exports.getShaderProgram = gl => {
    const sp = gl.createProgram();
    gl.attachShader(sp, getShaderObject(gl, gl.VERTEX_SHADER, require('./glsl/vert.glsl').default));
    gl.attachShader(sp, getShaderObject(gl, gl.FRAGMENT_SHADER, require('./glsl/frag.glsl').default));
    gl.transformFeedbackVaryings(sp, ['gl_Position'], gl.SEPARATE_ATTRIBS);
    gl.linkProgram(sp);
    gl.useProgram(sp);
    return sp;

    function getShaderObject(gl, type, shaderSource) {
        const shaderObject = gl.createShader(type);
        gl.shaderSource(shaderObject, shaderSource);
        gl.compileShader(shaderObject);
        return shaderObject;
    }
}