#version 300 es
layout(location = 5) in vec3 aVertexPosition;
layout(location = 6) in vec3 bVertexPosition;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;

// これはダメらしい
// https://stackoverflow.com/questions/28076568/is-it-ever-reasonable-to-do-computations-outside-of-main-in-an-opengl-shader
// const mat4 hoge = uMVMatrix * uPMatrix;

void main(void) {
    // gl_Position = hoge * vec4(aVertexPosition+bVertexPosition*0.5, 1.0);
    gl_Position = uMVMatrix * uPMatrix * vec4(aVertexPosition+bVertexPosition * 0.5, 1.0);
}