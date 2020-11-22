//GMAIL JS

//Module 1 JS

function showStepGmailFirstModule(stepId){
    var step = document.getElementById(stepId);
    if (step.classList.contains('collapse')) {
      $('#' + stepId).toggleClass('collapse');
    }
    
    if(stepId =="steptwo"){
        let email = document.getElementById('toField1');
        email.focus();
    }
    else if(stepId =="stepthree"){
        let email1 = document.getElementById('toField1');
        let email2 = document.getElementById('toField2');
        let subject1 = document.getElementById('subjectField1');
        email1.disabled = true;
        email2.value = email1.value;
        subject1.focus();
    }
    else if(stepId =="stepfour"){
        let email2 = document.getElementById('toField2');
        let email3 = document.getElementById('toField3');
        let subject1 = document.getElementById('subjectField1');
        let subject2 = document.getElementById('subjectField2');
        let message = document.getElementById('messageField1');
        subject1.disabled = true;
        email2.disabled = true;
        email3.value = email2.value;
        subject2.value = subject1.value;
        message.focus();
    }
    else if(stepId =="stepfive"){
        let email3 = document.getElementById('toField3');
        let email4 = document.getElementById('toField4');
        let subject2 = document.getElementById('subjectField2');
        let subject3 = document.getElementById('subjectField3');
        let message1 = document.getElementById('messageField1');
        let message2 = document.getElementById('messageField2');
        subject2.disabled = true;
        email3.disabled = true;
        message1.disabled = true;
        email4.value = email3.value;
        subject3.value = subject2.value;
        message2.value = message1.value;
    }

}
  
  
  function onEmailAdded(){
    let email = document.getElementById('toField1');
    let text = email.value;
    let val = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text.trim())
  
    if(val == true){
      showStepGmailFirstModule('stepthree');
    }
    else{
      alert('That is not a valid email');
    }
  }
  
  function onSubjectAdded(){
      let subject = document.getElementById('subjectField1');
      let text = subject.value;
      let trimmedText = text.trim()
      if(trimmedText == ''){
        alert('Though you are not required to have a subject, we would like you to have one for this tutorial.');
      }
      else
      {
        showStepGmailFirstModule('stepfour');
      }
  }
  
  function onMessageAdded(){
    let message = document.getElementById('messageField1');
      let text = message.value;
      let trimmedText = text.trim()
      if(trimmedText != ''){
        showStepGmailFirstModule('stepfive');
      }
      else{
        alert('Please add a message to your email');
      }
      
  }
  
  function showSuccess(show){
    let stepSix = document.getElementById('stepsix');
  
    $('#stepsix').toggleClass('collapse');
  
    if(show == true){
  
      stepSix.style.visibility = 'visible';
    }
    else{
      stepSix.style.visibility = 'hidden';
    }
  }