import * as THREE from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader';

function Part_6(thr) {
    // threeJS font
    const fontLoader = new FontLoader()
    fontLoader.load(
        'node_modules/three/examples/fonts/droid/droid_serif_regular.typeface.json',
        font => {
            const textGeometry = new TextGeometry('hello world', {
                height: 2,
                size: 10,
                font
            });
            const textMaterial = new THREE.MeshNormalMaterial();
            const text = new THREE.Mesh(textGeometry, textMaterial);
            text.position.set(-36, 8, 0);
            thr.scene.add(text);
        }
    );

    // custom font
    const ttfLoader = new TTFLoader();
    ttfLoader.load('../../assets/Averta-Semibold.ttf', json => {
        const font = fontLoader.parse(json);
        const textGeometry = new TextGeometry('hello world', {
            height: 2,
            size: 10,
            font
        });
        const textMaterial = new THREE.MeshNormalMaterial();
        const text = new THREE.Mesh(textGeometry, textMaterial);
        text.position.set(-34.5, -8, 0);
        thr.scene.add(text);
    });
}

export default Part_6;