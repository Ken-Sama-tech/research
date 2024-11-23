document.addEventListener('DOMContentLoaded', function(){
    //active link
    const navbarLinks = document.querySelectorAll('.navbar__links');
    navbarLinks.forEach(link =>{
        if(link.href.includes(window.location.pathname)){
            link.classList.add('active');
            let Title = link.textContent;
            Title = Title
                .split(' ') 
                .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) 
                .join(' ');
            document.title = Title; 
        }
    });
    //dasboard functions
     const gradeLevel = document.querySelectorAll('.grade__level--box');

     gradeLevel.forEach(level =>{
        level.addEventListener('click', ()=>{
            gradeLevel.forEach(g => g.classList.remove('active'));
            level.classList.add('active');

            const create = document.createElement('table');

            create.setAttribute('class', 'dashboard-table');

            const tableSection = document.querySelector('.table__section');

            tableSection.appendChild(create);

            const createTr = document.createElement('tr');

            create.appendChild(createTr);

            for(let i = 0; i < 4; i++){
                const createTh = document.createElement('th');

                createTh.setAttribute('class', 'table-heading');
                create.textContent = 'diko alam';
                createTr.appendChild(createTh);
            }
        });
     });
});

