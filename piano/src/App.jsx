import React, { useEffect } from "react"
import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Piano from './components/Piano';

function App() {
  useEffect(() => {
    // init scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 8, 8);
    const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas'), antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight); 
    renderer.setClearColor( 0x00ff00, 0.1 );
    document.body.appendChild(renderer.domElement);

    // add controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.maxDistance = 30;
    controls.minDistance = 5;
    
    // add helper axes
    const axes = new THREE.AxesHelper(3);
    // scene.add(axes);
    
    // init piano
    const piano = new Piano(scene, camera);
    piano.init();

    // ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    // derectional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
    directionalLight.position.set(0, 10, 10);
    scene.add(directionalLight);

    // animate
    const animate = (t) => {
      controls.update();
      TWEEN.update(t);

      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    }
    animate();
  }, []);

  return (
    <canvas id="canvas" />
  )
}

export default App
