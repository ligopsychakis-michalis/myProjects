import * as THREE from 'three';
import * as CANNON from 'cannon-es';
// import CannonDebugger from 'cannon-es-debugger';

function Part_11(thr) {
    const axes = new THREE.AxesHelper(8);
    thr.scene.add(axes);

    const physicsWorld = new CANNON.World({
        gravity: new CANNON.Vec3(0, -9.82, 0)
    });

    // ground
    const groundGeometry = new THREE.BoxGeometry(24, 1, 24);
    const groundMaterial = new THREE.MeshNormalMaterial();
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.position.y = -0.5;
    thr.scene.add(ground);

    const groundBody = new CANNON.Body({
        type: CANNON.Body.STATIC,
        shape: new CANNON.Plane
    });
    groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
    physicsWorld.addBody(groundBody);

    // left wall
    const wallGeometry = new THREE.BoxGeometry(1, 12, 24);
    const wallMaterial = new THREE.MeshNormalMaterial();
    const wall = new THREE.Mesh(wallGeometry, wallMaterial);
    wall.position.x = -12.5;
    wall.position.y = 6;
    thr.scene.add(wall);

    const wallBody = new CANNON.Body({
        mass: 0,
        shape: new CANNON.Box(new CANNON.Vec3(0.5, 6, 12))
    });
    wallBody.position.x = -12.5;
    wallBody.position.y = 6;
    physicsWorld.addBody(wallBody);

    // sphere
    const sphereGeometry = new THREE.SphereGeometry(1, 20, 20);
    const sphereMaterial = new THREE.MeshNormalMaterial();
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    thr.scene.add(sphere);

    const sphereBody = new CANNON.Body({
        mass: 5,
        shape: new CANNON.Sphere(1)
    });
    sphereBody.position.y = 10;
    physicsWorld.addBody(sphereBody);

    // box
    const boxGeometry = new THREE.BoxGeometry(1.6, 1.6, 1.6);
    const boxMaterial = new THREE.MeshNormalMaterial();
    const box = new THREE.Mesh(boxGeometry, boxMaterial);
    box.position.y = 13;
    box.position.x = 0.5;
    thr.scene.add(box);

    const boxBody = new CANNON.Body({
        mass: 5,
        shape: new CANNON.Box(new CANNON.Vec3(0.8, 0.8, 0.8))
    });
    boxBody.position.y = 13;
    boxBody.position.x = 0.5;
    physicsWorld.addBody(boxBody);

    // physics debugger
    // const cannonDebugger = new CannonDebugger(thr.scene, physicsWorld);
    
    const animate = () => {
        // cannonDebugger.update();
        physicsWorld.fixedStep();
        sphere.position.copy(sphereBody.position);
        sphere.quaternion.copy(sphereBody.quaternion);
        box.position.copy(boxBody.position);
        box.quaternion.copy(boxBody.quaternion);

        window.requestAnimationFrame(animate);
    }
    animate();
}

export default Part_11;