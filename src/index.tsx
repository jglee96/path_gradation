import React from 'react';
import ReactDOM from 'react-dom';
import * as paper from 'paper';

paper.setup('');

const heartPathData = 'M10,30 A20,20,0,0,1,50,30 A20,20,0,0,1,90,30 Q90,60,50,90 Q10,60,10,30 Z';
const heartPathItem = paper.PathItem.create(heartPathData);
heartPathItem.translate(new paper.Point(800, 300));
heartPathItem.scale(10);

const { length } = heartPathItem;
const count = 350;

const { bounds } = heartPathItem;
const { center } = bounds;
// eslint-disable-next-line no-undef
const pathDataArr: JSX.Element[] = [];
// eslint-disable-next-line no-undef
const gradArr: JSX.Element[] = [];
console.log(heartPathItem.className);
if (heartPathItem.className === 'Path') {
  const path = heartPathItem as paper.Path;
  for (let i = 0; i < count; i += 1) {
    const p1 = path.getPointAt((length / count) * i);
    const p2 = path.getPointAt((length / count) * (i + 1));

    const shape = new paper.Path();
    shape.moveTo(p1);
    shape.lineTo(p2);
    shape.lineTo(center);
    shape.closePath();
    pathDataArr.push(
      <path d={shape.pathData} fill={`url(#linearGradient${i})`} stroke={`url(#linearGradient${i})`} strokeWidth="1" />,
    );

    const cp = p1.add(p2).divide(2);

    gradArr.push(
      <linearGradient id={`linearGradient${i}`} x1={cp.x} y1={cp.y} x2={center.x} y2={center.y} gradientUnits="userSpaceOnUse">
        <stop offset="5%" stopColor="gold" />
        <stop offset="50%" stopColor="blue" />
        <stop offset="100%" stopColor="red" />
      </linearGradient>,
    );
  }
} else if (heartPathItem.className === 'CompoundPath') {
  // console.log(heartPathItem.className);
}

// eslint-disable-next-line no-undef
function App(): JSX.Element {
  console.log('component');
  return (
    <>
      <h3>
        Class name:
        {' '}
        {heartPathItem.className}
      </h3>
      <h3>
        Count:
        {' '}
        {count}

      </h3>
      <h3>
        Length / Count:
        {' '}
        {length / count}
      </h3>
      <div>
        <svg overflow="visible">
          <defs>
            {gradArr}
          </defs>
          {pathDataArr}
        </svg>
      </div>
      <div>
        <svg overflow="visible">
          {/* <path d={heartPathItem.pathData} fill="none" stroke="red" strokeWidth={5} strokeDasharray={4} /> */}
        </svg>
      </div>

    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
