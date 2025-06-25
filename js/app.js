const form = document.getElementById("enviar")
form.addEventListener('submit', (e) =>{
    e.preventDefault()
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const mensagem = document.getElementById('mensagem').value

    //montar mensagem
    const texto = `*Você está recebendo um novo contato de*: %0A${nome} %0A${email} %0A${mensagem}`
    const numero = `5547996969148`
    const link = isMobile() ? `https://api.whatsapp.com/send?phone=${numero}&text=${texto}` : 
    `https://web.whatsapp.com/send?phone=${numero}&text=${texto}`
    //https://web.whatsapp.com/send?phone={numero}&text={mensagem} api para abrir direto a pagina

    window.open(link, '_blank')
})

//função para testar se vem de Mobile
const isMobile = () => {
    return /Android|Iphone|iPad|iPod|Opera Mini|IEMobile|BlackBerry/i.test(navigator.userAgent)

}