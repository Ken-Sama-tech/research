document.addEventListener('DOMContentLoaded', function(){
    //active link
    const navbarLinks = document.querySelectorAll('.navbar__links');
    navbarLinks.forEach(link =>{
        if(link.href.includes(window.location.pathname)){
            link.classList.add('active');
            let docTitle = link.textContent;
            docTitle = docTitle
                .split(' ') 
                .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) 
                .join(' ');
            document.title = docTitle; 
        }
    });
});