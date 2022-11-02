import * as THREE from 'three';
import WhiteKey from './WhiteKey';
import BlackKey from './BlackKey';
import Frame from './Frame';

class Piano {
    constructor (scene, camera) {
        this.scene = scene;
        this.camera = camera;
    }

    init() {
        // piano's frame
        const frame = new Frame(this.scene);
        frame.create();

        // piano's keys
        const keys = [
            new WhiteKey(this.scene, 'C', [ -4.95, 0, 0 ], new Audio('../../assets/c.mp3')),
            new BlackKey(this.scene, 'C♯/D♭', [ -4.4, 0.35, -0.65 ], new Audio('../../assets/c_sharp.mp3')),
            new WhiteKey(this.scene, 'D', [ -3.85, 0, 0 ], new Audio('../../assets/d.mp3')),
            new BlackKey(this.scene, 'D♯/E♭', [ -3.3, 0.35, -0.65 ], new Audio('../../assets/d_sharp.mp3')),
            new WhiteKey(this.scene, 'E', [ -2.75, 0, 0 ], new Audio('../../assets/e.mp3')),
            new WhiteKey(this.scene, 'F', [ -1.65, 0, 0 ], new Audio('../../assets/f.mp3')),
            new BlackKey(this.scene, 'F♯/G♭', [ -1.1, 0.35, -0.65 ], new Audio('../../assets/f_sharp.mp3')),
            new WhiteKey(this.scene, 'G', [ -0.55, 0, 0 ], new Audio('../../assets/g.mp3')),
            new BlackKey(this.scene, 'G♯/A♭', [ 0, 0.35, -0.65 ], new Audio('../../assets/g_sharp.mp3')),
            new WhiteKey(this.scene, 'A', [ 0.55, 0, 0 ], new Audio('../../assets/a.mp3')),
            new BlackKey(this.scene, 'A♯/B♭', [ 1.1, 0.35, -0.65 ], new Audio('../../assets/a_sharp.mp3')),
            new WhiteKey(this.scene, 'B', [ 1.65, 0, 0 ], new Audio('../../assets/b.mp3')),
            new WhiteKey(this.scene, 'C', [ 2.75, 0, 0 ], new Audio('../../assets/c2.mp3')),
            new BlackKey(this.scene, 'C♯/D♭', [ 3.3, 0.35, -0.65 ], new Audio('../../assets/c2_sharp.mp3')),
            new WhiteKey(this.scene, 'D', [ 3.85, 0, 0 ], new Audio('../../assets/d2.mp3')),
            new BlackKey(this.scene, 'D♯/E♭', [ 4.4, 0.35, -0.65 ], new Audio('../../assets/d2_sharp.mp3')),
            new WhiteKey(this.scene, 'E', [ 4.95, 0, 0 ], new Audio('../../assets/e2.mp3'))
        ];
        keys.forEach(key => key.create());

        // handle key's play
        const pointer = new THREE.Vector2();
        const raycaster = new THREE.Raycaster();

        window.addEventListener('click', e => {
            pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
            pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;
    
            raycaster.setFromCamera(pointer, this.camera);
            const intersects = raycaster.intersectObjects(this.scene.children);

            if (
                intersects?.length &&
                intersects[0]?.object?.onReset &&
                intersects[0]?.object?.onReset 
            ) {
                intersects[0]?.object?.onReset();
                intersects[0]?.object?.onPlay();
            }
        });
    }
} 

export default Piano;