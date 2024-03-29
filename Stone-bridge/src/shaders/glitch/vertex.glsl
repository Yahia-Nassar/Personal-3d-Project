

varying vec2 vUv;
varying vec3 vPosition;

void main(){

    vUv = uv;
    vPosition = position;

    vec4 modelViewPosition = modelViewMatrix * vec4(position , 1.0);
    vec4 projectedPosition = projectionMatrix * modelViewPosition;
    gl_Position = projectedPosition;    
}