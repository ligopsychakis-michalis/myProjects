// init scene, camera, renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
const controls = new THREE.OrbitControls( camera, renderer.domElement );
document.body.appendChild( renderer.domElement );

// camera's position
camera.position.set(0, 0, 6);
controls.update();

// cubes
function createCube(color, position, size) {
    const geometry = new THREE.BoxGeometry( size, size, size );
    const material = new THREE.MeshBasicMaterial({ color, wireframe: true });
    const cube = new THREE.Mesh( geometry, material );
    cube.position.y = position.y;
    cube.position.x = position.x;
    scene.add( cube );

    return cube;
}

function rotateCube(cube) {
    cube.rotation.x += 0.005;
    cube.rotation.y += 0.005;
}

const cubes = [ 
    createCube( 0x0078d4, { x: 0, y: 1.5 }, 1 ), 
    createCube( 0xdab768, { x: 0, y: 0 }, 1 ),
    createCube( 0x5cc9a1, { x: 0, y: -1.5 }, 1 ),
    createCube( 0x0000ff, { x: 0, y: 0 }, 4 )
];

// dots
function createDot() {
    var geometry = new THREE.BufferGeometry();
    geometry.setAttribute( 
        'position', 
        new THREE.Float32BufferAttribute(
            [
                Math.random() <= 0.5 ? -Math.random()*22 : Math.random()*22,
                Math.random() <= 0.5 ? -Math.random()*22 : Math.random()*22,
                Math.random() <= 0.5 ? -Math.random()*22 : Math.random()*22
            ], 
            3
        ) 
    );

    var material = new THREE.PointsMaterial({ size: 0.01, color: 0xffffff });

    var dot = new THREE.Points( geometry, material );
    scene.add( dot );
}
for (let i = 0; i < 8000; i++) {
    createDot();
}

// listeners
window.addEventListener("wheel", e => {
    if (e.deltaY < 0 && camera.position.z > 6) {
        camera.position.z -= 1;
    } else if (e.deltaY > 0 && camera.position.z < 36) {
        camera.position.z += 1;
    }
});

// render the scene (~ 60 times per second)
function animate() {
    // rotate cubes
    cubes.forEach(cube => rotateCube(cube));

    controls.update();

	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();