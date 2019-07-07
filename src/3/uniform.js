exports.setUniforms = (gl, sp, rot) => {
    let idx = gl.getUniformLocation(sp, 'rot');
    gl.uniformMatrix4fv(idx, false, rot.getArray());

    const prj = [
        0.5, 0, 0, 0,
        0, 0.5, 0, 0,
        0, 0, 0.5, 0,
        0, 0, 0, 1
    ];

    idx = gl.getUniformLocation(sp, 'prj');
    gl.uniformMatrix4fv(idx, false, prj);
}