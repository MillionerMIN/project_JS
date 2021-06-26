'use strict';

import { tns } from "./node_modules/tiny-slider/src/tiny-slider";


tns({
   container: '.my-slider',
   items: 1,
   slideBy: 1,
   autoplay: true,
   fixedWidth: 500,
   autoWidth: true,
   viewportMax: 500/500,
   center: true
});