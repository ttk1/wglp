exports.start = canvas => {
    canvas.width = 500;
    canvas.height = 500;

    const gl = require('./glContext').getContext(canvas);
    const sp = require('./shaderProgram').getShaderProgram(gl);
    require('./attribute').setAttributes(gl, sp);

    const start_time = Date.now();
    animate();

    function animate() {
        let rad = (Date.now() - start_time) / 6000;
        require('./uniform').setUniforms(gl, sp, 13 * rad, 17 * rad, 19 * rad);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.drawArrays(gl.TRIANGLES, 0, 3 * 12);
        window.requestAnimationFrame(animate);
    }
}