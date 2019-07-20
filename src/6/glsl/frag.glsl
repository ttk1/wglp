#version 300 es
precision mediump float;

in vec3 color;
out vec4 outColor;

void main(void) {
    vec2 d = gl_PointCoord * 2.0 - 1.0;
    if (length(d) < 1.0) {
        outColor = vec4(color, 1.0);
    } else {
        discard;
    }
}

// gl_FragCoord
// gl_PointCoord