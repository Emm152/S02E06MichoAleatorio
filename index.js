 
 async function getRandomCatImage() {
  try{
  let res = await fetch('https://cataas.com/cat/gif?json=true')
  let jsonData = await res.json(); 
      if (jsonData.validated === true) {
        const catImage = document.getElementById("cat-image");
        catImage.src = "https://cataas.com"+jsonData.url;
      }}
      catch(error){
        catImage.src("No-Image-Placeholder.png")
        console.log("Error en la API")
      }
    }
  
  
  

