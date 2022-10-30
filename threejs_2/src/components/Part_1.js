import * as THREE from 'three';

function Part_1(thr) {
    // box
    const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
    const boxMaterial = new THREE.MeshNormalMaterial()
    const box = new THREE.Mesh(boxGeometry, boxMaterial);
    box.rotation.y = 2;
    box.rotation.x = 0.2;
    thr.scene.add(box);
}

export default Part_1;