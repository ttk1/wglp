#version 300 es
uniform vec2 mouse;

in vec2 pos;
in vec2 vel;
out vec2 next_pos;
out vec2 next_vel;

void main(void) {
    gl_Position = vec4(pos, 0.0, 1.0);
    gl_PointSize = 2.0;
    next_pos = pos + vel * 0.01;

    // 空気抵抗、速度の二乗に比例
    vec2 res = vel * pow(length(vel), 2.0) * 0.0005;
    // 重力加速度、マウス位置との距離の二乗に反比例
    vec2 acc = (mouse - pos) / pow(distance(mouse, pos), 2.0);
    next_vel = vel - res + acc;
}