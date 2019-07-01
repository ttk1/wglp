exports.getShaderProgram = gl => {
    const sp = gl.createProgram();
    gl.attachShader(sp, getShaderObject(gl, gl.VERTEX_SHADER, require('./glsl/test.vert.glsl').default));
    gl.attachShader(sp, getShaderObject(gl, gl.FRAGMENT_SHADER, require('./glsl/test.frag.glsl').default));
    gl.linkProgram(sp);
    //gl.useProgram(sp);
    //gl.useProgram(null);
    return sp;
}

function getShaderObject(gl, type, shaderSource) {
    console.log(shaderSource);
    const shaderObject = gl.createShader(type);
    gl.shaderSource(shaderObject, shaderSource);
    gl.compileShader(shaderObject);
    console.log(gl.getShaderInfoLog(shaderObject));
    return shaderObject;
}
