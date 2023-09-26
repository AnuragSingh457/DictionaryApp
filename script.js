 //let word=prompt("enter the word")
 //word="earthquake"
let url="https://api.dictionaryapi.dev/api/v2/entries/en/";
 let display=""

 const button=document.getElementById("btn")
 button.addEventListener("click",()=>{
 let  word= document.getElementById("search").value;
 fetch(`${url}${word}`).then((v)=>{
    return v.json()
 }).then((value)=>{
    
    console.log(value)
             
    display+=`  <div class="container1 "><div class="card mx-auto" ">
    <div class="card-body ">
      <h4 class="card-title">${word}</h4>
      <p class="card-text"><h5>Meanings:</h5> ${value[0].meanings[0].definitions[0].definition}</p>
      
      <p class="card-text"><h5>Synonyms:</h5> ${value[0].meanings[0].synonyms}</p>
    
      <p class="card-text"> <h5>Antonyms:</h5> ${value[0].meanings[0].antonyms}</p>
      <p class="card-text"><h5>Example:</h5> ${value[0].meanings[0].definitions[0].example}</p>

    </div>
  </div>
  </div>
    `

first.innerHTML=display
 })

 })
