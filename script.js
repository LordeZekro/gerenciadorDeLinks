function toggleMode () {
  const html = document.documentElement
  html.classList.toggle("light")
  
  // Isso aqui não passa de uma outra variação, porém utilizando "If" e "Else"
  // if(html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

    //pegar a tag img
    const img = document.querySelector("#profile img")

    //adicionar condicional para caso esteja com light usar a foto "light"
    if(html.classList.contains("light")) {
      img.setAttribute("src", "./assets/avatar-light.png")
    }
    // Caso não esteja ele irá usar a foto padrão
    else {
    img.setAttribute("src", "./assets/avatar-light.png")
    }
  
    
    const alt =document.querySelector("#profile img")

    if(html.classList.contains("light")) {
      alt.setAttribute("alt", "Foto do Eduardo sorrindo, de óculos com grau")
    }

    else {
      alt.setAttribute("alt", "Foto do Eduardo sorrindo, de óculos com grau")
    }


}