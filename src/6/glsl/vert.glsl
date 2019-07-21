#version 300 es
uniform vec2 mouse;

in vec2 pos;
in vec2 vel;
out vec2 next_pos;
out vec2 next_vel;

void main(void) {
    gl_Position = vec4(pos, 0.0, 1.0);
    gl_PointSize = 2.0;
    // next_pos = pos - (pos - mouse) * 0.01;
    next_pos = pos + vel * 0.001;
    next_vel = vel;
}