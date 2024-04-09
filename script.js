const showmenu=(toggles,navs)=>{
    const toggle=document.getElementById(toggles)
       const   nav=document.getElementById(navs)

          if(toggle && nav){
            toggle.addEventListener('click',()=>{
                nav.classList.toggle("show")


            });
           
          }
        }
        showmenu('nav_toggle','nav_menu')

// ACTIVE AND REMOVE ACTIVE
const navlink=document.querySelectorAll('nav_link')
navlink.forEach(n=>n.classList.remove('active'))

function linkaction(){
    this.classList.add('active')
const navmenu=document.getElementById('nav_menu')
navmenu.classList.remove('show')
}

navlink.forEach.addEventListener('click',linkaction)