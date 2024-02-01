
uniform vec3 uColorStart;
uniform vec3 uColorEnd;

varying float vElevation;



void main()
{
    
    vec3 color = mix(uColorStart, uColorEnd, (vElevation + 0.008)*5.0);

    gl_FragColor = vec4(color, 1.0);
}