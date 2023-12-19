export default function ativaScrollSmooth(){
    const linksInternos = document.querySelectorAll("[data-nav='menu'] a[href^='#']")
    
    //Função de callback que faz a funcionalidade do scroll suave 
    function activeScroll(event){
        //Previni a funcionalidade padrão do elemento
        event.preventDefault()
        //Pega o atributo do elemento 
        const href = event.currentTarget.getAttribute('href')
        //Seleciona as sections de acordo com o id do elemento (o id do elemento section é o mesmo do atributo href do link)
        const section = document.querySelector(href)
        
        //Metodo para realizar o scroll suave, passando um objeto como o behavior que adicona o smooth e o bolck que alinha o elemento ao topo
        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })

        //Maneira alternativa de fazer o scroll suave
        // const topo = section.offsetTop
        // console.log(topo);
        // window.scrollTo({
        //     top: topo,
        //     behavior: "smooth"
        // })
    }

    //Loop que invoca eventos de click aos elementos de links internos, e chama a função de callback
    linksInternos.forEach((link) =>{
        link.addEventListener('click', activeScroll)
    })
}