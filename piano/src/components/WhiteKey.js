import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';

class WhiteKey {
    constructor(scene, note, position, audio) {
        this.scene = scene;
        this.note = note;
        this.position = position;
        this.audio = audio;
    }

    create() {
        const keyGeometry = new THREE.BoxGeometry(1, 0.5, 4);
        const keyMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
        const key = new THREE.Mesh(keyGeometry, keyMaterial);
        key.position.set(this.position[0], this.position[1], this.position[2]);
        key.onPlay = () => this._onPlay(key);
        key.onReset = () => this.audio.currentTime = 0;
        this.scene.add(key);

        const fontLoader = new FontLoader()
        fontLoader.load(
            'node_modules/three/examples/fonts/droid/droid_serif_regular.typeface.json',
            font => {
                const noteGeometry = new TextGeometry(this.note, {
                    height: 0.15,
                    size: 0.5,
                    font
                });
                const noteMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
                const note = new THREE.Mesh(noteGeometry, noteMaterial);
                note.position.set(this.position[0] - 0.25, this.position[1] + 0.6, this.position[2] - 2.3);
                note.rotation.x = -1;
                this.scene.add(note);
            }
        );
    }

    _onPlay(key) {
        this.audio.play();

        const tweenIn = new TWEEN.Tween({ y: this.position[1], xRoration: 0 })
            .to({ y: this.position[1] - 0.12, xRoration: 0.09 }, 50)
            .onUpdate(to => {
                key.position.y = to.y;
                key.rotation.x = to.xRoration;
            })
            .easing(TWEEN.Easing.Cubic.Out);

        const tweenOut = new TWEEN.Tween({ y: this.position[1] - 0.12, xRoration: 0.09 })
            .to({ y: this.position[1], xRoration: 0 }, 50)
            .onUpdate(to => {
                key.position.y = to.y;
                key.rotation.x = to.xRoration;
            })
            .easing(TWEEN.Easing.Cubic.In);

        tweenIn.chain(tweenOut);

        key.scale.y = -0.8;
        tweenIn.start();
        tweenOut.onComplete(() => key.scale.y = 1);
    }
}

export default WhiteKey;