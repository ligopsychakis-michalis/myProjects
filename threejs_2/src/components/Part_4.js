import * as THREE from 'three';

function Part_4(thr) {
    // platform
    const pBoxGeometry = new THREE.BoxGeometry(4, 0.25, 3);
    const pBoxMaterial = new THREE.MeshPhongMaterial({ color: 0x757575 });
    const pBox = new THREE.Mesh(pBoxGeometry, pBoxMaterial);
    pBox.position.y = -0.8;
    thr.scene.add(pBox);

    // red box
    const rBoxGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const rBoxMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
    const rBox = new THREE.Mesh(rBoxGeometry, rBoxMaterial);
    rBox.position.x = -1;
    thr.scene.add(rBox);

    // green box
    const gBoxGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const gBoxMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
    const gBox = new THREE.Mesh(gBoxGeometry, gBoxMaterial);
    thr.scene.add(gBox);

    // blue box
    const bBoxGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const bBoxMaterial = new THREE.MeshPhongMaterial({ color: 0x0000ff });
    const bBox = new THREE.Mesh(bBoxGeometry, bBoxMaterial);
    bBox.position.x = 1;
    thr.scene.add(bBox);


    // ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    thr.scene.add(ambientLight);

    // derectional light
    const directionalLight = new THREE.DirectionalLight(0xff0000, 0.5);
    directionalLight.position.set(0, 2, 0);
    // const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 2);
    thr.scene.add(directionalLight);

    // spot light
    const spotLight = new THREE.SpotLight(0xffffff, 1, 6, Math.PI/8);
    spotLight.position.set(0, 2, 1.5);
    // const spotLightHelper = new THREE.SpotLightHelper(spotLight, 0x00ff00)
    thr.scene.add(spotLight);

    // point light
    const pointLight = new THREE.PointLight(0xffffff, 8, 8, 7);
    pointLight.position.set(2, 0.5, 1.7);
    // const pointLightHelper = new THREE.PointLightHelper(pointLight, 0.5, 0x0000ff);
    thr.scene.add(pointLight);
}

export default Part_4;