exports.start = canvas => {
    canvas.width = 500;
    canvas.height = 500;

    const gl = require('./glContext').getContext(canvas);
    const sp = require('./shaderProgram').getShaderProgram(gl);
    require('./attribute').setAttributes(gl, sp);

    canvas.addEventListener('mousemove', onMouseMove, false);

    let mouse_x = null;
    let mouse_y = null;
    let rot_x = 0;
    let rot_y = 0;

    function onMouseMove(event) {
        if (mouse_x == null || mouse_y == null) {
            mouse_x = event.offsetX;
            mouse_y = event.offsetY;
        }

        let diff_x = event.offsetX - mouse_x;
        let diff_y = event.offsetY - mouse_y;
        rot_x += diff_x * 0.01;
        rot_y += diff_y * 0.01;
        mouse_x = event.offsetX;
        mouse_y = event.offsetY;

        require('./uniform').setUniforms(gl, sp, rot_y, rot_x, 0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.drawArrays(gl.TRIANGLES, 0, 3 * 12);
    }
}