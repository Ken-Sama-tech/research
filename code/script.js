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

    //dashboard function
    const gradeBox = document.querySelectorAll('.grade__level--box');
    const table = document.querySelector('.dashboard-table');

    gradeBox.forEach(box => {

        const exitBtn = document.querySelector('.exit-btn__container');
        const appearTable = document.querySelector('.table');

        box.addEventListener('click', function () {

            gradeBox.forEach(b => b.classList.remove('active'));
            box.classList.add('active');

            appearTable.style.borderColor = 'black';

            table.classList.add('appear');

            const tableTitle = table.querySelector('.table-title');
            const gradeLevel = box.querySelector('.grade-level');

            tableTitle.textContent = gradeLevel.textContent;
            
            exitBtn.style.display = 'block';

        });

        exitBtn.addEventListener('click', ()=>{
            box.classList.remove('active');
            table.classList.remove('appear');
            appearTable.style.borderColor = 'transparent';
            exitBtn.style.display = 'none';
        })
    });

});

