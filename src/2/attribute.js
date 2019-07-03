const getPoint = require('./point').getPoint;

exports.setAttributes = (gl, sp) => {
    const idx = gl.getAttribLocation(sp, 'pos');
    gl.enableVertexAttribArray(idx);

    const p1 = getPoint(1.0, 1.0, 1.0);
    const p2 = getPoint(1.0, -1.0, 1.0);
    const p3 = getPoint(1.0, -1.0, -1.0);
    const p4 = getPoint(1.0, 1.0, -1.0);
    const p5 = getPoint(-1.0, 1.0, 1.0);
    const p6 = getPoint(-1.0, -1.0, 1.0);
    const p7 = getPoint(-1.0, -1.0, -1.0);
    const p8 = getPoint(-1.0, 1.0, -1.0);

    const vertices = [];

    addSquare(p1, p2, p3, p4);
    addSquare(p5, p6, p7, p8);

    addSquare(p1, p2, p6, p5);
    addSquare(p3, p4, p8, p7);

    addSquare(p2, p3, p7, p6);
    addSquare(p4, p1, p5, p8);

    // 四角を一周する順番で点を渡す
    function addSquare(p1, p2, p3, p4) {
        addPoint(p1);
        addPoint(p2);
        addPoint(p3);

        addPoint(p1);
        addPoint(p3);
        addPoint(p4);

        function addPoint(p) {
            vertices.push(p.x);
            vertices.push(p.y);
            vertices.push(p.z);
        }
    }

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.vertexAttribPointer(idx, 3, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
}