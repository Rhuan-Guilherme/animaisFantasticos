export default function ativaAnimacaoScroll(){
    const sections = document.querySelectorAll("[data-anime='scroll']")
    const metadeWindow = window.innerHeight

    
    if(sections.length){
        window.addEventListener('scroll' , activeAnimationScroll)

        function activeAnimationScroll(){
            sections.forEach((section) =>{
                const topSection = section.getBoundingClientRect().top
                const activeSection = topSection - (metadeWindow * 0.6)
                if (activeSection < 0){
                    section.classList.add('ativo')
                }
            })
           
        }
        activeAnimationScroll()
    }
}