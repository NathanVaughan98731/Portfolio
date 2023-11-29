import { noise } from "./helpers/noise";
import { circle } from "./helpers/circle";
import { map } from "./helpers/map";
import { cover } from "./helpers/cover";

export const fragmentShader = `
uniform vec2 uPlaneSize;
uniform vec2 uImageSize;
uniform float uTime;
uniform sampler2D uTexture;
uniform float uSpikes;
uniform float uRadius;
varying vec2 vUv;

${noise}
${circle}
${map}
${cover}

void main() {
    vec2 uv = vUv;
    vec2 coverUv = getCoverUv(uv, uPlaneSize, uImageSize);

    // apply image texture
    vec4 textureColor = texture2D(uTexture, coverUv);
    vec4 color = textureColor;

    // use blob as mask on the color's alpha channel (black === alpha of 0)
    float imageBlobNoise = snoise(vec3(uv.x * uSpikes, uv.y * uSpikes, uTime * 1.0));
    float radius = map(imageBlobNoise, 0.0, 1.0, uRadius * 0.9, uRadius);
    float mask = circle(uv, radius);
    color.a = mask;

    // Example: Add text color
    vec3 textColor = vec3(1, 1.0, 1); // White text color
    vec3 blendedColor = mix(color.rgb, textColor, step(0.5, mask));
    gl_FragColor = vec4(blendedColor, color.a);
}`;

