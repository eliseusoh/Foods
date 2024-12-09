
// For Nav Bar
document.querySelector('.menu').addEventListener('click', () =>{
    document.querySelectorAll('.target').forEach((item)=>{
        item.classList.toggle('change')
    })
})

const icons = document.querySelectorAll('.section-1-icons i')
let i = 1
// Making Icons Change
setInterval(() => {
    i++

    const icon = document.querySelector('.section-1-icons .change')
    
    icon.classList.remove('change')

    // makes the cycle repeat once its over 
    if(i>icons.length){
        icons[0].classList.add('change')
        i = 1
    } else{
        icon.nextElementSibling.classList.add('change')
    }

    },4000)