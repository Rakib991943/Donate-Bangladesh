function getInputBalanceId(id) {
  return parseFloat(document.getElementById(id).innerText);
}
function getInputDonationField(id) {
  return parseFloat(document.getElementById(id).value);
}
function getInputDonationButton(id) {
  return (document.getElementById(id));
}
// Donate Now Button

document.getElementById('donateBtn').addEventListener("click", function () {
  let decreseBanlance = document.getElementById("decreaseBalance");
  let increseBanlance = document.getElementById("addBalance");
  let donateBalance = getInputDonationField("donationAmout");
  let decrease = getInputBalanceId("decreaseBalance");

  if (donateBalance <= 0 || isNaN(donateBalance)) {
    alert(" Soory Invalid ");
    return;

  } else {

    let increase = getInputBalanceId("addBalance");
    let decreaseAmount = decrease - donateBalance;
    let increaseAmount = increase + donateBalance;

    decreseBanlance.innerText = decreaseAmount;
    increseBanlance.innerText = increaseAmount;
  }
  let modal = document.getElementById("model");
  modal.classList.remove('hidden');


})
// Donate Button 
getInputDonationButton("donate").addEventListener('click', function () {
  let history = document.getElementById('history')
  history.classList.remove('bg-primary');

  let donate = document.getElementById('donate')
  donate.classList.add('bg-primary');
  let historyShow = document.getElementById('donateShow');
  historyShow.classList.remove('hidden');
  donateShow.classList.add('lg:flex');
  let mdl = document.getElementById("mdl");
  mdl.classList.add('btn');

});
document.getElementById("donationAmout").addEventListener("click", function () {
  let modal = document.getElementById("model");
  modal.classList.add('hidden');

})
// History Button
document.getElementById("history").addEventListener('click', function () {
  let title = document.getElementById("title").innerText;
  let donate = document.getElementById('donate')
  donate.classList.remove('bg-primary');
  let history = document.getElementById('history')
  history.classList.add('bg-primary');
  let donateShow = document.getElementById('donateShow');
  donateShow.classList.add('hidden');
  donateShow.classList.remove('lg:flex');
  let modal = document.getElementById("my_modal_1");
  modal.classList.add('hidden');
  let mdl = document.getElementById("mdl");
  mdl.classList.remove('btn');


  //  History 
  let showHistory = document.getElementById("history-section");
  showHistory.classList.remove('hidden');

  let historyItem = document.createElement("div");
  historyItem.className = "bg-white p-3 rounded-md "
  historyItem.innerHTML = `
  <h2> lorem40 </h2>
  <p>  </p>

  `

  const historyContainer = document.getElementById("history-list");
  historyContainer.append(historyItem);



});

// Blog Start
getInputDonationButton("blog").addEventListener('click', function () {
  window.location.href = "Blog.html"

})
// home Button
document.getElementById("blog").addEventListener('click', function () {

})

function dom() {
  let answerDom = document.getElementById("answer");
  answerDom.classList.remove('hidden');
  let answerDom1 = document.getElementById("answer4");
  answerDom1.classList.add('hidden');
}
function dom2() {
  let answerDom = document.getElementById("answer2");
  answerDom.classList.remove('hidden');
  let answerDom1 = document.getElementById("answer");
  answerDom1.classList.add('hidden');
}
function dom3() {
  let answerDom = document.getElementById("answer3");
  answerDom.classList.remove('hidden');
  let answerDom1 = document.getElementById("answer2");
  answerDom1.classList.add('hidden');
}
function dom4() {
  let answerDom = document.getElementById("answer4");
  answerDom.classList.remove('hidden');
  let answerDom1 = document.getElementById("answer3");
  answerDom1.classList.add('hidden');
}


