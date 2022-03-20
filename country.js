const countryAll=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>displayCountry(data))
}
countryAll()

const displayCountry=(countrys)=>{
    const name=document.getElementById('name')
    countrys.forEach(country=>{
       const div=document.createElement('div')
       div.innerHTML = `
       <h3>name: ${country.name.common}</h3>
       <p>capital: ${country.capital}</p>
       <button onClick="detailsShow('${country.name.common}')">Details</button>
       `
       name.appendChild(div) 
    
    })
}

const detailsShow=(country)=>{
    const url=`https://restcountries.com/v3.1/name/${country}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>detailsUpdate(data[0]))
    
}

const detailsUpdate=(country)=>{
    const detail=document.getElementById('countryDetail')
    detail.innerHTML=`
    <p>Name : ${country.name.common}</p>
    <p>capital: ${country.capital}</p>
    `
    console.log(country.name.common)
}