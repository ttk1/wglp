exports.init = (gl, sp) => {
    const mvmatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -6, 1];
    const pmatrix = [2.4142136573791504,0,0,0,0,2.4142136573791504,0,0,0,0,-1.0020020008087158,-1,0,0,-0.20020020008087158,0];

    var idx = gl.getUniformLocation(sp, 'uPMatrix');
    gl.uniformMatrix4fv(idx, false, pmatrix);

    idx = gl.getUniformLocation(sp, 'uMVMatrix');
    gl.uniformMatrix4fv(idx, false, mvmatrix);
}
