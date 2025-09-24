function getInfo() {
  return {
    Name: document.getElementById("studentName").value,
    Maths: Number(document.getElementById("Num1").value),
    Computer: Number(document.getElementById("Num2").value),
    English: Number(document.getElementById("Num3").value),
    Physics: Number(document.getElementById("Num4").value),
    Urdu: Number(document.getElementById("Num5").value),
  };
}

function getAllMarks({ Maths, Computer, English, Physics, Urdu }) {
  return Maths + Computer + English + Physics + Urdu;
}

function percentage(total) {
  return (total / 500) * 100;
}

function grade(percent) {
  if (percent >= 90) return " Excellent! You got A";
  else if (percent >= 70) return " Great effort! You got B";
  else if (percent >= 60) return " Good, you got C";
  else if (percent >= 50) return " You got D";
  else return " Failed";
}

function showGif() {
  document.querySelector(".result-section").style.display = "flex";
}

function makeItSubmit(event) {
  event.preventDefault(); 

  let info = getInfo();
  let total = getAllMarks(info);
  let percent = percentage(total);
  let finalGrade = grade(percent);

 
  document.getElementById("gradeForm").style.display = "none";

  
  showGif();

  
  console.log("STUDENT RESULT RECORD");
  console.log(`Name: ${info.Name}`);
  console.log(`Maths: ${info.Maths}/100`);
  console.log(`Computer: ${info.Computer}/100`);
  console.log(`English: ${info.English}/100`);
  console.log(`Physics: ${info.Physics}/100`);
  console.log(`Urdu: ${info.Urdu}/100`);
  console.log(`Total Marks: ${total}/500`);
  console.log(`Percentage: ${percent.toFixed(2)}%`);
  console.log(`Grade: ${finalGrade}`);

   document.getElementById("gifBox").innerHTML += `
    <div style="margin-top:15px; color:white; text-align:center;">
      <h3>Name: ${info.Name}</h3>
      <p>Total Marks: ${total}/500</p>
      <p>Percentage: ${percent.toFixed(2)}%</p>
      <p>Grade: ${finalGrade}</p>
    </div>
  `;
}
