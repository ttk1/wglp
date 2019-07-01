attribute vec3 aVertexPosition;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;

mat4 hoge = uMVMatrix * uPMatrix;

void main(void) {
    gl_Position = hoge * vec4(aVertexPosition, 1.0);
}