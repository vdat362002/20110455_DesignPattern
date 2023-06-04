import { Circle } from './Circle.js';
import { RasterRenderer } from './RasterRenderer.js';
import { VectorRenderer } from './VectorRenderer.js';

let raster = new RasterRenderer();
let vector = new VectorRenderer();
let circle = new Circle(vector, 5);
circle.draw();
circle.resize(2);
circle.draw();
