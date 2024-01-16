var isSidebarVisible = true;

var count = 1;


function getViewport() {
    // https://stackoverflow.com/a/8876069
    const width = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
    )

    if (width <= 768) return false
    else return true

}

function viewSize() {
    return $('#sizer').find('div:visible').data('size');
}

function toggleSidebar() {

    var sidebar = document.getElementById('sidebar')
    var main = document.getElementById('main-content')

    var isSizeMoreThanSm = false;
    isSizeMoreThanSm = getViewport()

    // console.log(viewSize())
    // console.log(getViewport())

    if (isSizeMoreThanSm) {

        if (isSidebarVisible) {

            sidebar.classList.remove('d-md-flex')
            // sidebar.classList.add('d-none')

            sidebar.classList.remove('col-md-1')
            main.classList.remove('col-md-11')
            main.classList.remove('col-lg-10')
            // main.classList.add('col-md-12')

            isSidebarVisible = !isSidebarVisible;

        }
        else {

            // sidebar.classList.remove('d-none')
            sidebar.classList.add('d-md-flex')

            sidebar.classList.add('col-md-1')
            main.classList.add('col-md-11')
            main.classList.add('col-lg-10')

            // main.classList.remove('col-md-12')

            isSidebarVisible = !isSidebarVisible;

        }

    }
    else {
        console.log("here");

        if (sidebar.classList.contains('d-none')) {
            sidebar.classList.remove('d-none')
        }
        else {
            sidebar.classList.add('d-none')
        }

    }


}