import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';

function Part_10(thr) {
    // axes
    const axesHelper = new THREE.AxesHelper(8);
    thr.scene.add(axesHelper);

    // box
    const boxGeometry = new THREE.BoxGeometry(4, 4, 4);
    const boxMaterial = new THREE.MeshNormalMaterial();
    const box = new THREE.Mesh(boxGeometry, boxMaterial);
    thr.scene.add(box);

    // box2
    const box2Geometry = new THREE.BoxGeometry(4, 4, 4);
    const box2Material = new THREE.MeshNormalMaterial();
    const box2 = new THREE.Mesh(box2Geometry, box2Material);
    thr.scene.add(box2);

    // ground
    const groundGeometry = new THREE.BoxGeometry(24, 1, 24);
    const groundMaterial = new THREE.MeshNormalMaterial();
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.position.y = -2.5
    thr.scene.add(ground);

    const animate = (t) => {
        TWEEN.update(t);
        window.requestAnimationFrame(animate);
    }
    animate();

    const tween1 = new TWEEN.Tween({ x: 0, y: 0, xRoration: 0 })
        .to({ x: 5, y: 8, xRoration: Math.PI / 2 }, 2000)
        .onUpdate(coords => {
            box.position.x = coords.x;
            box.position.y = coords.y;
            box.rotation.x = coords.xRoration;
        })
        .easing(TWEEN.Easing.Exponential.InOut)
        .delay(500);

    const tween2 = new TWEEN.Tween({ x: 5, y: 8, xRoration: Math.PI / 2 })
        .to({ x: 0, y: 0, xRoration: 0 }, 2000)
        .onUpdate(coords => {
            box.position.x = coords.x;
            box.position.y = coords.y;
            box.rotation.x = coords.xRoration;
        })
        .easing(TWEEN.Easing.Exponential.InOut)
        .delay(500);

    tween1.chain(tween2);
    tween2.chain(tween1);
    tween1.start();

    const tween3 = new TWEEN.Tween({ x: 0, y: 0, xRoration: 0 })
        .to({ x: -5, y: 8, xRoration: Math.PI / 2 }, 2000)
        .onUpdate(coords => {
            box2.position.x = coords.x;
            box2.position.y = coords.y;
            box2.rotation.x = coords.xRoration;
        })
        .easing(TWEEN.Easing.Linear.None)
        .repeat(Infinity)
        .delay(500);

    tween3.start();
}

export default Part_10;