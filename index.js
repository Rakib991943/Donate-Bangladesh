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
    alert("Soory Mama");
    return;

  } else {

    let increase = getInputBalanceId("addBalance");
    let decreaseAmount = decrease - donateBalance;
    let increaseAmount = increase + donateBalance;

    decreseBanlance.innerText = decreaseAmount;
    increseBanlance.innerText = increaseAmount;
  }


})
// Donate Button 
getInputDonationButton("donate").addEventListener('click', function () {
  let history = document.getElementById('history')
  history.classList.remove('bg-primary');

  let donate = document.getElementById('donate')
  donate.classList.add('bg-primary');
  let historyShow = document.getElementById('donateShow');
  historyShow.classList.remove('hidden');

});
// History Button
document.getElementById("history").addEventListener('click', function () {
  let showHistory = document.getElementById("history-section");
  showHistory.classList.remove('hidden');
  let title = document.getElementById("title").innerText;
  let donate = document.getElementById('donate')
  donate.classList.remove('bg-primary');
  let history = document.getElementById('history')
  history.classList.add('bg-primary');
  let donateShow = document.getElementById('donateShow');
  donateShow.classList.add('hidden');

  const historyItem = document.createElement("div");

  historyItem.className = "bg-white p-3 rounded-md "
  historyItem.innerHTML = `
  <h2>${donateBalance} ${title}  </h2>
  <p> ${new Date().toDateString()} </p>

  `
});

// Blog Start
getInputDonationButton("blog").addEventListener('click', function () {
  window.location.href = "Blog.html"
})



