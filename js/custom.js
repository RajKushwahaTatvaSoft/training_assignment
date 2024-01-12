var flag = true;

function toggleSidebar() {

    var sidebar = document.getElementById('sidebar')
    var main = document.getElementById('main-content')
    if (flag) {

        sidebar.classList.remove('d-inline')
        sidebar.classList.add('d-none')

        sidebar.classList.remove('col-md-2')
        main.classList.remove('col-md-10')
        main.classList.add('col-md-12')
        
        flag = !flag;
    }
    else {

        sidebar.classList.remove('d-none')
        sidebar.classList.add('d-inline')

        sidebar.classList.add('col-md-2')
        main.classList.add('col-md-10')
        main.classList.remove('col-md-12')

        flag = !flag;
    }
}