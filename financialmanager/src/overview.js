var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})

tl.to("#fanta",{
    top: "150%",
    left: "0%"
}, 'orange')
tl.to("#orange-cut",{
    top:"160%",
    left: "23%"
}, 'orange')
tl.to("#orange",{
    width: "15%",
    top:"160%",
    right: "10%"
}, 'orange')
tl.to("#leaf",{
    top:"110%",
    rotate: "130deg",
    left: "70%"
}, 'orange')
tl.to("#leaf2",{
    top:"110%",
    rotate: "130deg",
    left: "0%"
}, 'orange')


var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
}})

tl2.from(".lemon1",{
    rotate: "-90deg",
    left: "-100%",
    top: "110%"
}, 'ca')
tl2.from("#cocacola",{
    rotate: "-90deg",
    top: "110%",
    left: "-100%",
}, 'ca')

tl2.from(".lemon2",{
    rotate: "90deg",
    left: "100%",
    top: "110%"
}, 'ca')
tl2.from("#pepsi",{
    rotate: "90deg",
    top: "110%",
    left: "100%",
}, 'ca')

tl2.to("#orange-cut",{
    width:"18%",
    left: "42%",
    top: "204%"
}, 'ca')
tl2.to("#fanta",{
    width:"35%",
    top: "250%",
    // left: "33%",
}, 'ca')

/*
    Bitcoin Block ThreeJS -> https://www.youtube.com/watch?v=X7ClQDZQfwU
    Author: DevSage (Youtube) -> https://www.youtube.com/DevSage
*/

let scene, camera, renderer;

document.addEventListener("DOMContentLoaded", function()
{
  initializeScene()

  // Adding ambient lighting
  scene.add(new THREE.AmbientLight(0xffffff,0.5))

  // Left point light
  const pointLightLeft = new THREE.PointLight(0xff4422, 1)
  pointLightLeft.position.set(-1,-1,3)
  scene.add(pointLightLeft)

  // Right point light
  const pointLightRight = new THREE.PointLight(0x44ff88, 1)
  pointLightRight.position.set(1,2,3)
  scene.add(pointLightRight)

  // Top point light
  const pointLightTop = new THREE.PointLight(0xdd3311, 1)
  pointLightTop.position.set(0,3,2)
  scene.add(pointLightTop)

  THREE.ImageUtils.crossOrigin = '';
  // IMPORTANT: This next line defines the texture of your coin. I didn't include the Minecraft texture (for copyright reasons) You should replace the url inside '.load(...)' with the path to your own image.
  const texture = new THREE.TextureLoader().load( "https://raw.githubusercontent.com/pkellz/devsage/master/ThreeJS/MinecraftBlock/devsage.jpg" );

  const material = new THREE.MeshStandardMaterial({
    map: texture,
    metalness:0.7,
    roughness:0.3,
  })

  var geometry = new THREE.CylinderGeometry(3,3,0.4,100);
  const mesh = new THREE.Mesh(geometry,material)

  scene.add(mesh)
  camera.position.set(0,0,7)

  mesh.rotation.x = 2
  mesh.rotation.y = 1.5

  function animate()
  {
    mesh.rotation.x +=0.01
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
  }

  animate()
})