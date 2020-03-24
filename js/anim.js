
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

/*var geometry = new THREE.ConeBufferGeometry(1, 1, 4, 4,true );

var material = new THREE.MeshBasicMaterial({color: 0xFFFFFF, wireframe: true});

var cone = new THREE.Mesh(geometry, material);
scene.add(cone);*/



var geometry = new THREE.BoxGeometry(1,1,1);
var material = new THREE.MeshBasicMaterial({color : 0x00ff00});

camera.position.z = 5;

var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
keyLight.position.set(-100, 0, 100);


var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), .75);
fillLight.position.set(100, 0, 100);

var backLight = new THREE.DirectionalLight(new THREE.Color(0x404040, 1.0));
backLight.position.set(100, 0, -100).normalize();

var light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

scene.add(keyLight);
scene.add(fillLight);
scene.add(backLight);



var objLoader = new THREE.OBJLoader();
objLoader.load('louvre.obj', function (object) {

    scene.add(object);
});










var render = function () {
    renderer.render(scene, camera);
};

var GameLoop = function () {
    requestAnimationFrame(GameLoop);
    render();
};

GameLoop();


