const END_POINT = "https://api.adviceslip.com/advice";

const fetchAdvice = async () => {
    const response = await fetch(END_POINT);
    const data = await response.json();
    return data.slip;
};

const getAdvice = async () => {
    const adviceID = document.querySelector("#advice__id");
    const adviceText = document.querySelector("#advice__text");
    adviceText.classList.add("blur-out");
    const { id, advice } = await fetchAdvice();
    adviceText.textContent = `"${advice}"`;
    adviceID.textContent = id;
    adviceText.classList.remove("blur-out");
};

const getAdviceButton = document.querySelector("#get-advice");

getAdviceButton.addEventListener("click", getAdvice);

getAdvice();
