export const setAttributes = (gl: WebGLRenderingContext, sp: WebGLProgram, vNum: number): WebGLBuffer => {
    const vertices: number[] = [];
    for (let i = 0; i < vNum; i++) {
        // pos
        for (let j = 0; j < 2; j++) {
            vertices.push((Math.random() - 0.5) * 2);
        }
        // vel
        for (let j = 0; j < 2; j++) {
            // vertices.push(0.0);
            vertices.push(Math.random() - 0.5);
        }
    }

    const vbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    const stride = Float32Array.BYTES_PER_ELEMENT * 4;
    const posLoc = gl.getAttribLocation(sp, 'pos');
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, stride, 0);

    const velLoc = gl.getAttribLocation(sp, 'vel');
    const offset = Float32Array.BYTES_PER_ELEMENT * 2;
    gl.enableVertexAttribArray(velLoc);
    gl.vertexAttribPointer(velLoc, 2, gl.FLOAT, false, stride, offset);

    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    return vbo;
};
