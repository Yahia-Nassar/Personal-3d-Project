uniform float uTime;

varying vec2 vUv;
varying vec3 vPosition;

void main(){
    gl_FragColor = vec4(sin(vPosition * 1000.0 ), 1.0);
}