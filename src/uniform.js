exports.setUniforms = (gl, sp, radX, radY, radZ) => {
    const rotX = [
        1, 0, 0, 0,
        0, Math.cos(radX), -Math.sin(radX), 0,
        0, Math.sin(radX), Math.cos(radX), 0,
        0, 0, 0, 1
    ];
    
    var idx = gl.getUniformLocation(sp, 'rotX');
    gl.uniformMatrix4fv(idx, false, rotX);

    const rotY = [
        Math.cos(radY), 0, Math.sin(radY), 0,
        0, 1, 0, 0,
        -Math.sin(radY), 0, Math.cos(radY), 0,
        0, 0, 0, 1
    ];
    
    idx = gl.getUniformLocation(sp, 'rotY');
    gl.uniformMatrix4fv(idx, false, rotY);

    const rotZ = [
        Math.cos(radZ), -Math.sin(radZ), 0, 0,
        Math.sin(radZ), Math.cos(radZ), 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    ];
    
    idx = gl.getUniformLocation(sp, 'rotZ');
    gl.uniformMatrix4fv(idx, false, rotZ);

    const prj = [
        0.5, 0, 0, 0,
        0, 0.5, 0, 0,
        0, 0, 0.5, 0,
        0, 0, 0, 1
    ];

    idx = gl.getUniformLocation(sp, 'prj');
    gl.uniformMatrix4fv(idx, false, prj);
}