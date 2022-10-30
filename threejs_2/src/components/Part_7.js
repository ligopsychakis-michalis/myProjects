import * as THREE from 'three';

function Part_7(thr) {
    function createBox(x, y, z) {
        const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
        const boxMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
        const box = new THREE.Mesh(boxGeometry, boxMaterial);
        box.position.set(x, y, z);
        thr.scene.add(box);
    }

    const boxesCoords = [
        [-2, 2, -2], [0, 2, -2], [2, 2, -2], [-2, 2, 0], [0, 2, 0], [2, 2, 0], [-2, 2, 2], [0, 2, 2], [2, 2, 2],
        [-2, 0, -2], [0, 0, -2], [2, 0, -2], [-2, 0, 0], [0, 0, 0], [2, 0, 0], [-2, 0, 2], [0, 0, 2], [2, 0, 2],
        [-2, -2, -2], [0, -2, -2], [2, -2, -2], [-2, -2, 0], [0, -2, 0], [2, -2, 0], [-2, -2, 2], [0, -2, 2], [2, -2, 2]
    ];
    boxesCoords.forEach(coords => createBox(coords[0], coords[1], coords[2]));

    const pointer = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();

    window.addEventListener('click', e => {
        pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
        pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(pointer, thr.camera);
        const intersects = raycaster.intersectObjects(thr.scene.children);

        if (intersects.length) {
            switch (intersects[0].object.material.color.getHexString()) {
                case 'ffffff':
                    intersects[0].object.material.color.set(0xff0000);
                    break;
                case 'ff0000':
                    intersects[0].object.material.color.set(0x00ff00);
                    break;
                case '00ff00':
                    intersects[0].object.material.color.set(0x0000ff);
                    break;
                default:
                    intersects[0].object.material.color.set(0xffffff);
                    break;
            }
        }
    });
}

export default Part_7;