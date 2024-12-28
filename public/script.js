document.addEventListener('DOMContentLoaded',
    function () {
        const navItems = document
            .querySelectorAll('.nav-item');

        navItems.forEach(item => {
            item.addEventListener('click',
                function () {
                    navItems.forEach(navItem => navItem
                        .classList.remove('act'));
                    this.classList.add('act');
                });
        });
    });

var icon = document.getElementById("ham");
var icon_x = document.getElementById("ham-x");
var nav_mob = document.getElementById("nav-mob");
icon.addEventListener("click",()=>{
    nav_mob.classList.add("acti");
})
icon_x.addEventListener("click",()=>{
    nav_mob.classList.remove("acti");
})