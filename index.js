/**
 * Created by lzane on 8/27/17.
 */
var renderer = require('./src/renderer');

const plugincdn={
    "lg-thumbnail":"https://raw.githubusercontent.com/sachinchoolur/lg-thumbnail.js/refs/heads/master/dist/lg-thumbnail.js",
    "lg-fullscreen":"https://raw.githubusercontent.com/sachinchoolur/lg-fullscreen.js/refs/heads/master/dist/lg-fullscreen.js",
    "lg-zoom":"https://raw.githubusercontent.com/sachinchoolur/lg-zoom.js/refs/heads/master/dist/lg-zoom.js",
    "lg-video":"https://raw.githubusercontent.com/sachinchoolur/lg-video.js/refs/heads/master/dist/lg-video.js",
    "lg-pager":"https://raw.githubusercontent.com/sachinchoolur/lg-pager.js/refs/heads/master/dist/lg-pager.js"
}
const pluginlist=Object.keys(plugincdn)
const genplugin=(config)=>{
    const list={}
    for (let index = 0; index < pluginlist.length; index++) {
        const element = plugincdn[pluginlist[index]];
        if(config.plugins.hasOwnProperty(pluginlist[index])){
           list[pluginlist[index]]=config.plugins[pluginlist[index]]
        }else{
            list[pluginlist[index]]=element
        }
        
        
    }
    return list
}
hexo.config.lightgallery = Object.assign({
    js: 'https://cdn.jsdelivr.net/lightgallery.js/1.0.1/js/lightgallery.min.js',
    css: 'https://cdn.jsdelivr.net/lightgallery.js/1.0.1/css/lightgallery.min.css',
    plugins: genplugin(hexo.config.lightgallery),
}, hexo.config.lightgallery);

hexo.extend.filter.register('after_post_render',renderer.render,9);
