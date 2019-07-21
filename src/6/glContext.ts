export const getContext = (canvas: HTMLCanvasElement): WebGL2RenderingContext => {
    const gl = canvas.getContext('webgl2') as WebGL2RenderingContext;
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    return gl;
};
