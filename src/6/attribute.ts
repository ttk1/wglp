export const setAttributes = (gl: WebGLRenderingContext, sp: WebGLProgram, vNum: number): void => {
    const idx = gl.getAttribLocation(sp, 'pos');
    gl.enableVertexAttribArray(idx);

    const vertices: number[] = [];
    for (let i = 0; i < vNum; i++) {
        for (let j = 0; j < 3; j++) {
            vertices.push((Math.random() - 0.5) * 2);
        }
    }

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.vertexAttribPointer(idx, 3, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
};
