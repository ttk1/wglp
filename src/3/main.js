exports.start = canvas => {
    canvas.width = 500;
    canvas.height = 500;

    const gl = require('./glContext').getContext(canvas);
    const sp = require('./shaderProgram').getShaderProgram(gl);
    require('./attribute').setAttributes(gl, sp);

    let mouse_x = null;
    let mouse_y = null;
    let rot = require('./rot').rot_x(0);

    canvas.addEventListener('mousemove', onMouseMove, false);

    function onMouseMove(event) {
        if (mouse_x == null || mouse_y == null) {
            mouse_x = event.offsetX;
            mouse_y = event.offsetY;
        }

        const diff_x = event.offsetX - mouse_x;
        const diff_y = event.offsetY - mouse_y;
        mouse_x = event.offsetX;
        mouse_y = event.offsetY;

        const rot_x = require('./rot').rot_x(diff_y * 0.01);
        const rot_y = require('./rot').rot_y(diff_x * 0.01);
        rot = rot_x.mul(rot_y).mul(rot);
        require('./uniform').setUniforms(gl, sp, rot);

        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.drawArrays(gl.TRIANGLES, 0, 3 * 12);
    }
}