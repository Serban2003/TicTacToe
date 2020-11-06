var sem = 1;
var nr = 1;
var k = 0;
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var g = 0;
var h = 0;
var i = 0;
var na_1 = 0;
var nb_1 = 0;
var nc_1 = 0;
var nd_1 = 0;
var ne_1 = 0;
var nf_1 = 0;
var ng_1 = 0;
var nh_1 = 0;
var ni_1 = 0;
var na_2 = 0;
var nb_2 = 0;
var nc_2 = 0;
var nd_2 = 0;
var ne_2 = 0;
var nf_2 = 0;
var ng_2 = 0;
var nh_2 = 0;
var ni_2 = 0;

function Cell() {
    k++;
    if (sem == 1 && k % 2 == 1) {
        document.getElementById('turn1').classList.toggle("showturn1");
         document.getElementById('turn').classList.toggle("changecolor2");
        document.getElementById('turn2').classList.toggle("showturn2");

        if (nr == 1 && a == 0) {
            document.getElementById("X1").classList.toggle("showX1");
            document.getElementById("cell1").classList.toggle("show_cell");
            sem = 2;
            a = 1;
            na_1 = 1;
        }

        if (nr == 2 && b == 0) {
            document.getElementById("X2").classList.toggle("showX2");
            document.getElementById("cell2").classList.toggle("show_cell");
            sem = 2;
            b = 1;
            nb_1 = 1;
        }

        if (nr == 3 && c == 0) {
            document.getElementById("X3").classList.toggle("showX3");
            document.getElementById("cell3").classList.toggle("show_cell");
            sem = 2;
            c = 1;
            nc_1 = 1;
        }

        if (nr == 4 && d == 0) {
            document.getElementById("X4").classList.toggle("showX4");
            document.getElementById("cell4").classList.toggle("show_cell");
            sem = 2;
            d = 1;
            nd_1 = 1;
        }

        if (nr == 5 && e == 0) {
            document.getElementById("X5").classList.toggle("showX5");
            document.getElementById("cell5").classList.toggle("show_cell");
            sem = 2;
            e = 1;
            ne_1 = 1;
        }

        if (nr == 6 && f == 0) {
            document.getElementById("X6").classList.toggle("showX6");
            document.getElementById("cell6").classList.toggle("show_cell");
            sem = 2;
            f = 1;
            nf_1 = 1;
        }

        if (nr == 7 && g == 0) {
            document.getElementById("X7").classList.toggle("showX7");
            document.getElementById("cell7").classList.toggle("show_cell");
            sem = 2;
            g = 1;
            ng_1 = 1;
        }

        if (nr == 8 && h == 0) {
            document.getElementById("X8").classList.toggle("showX8");
            document.getElementById("cell8").classList.toggle("show_cell");
            sem = 2;
            h = 1;
            nh_1 = 1;
        }

        if (nr == 9 && i == 0) {
            document.getElementById("X9").classList.toggle("showX9");
            document.getElementById("cell9").classList.toggle("show_cell");
            sem = 2;
            i = 1;
            ni_1 = 1;
        }
    }

    if (sem == 2 && k % 2 == 0) {
        document.getElementById('turn1').classList.toggle("showturn1");
        document.getElementById('turn').classList.toggle("changecolor2");
        document.getElementById('turn2').classList.toggle("showturn2");
        if (nr == 1 && a == 0) {

            document.getElementById("O1").classList.toggle("showY1");
            document.getElementById("cell1").classList.toggle("show_cell");
            sem = 1;
            a = 1;
            na_2 = 1;
        }

        if (nr == 2 && b == 0) {

            document.getElementById("O2").classList.toggle("showY2");
            document.getElementById("cell2").classList.toggle("show_cell");
            sem = 1;
            b = 1;
            nb_2 = 1;
        }

        if (nr == 3 && c == 0) {

            document.getElementById("O3").classList.toggle("showY3");
            document.getElementById("cell3").classList.toggle("show_cell");
            sem = 1;
            c = 1
            nc_2 = 1;
        }

        if (nr == 4 && d == 0) {

            document.getElementById("O4").classList.toggle("showY4");
            document.getElementById("cell4").classList.toggle("show_cell");
            sem = 1;
            d = 1;
            nd_2 = 1;
        }

        if (nr == 5 && e == 0) {

            document.getElementById("O5").classList.toggle("showY5");
            document.getElementById("cell5").classList.toggle("show_cell");
            sem = 1;
            e = 1;
            ne_2 = 1;
        }

        if (nr == 6 && f == 0) {

            document.getElementById("O6").classList.toggle("showY6");
            document.getElementById("cell6").classList.toggle("show_cell");
            sem = 1;
            f = 1;
            nf_2 = 1;
        }

        if (nr == 7 && g == 0) {

            document.getElementById("O7").classList.toggle("showY7");
            document.getElementById("cell7").classList.toggle("show_cell");
            sem = 1;
            g = 1;
            ng_2 = 1;
        }

        if (nr == 8 && h == 0) {

            document.getElementById("O8").classList.toggle("showY8");
            document.getElementById("cell8").classList.toggle("show_cell");
            sem = 1;
            h = 1;
            nh_2 = 1;
        }

        if (nr == 9 && i == 0) {

            document.getElementById("O9").classList.toggle("showY9");
            document.getElementById("cell9").classList.toggle("show_cell");
            sem = 1;
            i = 1;
            ni_2 = 1;
        }
    }
    if ((na_1 == 1 && nb_1 == 1 && nc_1 == 1) || (nd_1 == 1 && ne_1 == 1 && nf_1 == 1) || (ng_1 == 1 && nh_1 == 1 && ni_1 == 1) || (na_1 == 1 && nd_1 == 1 && ng_1 == 1) || (nb_1 == 1 && ne_1 == 1 && nh_1 == 1) || (nc_1 == 1 && nf_1 == 1 && ni_1 == 1) || (na_1 == 1 && ne_1 == 1 && ni_1 == 1) || (nc_1 == 1 && ne_1 == 1 && ng_1 == 1)) document.getElementById("win_player1").classList.toggle('showwin');
    else if ((na_2 == 1 && nb_2 == 1 && nc_2 == 1) || (nd_2 == 1 && ne_2 == 1 && nf_2 == 1) || (ng_2 == 1 && nh_2 == 1 && ni_2 == 1) || (na_2 == 1 && nd_2 == 1 && ng_2 == 1) || (nb_2 == 1 && ne_2 == 1 && nh_2 == 1) || (nc_2 == 1 && nf_2 == 1 && ni_2 == 1) || (na_2 == 1 && ne_2 == 1 && ni_2 == 1) || (nc_2 == 1 && ne_2 == 1 && ng_2 == 1)) document.getElementById("win_player2").classList.toggle('showwin');
    else if(k==9)document.getElementById("tie").classList.toggle("showwin");
}