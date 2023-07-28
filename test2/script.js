let projectDelivery = document.getElementById('project-delivery')
let readMoreButton = document.getElementById('read-more')
let collapseButton = document.getElementById('collapse')

function showInfo() {
    projectDelivery.style.display = 'block'
    collapseButton.style.display = 'block'
    readMoreButton.style.display ='none'
}


function hideInfo() {
    readMoreButton.style.display = 'block'
    collapseButton.style.display = 'none'
    projectDelivery.style.display = 'none'
    
}

readMoreButton.onclick = showInfo
collapseButton.onclick = hideInfo


