import outsideClick from './outside.js'

export default function initDropDownMenu(){
    const dropDownMenu = document.querySelectorAll('[data-dropdown]')

    dropDownMenu.forEach(menu =>{
        ['click', 'touchstart'].forEach(useEvent =>{
            menu.addEventListener(useEvent, handleClick)
        })
    })

    function handleClick(e){
        e.preventDefault();
        this.classList.add('ativo')
        outsideClick(this, ['click', 'touchstart'], () =>{
            this.classList.remove('ativo')
            console.log(this);
        })
    }

    
}