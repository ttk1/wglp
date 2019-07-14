import { setAttributes } from './attribute';
import { getContext } from './glContext';
import { getShaderProgram } from './shaderProgram';

export const start = (canvas: HTMLCanvasElement): void => {
    canvas.width = 500;
    canvas.height = 500;

    const gl = getContext(canvas);
    const sp = getShaderProgram(gl);
    setAttributes(gl, sp);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
}