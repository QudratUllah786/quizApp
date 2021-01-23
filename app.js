var quizApp=[
    {
         question1:"Q#1: What is the name of capital of pakistan",
        answer_1:"Islamabad",
    },
    {
        question2:"Q#2: WhO is the Prime Minister  of pakistan",
        answer_2:"Imran Khan",
    },
    {
        question3:"Q#3: Who is the Ist Governor General of pakistan",
        answer_2:"Quaid-e-Azam",
    }

]
 
//  var b = document.getElementsByClassName("vaer")
//  console.log(b.childNode)
//     b.innerHTML=quizApp[0].ans1_q1;
function showQuestion(){
    var a = document.getElementById("abx");
 a.innerHTML=quizApp[0].question1;
//  var op1_q1 = document.getElementById("op1");
//  var op2_q1 = document.getElementById("op2");
//  var op3_q1 = document.getElementById("op3");
 var b = document.getElementById("abZ")
 b.innerHTML=quizApp[1].question2;
//  var op1_q2 = document.getElementById("op1_q2");
//  var op2_q2 = document.getElementById("op2_q2");
//  var op3_q2 = document.getElementById("op3_q2");
 var c = document.getElementById("aby")
 c.innerHTML=quizApp[2].question3;
//  var op1_q3 = document.getElementById("op1_q3");
//  var op1_q3 = document.getElementById("op2_q3");
//  var op1_q3 = document.getElementById("op3_q3");
  }
  function getResult(){
    var count = 0;
    var op1_q1 = document.getElementById("op1");
    var op2_q1 = document.getElementById("op2");
    var op3_q1 = document.getElementById("op3");
    var op1_q2 = document.getElementById("op1_q2");
      var op2_q2 = document.getElementById("op2_q2");
      var op3_q2 = document.getElementById("op3_q2");
      var op1_q3 = document.getElementById("op1_q3");
      var op2_q3 = document.getElementById("op2_q3");
      var op3_q3 = document.getElementById("op3_q3");
      if(op3_q1.checked == true)
      {
        count++;
          alert("Q#1 right answer")

      }
      else{
          alert("Q#1 wrong answer")
      }
    

      

      if(op1_q2.checked == true)
      {
        count++;
          alert("Q#2 right answer")

      }
      else{
          alert("Q#2 wrong answer")
      }



     



 if(op1_q3.checked == true)
      {
        count++;
          alert("Q#3 right answer")

      }
      else{
          alert("Q#3 wrong answer")
      }
alert("you got: " + count++ + " marks");
  }
