var fullPath = window.location.pathname;
var filename = fullPath.split("/").pop();

switch (filename){
    case 'policy.html':
        var policy = document.querySelectorAll(".policy")
        policy.forEach(element => {
            element.style.color = '#ffb861'
        });
        break
    case 'terms.html':
        var terms = document.querySelectorAll(".terms")
        terms.forEach(element => {
            element.style.color = '#ffb861'
        });
        break
    default:
        console.log('valio');
        break
}