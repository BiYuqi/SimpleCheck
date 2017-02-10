(function(window,undefined){
    function checkSimple(o){
        function each(obj,callback){
            for(var i=0;i<obj.length;i++){
                var value = callback.call(this,i,obj[i]);
                if(value === false){
                    break;
                }
            }
            return;
        }
        function $All(el){
            return document.querySelectorAll(el);
        }
        var arr = [];
        for(let i=0;i<o.length;i++){
            arr.push(document.querySelector(o[i].target));
        }
        each(arr,function(k,v){
            v.onblur = function(){
                if(o[k].isBlank && o[k].isBlank == true){
                    if(v.value <= 0){
                        $All('.tips')[k].innerHTML = o[k].isBlankText;
                        return;
                    }
                }
                if(!(o[k].reg).test(v.value)){
                    $All('.tips')[k].innerHTML = o[k].tipsText;
                    return;
                }
            }
            v.onfocus = function(){
                $All('.tips')[k].innerHTML = '';
            }
        })
    }
    window.CheckSimple = function(o){
        return new checkSimple(o);
    }
})(window,undefined)
