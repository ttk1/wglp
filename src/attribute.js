exports.setAttributes = (gl, sp) => {
    //const idx = gl.getAttribLocation(sp, "aVertexPosition");
    //gl.enableVertexAttribArray(idx);

    /*
    const vertices = [
        1.0, 1.0, 0.0,
        -1.0, 1.0, 0.0,
        1.0, -1.0, 0.0,
        -1.0, -1.0, 0.0
    ];

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.vertexAttribPointer(idx, 3, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
*/

    const verticesx = [
        1.0, 1.0, 0.0,
        -1.0, 1.0, 0.0,
        1.0, -1.0, 0.0,
        -1.0, -1.0, 0.0
    ];

    const idxx = gl.getAttribLocation(sp, "bVertexPosition");
    console.log(idxx);
    gl.enableVertexAttribArray(idxx);
    const bufx = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bufx);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesx), gl.STATIC_DRAW);
    gl.vertexAttribPointer(idxx, 3, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
}
