// Call alert & Coin calculation
const callButtons = document.getElementsByClassName("call-btn");
let serviceNames = document.getElementsByClassName("service-name");
let serviceNumbers = document.getElementsByClassName("service-number");

for (let i = 0; i < callButtons.length; i++) {
  callButtons[i].addEventListener("click", function () {
    const coinCount = parseInt(document.getElementById("coin-count").innerText);
    const name = serviceNames[i].innerText;
    const number = serviceNumbers[i].innerText;
    if (coinCount >= 20) {
      alert(`📞 Calling ${name} ${number}...`);

      const updatedCoinCount = coinCount - 20;
      document.getElementById("coin-count").innerText = updatedCoinCount;
    } else {
      alert(
        `❌ A minimum of 20 coins is required to make a call. You don’t have enough coins right now.`
      );
      return;
    }

    // Call History List population
    const now = new Date();
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };
    const currentTime = now.toLocaleTimeString("en-US", options);

    const historyListContainer = document.getElementById(
      "history-list-container"
    );
    const listItem = document.createElement("div");
    listItem.innerHTML = `
          <div class="flex flex-row md:flex-col lg:flex-row md:gap-4 items-center justify-between bg-[#FAFAFA] rounded-[12px] p-4 my-2">
              <div class="sm:text-start md:text-center lg:text-start">
                  <p class="inter-font font-semibold text-[16px] ">${name}</p>
                  <p class="hind-madurai-regular text-[16px] text-[#5C5C5C]">${number}</p>
              </div>
              <p class="hind-madurai-regular text-[16px]">${currentTime}</p>
          </div>
      `;
    historyListContainer.appendChild(listItem);
  });
}

// clear history button config
document.getElementById("clear-btn").addEventListener("click", function () {
  document.getElementById("history-list-container").innerHTML = "";
});

// Counting Hearts
const heartElements = document.getElementsByClassName("fa-heart");
for (let heart of heartElements) {
  heart.addEventListener("click", function () {
    const heartCount = parseInt(
      document.getElementById("heart-count").innerText
    );
    const updatedHeartCount = heartCount + 1;
    document.getElementById("heart-count").innerText = updatedHeartCount;
  });
}

// Calculating copy and alerting number
const copyButtons = document.getElementsByClassName("copy-btn");
for (let i = 0; i < copyButtons.length; i++) {
  copyButtons[i].addEventListener("click", function () {
    const number = serviceNumbers[i].innerText;
    const copyCount = parseInt(document.getElementById("copy-count").innerText);
    const updatedCopyCount = copyCount + 1;
    document.getElementById("copy-count").innerText = updatedCopyCount;

    // copy the number to clipboard
    navigator.clipboard.writeText(number);
    alert(`📋 The number has been copied: ${number}`);
    return;
  });
}
