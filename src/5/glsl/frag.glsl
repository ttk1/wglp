#version 300 es
precision mediump float;
in vec3 color;
out vec4 outColor;

const float w = 20.0;

void main(void) {
    if (mod(gl_FragCoord.x, w * 2.0) <= w && mod(gl_FragCoord.y, w * 2.0) <= w ||
        mod(gl_FragCoord.x, w * 2.0) > w && mod(gl_FragCoord.y, w * 2.0) > w) {
        outColor = vec4(0,1,0,1);
    } else {
        outColor = vec4(0,0,1,1);
    }
}