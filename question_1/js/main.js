$(document).ready(function() {
    $("#submit").click(function(e) {
        e.preventDefault();
        valider();

    });
});






function valider() {
    // On utilise la fonction trim pour suprimmer les escpaces dans le texte
    const nom = $("#nom");
    const prenom = $("#prenom");
    const tel = $("#tel");
    const adresse = $("#adresse");
    const civilite = $("#civilite");
    const email = $("#email");
    const motdepass = $("#motdepass");
    const motdepass_conf = $("#motdepass_conf");
    console.log("asdas");

    if (nom.val() === '') {
        error(nom, 'le nom est obligatoire !');
    } else {
        success(nom);
    }




    if (prenom.val() === '') {
        error(prenom, 'le prenom est obligatoire !');
    } else {
        success(prenom);
    }




    if (email.val() === '') {
        error(email, 'l\'email est obligatoire !');
    } else if (!validerEmail(email.val())) {
        error(email, 'l\'email n\'est pas valide');
    } else {
        success(email);
    }



    if (tel.val() === '') {
        error(tel, 'le téléphone est obligatoire !');
    } else if (!validerTel(tel.val())) {
        error(tel, 'le téléphone n\'est pas valide');
    } else {
        success(tel);
    }



    if (motdepass.val() === '') {
        error(motdepass, 'le mot de pass est obligatoire !');
    } else {
        success(motdepass);
    }

    if (motdepass_conf.val() === '') {
        error(motdepass_conf, 'il faut confirmer le mot de pass !');
    } else if (motdepass.val() !== motdepass_conf.val()) {
        error(motdepass_conf, 'les deux mots de pass ne sont pas identiques !');
    } else {
        success(motdepass_conf);
    }




    if (adresse.val() === '') {
        error(adresse, 'l\'adresse est obligatoire !');
    } else {
        success(adresse);
    }


    if (civilite.val() === '') {
        error(civilite, 'la civilité est obligatoire !');
    } else {
        success(civilite);
    }



}

function error(input, message) {
    const formGroup = input.parent();
    const span = formGroup.find("span").first();
    formGroup.attr("class", "form-group error");
    span.text(message);
}

function success(input) {
    const formGroup = input.parent();
    formGroup.attr("class", "form-group success");
}

function validerEmail(emailValeur) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailValeur);
}

function validerTel(telValeur) {
    return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(telValeur);

}