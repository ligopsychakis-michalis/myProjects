import * as THREE from 'three';

class Frame {
    constructor(scene) {
        this.scene = scene;
    }

    create() {
        // left
        this._createFramePart({ w: 1, h: 1, d: 6 }, { x: -5.95, y: 0, z: -0.8 });
        // right
        this._createFramePart({ w: 1, h: 1, d: 6 }, { x: 5.95, y: 0, z: -0.8 });
        // top
        this._createFramePart({ w: 11, h: 1, d: 1.8 }, { x: 0, y: 0, z: -2.9 });
        // bottom
        this._createFramePart({ w: 11, h: 0.25, d: 6 }, { x: 0, y: -0.375, z: -0.8 });
    }

    _createFramePart(geometry, position) {
        const frameTexture = new THREE.TextureLoader().load('../../assets/wood.jpeg')

        const frameGeometry = new THREE.BoxGeometry(geometry.w, geometry.h, geometry.d);
        const frameMaterial = new THREE.MeshStandardMaterial({ map: frameTexture });
        const frame = new THREE.Mesh(frameGeometry, frameMaterial);
        frame.position.set(position.x, position.y, position.z);
        this.scene.add(frame);
    }
}

export default Frame;