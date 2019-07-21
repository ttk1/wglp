import { setAttributes } from './attribute';
import { getContext } from './glContext';
import { getShaderProgram } from './shaderProgram';
import { setTransformFeedback } from './transformFeedback';

export const start = (canvas: HTMLCanvasElement): void => {
    canvas.width = 500;
    canvas.height = 500;

    const vNum = 1000;
    const gl = getContext(canvas);
    const sp = getShaderProgram(gl);
    const vbo: WebGLBuffer[] = [];
    vbo[0] = setTransformFeedback(gl, vNum);
    vbo[1] = setAttributes(gl, sp, vNum);

    const aa = gl.getUniformLocation(sp, 'mouse');
    gl.uniform2f(aa, 0.0, 0.0);
    canvas.addEventListener('mousemove', onMouseMove, false);
    function onMouseMove(event: MouseEvent) {
        const idx = gl.getUniformLocation(sp, 'mouse');
        const mouseX = ((event.offsetX / canvas.width) - 0.5) * 2.0;
        const mouseY = ((event.offsetY / canvas.height) - 0.5) * 2.0;
        gl.uniform2f(idx, mouseX, -mouseY);
    }

    let flg = 0;
    animate();
    function animate() {
        gl.beginTransformFeedback(gl.POINTS);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.drawArrays(gl.POINTS, 0, vNum);
        gl.endTransformFeedback();

        gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 0, vbo[1 - flg]);

        gl.bindBuffer(gl.ARRAY_BUFFER, vbo[flg]);
        const stride = Float32Array.BYTES_PER_ELEMENT * 4;
        const posLoc = gl.getAttribLocation(sp, 'pos');
        gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, stride, 0);
        const velLoc = gl.getAttribLocation(sp, 'vel');
        const offset = Float32Array.BYTES_PER_ELEMENT * 2;
        gl.vertexAttribPointer(velLoc, 2, gl.FLOAT, false, stride, offset);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        flg = flg ? 0 : 1;
        window.requestAnimationFrame(animate);
    }
};
