const url = "https://jsonplaceholder.typicode.com/posts/1";
var btn=document.getElementById("btn")


async function wait(){
	// const url = "https://jsonplaceholder.typicode.com/posts/1";
	var res=await fetch(url)
	let json=await res.json();
  return document.getElementById("output").innerHTML=json.title;  
} 




btn.addEventListener('click',()=>{
    wait()
})
//your JS code here. If required.
