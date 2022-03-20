const loadUser=()=>{
    fetch('https://api.kanye.rest/')
    .then(res=>res.json())
    .then(data=>loadData(data))
}

const loadData=(data)=>{
    const demo=document.getElementById('quote')

    const li=document.createElement('li')
    li.innerText=data.quote
    demo.appendChild(li)   
}