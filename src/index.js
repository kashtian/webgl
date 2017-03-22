import webgl from './webgl';
import Clock from './canvas/clock';
import './style.less';

setTimeout(function() {
    new Clock({size: 200, color: '#FFC0CB'});
    webgl.init(document.querySelector('.webgl-wrapper'));
});