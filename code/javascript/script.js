document.addEventListener('DOMContentLoaded', function() {
    // --------------- Active Link and Page Title ---------------
    const navbarLinks = document.querySelectorAll('.navbar__links');
    navbarLinks.forEach(link => {
        if (link.href.includes(window.location.pathname)) {
            link.classList.add('active');
            let title = link.textContent
                .split(' ') 
                .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) 
                .join(' ');
            document.title = title;
        }
    });

    // --------------- Search Bar Toggle ---------------
    const searchBtn = document.querySelector('.search');
    searchBtn.addEventListener('click', () => {
        const searchBar = document.querySelector('#search-bar');
        searchBar.classList.toggle('active');
    });

    // --------------- Option Menu Functionality ---------------
    const optionMenuContainer = document.querySelector('.menu__container');
    const optionBtn = document.querySelector('.option--menu__container');
    optionBtn.addEventListener('click', function() {
        optionMenuContainer.classList.toggle('active');
        optionBtn.classList.toggle('is-active');
    });

    //--------------- remove classlist when click outside the target ---------------
    if(optionBtn){
        document.addEventListener('click', (event) => {
            if(!optionBtn.contains(event.target) && !optionMenuContainer.contains(event.target)){
                optionMenuContainer.classList.remove('active');
                optionBtn.classList.remove('is-active');
            }
        });
    }

    // --------------- mini menu functinality ---------------
    const userProfile = document.querySelector('.user__profile');
    const miniMenuContainer = document.querySelector('.mini--menu__container');
    userProfile.addEventListener('click', function(){
        miniMenuContainer.classList.toggle('show');
    });

    //--------------- remove classlist when click outside the target ---------------
    if(userProfile){
        document.addEventListener('click', (e)=>{
            if(!userProfile.contains(e.target) && !miniMenuContainer.contains(e.target)){
                miniMenuContainer.classList.remove('show');
            }
        });
    }

    // --------------- Table Layout Configuration ---------------
    const tableLayout = document.querySelectorAll('input[name="table-layout-checkbox"]');
    const table = document.querySelector('.dashboard-table');
    const
        defaultLayout = document.getElementById('default-layout'),
        tableBorderBottom = document.getElementById('bottom-border'),
        removeTableBorder = document.getElementById('remove-border');
    const 
        tableHeading = document.querySelectorAll('.table-heading'), 
        tableData = document.querySelectorAll('.table-data');

    tableLayout.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            
            tableHeading.forEach(heading => heading.style.border = 'none');
            tableData.forEach(data => data.style.border = 'none');

            tableLayout.forEach(unchecked => {
                if (unchecked !== this) unchecked.checked = false;
            });

            if ([...tableLayout].every(checkbox => !checkbox.checked)) {
                defaultLayout.checked = true;
            }

            changeTableLayout();
        });
    });

    if ([...tableLayout].every(checkbox => !checkbox.checked)) {
        defaultLayout.checked = true;
    }

    function changeTableLayout() {
        if (defaultLayout.checked) {
            tableHeading.forEach(heading => heading.style.border = '1px solid black');
            tableData.forEach(data => data.style.border = '1px solid black');
        } else if (tableBorderBottom.checked) {
            tableHeading.forEach(heading => heading.style.borderBottom = '1px solid black');
            tableData.forEach(data => data.style.borderBottom = '1px solid black');
        } else if (removeTableBorder.checked) {
            tableHeading.forEach(heading => heading.style.border = 'none');
            tableData.forEach(data => data.style.border = 'none');
        }
    }

    changeTableLayout();

    // --------------- Table Hover Style Functionality ---------------
    const tableMouseOver = document.querySelectorAll('input[name="table-hover-style"]');
    const tableRow = document.querySelectorAll('.table-row');
    const
        hoverRow = document.querySelector('#hover-row'), 
        hoverData = document.querySelector('#hover-data');

    tableMouseOver.forEach(checkbox => {
    
        checkbox.addEventListener('change', function() {

            tableRow.forEach(hover => {
                hover.addEventListener('mouseover', function() {
                    hover.style.backgroundColor = ''; 
                });
            });

            tableData.forEach(hover => {
                hover.addEventListener('mouseover', function() {
                    hover.style.backgroundColor = ''; 
                });
            });

            tableMouseOver.forEach(unchecked => {
                if (unchecked !== this) unchecked.checked = false;
            });

            if ([...tableMouseOver].every(checkbox => !checkbox.checked)) {
                tableMouseOver[0].checked = true;
            }

            changeTableHoverStyle();
        });
    });

    if ([...tableMouseOver].every(checkbox => !checkbox.checked)) {
        tableMouseOver[0].checked = true;
    }

    function changeTableHoverStyle() {
        if (hoverRow.checked) {
            tableRow.forEach(hover => {
                hover.addEventListener('mouseover', function() {
                    hover.style.backgroundColor = '#ccc'; 
                });
                hover.addEventListener('mouseout', function() {
                    hover.style.backgroundColor = ''; 
                });
            });
        } else if (hoverData.checked) {
            tableData.forEach(hover => {
                hover.addEventListener('mouseover', function() {
                    hover.style.backgroundColor = '#ccc'; 
                });
                hover.addEventListener('mouseout', function() {
                    hover.style.backgroundColor = ''; 
                });
            });
        }
    }

    changeTableHoverStyle();

    //--------------- Table zebra style functionality ---------------
    const zebraStripeOptions = document.querySelectorAll('input[name="zebra-stripe"]');
    const 
        verticalRowZS = document.querySelector('#vertical-row-zebra-stripe'), 
        horizontalRowZS = document.querySelector('#horizontal-row-zebra-stripe'),
        verticalZS = document.querySelector('#vertical-zebra-stripe'),
        horizontalZS = document.querySelector('#horizontal-zebra-stripe');

    zebraStripeOptions.forEach(checkbox =>{
        checkbox.addEventListener('change', function(){

            ['vertical-row-stripe', 'horizontal-row-stripe', 'vertical-stripe', 'horizontal-stripe'].forEach(style =>{table.classList.remove(style)});

            zebraStripeOptions.forEach(unchecked =>{
                if(unchecked !== this){
                    unchecked.checked = false;
                }
            });

            if(!checkbox.checked){
                ['vertical-row-stripe', 'horizontal-row-stripe', 'vertical-stripe', 'horizontal-stripe'].forEach(style =>{table.classList.remove(style)});
            }

            applyTableZebraStyle();

        });
    });

    function applyTableZebraStyle(){
        if(verticalRowZS.checked){
            table.classList.add('vertical-row-stripe');
        }else if(horizontalRowZS.checked){
            table.classList.add('horizontal-row-stripe');
        }else if(verticalZS.checked){
            table.classList.add('vertical-stripe');
        }else if(horizontalZS.checked){
            table.classList.add('horizontal-stripe');
        }
    }


    // --------------- Dashboard Box Functionality ---------------
    const 
        gradeBox = document.querySelectorAll('.grade__level--box'),
        exitBtn = document.querySelector('.exit-btn__container'),
        appearTable = document.querySelector('.table');

    gradeBox.forEach(box => {
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
    });

    exitBtn.addEventListener('click', () => {
       
        gradeBox.forEach(b => b.classList.remove('active'));
        table.classList.remove('appear');
        appearTable.style.borderColor = 'transparent';
        exitBtn.style.display = 'none';
    });
});
