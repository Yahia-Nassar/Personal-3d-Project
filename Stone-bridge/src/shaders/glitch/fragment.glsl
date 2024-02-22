

varying vec2 vUv;
varying vec3 vPosition;

void main(){
   // Definim frecvența de schimbare a culorilor (mai mare = mai rapid)
    float frequency = 400.0;

    // Calculăm coordonatele x și y ale fragmentului
    float x = vUv.x;
    float y = vUv.y;

    // Calculăm offsetul pentru a obține un efect de animație
    float offsetX = sin(frequency + x * 10.0) * 0.1;
    float offsetY = cos(frequency + y * 10.0) * 0.1;

    // Calculăm distanța de la fragment la cele mai apropiate linii de grid
    float distX = fract(x * frequency + offsetX);
    float distY = fract(y * frequency + offsetY);

    // Alegem culorile în funcție de distanța de la fragment la linii
    vec3 color;
    color.r = step(0.5, distX) * step(0.5, distY); // Roșu
    color.g = step(0.5, distX) * (1.0 - step(0.5, distY)); // Verde
    color.b = (1.0 - step(0.5, distX)); // Albastru

    // Setăm culoarea fragmentului
    gl_FragColor = vec4(color, 1.0);
}