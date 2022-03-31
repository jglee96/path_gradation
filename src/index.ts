import * as paper from 'paper';

paper.setup('');

const heartPath = 'M10,30 A20,20,0,0,1,50,30 A20,20,0,0,1,90,30 Q90,60,50,90 Q10,60,10,30 Z';
const heartPathItem = paper.PathItem.create(heartPath);

console.log(heartPathItem.className);
