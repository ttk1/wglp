import TP from 'tweakpane';
import { setAttributes } from './attribute';
import { getContext } from './glContext';
import { getShaderProgram } from './shaderProgram';
import { setTransformFeedback } from './transformFeedback';
import { setClick, setGravity, setMouse, setResistance, setStep } from './uniform';

export const start = (canvas: HTMLCanvasElement): void => {
    canvas.width = 500;
    canvas.height = 500;

    const Tweakpane = require('tweakpane');
    const gl = getContext(canvas);
    const sp = getShaderProgram(gl);
    const pane = new Tweakpane() as TP;
    const params = {
        center: true,
        click: true,
        gravity: 0.05,
        particles: 50000,
        resistance: 0.05,
        step: 0.2
    };
    const vbo: WebGLBuffer[] = [];

    pane.addInput(params, 'center').on('change', (center: boolean) => {
        if (center) {
            setMouse(gl, sp, 0.0, 0.0);
        }
    });
    pane.addInput(params, 'click').on('change', (click: boolean) => {
        setClick(gl, sp, click);
    });
    pane.addInput(params, 'gravity', { min: 0.0, max: 0.5 }).on('change', (gravity: number) => {
        setGravity(gl, sp, gravity);
    });
    pane.addInput(params, 'particles', { min: 100.0, max: 100000.0, step: 1.0 }).on('change', (particles: number) => {
        vbo[0] = setTransformFeedback(gl, particles);
        vbo[1] = setAttributes(gl, sp, particles);
    });
    pane.addInput(params, 'resistance', { min: 0.0, max: 0.5 }).on('change', (resistance: number) => {
        setResistance(gl, sp, resistance);
    });
    pane.addInput(params, 'step', { min: 0.0, max: 0.5 }).on('change', (step: number) => {
        setStep(gl, sp, step);
    });

    canvas.addEventListener('mousemove', onMouseMove, false);
    function onMouseMove(event: MouseEvent) {
        const mouseX = params.center ? 0.0 : ((event.offsetX / canvas.width) - 0.5) * 2.0;
        const mouseY = params.center ? 0.0 : ((event.offsetY / canvas.height) - 0.5) * 2.0;
        setMouse(gl, sp, mouseX, -mouseY);
    }

    canvas.addEventListener('click', onClick, false);
    function onClick(event: MouseEvent) {
        params.click = !params.click;
        setClick(gl, sp, params.click);
        pane.refresh();
    }

    setClick(gl, sp, params.click);
    setGravity(gl, sp, params.gravity);
    setMouse(gl, sp, 0.0, 0.0);
    setResistance(gl, sp, params.resistance);
    setStep(gl, sp, params.step);
    vbo[0] = setTransformFeedback(gl, params.particles);
    vbo[1] = setAttributes(gl, sp, params.particles);

    animate();
    function animate() {
        gl.beginTransformFeedback(gl.POINTS);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.drawArrays(gl.POINTS, 0, params.particles);
        gl.endTransformFeedback();
        gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 0, vbo[1]);
        gl.bindBuffer(gl.ARRAY_BUFFER, vbo[0]);
        const posLoc = gl.getAttribLocation(sp, 'pos');
        gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 4 * 4, 0);
        const velLoc = gl.getAttribLocation(sp, 'vel');
        gl.vertexAttribPointer(velLoc, 2, gl.FLOAT, false, 4 * 4, 4 * 2);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        vbo.reverse();
        window.requestAnimationFrame(animate);
    }
};
