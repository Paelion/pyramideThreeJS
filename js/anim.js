var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);


var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var controls = new THREE.OrbitControls(camera, renderer.domElement);

camera.position.set( 0, 20, 100 );
controls.update();

window.addEventListener('resize', function () {

    var width = window.innerWidth;
    var height = window.innerHeight;

    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();

});

function animate() {

  requestAnimationFrame( animate );

  // required if controls.enableDamping or controls.autoRotate are set to true
  controls.update();

  renderer.render( scene, camera );

}

var geometry = new THREE.ConeGeometry(1, 1, 4);

var material = new THREE.MeshBasicMaterial({color: 0xFFFFFF, wireframe: true});

var cone = new THREE.Mesh(geometry, material);
scene.add(cone);

camera.position.z = 3;

var update = function () {
    cone.rotation.x += 0.01;
    cone.rotation.y += 0.005;
};

var render = function () {
    renderer.render(scene, camera);
};

var GameLoop = function () {
    requestAnimationFrame(GameLoop);
    update();
    render();
};

GameLoop();


// let scene, camera, renderer, cone;

// function init(){
//     scene = new THREE.Scene();

//     camera = new THREE.PerspectiveCamera(75,
//          window.innerWidth / window.innerHeight,
//           0.1, 
//           1000
//     );

//     renderer = new THREE.WebGLRenderer({antialias : true});

//     renderer.setSize(window.innerWidth, window.innerHeight);

//     document.body.appendChild(renderer.domElement);


//     controls = new THREE.OrbitControls( camera, renderer.domElement );


//     var geometry = new THREE.ConeGeometry( 5, 6, 4 );
//     function makeInstance(geometry, color, x, y, z) {
//         const material = new THREE.MeshPhongMaterial({
//           color,
//           opacity: 0.5,
//           transparent: true,
//         });

//         const cube = new THREE.Mesh(geometry, material);
//         scene.add(cube);

//         cube.position.set(x, y, z);

//         return cube;
//       }
//       function hsl(h, s, l) {
//         return (new THREE.Color()).setHSL(h, s, l);
//       }

//       {
//         const d = 0.8;
//         makeInstance(geometry, hsl(0 / 8, 1, .5), -d, -d, -d);
//         makeInstance(geometry, hsl(1 / 8, 1, .5), d, -d, -d);
//         makeInstance(geometry, hsl(2 / 8, 1, .5), -d, d, -d);
//         makeInstance(geometry, hsl(3 / 8, 1, .5), d, d, -d);
//         makeInstance(geometry, hsl(4 / 8, 1, .5), -d, -d, d);
//         makeInstance(geometry, hsl(5 / 8, 1, .5), d, -d, d);
//         makeInstance(geometry, hsl(6 / 8, 1, .5), -d, d, d);
//         makeInstance(geometry, hsl(7 / 8, 1, .5), d, d, d);
//       }

//     camera.position.z = 4;

//     const controls = new OrbitControls(camera, canvas);
//     controls.target.set(0, 0, 0);
//     controls.update();

// }


// /*function main() {


//   function resizeRendererToDisplaySize(renderer) {
//     const canvas = renderer.domElement;
//     const width = canvas.clientWidth;
//     const height = canvas.clientHeight;
//     const needResize = canvas.width !== width || canvas.height !== height;
//     if (needResize) {
//       renderer.setSize(width, height, false);
//     }
//     return needResize;
//   }

//   let renderRequested = false;

//   function render() {
//     renderRequested = undefined;

//     if (resizeRendererToDisplaySize(renderer)) {
//       const canvas = renderer.domElement;
//       camera.aspect = canvas.clientWidth / canvas.clientHeight;
//       camera.updateProjectionMatrix();
//     }

//     renderer.render(scene, camera);
//   }
//   render();

//   function requestRenderIfNotRequested() {
//     if (!renderRequested) {
//       renderRequested = true;
//       requestAnimationFrame(render);
//     }
//   }

//   controls.addEventListener('change', requestRenderIfNotRequested);
//   window.addEventListener('resize', requestRenderIfNotRequested);
// }

// main();
// init();


// let scene, camera, renderer, cone;

// function init(){
//     scene = new THREE.Scene();

//     camera = new THREE.PerspectiveCamera(75,
//          window.innerWidth / window.innerHeight,
//           0.1, 
//           1000
//     );

//     renderer = new THREE.WebGLRenderer({antialias : true});

//     renderer.setSize(window.innerWidth, window.innerHeight);

//     document.body.appendChild(renderer.domElement);


//     var geometry = new THREE.ConeGeometry( 5, 6, 4 );
//     var material = new THREE.MeshBasicMaterial( {
//         color: 'white', 
//         opacity : 0.5, 
//         transparent : true
//     } );
//     cone = new THREE.Mesh( geometry, material );
//     scene.add( cone );

//     camera.position.z = 10;

// }


// function animate(){
//     requestAnimationFrame(animate);

//     //cone.rotation.x += 0.01;
//     cone.rotation.y += 0.01;

//     renderer.render(scene, camera);
// }

// function onWindowResize(){
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
// }

// window.addEventListener('resize', onWindowResize, false);
// */

// init();
// //animate();

