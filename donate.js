const changeAmountBtn = document.querySelector(".change-amount");
const amountInput = document.getElementById("donate-value");

changeAmountBtn.addEventListener("click", () => {
    amountInput.focus();

    const length = amountInput.value.length;
    amountInput.setSelectionRange(length, length);
});



document.getElementById("donation-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const amount = document.getElementById("donate-value").value;
    const donorName = document.getElementById("donor-name").value;

    const response = await fetch("http://localhost:4242/create-checkout-session", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            amount: Number(amount),
            donorName: donorName
        })
    });

    const data = await response.json();

    if (data.url) {
        window.location.href = data.url; 
    }
});