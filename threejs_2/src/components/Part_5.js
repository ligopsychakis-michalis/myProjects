import * as THREE from 'three';

function Part_5(thr) {
    function box(position, texture) {
        const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
        const boxMaterial = new THREE.MeshStandardMaterial({ map: texture });
        const box = new THREE.Mesh(boxGeometry, boxMaterial);
        box.position.set(position.x, position.y, position.z);

        thr.scene.add(box);
    }

    function sphere(position, texture) {
        const sphereGeometry = new THREE.SphereGeometry(0.5, 40, 40);
        const sphereMaterial = new THREE.MeshStandardMaterial({ map: texture });
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.set(position.x, position.y, position.z);

        thr.scene.add(sphere);
    }

    // background texture
    const spaceTexture = new THREE.TextureLoader().load('../../assets/space.jpeg');
    // spaceTexture.wrapS = THREE.RepeatWrapping;
    // spaceTexture.wrapT = THREE.RepeatWrapping;
    // spaceTexture.repeat.set(2, 2);
    thr.scene.background = spaceTexture;

    // textures
    const texture_1 = new THREE.TextureLoader().load('../../assets/uv.png');
    const texture_2 = new THREE.TextureLoader().load('../../assets/crate.png');
    const texture_3 = new THREE.TextureLoader().load('../../assets/earth.jpeg');

    // boxes
    box({ x: -1.8, y: -0.65, z: 0}, texture_1);
    box({ x: 0, y: -0.65, z: 0}, texture_2);
    box({ x: 1.8, y: -0.65, z: 0}, texture_3);

    // spheres
    sphere({ x: -1.8, y: 0.65, z: 0}, texture_1);
    sphere({ x: 0, y: 0.65, z: 0}, texture_2);
    sphere({ x: 1.8, y: 0.65, z: 0}, texture_3);
}

export default Part_5;