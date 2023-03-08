var score =prompt("Enterscore:") 
function calculateGrade(score) {
    if (score >= 80 && score <=100) {
      return 'A';
    } else if (score >= 70 && score <80) {
      return 'B';
    } else if (score >= 60 && score <=69) {
      return 'C';
    } else if (score >= 50 && score <60) {
      return 'D';
    } else if(score>100||score<0) {
      return 'Invalid input';
    }
      else {
      return 'E';
    }
  }
document.getElementById("Grades").innerHTML=calculateGrade(score)
  //console.log(calculateGrade(score))
    
