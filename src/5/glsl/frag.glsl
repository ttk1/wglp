#version 300 es
precision mediump float;
in vec3 color;
out vec4 outColor;
void main(void) {
    if (mod(gl_FragCoord.x, 20.0) <= 10.0 && mod(gl_FragCoord.y, 20.0) <= 10.0 ||
        mod(gl_FragCoord.x, 20.0) > 10.0 && mod(gl_FragCoord.y, 20.0) > 10.0) {
        outColor = vec4(0,1,0,1);
    } else {
        outColor = vec4(0,0,1,1);
    }
}