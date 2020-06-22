<template>
    <div id="container"
      v-bind:style ="dimensions"
    > </div>
</template>

<script>
import * as Three from 'three'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
export default {
  name: 'ThreeTest',
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null
    }
  },
  methods: {
    init: function() {
      let container = document.getElementById('container');
      let loader = new GLTFLoader();
      let group = new Three.Group();
      this.camera = new Three.PerspectiveCamera(22, container.clientWidth/container.clientHeight, 1, 2100);
      this.camera.position.z = 50;
      this.camera.position.y = 1;
      this.scene = new Three.Scene();
      this.renderer = new Three.WebGLRenderer({antialias: true,alpha:true});
      const ambientLight = new Three.HemisphereLight(
        0xa57fc0, // bright sky color
        0xFF1493, // dim ground color
        1.7 // intensity
      )
      const mainLight = new Three.DirectionalLight(0xFDFD96, 1.6);
      mainLight.position.set(14, 1, 200);
      this.scene.add(ambientLight, mainLight);
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      this.renderer.gammaFactor = 2.2;
      this.renderer.outputEncoding = Three.sRGBEncoding
      this.renderer.physicallyCorrectLights = true;
      let numberOfBoids = 2;
      container.appendChild(this.renderer.domElement);
      loader.load(
        '/three-assets/scene.gltf',
          gltf => {
          let model = gltf.scene;
          gltf.name = 'Action';
          if (model) {
            for ( var i = 0; i < numberOfBoids; i ++ ) {
              var m = model.clone();
              m.amplitude= Math.random()/6;
              m.shiftY = Math.floor(Math.random()*container.clientHeight)
              m.position.y = 0.03;
              m.position.x = i*5- 3;
              m.shiftX = Math.floor(Math.random()*20);
              m.rotateX(Math.PI/4)
              group.add(m);
            }
          }
          this.scene.add( group );
        },
        // called while loading is progressing
        function ( xhr ) {
          console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        // called when loading has errors
        function ( error ) {
          console.log( 'An error happened',error );
        }
      );
      this.renderer.setAnimationLoop(() => {
        var time = Date.now() / 1000;
        for ( var i = 0, l = group.children.length; i < l; i ++ ) {
          var child = group.children[ i ];
          var scaleY = Math.sin( time + child.shiftY * 0.1 ) * 0.009 + child.position.y/2;
          var scaleX = Math.sin( time + child.shiftX * 0.01 ) * 0.009 + child.position.x/2;
          child.position.y =  child.position.y/2 + scaleY;
          child.position.x =  child.position.x/2 + scaleX;
          child.rotateX(Math.sin( time + child.shiftY * child.amplitude/2 ) * 0.002)
        }
        this.render();
      })
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
          case 'md' :
              return {   height: '550px',
                      width: '400px' };
          default:
            return {   height: '550px',
                      width: '400px' };
        }
      }
    }
}
</script>
<style scoped>
  
</style>