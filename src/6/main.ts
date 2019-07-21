import { setAttributes } from './attribute';
import { getContext } from './glContext';
import { getShaderProgram } from './shaderProgram';
import { setTransformFeedback } from './transformFeedback';

export const start = (canvas: HTMLCanvasElement): void => {
    canvas.width = 500;
    canvas.height = 500;

    const vNum = 10;
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
        const mouseX = (event.offsetX / canvas.width) - 0.5;
        const mouseY = (event.offsetY / canvas.height) - 0.5;
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
        const idx = gl.getAttribLocation(sp, 'pos');
        gl.bindBuffer(gl.ARRAY_BUFFER, vbo[flg]);
        gl.vertexAttribPointer(idx, 3, gl.FLOAT, false, 0, 0);
        flg = flg ? 0 : 1;
        window.requestAnimationFrame(animate);
    }
};
