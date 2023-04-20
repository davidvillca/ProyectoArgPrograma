const nextBtn = document.querySelector("#next-btn");
const backBtn = document.querySelector("#back-btn");
const step1 = document.querySelector("#step-1");
const step2 = document.querySelector("#step-2");
const step3 = document.querySelector("#step-3");
const step4 = document.querySelector("#step-4");
const summary = document.querySelector("#summary");
const homeBtn = document.querySelector("#home-btn");


nextBtn.addEventListener("click", function() {

  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let coment = document.querySelector("#coment").value;

 
  
  
  summary.innerHTML = `<span style="color: white">Nombre:</span> ${name}<br><span style="color: white">Email:</span> ${email}<br><span style="color: white">Nombre de Ciudad o Pueblo:</span> ${coment}`;


  homeBtn.style.display = "block";
  
  
  
  step1.style.display = "none";
  step3.style.display = "none";
  step4.style.display = "none";
  step2.style.display = "block";
});
homeBtn.addEventListener("click", function() {
  window.location.href = "tickets.html"; 
});