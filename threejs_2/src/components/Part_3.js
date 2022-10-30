import * as THREE from 'three';
import DatGui from "./DatGui";

function Part_3(thr) {
    // box
    const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
    const boxMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 })
    const box = new THREE.Mesh(boxGeometry, boxMaterial);
    box.rotation.x = 0.3;
    box.rotation.y = 0.4;
    thr.scene.add(box);

    DatGui(box, 'Box');
}

export default Part_3;