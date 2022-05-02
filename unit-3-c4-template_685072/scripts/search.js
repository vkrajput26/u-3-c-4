// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "./index.js"
document.getElementById("navbar").innerHTML=navbar


let searchdata =async () =>{
    try{
        let x=document.getElementById("search_input").value
        let res= await fetch(`https://masai-mock-api.herokuapp.com/news?q=${x}`)
        let data =await res.json()
        console.log(data)
        
    }
    catch(err)
    {
        console.log("err",err)
    }
}