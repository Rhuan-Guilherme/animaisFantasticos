function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabMenu li')
    const tabContent = document.querySelectorAll('.js-tabContent section')

    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo')

        function addClassAtivo(index) {
            tabContent.forEach((item) => {
                item.classList.remove('ativo')
            })
            tabContent[index].classList.add('ativo')
        }

        tabMenu.forEach((item, index) => {
            item.addEventListener('click', () => {
                addClassAtivo(index)
            })
        })
    }
}
initTabNav()



function initAccordionList(){
    const accordionList = document.querySelectorAll('.js-accordion dt')
    const classAtivo = 'ativo'

    function activeAccordion(){
        this.classList.toggle(classAtivo)
        this.nextElementSibling.classList.toggle(classAtivo)
    }

    accordionList.forEach((item) =>{
        item.addEventListener('click', activeAccordion)
    })
}

initAccordionList()
