export default function outsideClick(element ,events, callback){
    const html = document.documentElement;
    const outside = 'data-outside'

    if(!element.hasAttribute(outside)){
        events.forEach(evento => {
           setTimeout(() => html.addEventListener(evento, handleOutsideClick))
        })

        element.setAttribute(outside, '')
    }


    function handleOutsideClick(event){
        if(!element.contains(event.target)){
            element.removeAttribute(outside)
            events.forEach(evento => {
                html.removeEventListener(evento, handleOutsideClick)
            })
            callback()
        }
        
    }
}