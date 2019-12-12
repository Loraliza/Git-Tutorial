var notes = (function () {
    var list = [];

    return{
        add: function (note) {
            if(note){
                if(note.replace(/\s/g, '').length){
                    var item = {timestamp: Date.now(), text: note};
                    list.push(item);
                    return true;
                }else{
                    return false;
                }
            }
            if(!note){
                return false;
            }
        },
        remove: function(index){
            if(index > list.length){
                return false;
            }
            if(/[a-zA-Z]+$/.test(index)){
                return false;
            }
            list.splice(index,1);
            return true;
        },
        count: function(){
            return list.length;
        },
        list: function(){},
        find: function(str){
            if(str){
                for(var i=0; i<list.length; i++){
                    var re = new RegExp(str,"gi");
                    var result = list[i].text.match(re);
                    if(result){
                        return true;
                    }
                    if(!result){
                        return false;
                    }
                }
            }else{
                return false;
            }
        },
        clear: function(){
            list.splice(0, list.length);
        }
    }
}());
