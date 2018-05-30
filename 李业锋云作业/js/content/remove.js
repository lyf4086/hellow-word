const del=document.getElementById('del');
const tanbox=document.getElementById('tanbox');
del.onclick=function (){
    let pid=breadNav.getElementsByTagName('span')[0].dataset.id;
    let arr=t.getChilds(pid)
    if(arr.some(e=>e.checked)){
       tanbox.style.display='block'
    };
    tanbox.onclick=function (ev){
        let tar=ev.target;
        if(tar.innerHTML=="确定"){
           arr.forEach(e=>{
               if(e.checked){
                //    let removeArr=t.getChilds(e.id).concat(data[e.id]);
                  delete data[e.id]
                  console.log(33);
                  
               }
           });
           render(pid);
           
        treeMenu.innerHTML=renderTree(-1,-1);
        tanbox.style.display='none'
        }
        if(tar.innerHTML=="取消"||tar.innerHTML=="X"){
            tanbox.style.display='none'
        }
    }
    
}