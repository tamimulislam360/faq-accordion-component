const accordionItem = document.querySelectorAll('.accordion-item')

accordionItem.forEach(item => {
  item.querySelector('.accordion-header').addEventListener('click', () => {
    accordionItem.forEach(otherItem => {
      if(otherItem !== item){
        otherItem.classList.remove('active')
      }else{
        item.classList.toggle('active')
      }
    })
  })
})