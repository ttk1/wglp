#version 300 es
in vec3 pos;
out vec4 hoge;

uniform mat4 rotX;
uniform mat4 rotY;
uniform mat4 rotZ;
uniform mat4 prj;

void main(void) {
    gl_Position = prj * (rotX * rotY * rotZ) * vec4(pos, 1.0);
    hoge = (rotZ * rotY * rotX) * vec4(pos, 255.0);
}