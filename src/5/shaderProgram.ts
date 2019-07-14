exports.getShaderProgram = (gl: WebGLRenderingContext): WebGLProgram => {
    const sp: WebGLProgram = gl.createProgram();
    gl.attachShader(sp, getShaderObject(gl, gl.VERTEX_SHADER, require('./glsl/vert.glsl').default));
    gl.attachShader(sp, getShaderObject(gl, gl.FRAGMENT_SHADER, require('./glsl/frag.glsl').default));
    gl.linkProgram(sp);
    gl.useProgram(sp);
    return sp;

    function getShaderObject(gl: WebGLRenderingContext, type: number, shaderSource: string) {
        const shaderObject: WebGLShader = gl.createShader(type);
        gl.shaderSource(shaderObject, shaderSource);
        gl.compileShader(shaderObject);
        return shaderObject;
    }
}