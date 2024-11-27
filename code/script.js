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

    //option menu function

    const optionMenuContainer = document.querySelector('.menu__container');
    const optionBtn = document.querySelector('.option--menu__container');

    optionBtn.addEventListener('click', function(){
        optionMenuContainer.classList.toggle('active');
        optionBtn.classList.toggle('is-active');
    });

    //table layout 
    const tableLayout = document.querySelectorAll('input[name="table-layout-checkbox"]');
    const table = document.querySelector('.dashboard-table');
    const defaultLayout = document.getElementById('default-layout');
    const tableBorderBottom = document.getElementById('bottom-border');
    const removeTableBorder = document.getElementById('remove-border');

    tableLayout.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            tableLayout.forEach(unchecked => {
                if (unchecked !== this) {
                    unchecked.checked = false;
                }
            });
            if ([...tableLayout].every(checkbox => !checkbox.checked)) {
                defaultLayout.checked = true;
            }
        });
    });

    if ([...tableLayout].every(checkbox => !checkbox.checked)) {
        defaultLayout.checked = true;
    }

    //dashboard function
    const gradeBox = document.querySelectorAll('.grade__level--box');

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
        });
    });

    const searchBtn = document.querySelector('.search');
    searchBtn.addEventListener('click', ()=>{
        let searchBar = document.querySelector('#search-bar');

        searchBar.classList.toggle('active');
    });

});

