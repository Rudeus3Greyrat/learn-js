const el=document.getElementById('input')
const button=document.getElementById('button')
const msg=document.getElementById('variable')
let value=undefined;

const obj={text:value}

msg.innerText=obj.text

const proxy=new Proxy(obj,{
    get(target, p, receiver) {
        return Reflect.get(target,p,receiver)
    },
    set(target, p, value, receiver) {
        el.value=value
        msg.innerText=value
        return Reflect.set(target,p,value,receiver)
    }
})

el.oninput=e=>proxy.text=e.target.value
button.onclick=()=>proxy.text+='a'
