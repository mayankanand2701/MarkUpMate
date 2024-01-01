function search(){
    let textSearch = document.getElementById("text-to-be-searched").value;
    let para = document.getElementById("paragraph")
    
    // console.log(textSearch)
    textSearch = textSearch.replace(/[.*+$?^{}()|[\]\\]/g,"\\$&");
    let pattern = new RegExp(`${textSearch}`,"gi");

    para.innerHTML = para.textContent.replace(pattern, match => `<mark>${match}</mark>`)

}