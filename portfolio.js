function open_proj_1(){
    const URL = 'https://github.com/aks2507';
    fetch(URL)
    .then(res => res.text())
    .then(text => {
        document.getElementById("head1").innerHTML=text;
    })
    .catch(err => console.log(err));
}
$(document).ready(function(){
    $("#proj1").click(open_proj_1());
});