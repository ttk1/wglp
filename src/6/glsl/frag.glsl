#version 300 es
precision mediump float;

in vec3 color;
out vec4 outColor;

void main(void) {
    if (distance(gl_PointCoord, vec2(0.5, 0.5)) < 0.5) {
        outColor = vec4(color, 1.0);
    } else {
        discard;
    }
}

// gl_FragCoord
// gl_PointCoord