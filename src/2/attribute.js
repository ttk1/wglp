exports.setAttributes = (gl, sp) => {
    const idx = gl.getAttribLocation(sp, 'pos');
    gl.enableVertexAttribArray(idx);

    const vertices = [];
    for (let i = 0; i < 90; i++) {
        vertices.push(Math.random() * 2 - 1);
    }

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.vertexAttribPointer(idx, 3, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
}
