const folderContent=document.querySelector('.folder-content');
folders.onmousedown=function (ev){
    if(ev.target.className=='file-item'||ev.target.tagName=='IMG')return
    let disX=ev.pageX;
    let disY=ev.pageY;
    let div=document.createElement('div');
    let checkedArr=[];//声明一个数组用以存储被选中的盒子
    let foldersChild=folders.children;//获取当前页面的盒子
    for(let i=0;i<foldersChild.length;i++){//获取每个被选中的盒子
        let id=foldersChild[i].dataset.id;
        if(data[id]!=undefined){
            checkedArr.push(data[id]);
        }
    }

div.className='kuang';//给生成的盒子命名并设置位置
div.style.cssText=`left:${disX}px;top:${disY-folders.getBoundingClientRect().top+breadmenu.offsetHeiht}px`;
folderContent.appendChild(div);
document.onmousemove=function (ev){
    
    if(Math.abs(ev.pageX-disX)>10||Math.abs(ev.pageY-disY)>10){
        div.style.width=Math.abs(ev.pageX-disX)+'px';
        div.style.height=Math.abs(ev.pageY-disY)+'px';
        let l=Math.min(disX,ev.pageX);
        let t2=Math.min(disY,ev.pageY);
        for(let i=0;i<foldersChild.length;i++){
            if(foldersChild[i].classList.contains('lang'))contenue;
            let id=foldersChild[i].dataset.id;
            let onOff=t.bong(div,foldersChild[i]);
            data[id].checked=onOff;
            foldersChild[i].className=onOff? 'file-item hov':'file-item';
            foldersChild[i].getElementsByTagName('i')[0].className=onOff? 'checked':'';
            if(checkedArr.length){//如果有盒子被选中才能执行下面的操作
                checkedAll.className=checkedArr.every(e=>e.checked)?'checked':'';

            }else{
                checkedAll.className=''
            }
        }
        
        div.style.left=l+'px';
        div.style.top=t2-section.offsetTop+'px';
        return false
    }
}
document.onmouseup=function (){
    div.remove();
    document.onmouseup=document.onmousemove=null
}
}