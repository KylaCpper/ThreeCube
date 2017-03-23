//is webgl
if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
var Speed = 1;
var RotatSpeed = 0.1;

// Our Javascript will go here.
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var a= new  THREE.Mesh( geometry, material );
var cube = new THREE.Mesh( geometry, material );

// cube.matrixAutoUpdate = false;
// cube.updateMatrix();
scene.add( a );
scene.add( cube );
document.addEventListener( 'mousemove', onDocumentMouseMove, false );
document.addEventListener( 'mousedown', onDocumentMouseDown, false );
document.addEventListener( 'keydown', onDocumentKeyDown, false );
document.addEventListener( 'keyup', onDocumentKeyUp, false );

camera.position.z=5;




render();
function render() {
	//camera.position.set(cube.position.x,cube.position.y,cube.position.z+5);
	//camera.lookAt(cube.position);
		//console.log(camera.position)
	
	 requestAnimationFrame( render );
	// cube.position.x+=0.1;
	// cube.rotation.x += 0.1;
	// cube.rotation.y += 0.1;

	renderer.render( scene, camera );
}
function onDocumentMouseMove(event){
	//console.log(event.preventDefault());
	//cube.rotation.y-=RotatSpeed;
	
}
function onDocumentMouseDown(event){
	
}
function onDocumentKeyDown(event){
	
	switch ( event.keyCode ) {
        case 87: cube.position.z-=Speed;
        break;
        case 65: cube.position.x-=Speed;
        break;
        case 83: cube.position.z+=Speed; 
        break;
        case 68: cube.position.x+=Speed; 
        break;
        case 32: cube.position.y+=Speed; 
        break;
        case 16: cube.position.y-=Speed; 
        break;
    }
}
function onDocumentKeyUp(event){
	
}