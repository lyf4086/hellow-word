const create=document.querySelector('#create');
create.onclick=function (){
    let pid=document.querySelector('.bread-nav').getElementsByTagName('span')[0].dataset.id;
    let arr=t.getChild(pid)
    console.log(arr);
    
    createbox(pid,arr);
}

function createbox(pid,arr){
    let num=0;
    if(arr){
        let filterArr=arr.filter(e=>e.title.includes('新建文件夹'));
        if(filterArr.length)num=filterArr.length+1;
    }else{
        fEmpty.style.display='none'//还在晕着
    }
    let div=document.createElement('div');
    div.className="file-item";
    let img=document.createElement('img');
    img.src="img/folder-b.png";
    let span=document.createElement('span');
    span.className="folder-name";
   
    let input=document.createElement('input');
    input.className="editor";
    input.onOff=true;
    input.style.display='block';
    input.value='新建文件夹'+(num? num:'');
    input.onblur=function (){
       let val=this.value;
       if(arr&&arr.some(e=>e.title==val)){
           this.focus();
           this.select();
       }else{
           let createId=+new Date;
           data[createId]={
               "id":createId,
               "pid":pid,
               "title":val,
               "type":"file",
               "checked":false
           }
           render(pid);
           treeMenu.innerHTML=renderTree(-1,-1)
       }
       
        
    }
   
    let i=document.createElement('i');
    div.appendChild(img);
    div.appendChild(span);
    div.appendChild(input);
    div.appendChild(i);
    folders.appendChild(div);
    input.style.display='block';
    input.select();
}


