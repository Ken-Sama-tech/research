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

            const createTable = document.createElement('table');

            createTable.setAttribute('class', 'dashboard-table');

            const createTableCaption = document.createElement('caption');
            const tableCaption = level.querySelector('.grade-level');

            createTableCaption.textContent = tableCaption.textContent;
            createTableCaption.setAttribute('class', 'table-caption');

            const tableSection = document.querySelector('.table__section');

            tableSection.appendChild(createTable);
            createTable.appendChild(createTableCaption);

            const createTr = document.createElement('tr');

            createTable.appendChild(createTr);
            const tableHeadings = ['No.', 'UID', 'Student Name', 'violation'];

            tableHeadings.forEach(heading =>{
                const createTh = document.createElement('th');

                createTh.setAttribute('class', 'table-heading');
                createTh.textContent = heading;
                createTr.appendChild(createTh);
            });
        });
     });
});

