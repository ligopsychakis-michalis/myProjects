import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import CannonDebugger from 'cannon-es-debugger';

function Part_11(thr) {
    const axes = new THREE.AxesHelper(8);
    thr.scene.add(axes);

    const physicsWorld = new CANNON.World({
        gravity: new CANNON.Vec3(0, -9.82, 0)
    });

    const groundBody = new CANNON.Body({
        type: CANNON.Body.STATIC,
        shape: new CANNON.Plane()
    })
    groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
    physicsWorld.addBody(groundBody);

    // car
    const carBody = new CANNON.Body({
        mass: 5,
        position: new CANNON.Vec3(0, 6, 0),
        shape: new CANNON.Box(new CANNON.Vec3(4, 0.5, 2))
    });
    const vehicle = new CANNON.RigidVehicle({
        chassisBody: carBody
    }) 

    // wheel
    const mass = 1;
    const axisWidth = 5;
    const wheelShape = new CANNON.Sphere(1);
    const wheelMaterial = new CANNON.Material('wheel');
    const down = new CANNON.Vec3(0, -1, 0);

    const wheelBody1 = new CANNON.Body({ mass, material: wheelMaterial });
    wheelBody1.addShape(wheelShape);
    wheelBody1.angularDamping = 0.4;
    vehicle.addWheel({
        body: wheelBody1,
        position: new CANNON.Vec3(-2, 0, axisWidth / 2),
        axis: new CANNON.Vec3(0, 0, 1),
        direction: down
    });

    const wheelBody2 = new CANNON.Body({ mass, material: wheelMaterial });
    wheelBody2.addShape(wheelShape);
    wheelBody2.angularDamping = 0.4;
    vehicle.addWheel({
        body: wheelBody2,
        position: new CANNON.Vec3(-2, 0, -axisWidth / 2),
        axis: new CANNON.Vec3(0, 0, 1),
        direction: down
    });

    const wheelBody3 = new CANNON.Body({ mass, material: wheelMaterial });
    wheelBody3.addShape(wheelShape);
    wheelBody3.angularDamping = 0.4;
    vehicle.addWheel({
        body: wheelBody3,
        position: new CANNON.Vec3(2, 0, axisWidth / 2),
        axis: new CANNON.Vec3(0, 0, 1),
        direction: down
    });

    const wheelBody4 = new CANNON.Body({ mass, material: wheelMaterial });
    wheelBody4.addShape(wheelShape);
    wheelBody4.angularDamping = 0.4;
    vehicle.addWheel({
        body: wheelBody4,
        position: new CANNON.Vec3(2, 0, -axisWidth / 2),
        axis: new CANNON.Vec3(0, 0, 1),
        direction: down
    });

    vehicle.addToWorld(physicsWorld);

    // listeners to move car
    window.addEventListener('keydown', e => {
        const steer = Math.PI / 8;
        const force = 30;

        if (e.key === 'ArrowUp') {
            vehicle.setWheelForce(force, 0);
            vehicle.setWheelForce(force, 1);
        } else if (e.key === 'ArrowDown') {
            vehicle.setWheelForce(-force / 2, 0);
            vehicle.setWheelForce(-force / 2, 1);
        } else if (e.key === 'ArrowLeft') {
            vehicle.setSteeringValue(steer, 0);
            vehicle.setSteeringValue(steer, 1);
        } else if (e.key === 'ArrowRight') {
            vehicle.setSteeringValue(-steer, 0);
            vehicle.setSteeringValue(-steer, 1);
        }
    });

    window.addEventListener('keyup', e => {
        const steer = 0;
        const force = 0;

        if (e.key === 'ArrowUp') {
            vehicle.setWheelForce(force, 0);
            vehicle.setWheelForce(force, 1);
        } else if (e.key === 'ArrowDown') {
            vehicle.setWheelForce(-force / 2, 0);
            vehicle.setWheelForce(-force / 2, 1);
        } else if (e.key === 'ArrowLeft') {
            vehicle.setSteeringValue(steer, 0);
            vehicle.setSteeringValue(steer, 1);
        } else if (e.key === 'ArrowRight') {
            vehicle.setSteeringValue(-steer, 0);
            vehicle.setSteeringValue(-steer, 1);
        }
    });

    // physics debugger
    const cannonDebugger = new CannonDebugger(thr.scene, physicsWorld);
    
    const animate = () => {
        cannonDebugger.update();
        physicsWorld.fixedStep();

        window.requestAnimationFrame(animate);
    }
    animate();
}

export default Part_11;