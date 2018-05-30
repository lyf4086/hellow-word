const treeMenu=document.querySelector('.tree-menu');

function renderTree(pid,num){

    let child=t.getChild(pid);
    if(!child)return '';
    num++;
    let html=`<ul style="padding-left:${num*10}px">`
    child.forEach(e=>{
        html+=
            `<li>
                <div class="tree-title" style="">
                <span data-id="${e.id}" data-on=false class="${t.getChild(e.id) ?'open':''}"><i></i>${e.title}</span>
                </div>
                ${renderTree(e.id,num)}
            </li>`
        
    })
    html+=`</ul>`;

    return html;
    
    
}

treeMenu.innerHTML=renderTree(-1,-1)
Array.from( treeMenu.querySelector('span')).forEach(e=>e.onOff=true)

treeMenu.addEventListener('click',fnClick)
function fnClick(ev){
    let tar=ev.target;
    
    if(tar.tagName=='SPAN'){
        let oul=tar.parentNode.nextElementSibling;
        if(oul){
          tar.onOff=!tar.onOff
         oul.style.display=!tar.onOff ?'block':'none'
         tar.className=  !tar.onOff ? 'open':'tree-ico'
        }
        huanyuan(tar.dataset.id)
    //    tar.parentNode.style.background='#f1f1f1'
       render(tar.dataset.id);
       renderNav(tar.dataset.id)
    }
}
huanyuan(0)
function huanyuan(n){
    let aspan=Array.from(treeMenu.getElementsByTagName('span'));
    
     aspan.forEach(e=>{
         if(e.dataset.id==n){
            e.parentNode.style.background='#f1f1f1'
         }else{
            e.parentNode.style.background='' 
         }
     }) 
}