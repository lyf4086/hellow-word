

const remove=document.querySelector('#remove');
const modelTree=document.querySelector('.modal-tree');
const contentTree=document.querySelector('.content');
const cancel=document.querySelector('.cancel');
const iconClose=document.querySelector('.icon_close');
let checkedId=-1;
remove.onclick=function (){
    let pid=breadNav.getElementsByTagName('span')[0].dataset.id;
    let arr=t.getChild(pid);
    if(arr.some(e=>e.checked)){
        contentTree.innerHTML=renderTree(-1,-1);
        let contentTreeChilds=contentTree.querySelectorAll('.tree-title');
        for(let i=0;i<contentTreeChilds.length;i++){
            contentTreeChilds[i].onclick=function (){
                for(let i=0;i<contentTreeChilds.length;i++){
                    contentTreeChilds[i].style.background=''
                }
                this.style.background='rgba(204, 204,204,1)';
                checkedId=this.children[0].dataset.id
            }
        }
        let ok=modelTree.querySelector('.ok');
        ok.onclick=function (){
            let checkedData=arr.filter(e=>e.checked);

      
        let dataLine=[];
        checkedData.forEach(e=>{
            let arr=t.getChilds(e.id).concat(data[e.id])
            dataLine.push(...arr)
        })
        if(!dataLine.some(e=>e.id==checkedId)){
            checkedData.forEach(ee=>{
                ee.pid=checkedId*1
                ee.checked=false;
            })
        }else{
            alert('站住')
        }
        render(pid);
        treeMenu.innerHTML=renderTree(-1,-1);
        modelTree.style.display='none';
        }
        modelTree.style.display='block'
    }else{
        alert('请选择要移动的文件')
    }
    
}
cancel.onclick=iconClose.onclick=function (){
    modelTree.style.display='none'
}