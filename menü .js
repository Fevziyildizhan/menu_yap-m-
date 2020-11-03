/*function toggleLeftSidebar(){
    document.getElementById('leftSidebar').classList.toggle('active')
    
}*/

const sidebar = document.getElementById('leftSidebar')


sidebar.addEventListener('click', ()=> {
    sidebar.classList.toggle('active')
})