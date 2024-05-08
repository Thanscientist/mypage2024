let correctAnswers = 0;

function checkAnswer(answer) {
   const result = document.getElementById('result');
   if (answer === 'a') {
       result.textContent = "ถูกต้อง! หน่วยงานที่รับผิดชอบในการควบคุมสาธารณสุขคือ กระทรวงสาธารณสุข";
       result.style.color = 'green';
       correctAnswers++;
   } else {
       result.textContent = "ผิด! ลองอีกครั้ง";
       result.style.color = 'red';
   }
   updateSummary();
}

function updateSummary() {
   const summary = document.getElementById('summary');
   summary.textContent = `คำตอบที่ถูก: ${correctAnswers} จากทั้งหมด ${document.querySelectorAll('.button').length}`;
}