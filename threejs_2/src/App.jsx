import { useEffect, useState } from 'react'
import SceneInit from './components/SceneInit';
import Part_1 from './components/Part_1';
import Part_2 from './components/Part_2';
import Part_3 from './components/Part_3';
import Part_4 from './components/Part_4';
import Part_5 from './components/Part_5';
import Part_6 from './components/Part_6';
import Part_7 from './components/Part_7';
import Part_8 from './components/Part_8';
import Part_9 from './components/Part_9';
import Part_10 from './components/Part_10';
import Part_11 from './components/Part_11';
import Part_12 from './components/Part_12';

const createPart = {
  '1': (thr) => Part_1(thr), '2': (thr) => Part_2(thr),
  '3': (thr) => Part_3(thr), '4': (thr) => Part_4(thr),
  '5': (thr) => Part_5(thr), '6': (thr) => Part_6(thr),
  '7': (thr) => Part_7(thr), '8': (thr) => Part_8(thr),
  '9': (thr) => Part_9(thr), '10': (thr) => Part_10(thr),
  '11': (thr) => Part_11(thr), '12': (thr) => Part_12(thr)
}

function App() {
  const [part, setPart] = useState(1);

  useEffect(() => {
    const canvas = document.getElementById('myThreeJSCanvas')
    canvas.remove();
    const newCanvas = document.createElement("canvas");
    newCanvas.setAttribute("id", "myThreeJSCanvas");
    document.querySelector(".App").appendChild(newCanvas);

    const thr = new SceneInit(newCanvas);
    thr.init();

    createPart[part](thr);

    thr.animate();
  }, [part]);

  return (
    <div className="App">
      <canvas id="myThreeJSCanvas" />

      <div className="parts">
        <div className="parts-group">
          <div onClick={() => setPart(1)} style={{ color: part == 1 ? 'red' : 'black' }}>Part 1</div>
          <div onClick={() => setPart(2)} style={{ color: part == 2 ? 'red' : 'black' }}>Part 2</div>
          <div onClick={() => setPart(3)} style={{ color: part == 3 ? 'red' : 'black' }}>Part 3</div>
        </div>
        <div className="parts-group">
          <div onClick={() => setPart(4)} style={{ color: part == 4 ? 'red' : 'black' }}>Part 4</div>
          <div onClick={() => setPart(5)} style={{ color: part == 5 ? 'red' : 'black' }}>Part 5</div>
          <div onClick={() => setPart(6)} style={{ color: part == 6 ? 'red' : 'black' }}>Part 6</div>
        </div>
        <div className="parts-group">
          <div onClick={() => setPart(7)} style={{ color: part == 7 ? 'red' : 'black' }}>Part 7</div>
          <div onClick={() => setPart(8)} style={{ color: part == 8 ? 'red' : 'black' }}>Part 8</div>
          <div onClick={() => setPart(9)} style={{ color: part == 9 ? 'red' : 'black' }}>Part 9</div>
        </div>
        <div className="parts-group">
          <div onClick={() => setPart(10)} style={{ color: part == 10 ? 'red' : 'black' }}>Part 10</div>
          <div onClick={() => setPart(11)} style={{ color: part == 11 ? 'red' : 'black' }}>Part 11</div>
          <div onClick={() => setPart(12)} style={{ color: part == 12 ? 'red' : 'black' }}>Part 12</div>
        </div>
      </div>
    </div>
  )
}

export default App
