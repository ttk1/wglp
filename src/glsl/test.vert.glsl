#version 300 es
in vec3 pos;

uniform mat4 rotX;
uniform mat4 rotY;
uniform mat4 rotZ;
uniform mat4 prj;

void main(void) {
    gl_Position = prj * (rotX * rotY * rotZ) * vec4(pos, 1.0);
}