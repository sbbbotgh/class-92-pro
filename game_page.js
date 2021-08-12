var Player1_name = localStorage.getItem("player1_name");
var Player2_name = localStorage.getItem("player2_name");

var player1_score = 0;
var player2_score = 0;

document.getElementById("player1_name").innerHTML = Player1_name + " :";
document.getElementById("player2_name").innerHTML = Player2_name + " :";

document.getElementById("player1_score").innerHTML = " " + player1_score;
document.getElementById("player2_score").innerHTML = " " + player2_score;

document.getElementById("q_label").innerHTML = "Question turn :- " + Player1_name;
document.getElementById("a_label").innerHTML = "Answer turn :- " + Player2_name;

var actual_answer = "";

function send(){
    var number1 = document.getElementById("number_1").value;

    var number2 = document.getElementById("number_2").value;

    actual_answer = parseInt(number1) * parseInt(number2);

    document.getElementById("output").style.visibility = "visible";
    question_word = "<h4 id='color_1'>"+number1+" X " + number2 +"</h4>";
    answer_word = "<br> Answer: <input type='text' id='check_box' placeholder='type answer here'>";
    check_button = "<br><br> <button class='btn btn-grad' onclick='check()' style='width: 30%;'>Check</button>";
    row = question_word + answer_word + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
}

var q_turn = "player1";
var a_turn = "player2";

function check(){

    get_answer = document.getElementById("check_box").value;

    if(get_answer == actual_answer){

        if(a_turn=="player1"){
            player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else{
            player2_score = player2_score +1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }



        if(q_turn=="player1"){
            q_turn = "player2";
            a_turn = "player1";
            document.getElementById("q_label").innerHTML = "Question turn :- " + Player2_name;
            document.getElementById("a_label").innerHTML = "Answer turn :- " + Player1_name;
        }
        else{
            q_turn = "player1";
            a_turn = "player2";
            document.getElementById("q_label").innerHTML = "Question turn :- " + Player1_name;
            document.getElementById("a_label").innerHTML = "Answer turn :- " + Player2_name;
        }
    }
    
    document.getElementById("output").innerHTML = "";
    document.getElementById("output").style.visibility = "hidden";
}