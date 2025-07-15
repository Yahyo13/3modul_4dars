

let tecnologia = async()=>{
    console.log(`loading....`);
    let res = await fetch(`https://randomuser.me/api/`)
    let div = document.querySelector(`div`)
    let data = await res.json(  )
    let user = data.results[0]  

    div.innerHTML=''


    div.innerHTML += `
    <img src="${user.picture.large}" alt="">
    <p>Email: ${user.email}</p>
    <b>Gender: ${user.gender}<b> <br>
    `
}