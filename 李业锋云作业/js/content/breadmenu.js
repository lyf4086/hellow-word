const breadmenu=document.querySelector('.breadmenu');
const breadNav=breadmenu.children[1];

renderNav(0);
function renderNav(id){
    let parentsArr=t.getParents(id);//获取所有父级数据
    let html='';
    parentsArr.forEach((e,i,all)=>{
        if(i==all.length-1){
            html+=`<span data-id="${e.id}">${e.title}</span>`
        }else{
            html+=`<a data-id="${e.id}" href="javascript:;">${e.title}</a>`//给每个要点击的元素添加自定义属性
        }
    })
    breadNav.innerHTML=html;
    breadNav.onclick=function (ev){
        let tar=ev.target;
        if(tar.tagName==='A'){
            let childNav=t.getChild(tar.dataset.id)
            childNav.forEach(e=>e.checked=false)
            renderNav(tar.dataset.id-0)
            render(tar.dataset.id);
           huanyuan(tar.dataset.id)///////////////////////////
        }
    }
}



           