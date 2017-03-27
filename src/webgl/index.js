import * as THREE from 'three';

export default class Webgl {
    constructor(options) {
        this.opts = options;
        this.init();
    }

    init() {
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(this.opts.w, this.opts.h);
        document.body.appendChild(this.renderer.domElement);
        this.renderer.setClearColor(0xFFFFFF, 1);
        this.renderer.setScissorTest( true );
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    }

    // 创建正交照相机
    createOrtCamera() {
        let camera = new THREE.OrthographicCamera(-2,2,1.5,-1.5,1,10);
        camera.position.set(0, 0, 5);
        camera.lookAt(new THREE.Vector3(0,0,0));
        let scene = new THREE.Scene();
        scene.add(camera);
        let cube = new THREE.Mesh(new THREE.BoxGeometry(1,1,1),
                    new THREE.MeshBasicMaterial({
                        color: 0xff0000,
                        wireframe: true
                    }));
        scene.add(cube);
        this.renderer.setViewport(0,450, 200, 150);
        this.renderer.setScissor(0,450, 200, 150);
        this.renderer.render(scene, camera);
    }

    // 创建透视照相机
    createPersCamera() {
        let camera = new THREE.PerspectiveCamera(15, 400 / 300, 1, 10);
        camera.position.set(3, 0, 5);
        camera.lookAt(new THREE.Vector3(0,0,0));
        let scene = new THREE.Scene();
        scene.add(camera);
        let cube = new THREE.Mesh(new THREE.BoxGeometry(1,1,1, 2, 2, 2),
                    new THREE.MeshBasicMaterial({
                        color: 0xff0000,
                        wireframe: true
                    }));
        scene.add(cube);
        this.renderer.setViewport(200,450, 200, 150);
        this.renderer.setScissor(200,450, 200, 150);
        this.renderer.render(scene, camera);
    }

    // 创建几何体，默认使用透视照相机
    createGeoMetry({geometry, x, y, w, h, fov, material, light}) {
        let camera = new THREE.PerspectiveCamera(fov || 15, 400 / 300, 1, 10);
        camera.position.set(5, -5, 5);
        camera.lookAt(new THREE.Vector3(0,0,0));
        let scene = new THREE.Scene();
        scene.add(camera);
        let mymaterial = material || new THREE.MeshBasicMaterial({
            color: 0xff0000,
            wireframe: true
        });
        let mesh = new THREE.Mesh(geometry, mymaterial);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add(mesh);        
        if (light) {
            light.target = mesh;
            light.castShadow = true;
            scene.add(light);
        }
        this.renderer.setViewport(x, y, w, h);
        this.renderer.setScissor(x, y, w, h);
        this.renderer.render(scene, camera);
    }
}