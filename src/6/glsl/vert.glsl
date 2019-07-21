#version 300 es
uniform vec2 mouse;

in vec3 pos;
out vec3 next_pos;
void main(void) {
    gl_Position = vec4(pos, 1.0);
    gl_PointSize = 10.0;
    next_pos = pos + vec3(mouse, 0) * 0.1;
}