function $(name) {
    this.name = name;
}

$.id = function(id){
    var element = document.getElementById(this.id);
    return element;
};

window.app = window.app || {};
window.app.$ = $;