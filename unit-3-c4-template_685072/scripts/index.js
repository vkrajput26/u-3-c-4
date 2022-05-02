// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
document.getElementById("navbar").innerHTML=navbar()
function navbar(){
    return `   <h1>
    <a href="index.html">News App</a>
  </h1>
  <input oninput="searchdata()" type="text" name="" id="search_input">`
}
export default navbar()

 let search =async () =>{
    try{
        let name=document.getElementById("in").value="in"
        let res =await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${name}`)
        const data =await res.json();
        console.log(data)
    }
    catch(err){
        console.log("err",err)
    }
}
// let x=document.querySelector("h2").addEventListener("click",search)