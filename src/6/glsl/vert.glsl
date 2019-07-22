#version 300 es
uniform bool click;
uniform float gravity;
uniform vec2 mouse;
uniform float resistance;
uniform float step;

in vec2 pos;
in vec2 vel;
out vec2 next_pos;
out vec2 next_vel;

void main(void) {
    gl_Position = vec4(pos, 0.0, 1.0);
    gl_PointSize = 2.0;
    next_pos = pos + vel * step;

    // 重力加速度、マウス位置との距離の二乗に反比例
    if (click) {
        vec2 acc = ((mouse - pos) / pow(distance(mouse, pos) + 1.0, 2.0)) * gravity;
        next_vel = vel + acc;
    } else {
        next_vel = vel;
    }
    // 空気抵抗、速度の二乗に比例
    vec2 res = next_vel * pow(length(next_vel), 2.0) * resistance;
    next_vel = next_vel - res;
}