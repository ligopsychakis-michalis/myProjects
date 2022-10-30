import * as THREE from 'three';

function Part_9(thr) {
    // axes
    const axesHelper = new THREE.AxesHelper(8);
    thr.scene.add(axesHelper);

    // textures
    const sunTexture = new THREE.TextureLoader().load('../../assets/sun.jpeg');
    const earthTexture = new THREE.TextureLoader().load('../../assets/earth.jpeg');
    const moonTexture = new THREE.TextureLoader().load('../../assets/moon.jpeg');

    // groups
    const earthOrbit = new THREE.Group();
    const moonOrbit = new THREE.Group();

    // sun
    const sunGeometry = new THREE.SphereGeometry(8, 50, 50);
    const sunMaterial = new THREE.MeshStandardMaterial({ map: sunTexture });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    thr.scene.add(sun);

    // earth
    const earthGeometry = new THREE.SphereGeometry(4, 50, 50);
    const earthMaterial = new THREE.MeshStandardMaterial({ map: earthTexture });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    earth.position.x = 30;
    earthOrbit.add(earth);
    thr.scene.add(earthOrbit);


    // moon
    const moonGeometry = new THREE.SphereGeometry(1, 50, 50);
    const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);
    moonOrbit.position.x = 30;
    moon.position.x = 6.5;
    moonOrbit.add(moon);
    earthOrbit.add(moonOrbit);

    // animation
    const animate = () => {
        sun.rotation.y += 0.001;
        earth.rotation.y += 0.003;
        earthOrbit.rotation.y += 0.003;
        moonOrbit.rotation.y += 0.01;
        window.requestAnimationFrame(animate);
    }
    animate();
}

export default Part_9;