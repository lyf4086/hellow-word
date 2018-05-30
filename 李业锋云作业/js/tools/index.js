let t={
    arr:[],
    getChild (id){
        let childArr=[];
        for(let attr in data){
            if(data[attr].pid==id){
                childArr.push(data[attr]);
            }
        }
        if(childArr.length){
            return childArr
        }else{
            return null
        }
    },
    getChilds (id){
        let child=this.getChild(id);
        if(child){
            child.forEach(e=>{
                t.arr.push(e);
                this.getChilds(e.id)
            })
        }
        return t.arr;
    },
    getParent(id){
        if(data[id] && data[id].pid!=-1){
            return data[data[id].pid];
        }
        return null
    },
    getParents(id){
        let parentsArr =[];
        let now =data[id];
        while(now){
            parentsArr.unshift(now);
            now=this.getParent(now.id)
        }
        return parentsArr
    },
    bong(box1,box2){
        let bl = box1.offsetLeft;
        let bt = box1.offsetTop;
        let br = bl + box1.offsetWidth;
        let bb = bt + box1.offsetHeight;
    
        let cl = box2.offsetLeft + box.offsetLeft;
        let ct = box2.offsetTop + box.offsetTop;
        let cr = cl + box2.offsetWidth;
        let cb = ct + box2.offsetHeight;
    
        if(br < cl || bb < ct || bl > cr || bt > cb){
            return false;
        }else{
            //碰到了
            return true;
        }
    }

}