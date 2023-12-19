export default function ativaTabMenu(){
    const listaAnimais = document.querySelectorAll("[data-menu='menu'] li")
    const listaSection = document.querySelectorAll("[data-tab='content'] section")
     
    //Verifica se na página selecionada existe os conteudos selecionados
    if(listaAnimais.length && listaSection.length){
        listaSection[0].classList.add('ativo')
        //Função que adiciona a classe ativa ao elemento section
        function addClassAtivo(index){
            //Limpa a classe ativo de todos os elementos, se tiver 
            listaSection.forEach((section) =>{
                section.classList.remove('ativo')
            })
            
            const direcao = listaSection[index].dataset.anime
            listaSection[index].classList.add('ativo', direcao)
        }
        
        //Loop em todas as imagens, adicionando evento de click que chama a função addClasAtivo
        listaAnimais.forEach((item, index) =>{
            item.addEventListener('click', () =>{
                //Adiciona a class ativo ao elemento section com o mesmo indice da imagem  
                addClassAtivo(index)
            })
        })
    }
}
