import * as THREE from 'three';

function Part_8(thr) {
    const axesHelper = new THREE.AxesHelper(16);
    thr.scene.add(axesHelper);
    const uniform = {
        'u_time': {
            type: 'f',
            value: thr.clock.getElapsedTime()
        }
    }

    const render = () => {
        uniform.u_time.value = thr.clock.getElapsedTime();
        window.requestAnimationFrame(render);
    }
    render();

    const boxGeometry = new THREE.BoxGeometry(60, 1, 60, 40, 40, 40);
    const boxMaterial = new THREE.ShaderMaterial({ 
        wireframe: true,
        uniforms: uniform,
        vertexShader: `
            varying vec3 pos;
            uniform float u_time;

            void main() {
                pos = position;

                // gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, position.y, position.z, 1);
                // gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, sin(position.z), position.z, 1);
                // gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, sin(position.z) + position.y, position.z, 1);
                // gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, sin(position.z/4.0), position.z, 1);
                // gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, 4.0*sin(position.z/3.0), position.z, 1);
                // gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, sin(position.y) + u_time, position.z, 1);
                // gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, sin(position.z + u_time), position.z, 1);
                // gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, sin(position.z + u_time) + position.y, position.z, 1);
                // gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, sin(position.z/3.0 + u_time) + position.y, position.z, 1);
                // gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, 3.0*sin(position.z/3.0 + u_time) + position.y, position.z, 1);
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, 3.0*sin(position.z/4.0 + u_time) + 3.0*sin(position.x/4.0 + u_time), position.z, 1);
            }
        `,
        fragmentShader: `
            varying vec3 pos;
            uniform float u_time;

            void main () {
                // gl_FragColor = vec4(0, 1.0, 0.0, 1);
                // gl_FragColor = vec4(sin(u_time), 0.0, 0.0, 1);
                if (pos.x >= 0.0) {
                    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
                    // gl_FragColor = vec4(abs(sin(u_time)), 0.0, 0.0, 1);
                } else {
                    gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
                    // gl_FragColor = vec4(0.0, abs(cos(u_time)), 0.0, 1);
                }
            }
        ` 
    });
    const box = new THREE.Mesh(boxGeometry, boxMaterial);
    thr.scene.add(box);
}

export default Part_8;