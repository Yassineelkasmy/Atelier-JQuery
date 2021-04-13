$(document).ready(function() {
    for (var j = 0; j < 4; j++) {
        $("#qcm").append(" <h2 id=\'" + j + "\'>" + questions[j]["q"] + "</h2> ");
        $("#qcm").append("<div class=\'" + j + "\'><div>");
        for (var i = 1; i < 4; i++) {
            var cle = i.toString() + j.toString();

            $("." + j).append(" <h3 id=\'" + cle + "\'>" + questions[j][i] + "</h3> ");
            var selectione = { cle: false };
        }

    }
    var peutJouer = true;
    var selectione = {};
    var score = 0;

    $("h3").click(function(e) {
        if (peutJouer) {
            var id = e.target.id;

            if (selectione[id] == true) {
                $("#" + id).attr("class", "");
                selectione[id] = false;
                console.log(selectione);
            } else {
                selectione[id] = true;

                console.log(id);
                $("#" + id).attr("class", "selectione");


            }

        }


    });
    $("#corriger").click(function(e) {
        peutJouer = false;
        for (var j = 0; j < questions.length; j++) {

            var peutMarqueOrange = true;
            for (var i = 0; i < 4; i++) {
                var cle = i.toString() + j.toString();

                if (selectione[cle] == true) {
                    peutMarqueOrange = false;
                    if (questions[j]["c"] == i.toString()) {
                        $("#" + cle).attr("class", "correcte");
                        score++;

                    } else {
                        $("#" + cle).attr("class", "faux");

                    }
                }

            }

            if (peutMarqueOrange) {

                $("#" + j).attr("class", "orange");


            }

        }

        $("#resultat").append("<h2> Score : " + score + "/" + questions.length + "</h2>");
    });

    $("#ressayer").click(function(e) {
        location.reload();


    });


});






const q1 = {
    "q": "Bootsrap est un Framewrok de ?",
    "1": "Back-End",
    "2": "Front-End",
    "3": "Back-End et Front-End",
    "c": "2",
};


const q2 = {
    "q": "JavaScript est utilisée pour developper ?",
    "1": "Applications Front-End",
    "2": "Applications Front-End et aussi Back-End",
    "3": "Applications Back-End",
    "c": "2",
};


const q3 = {
    "q": "Laravel Passport package est utilisé pour ?",
    "1": "Faciliter l\'authentification comme Sanctum",
    "2": "Faciliter le devleppement de real-time Applications",
    "3": "Faciliter l\'authentification comme Sanctum plus de Oauth2",
    "c": "3",
};


const q4 = {
    "q": "Flutter est Framework pour ?",
    "1": "Developper des applications mobiles",
    "2": "Developper des APIs RESTFUL",
    "3": "Developper des applications cross-platform",
    "c": "3",
};


const q5 = {
    "q": "Vue.js est controlé par ? ",
    "1": "Google",
    "2": "Facebook (React)",
    "3": "La communauté",
    "c": "3",
};

const questions = [q1, q2, q3, q4, q5];