export const getShaderProgram = (gl: WebGL2RenderingContext): WebGLProgram => {
    const sp = gl.createProgram();
    gl.attachShader(sp, getShaderObject(gl, gl.VERTEX_SHADER, require('./glsl/vert.glsl').default));
    gl.attachShader(sp, getShaderObject(gl, gl.FRAGMENT_SHADER, require('./glsl/frag.glsl').default));
    gl.transformFeedbackVaryings(sp, ['next_pos'], gl.SEPARATE_ATTRIBS);
    gl.linkProgram(sp);
    if (!gl.getProgramParameter(sp, gl.LINK_STATUS)) {
        throw new Error('リンク失敗');
    }
    gl.useProgram(sp);
    return sp;
};

function getShaderObject(gl: WebGL2RenderingContext, type: number, shaderSource: string): WebGLShader {
    const shaderObject = gl.createShader(type);
    gl.shaderSource(shaderObject, shaderSource);
    gl.compileShader(shaderObject);
    if (!gl.getShaderParameter(shaderObject, gl.COMPILE_STATUS)) {
        throw new Error('コンパイル失敗: ' + gl.getShaderInfoLog(shaderObject));
    }
    return shaderObject;
}
