
document.querySelector("#fortuneButton").addEventListener("click",()=>{
axios.get("http://localhost:4000/api/fortune/")
    .then( res => {
        const data = res.data;
        alert(data);
    });
});


document.querySelector('#addFortune').addEventListener("submit",(event)=>{
    event.preventDefault()
    let fortune = document.querySelector('#fortune')
    axios.post("http://localhost:4000/api/fortune",{text:fortune.value})
    .then((res)=>{
        console.log(res.data)
        alert(`added!\nFortunes now total:${res.data.length}`)
    })
    .catch(err=>{console.log(err)});
    fortune.value=""
})

document.querySelector('#deleteFortune').addEventListener("submit",(event)=>{
    event.preventDefault()
    let index = document.querySelector('#fortune-index')
    axios.delete(`http://localhost:4000/api/fortune/${index.value}`)
    .then((res)=>{
        console.log(res.data)
        alert(`deleted fortune:\n${res.data}`)
    })
    .catch(err=>{alert(err.message)});
    index.value=""
})

document.querySelector('#encryptFortune').addEventListener("submit",(event)=>{
    event.preventDefault()
    let index = document.querySelector('#fortune-index2')
    axios.put(`http://localhost:4000/api/fortune/${index.value}`)
    .then((res)=>{
        console.log(res.data)
        alert(`Fortune now reads:\n${res.data}`)
    })
    .catch(err=>{alert(err.message)});
    index.value=""
})