function toggleSignUp(e){
    e.preventDefault();
    $('#logreg-forms .form-signin').toggle();
    $('#logreg-forms .form-signup').toggle();
}

$(()=> {
    //login register
    $('#logreg-forms #btn-signup').click(toggleSignUp);
    
    $('#logreg-forms #cancel-signup').click(toggleSignUp);
})