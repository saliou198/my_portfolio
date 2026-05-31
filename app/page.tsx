"use client";

import { Renderer, Program, Mesh, Color, Triangle } from "ogl";
import { useEffect, useRef } from "react";
import NavBar from "./navBar";
import Skills from "./skills";

const VERT = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAG = `#version 300 es
precision highp float;

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;

out vec4 fragColor;

vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v){
  const vec4 C = vec4(
      0.211324865405187, 0.366025403784439,
      -0.577350269189626, 0.024390243902439
  );
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);

  vec3 p = permute(
      permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0)
  );

  vec3 m = max(
      0.5 - vec3(
          dot(x0, x0),
          dot(x12.xy, x12.xy),
          dot(x12.zw, x12.zw)
      ),
      0.0
  );
  m = m * m;
  m = m * m;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

struct ColorStop {
  vec3 color;
  float position;
};

#define COLOR_RAMP(colors, factor, finalColor) {              \
  int index = 0;                                            \
  for (int i = 0; i < 2; i++) {                               \
     ColorStop currentColor = colors[i];                    \
     bool isInBetween = currentColor.position <= factor;    \
     index = int(mix(float(index), float(i), float(isInBetween))); \
  }                                                         \
  ColorStop currentColor = colors[index];                   \
  ColorStop nextColor = colors[index + 1];                  \
  float range = nextColor.position - currentColor.position; \
  float lerpFactor = (factor - currentColor.position) / range; \
  finalColor = mix(currentColor.color, nextColor.color, lerpFactor); \
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;

  ColorStop colors[3];
  colors[0] = ColorStop(uColorStops[0], 0.0);
  colors[1] = ColorStop(uColorStops[1], 0.5);
  colors[2] = ColorStop(uColorStops[2], 1.0);

  vec3 rampColor;
  COLOR_RAMP(colors, uv.x, rampColor);

  float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude;
  height = exp(height);
  height = (uv.y * 2.0 - height + 0.2);
  float intensity = 0.6 * height;

  float midPoint = 0.20;
  float auroraAlpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);

  vec3 auroraColor = intensity * rampColor;

  fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);
}
`;

type AuroraProps = {
  colorStops?: [string, string, string];
  speed?: number;
  blend?: number;
  amplitude?: number;
};

function Aurora({
  colorStops = ["#7cff67", "#B497CF", "#5227FF"],
  amplitude = 1,
  blend = 0.5,
  speed = 0.5,
}: AuroraProps) {
  const propsRef = useRef({ colorStops, amplitude, blend, speed });
  propsRef.current = { colorStops, amplitude, blend, speed };

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({
      alpha: true,
      premultipliedAlpha: true,
      antialias: true,
    });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.canvas.style.backgroundColor = "transparent";
    gl.canvas.style.display = "block";

    let program: Program | undefined;

    function resize() {
      const width = container.offsetWidth;
      const height = container.offsetHeight;
      renderer.setSize(width, height);

      if (program) {
        program.uniforms.uResolution.value = [width, height];
      }
    }

    window.addEventListener("resize", resize);

    const geometry = new Triangle(gl);
    if (geometry.attributes.uv) {
      delete geometry.attributes.uv;
    }

    program = new Program(gl, {
      vertex: VERT,
      fragment: FRAG,
      uniforms: {
        uTime: { value: 0 },
        uAmplitude: { value: amplitude },
        uColorStops: {
          value: colorStops.map((hex) => {
            const color = new Color(hex);
            return [color.r, color.g, color.b];
          }),
        },
        uResolution: { value: [container.offsetWidth, container.offsetHeight] },
        uBlend: { value: blend },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });
    container.appendChild(gl.canvas);

    let animationId = 0;
    const update = (time: number) => {
      animationId = requestAnimationFrame(update);
      const currentProps = propsRef.current;

      if (!program) return;

      program.uniforms.uTime.value = time * currentProps.speed * 0.001;
      program.uniforms.uAmplitude.value = currentProps.amplitude;
      program.uniforms.uBlend.value = currentProps.blend;
      program.uniforms.uColorStops.value = currentProps.colorStops.map((hex) => {
        const color = new Color(hex);
        return [color.r, color.g, color.b];
      });

      renderer.render({ scene: mesh });
    };

    resize();
    animationId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);

      if (gl.canvas.parentNode === container) {
        container.removeChild(gl.canvas);
      }

      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [amplitude, blend, colorStops, speed]);

  return <div ref={containerRef} className="pointer-events-none absolute inset-0 h-full w-full" />;
}

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      <Aurora colorStops={["#7cff67", "#B497CF", "#22005c"]} blend={0.5} amplitude={1} speed={0.5} />
      <div className="relative z-10">
        <NavBar name="My portfolio" />
        <main className="main flex flex-col items-center p-4 mt-20 text-white mr-40">
          <p className="mb-4 mr-40 text-7xl font-bold text-white">
            Hi! I am <br />
          </p>
          <h1 className="mr-70 text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-600 transition-colors duration-300 ease-in-out p-3 rounded">
            Saliou Dieng
          </h1>
          <br />
          <p className="text-lg text-slate-300  ml-40">A computer science student, building skills in front-end development.</p>
         
        </main>
        <div className="flex flex-wrap gap-10 mt-10 ml-70">
         <button className="mt-4 px-6 py-2 bg-gradient-to-r from-green-400 to-purple-600 text-white font-bold rounded-full hover:from-green-500 hover:to-purple-700 transition-all duration-300 ease-in-out">
            react
          </button>
          <button className="mt-4 px-6 py-2 bg-gradient-to-r from-green-400 to-purple-600 text-white font-bold rounded-full hover:from-green-500 hover:to-purple-700 transition-all duration-300 ease-in-out">
            typescript
          </button>
          <button className="mt-4 px-6 py-2 bg-gradient-to-r from-green-400 to-purple-600 text-white font-bold rounded-full hover:from-green-500 hover:to-purple-700 transition-all duration-300 ease-in-out">
            nextjs
          </button>
          <button className="mt-4 px-6 py-2 bg-gradient-to-r from-green-400 to-purple-600 text-white font-bold rounded-full hover:from-green-500 hover:to-purple-700 transition-all duration-300 ease-in-out">
            Tailwind Css
          </button>
    </div>
      </div>
      <div className="relative mt-20">
        <Skills/>
      </div>
    </div>
  );
}
