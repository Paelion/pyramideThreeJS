
var scene = new THREE.Scene();


var camera = new THREE.PerspectiveCamera(75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

controls = new THREE.OrbitControls(camera, renderer.domElement);


window.addEventListener('resize', function () {

    var width = window.innerWidth;
    var height = window.innerHeight;

    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();

});

var geometry = new THREE.ConeGeometry(1, 1, 4);

var material = new THREE.MeshBasicMaterial({color: 0xFFFFFF, wireframe: true});

var cone = new THREE.Mesh(geometry, material);
scene.add(cone);

camera.position.z = 3;




var render = function () {
    renderer.render(scene, camera);
};

var GameLoop = function () {
    requestAnimationFrame(GameLoop);
    render();
};

GameLoop();


