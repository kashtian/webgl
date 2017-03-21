import webgl from './webgl';
import './style.less';

setTimeout(function() {
    webgl.init(document.querySelector('.webgl-wrapper'));
});