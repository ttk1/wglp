export const setClick = (gl: WebGLRenderingContext, sp: WebGLProgram, click: boolean): void => {
    const loc = gl.getUniformLocation(sp, 'click');
    gl.uniform1i(loc, Number(click));
};

export const setGravity = (gl: WebGLRenderingContext, sp: WebGLProgram, gravity: number): void => {
    const loc = gl.getUniformLocation(sp, 'gravity');
    gl.uniform1f(loc, gravity);
};

export const setMouse = (gl: WebGLRenderingContext, sp: WebGLProgram, mouseX: number, mouseY: number): void => {
    const loc = gl.getUniformLocation(sp, 'mouse');
    gl.uniform2f(loc, mouseX, mouseY);
};

export const setResistance = (gl: WebGLRenderingContext, sp: WebGLProgram, resistance: number): void => {
    const loc = gl.getUniformLocation(sp, 'resistance');
    gl.uniform1f(loc, resistance);
};

export const setStep = (gl: WebGLRenderingContext, sp: WebGLProgram, step: number): void => {
    const loc = gl.getUniformLocation(sp, 'step');
    gl.uniform1f(loc, step);
};
