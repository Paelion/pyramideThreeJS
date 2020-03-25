
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('pyramide').appendChild(renderer.domElement);

var scene = new THREE.Scene();


var camera = new THREE.PerspectiveCamera(45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

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


camera.position.z = 4;


var keyLight = new THREE.DirectionalLight(0xffffff, 1.0);
keyLight.position.set(-100, 0, 100);


var fillLight = new THREE.DirectionalLight(0xffffff, .5);
fillLight.position.set(100, 0, 100);

var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
backLight.position.set(100, 0, -100).normalize();


scene.add(keyLight);
scene.add(fillLight);
scene.add(backLight);




var objLoader = new THREE.OBJLoader();

objLoader.load('louvre.obj', function (object){
    scene.add(object);

    function animate(){
        requestAnimationFrame(animate);

        object.rotation.y += 0.005;
    }

    animate();
});



var render = function () {
    renderer.render(scene, camera);
};

var GameLoop = function () {
    requestAnimationFrame(GameLoop);
    render();
};

GameLoop();



