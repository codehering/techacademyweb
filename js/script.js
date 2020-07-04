
  var ul=document.getElementById('ul');
  var btn=document.getElementById('button');
  var scoreCard=document.getElementById('scoreCard');
  var quizBox=document.getElementById('questionBox');
  var op1=document.getElementById('op1');
  var op2=document.getElementById('op2');
  var op3=document.getElementById('op3');
  var op4=document.getElementById('op4');
  var btn1=document.getElementById('buttond');


      var app={
                questions:[
                          {q:'Who is the sexiest TechAcademy Tutor?', options:['Felix','Lukas','Tom','Coronathan'],answer:4},
                          {q:'Your favorite zoom moment:',options:['silence','please rename yourself','didnt see that tutor joined session','florentinas microphone turns into mandrake'],answer:10},
                          {q:'Whats the best TechAcademy Track',options:['Python','R','WebDev','WebDev Advanced!'],answer:10},
                          ],

                index:0,
                load:function(){
                	   if(this.index<=this.questions.length-1){
                        quizBox.innerHTML=this.index+1+". "+this.questions[this.index].q;
                        op1.innerHTML=this.questions[this.index].options[0];
                        op2.innerHTML=this.questions[this.index].options[1];
                        op3.innerHTML=this.questions[this.index].options[2];
                        op4.innerHTML=this.questions[this.index].options[3];
                           this.scoreCard();
                        }
                        else{
						this.score = this.score - 13
                        onTimesUp();
                        quizBox.innerHTML="Quiz Over! You suck. <br> You must try harder!"
                        op1.style.display="none";
                        op2.style.display="none";
                        op3.style.display="none";
                        op4.style.display="none";
                        btn.style.display="none";
                        btn1.style.display="none";
                        }
                },
                 next:function(){
                    this.index++;
                    this.load();
                 },




                check:function(ele){
                         var id=ele.id.split('');
                         if(id[id.length-1]==this.questions[this.index].answer){
                         	this.score++;
                         	ele.className="correct";
                         	ele.innerHTML="Correct";
                         	this.scoreCard();
                         }
                         else{
							this.score = this.score - 13;
                         	ele.className="wrong";
                         	ele.innerHTML="Wrong";
                         }




                },
                notClickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="none";
                       }
                },

                clickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="auto";
                       	    ul.children[i].className=''

                       }
                },
                score:0,
                scoreCard:function(){
                	scoreCard.innerHTML=this.score+"/"+this.questions.length;
                },

                joker:function(){
                   this.score = this.score - 1000;
                   this.load();
                 },

           }



           window.onload=app.load();

           function button(ele){
           	     app.check(ele);
           	     app.notClickAble();
           }

         function next(){
              app.next();
              app.clickAble();
         }

         function repeat() {
           location.reload();
           app.clickAble();
         }

         function joker() {
           app.joker();
           app.clickAble();
           btn1.style.display="none";
         }





const TIME_LIMIT = 100;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;

document.getElementById("app").innerHTML = `
<div class="base-timer">
  <span id="base-timer-label" class="base-timer__label">${formatTime(timeLeft)}</span>
</div>
`;

startTimer();

function onTimesUp() {
  clearInterval(timerInterval);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
      quizBox.innerHTML="Time is up! Come on!"
      op1.style.display="none";
      op2.style.display="none";
      op3.style.display="none";
      op4.style.display="none";
      btn.style.display="none";
      btn1.style.display="none";
    }
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}
