exports.setUniforms = (gl, sp) => {
    const mvmatrix = [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, -1, 1
    ];
    
    var idx = gl.getUniformLocation(sp, 'uMVMatrix');
    gl.uniformMatrix4fv(idx, false, mvmatrix);

    const pmatrix = [
        0.5, 0, 0, 0,
        0, 0.5, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    ];

    idx = gl.getUniformLocation(sp, 'uPMatrix');
    gl.uniformMatrix4fv(idx, false, pmatrix);
}