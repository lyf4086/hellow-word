const folders=document.querySelector('.folders');
const fEmpty=document.querySelector('.f-empty');
const checkedAll=document.querySelector('#checkedAll');
render(0);
function render(id){
    folders.innerHTML=''//初始状态先把folders清空
    let arr=t.getChild(id)//先获取数据
    if(!arr){
        fEmpty.style.display='block';
        checkedAll.className=''
    }else{
        arr.forEach(e=>{
        fEmpty.style.display='none'; //空数据提示
        checkedAll.className=arr.every(e=>e.checked) ? 'checked': '';//控制全选的状态
        let div=document.createElement('div');
        div.className='file-item'+(e.checked ?' hov':'')
        div.dataset.id=e.id;
        let img=document.createElement('img');
        img.src="img/folder-b.png";
        img.dataset.id=e.id;//每一个能点击的节点 都添加自定义属性，用以获取点击目标点
        img.ondblclick=function (){//给img绑定点击事件
          
            let child=t.getChild(this.dataset.id)
            
            if(child)(
                child.forEach(e=>e.checked=false)
            )
            renderNav(this.dataset.id)
            render(this.dataset.id)
            huanyuan(this.dataset.id)/////////////////////////
        }
        let span=document.createElement('span');
        span.className="folder-name";
        span.innerHTML=e.title;
        let input=document.createElement('input');
        input.className='editor';
        let i=document.createElement('i');
         i.className=e.checked ? 'checked':'';
        i.onclick=function (){//i的点击改变数据的checked状态
            e.checked=!e.checked;
            render(id)
            // return false
        }
       
        div.appendChild(img);
        div.appendChild(span);
        div.appendChild(input);
        div.appendChild(i);
        folders.appendChild(div);
        })

        checkedAll.onclick=function (){
            if(fEmpty.style.display=='none'){
                
                let q=this.classList.toggle('checked')
                arr.forEach(e=>e.checked=q)
                render(id)
            }
        }
    }
}
