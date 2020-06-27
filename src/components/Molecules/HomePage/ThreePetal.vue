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
      flowerBunch: null,
      petal: null
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
	
      let petalMat = new Three.MeshPhongMaterial({color: 0xF06292, side: Three.DoubleSide});
      
      let radius = this.scale.flowersize;
      
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
        petalMeshes[i].rotation.y = rotationStep * i;
        //petalMeshes[i].position.y = -i/2.5;
        petalMeshes[i].rotateY(Math.PI/3.5)
        group.add(petalMeshes[i])
      }
      var arrangementRadius = this.scale.arrangementRadius;
      var arrangedFlowers = 6;
      var angle = 360/arrangedFlowers
      this.flowerBunch = new Three.Group();
      for(let i = 0; i < arrangedFlowers; i++) {
        let flower = group.clone();
        flower.rotateX(Math.PI / 2);
        flower.receiveShadow = true;
        flower.castShadow = true;
        flower.multiplier = Math.random();

        flower.position.x = flower.position.x + Math.cos((Math.PI*i*angle)/180)*8 + Math.random()*3 ;
        flower.position.y = flower.position.y + Math.sin((Math.PI*i*angle)/180)*arrangementRadius + Math.random()*4;
       // flower.position.x = (Math.random()* i*radius*10)  - 6 ;
        //flower.position.y = (Math.random()* i*radius*10) ;
        flower.position.z = Math.random()*5
        this.flowerBunch.add(flower)
      }
      this.petal = petalMesh.clone();
      this.petal.rotateX(Math.PI/2);
      this.petal.scale.set(4,1,5);
      this.scene.add(this.petal)
      this.scene.add(this.flowerBunch)
    },
    render () {
      var time = Date.now() / 7000;

      for ( var i = 0, l = this.flowerBunch.children.length; i < l; i ++ ) {
        var child = this.flowerBunch.children[ i ];
        var scaleX = Math.sin(3*Math.PI*(child.multiplier)*(time ) + 0.3) * 0.002
        var scaleY = Math.sin(3*Math.PI*(child.multiplier)*(time ) + 0.3) * 0.009
        child.position.x =  child.position.x + scaleX;
        child.position.y =  child.position.y + scaleY;
        //child.rotateX(Math.sin( time + child.shiftY * child.amplitude/2 ) * 0.002)
        
      }
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
            return {   height: '800px',
                      width: '200px' };
          case 'md':
            return {   height: '1000px',
                      width: '800px' };
          default:
            return {   height: '800px',
                      width: '950px' };
        }
      },
      scale() {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs':
          case 'sm':
            return {
              flowersize: 0.2,
              arrangementRadius: 0.5
            };
          case 'md':
            return {
              flowersize: 0.2,
              arrangementRadius: 1
            }; 
          default:
            return {
              flowersize: 0.4,
              arrangementRadius: 7
            };
        }
      }
    }
}
</script>
<style scoped>
  
</style>