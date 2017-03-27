import * as THREE from 'three';
import webglHelper from './webgl/helper';
import Clock from './canvas/clock';
import Webgl from './webgl';
import './style.less';

setTimeout(function() {
    new Clock({size: 200, color: '#FFC0CB'});
    webglHelper.init(document.querySelector('.webgl-wrapper'));
    let webglObj = new Webgl({w: 800, h: 600});
    webglObj.createOrtCamera();
    webglObj.createPersCamera();
    let light = new THREE.SpotLight(0xFFC0CB, 1, 100, Math.PI / 6, 25);
    light.shadow.mapSize.width = 512;
    light.shadow.mapSize.height = 512;
    light.shadow.camera.near = 0.5;
    light.shadow.camera.far = 500;
    //light.position.set(2,5,3);
    webglObj.createGeoMetry({
        geometry: new THREE.SphereGeometry(3, 18, 12),
        x: 400,
        y: 450,
        w: 200,
        h: 150,
        fov: 75,
        material: new THREE.MeshLambertMaterial({
            color: 0xffff00,
            emissive: 0xff0000
        }),
        light: light
    });
    webglObj.createGeoMetry({
        geometry: new THREE.BoxGeometry(1,1,1),
        x: 600,
        y: 450,
        w: 200,
        h: 150,
        fov: 15,
        material: new THREE.MeshLambertMaterial({
            color: 0xffff00,
            emissive: 0xff0000
        }),
        light: light
    });
    webglObj.createGeoMetry({
        geometry: new THREE.TorusGeometry(3,1, 4, 8),
        x: 0,
        y: 300,
        w: 200,
        h: 150,
        fov: 85,
        material: new THREE.MeshBasicMaterial({
            color: 0xffff00,
            opacity: 0.7
        })
    });
});