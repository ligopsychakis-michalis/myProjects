import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Stats from 'three/examples/jsm/libs/stats.module';

export default class SceneInit {
    constructor(canvas) {
        this.canvas = canvas;
    }

    init () {
        // mouse listeners
        window.addEventListener('mousedown', () => document.body.style.cursor = 'grabbing');
        window.addEventListener('mouseup', () => document.body.style.cursor = 'grab');

        // set clock
        this.clock = new THREE.Clock();

        // setup
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 1, 1000);
        this.camera.position.set(0, 8, 16);
        this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        // orbit control
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);

        // stats
        this.stats = Stats();
        document.body.appendChild(this.stats.dom);

        // // ambient light
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(ambientLight);

        // // derectional light
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(0, 10, 10);
        // const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 2);
        this.scene.add(directionalLight);
    }

    animate() {
        this.controls.update();
        this.stats.update();

        this.renderer.render(this.scene, this.camera);
        window.requestAnimationFrame(this.animate.bind(this));
    }
}