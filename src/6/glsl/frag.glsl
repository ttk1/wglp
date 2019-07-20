#version 300 es
precision mediump float;

in vec3 color;
out vec4 outColor;

void main(void) {
    outColor = vec4(color, 1.0);
}

// gl_FragCoord
// gl_PointCoord