exports.init = gl => {
    const sp = gl.createProgram();
    gl.attachShader(sp, getShader(gl, gl.VERTEX_SHADER, require('./glsl/test.vert').default));
    gl.attachShader(sp, getShader(gl, gl.FRAGMENT_SHADER, require('./glsl/test.frag').default));
    gl.linkProgram(sp);
    gl.useProgram(sp);

    var idx = gl.getAttribLocation(sp, "aVertexPosition");
    gl.enableVertexAttribArray(idx);
}

function getShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    return shader;
}