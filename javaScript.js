function openPage(evt, Pagename) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(Pagename).style.display = "block";
    evt.currentTarget.className += " active";
}


const projectName = 'survey-form';
localStorage.setItem('example_project', 'Survey Form');