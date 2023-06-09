const updateBtn = document.querySelector('.update-advice');
const adviceNumber = document.querySelector('.advice-id');
const adviceTxt = document.querySelector('.advice-txt');

async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const adviceContent = await response.json();
    const adviceId = `Advice #${adviceContent.slip.id}`
    const adviceDescription = `${adviceContent.slip.advice}`

    adviceNumber.innerHTML = adviceId;
    adviceTxt.innerHTML = adviceDescription;
}

updateBtn.addEventListener('click', getAdvice);

getAdvice();