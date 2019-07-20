import { setAttributes } from './attribute';
import { getContext } from './glContext';
import { getShaderProgram } from './shaderProgram';

export const start = (canvas: HTMLCanvasElement): void => {
    canvas.width = 500;
    canvas.height = 500;

    const gl = getContext(canvas);
    const sp = getShaderProgram(gl);
    const vNum = 100;

    setAttributes(gl, sp, vNum);

    gl.drawArrays(gl.POINTS, 0, vNum);
};
