// Common code for all semesters
let p = document.getElementById("para");
let para = document.getElementById("cgpa");

document.getElementById("btn").addEventListener("click", function () {
  //extract sem data(subjects,credits) from individual html files
  let semesterData = getSemesterData();
  let mainScore = 0;

  for (let i = 0; i < semesterData.subjects.length; i++) {
    let subject = semesterData.subjects[i];
    let grade = document.getElementById(subject).value;
      // console.log(grade);
    if (grade === "syg") {
      alert("Please select a grade for " + subject.toUpperCase());
      return;
    }

    let score = getScore(grade);
    mainScore += score * semesterData.credits[i];
    console.log(mainScore);
  }

    //p.style.display = "block";
     // After displaying the result, scroll to the result paragraph
     document.getElementById("para").style.visibility = "visible";
     document.getElementById("para").scrollIntoView({ behavior: "smooth" });
     console.log(semesterData.credits);
     totalCredits = semesterData.credits.reduce((acc,res)=>acc+res,0);
    //  console.log(totalCredits);
    let cgpa = mainScore /totalCredits;
    // console.log(mainScore,clgpa);
  para.innerText = Math.round(cgpa * 1000) / 1000;
});



function getScore(grade) {
  let score = 0;
  switch (grade) {
    case "Ex":
      score = 10;
      break;
    case "A":
      score = 9;
      break;
    case "B":
      score = 8;
      break;
    case "C":
      score = 7;
      break;
    case "D":
      score = 6;
      break;
    case "E":
      score = 5;
      break;
    case "R":
      score = 0;
      break;
    default:
      score = 0;
  }
  return score;
}
