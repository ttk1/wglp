#version 300 es
in vec3 pos;
out vec3 hoge;
out vec3 color;
void main(void) {
    gl_Position = vec4(pos, 1.0);
    gl_PointSize = 10.0;
    color = pos;
    hoge = pos + 0.001;
}