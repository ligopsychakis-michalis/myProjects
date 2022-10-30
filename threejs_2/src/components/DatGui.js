import { GUI } from 'dat.gui';

function DatGui(item, name) {
    const gui = new GUI();

    const geometryFolder = gui.addFolder(`${name} geometry`);
    const rotationFolder = geometryFolder.addFolder('Rotation');
    rotationFolder.add(item.rotation, 'x', 0, Math.PI).name('Rotate X Axis');
    rotationFolder.add(item.rotation, 'y', 0, Math.PI).name('Rotate Y Axis');
    rotationFolder.add(item.rotation, 'z', 0, Math.PI).name('Rotate Z Axis');
    
    const scaleFolder = geometryFolder.addFolder('Scale');
    scaleFolder.add(item.scale, 'x', 0, 2).name('Scale X Axis');
    scaleFolder.add(item.scale, 'y', 0, 2).name('Scale Y Axis');
    scaleFolder.add(item.scale, 'z', 0, 2).name('Scale Z Axis');

    const materialFolder = gui.addFolder(`${name} material`);
    materialFolder.add(item.material, 'wireframe');
    materialFolder
        .addColor({ boxMeshColor: item.material.color.getHex() }, 'boxMeshColor')
        .onChange(value => item.material.color.set(value));
}

export default DatGui;