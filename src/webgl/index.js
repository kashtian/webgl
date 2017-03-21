import * as THREE from 'three';

export default {
    init(container) {
        if (!container) {
            return;
        }
        let width = container.clientWidth;
        let height = container.clientHeight;
        this.step = -1;
        this.initRenderer(container, width, height);
        //this.initStats(container);
        this.initCamera(width, height);
        this.initScene();
        this.initLight();
        //this.initLine();
        //this.initGrid();
        //this.createText();
        this.createMesh();
        this.renderer.clear();
        this.renderer.render(this.scene, this.camera);
        //this.render();
    },

    initRenderer(container, w, h) {        
        this.renderer = new THREE.WebGLRenderer({
            antialias : true
        });
        this.renderer.setSize(w, h);
        container.appendChild(this.renderer.domElement);
        this.renderer.setClearColor(0xFFFFFF, 1);
    },

    initCamera(w, h) {
        this.camera = new THREE.PerspectiveCamera(45, w / h, 1, 10000);
        Object.assign(this.camera.position, { x: 600, y: 0, z: 600 });
        Object.assign(this.camera.up, { x: 0, y: 1, z: 0 });
        this.camera.lookAt({x: 0, y: 0, z: 0});
    },

    initScene() {
        this.scene = new THREE.Scene();
    },

    initLight() {
        let light = new THREE.AmbientLight(0xFF0000);
        light.position.set(100, 100, 200);
        this.scene.add(light);
    },

    initStats(container) {
        this.stats = new Stats();
        Object.assign(this.stats.domElement.style, {
            position: 'absolute',
            left: '0px',
            top: '0px'
        });
        container.appendChild(this.stats.domElement);
    },

    initLine() {
        // 创建一个几何体
        let geometry = new THREE.Geometry();
        // 定义线条的材质
        let material = new THREE.LineBasicMaterial({
            // 线条各部分颜色会根据顶点颜色来进行插值形成一种渐变效果
            vertexColors: THREE.VertexColors
        })
        let color1 = new THREE.Color(0x444444),
            color2 = new THREE.Color(0xFF0000);

        // 定义两个定点并设置颜色
        let p1 = new THREE.Vector3(-100, 0, 100);
        let p2 = new THREE.Vector3(100, 0, -100);
        geometry.vertices.push(p1);
        geometry.vertices.push(p2);
        geometry.colors.push(color1, color2);

        let line = new THREE.Line(geometry, material, THREE.LineSegments);
        this.scene.add(line);
    },

    // xz 平面网格
    initGrid() {
        let geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3(-500, 0, 0));
        geometry.vertices.push(new THREE.Vector3(500, 0, 0));
        let material = new THREE.LineDashedMaterial({
            color: 0xFFC0CB,
            opacity: 1
        })
        let count = 20, step = 1000 / count;
        let line;
        for (let i = 0; i < count; i++) {            
            line = new THREE.Line(geometry, material);
            line.position.z = (i * step) - 500;
            this.scene.add(line);
            
            line = new THREE.Line(geometry, material);
            line.position.x = (i * 50) - 500;
            line.rotation.y = 90 * Math.PI / 180;
            this.scene.add(line);
        }
    },

    createMesh() {
        let geometry = new THREE.CubeGeometry(200, 100, 50, 4, 4);
        let material = new THREE.MeshLambertMaterial({color: 0xFFC0CB});
        let mesh = new THREE.Mesh(geometry, material);
        this.scene.add(mesh);
    },

    createText() {
        let textGeo = new THREE.TextGeometry('test', {

        });
        let material = new THREE.MultiMaterial( [
					new THREE.MeshPhongMaterial( { color: 0xffffff, shading: THREE.FlatShading } ), // front
					new THREE.MeshPhongMaterial( { color: 0xffffff, shading: THREE.SmoothShading } ) // side
				] );
        let textMesh = new THREE.Mesh(textGeo, material);
        this.scene.add(textMesh);
    },

    render() {
        this.renderer.clear();
        this.step = (this.camera.position.y > 1000 || this.camera.position.y < 0) ? (-this.step) : this.step;
        this.camera.position.y += this.step;
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(() => {
            this.render();
        });
        //this.stats.update();
    }
}