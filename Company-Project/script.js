const list = document.querySelectorAll('.list');
        function activeLink(){
            list.forEach((item) =>
            item.classList.remove('active'));
            this.classList.add('active');
        }
        list.forEach((item) =>
        item.addEventListener('click',activeLink));
        const elementsNotAlowedCopy = document.querySelectorAll('.notAlowedCopy')
        elementsNotAlowedCopy.forEach(elem => {
            elem.addEventListener('copy', (e) => {
                e.preventDefault()
                console.log('copyed', e)
                e.returnValue = false
                console.log('copyed', e)
            })
        })
        const noContext = document.body
        noContext.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            console.log('copyed', e)
            e.returnValue = false
            console.log('copyed', e)
        }); 

document.onkeydown = function(e) {
    if(event.keyCode == 123) {
    return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.keyCode == 'C'.charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode == 'V'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.keyCode == 'c'.charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode == 'v'.charCodeAt(0)){
    return false;
    }
}

    const createlink = (elem, link) => {
        elem.addEventListener('click',() => {
            window.open(link)
        })
    }
    createlink(document.getElementById('1'), 'https://www.youtube.com/channel/UCbE9LbK0AU0eLlqpsXkUqLw')
    createlink(document.getElementById('2'), 'https://www.youtube.com/c/NovatrimVStudio')
    createlink(document.getElementById('3'), 'https://youtube.com/channel/UCOrigAu-HWAwMRZOB1Nw0HQ')
    // createlink(document.getElementById('4'), '#')
    