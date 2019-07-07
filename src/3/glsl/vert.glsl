#version 300 es
in vec3 pos;
out vec4 color;

uniform mat4 rot;
uniform mat4 prj;

void main(void) {
    gl_Position = prj * rot * vec4(pos, 1.0);
    color = vec4(pos, 255.0);
}