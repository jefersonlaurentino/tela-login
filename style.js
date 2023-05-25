function cliquei() {
    if (isenha.type === 'password') {
        isenha.setAttribute('type', 'text')
        ver1.innerHTML = 'visibility_off'
    } else {
        isenha.setAttribute('type' , 'password')
        ver1.innerHTML = 'visibility'
    }
}
