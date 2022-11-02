import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';

class BlackKey {
    constructor(scene, note, position, audio) {
        this.scene = scene;
        this.note = note;
        this.position = position;
        this.audio = audio;
    }

    create() {
        const keyGeometry = new THREE.BoxGeometry(0.5, 0.3, 2.6);
        const keyMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });
        const key = new THREE.Mesh(keyGeometry, keyMaterial);
        key.onPlay = () => this._onPlay(key);
        key.onReset = () => this.audio.currentTime = 0;
        key.position.set(this.position[0], this.position[1] , this.position[2]);
        this.scene.add(key);
    }

    _onPlay(key) {
        this.audio.play();

        const tweenIn = new TWEEN.Tween({ y: this.position[1], xRoration: 0 })
            .to({ y: this.position[1] - 0.1, xRoration: 0.08 }, 50)
            .onUpdate(to => {
                key.position.y = to.y;
                key.rotation.x = to.xRoration;
            })
            .easing(TWEEN.Easing.Cubic.Out);

        const tweenOut = new TWEEN.Tween({ y: this.position[1] - 0.1, xRoration: 0.08 })
            .to({ y: this.position[1], xRoration: 0 }, 50)
            .onUpdate(to => {
                key.position.y = to.y;
                key.rotation.x = to.xRoration;
            })
            .easing(TWEEN.Easing.Cubic.In);

        tweenIn.chain(tweenOut);
        tweenIn.start();
    }
}

export default BlackKey;