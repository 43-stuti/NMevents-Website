<template>
    <div id="container"
      v-bind:style ="dimensions"
    > </div>
</template>

<script>
import * as Three from 'three'
export default {
  name: 'ThreePetal',
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      flowerBunch: null
    }
  },
  methods: {
    init: function() {
      let container = document.getElementById('container');
      this.camera = new Three.PerspectiveCamera(22, container.clientWidth/container.clientHeight, 1, 2100);
      this.camera.position.z = 50;
      this.camera.position.y = 0;
      this.scene = new Three.Scene();
      this.renderer = new Three.WebGLRenderer({antialias: true,alpha:true});
      const ambientLight = new Three.HemisphereLight(
        0xFF69B4, // bright sky color
        0xFF1493, // dim ground color
        2.1 // intensity
      )
      const mainLight = new Three.DirectionalLight(0xFFFFFF, 0.9);
      mainLight.position.set(14, 200, 200);
      mainLight.target.position.set(300, 400, 200);
      mainLight.shadow.camera.near = 0.5;       
      mainLight.shadow.camera.far = 5000;      
      mainLight.shadow.camera.left = -500;
      mainLight.shadow.camera.bottom = -500;
      mainLight.shadow.camera.right = 500;
      mainLight.shadow.camera.top = 500;

      mainLight.castShadow = true;
      this.scene.add(ambientLight, mainLight);
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      this.renderer.gammaFactor = 2.2;
      this.renderer.outputEncoding = Three.sRGBEncoding
      this.renderer.physicallyCorrectLights = true;
      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMap.type = Three.PCFSoftShadowMap;
      container.appendChild(this.renderer.domElement);
      this.generateFlower();
      this.renderer.setAnimationLoop(() => {
       
        this.render();
      })
    },
    generateFlower() {
	
      let petalMat = new Three.MeshPhongMaterial({color: 0xeaeaea, side: Three.DoubleSide});
      
      let radius = 1;
      
      // each petal mesh is made of a part of a sphere
      let petalGeom = new Three.SphereBufferGeometry( radius, 20, 20, Math.PI / 4, Math.PI / 2, 0.4, Math.PI * 0.9 );
      // change pivot point - petals are generated around it
      petalGeom.translate(0, -radius, 0);
      petalGeom.rotateX(Math.PI / 2);
      
      let petalMesh = new Three.Mesh(petalGeom, petalMat);
      
      let petalCount = 5;
      let rotationStep = Math.PI * 2 / petalCount;
      
      let petalMeshes = [];
      let group = new Three.Group();
      for (let i = 0; i < petalCount; i ++) {
        
        petalMeshes[i] = petalMesh.clone();
        // generating the petals, rotated around a pivot point
        petalMeshes[i].rotation.y = rotationStep * i * 1.01;
        petalMeshes[i].position.y = -i/2.5;
        petalMeshes[i].rotateY(Math.PI/3.5)
        group.add(petalMeshes[i])
      }
      var previousPosition = 0;
      this.flowerBunch = new Three.Group();
      for(let i = 0; i < 2; i++) {
        let flower = group.clone();
        flower.rotateX(Math.PI / 2);
        flower.receiveShadow = true;
        flower.castShadow = true;
        flower.position.x = (previousPosition + i*radius*4)  - 5 ;
        //*flower.position.y = Math.random()*15 - radius*8 ;
        flower.position.z = i*1.3;
        this.flowerBunch.add(flower)
      }
      this.scene.add(this.flowerBunch)
    },
    render () {
      
      this.renderer.render(this.scene, this.camera);
      
    }
  },
  mounted() {
      this.init();
  },
  computed: {
        dimensions() {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs':
          case 'sm':
            return {   height: '350px',
                      width: '300px' };
         
          default:
            return {   height: '400px',
                      width: '600px' };
        }
      },
      scale() {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs':
          case 'sm':
            return {   x: 4,
                      y: 4 };
         
          default:
            return {   x: 3,
                      y: 3 };
        }
      }
    }
}
</script>
<style scoped>
  
</style>