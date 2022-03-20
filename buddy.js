const buddyUser=()=>{
    fetch('https://randomuser.me/api/?results=50')
    .then(res=>res.json())
    .then(data=>displayBuddy(data))
}
buddyUser()

const displayBuddy=(data) => {
    const Email=document.getElementById('email')
    const buddys = data.results
    for(const buddy of buddys) {
        console.log(buddy.name.first)
        const li=document.createElement('li')
        li.innerText=`Name: ${buddy.name.first} ${buddy.name.last}
         Email: ${buddy.email}`
        Email.appendChild(li)
    }

}