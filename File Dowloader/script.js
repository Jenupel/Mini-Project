const fileInput = document.querySelector("input"),
dowloadBtn = document.querySelector("button");

dowloadBtn.addEventListener("click", e =>{
    e.preventDefault();
    dowloadBtn.innerText = "Downloading file....";
    fetchFile(fileInput.value);
})

function fetchFile(url) {
    //fetching file & returning response as blob
    fetch(url).then(res => res.blob()).then(file => {
        //URL.createObjuctURL creates a url of passed object
        let tempUrl =URL.createObjectURL(file);
        let aTag = document.createElement("a")
        aTag.href = tempUrl; //passing tempUrl as href value of <a> tag
        //passing file last name & extension as dowload value of <a> tag
        aTag.download = "filename";
        document.body.appendChild(aTag); //adding <a> tag inside body
        
        aTag.click();  //clicking <a> tag so the file download
        aTag.remove(); //removing <a> tag once file download
        URL.revokeObjectURL(tempUrl);
        dowloadBtn.innerText = "Downloading file....";
    })
}