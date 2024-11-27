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

    // --------------- Option Menu Functionality ---------------
    const optionMenuContainer = document.querySelector('.menu__container');
    const optionBtn = document.querySelector('.option--menu__container');
    optionBtn.addEventListener('click', function() {
        optionMenuContainer.classList.toggle('active');
        optionBtn.classList.toggle('is-active');
    });

    // --------------- Table Layout Configuration ---------------
    const tableLayout = document.querySelectorAll('input[name="table-layout-checkbox"]');
    const table = document.querySelector('.dashboard-table');
    const defaultLayout = document.getElementById('default-layout');
    const tableBorderBottom = document.getElementById('bottom-border');
    const removeTableBorder = document.getElementById('remove-border');
    const tableHeading = document.querySelectorAll('.table-heading');
    const tableData = document.querySelectorAll('.table-data');

    tableLayout.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            // Reset table borders
            tableHeading.forEach(heading => heading.style.border = 'none');
            tableData.forEach(data => data.style.border = 'none');

            // Uncheck other checkboxes
            tableLayout.forEach(unchecked => {
                if (unchecked !== this) unchecked.checked = false;
            });

            // If no layout is selected, default layout is checked
            if ([...tableLayout].every(checkbox => !checkbox.checked)) {
                defaultLayout.checked = true;
            }

            // Apply new table layout
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
    const hoverRow = document.querySelector('#hover-row');
    const hoverData = document.querySelector('#hover-data');

    tableMouseOver.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            // Uncheck other checkboxes
            tableMouseOver.forEach(unchecked => {
                if (unchecked !== this) unchecked.checked = false;
            });

            // If no hover style is selected, default to first checkbox
            if ([...tableMouseOver].every(checkbox => !checkbox.checked)) {
                tableMouseOver[0].checked = true;
            }

            // Apply hover style
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
                    hover.style.backgroundColor = '#ccc'; // Row hover effect
                });
                hover.addEventListener('mouseout', function() {
                    hover.style.backgroundColor = ''; // Reset hover effect
                });
            });
        } else if (hoverData.checked) {
            tableData.forEach(hover => {
                hover.addEventListener('mouseover', function() {
                    hover.style.backgroundColor = '#ccc'; // Data hover effect
                });
                hover.addEventListener('mouseout', function() {
                    hover.style.backgroundColor = ''; // Reset hover effect
                });
            });
        }
    }

    changeTableHoverStyle();

    // --------------- Dashboard Box Functionality ---------------
    const gradeBox = document.querySelectorAll('.grade__level--box');
    const exitBtn = document.querySelector('.exit-btn__container');
    const appearTable = document.querySelector('.table');

    gradeBox.forEach(box => {
        box.addEventListener('click', function () {
            // Mark active grade box
            gradeBox.forEach(b => b.classList.remove('active'));
            box.classList.add('active');

            // Show table and set title
            appearTable.style.borderColor = 'black';
            table.classList.add('appear');
            const tableTitle = table.querySelector('.table-title');
            const gradeLevel = box.querySelector('.grade-level');
            tableTitle.textContent = gradeLevel.textContent;

            // Show exit button
            exitBtn.style.display = 'block';
        });
    });

    exitBtn.addEventListener('click', () => {
        // Remove active class and hide elements
        gradeBox.forEach(b => b.classList.remove('active'));
        table.classList.remove('appear');
        appearTable.style.borderColor = 'transparent';
        exitBtn.style.display = 'none';
    });

    // --------------- Search Bar Toggle ---------------
    const searchBtn = document.querySelector('.search');
    searchBtn.addEventListener('click', () => {
        const searchBar = document.querySelector('#search-bar');
        searchBar.classList.toggle('active');
    });

});
