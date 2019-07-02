#version 300 es
precision mediump float;
in vec4 hoge;
out vec4 color;
void main(void) {
    color = hoge;
}