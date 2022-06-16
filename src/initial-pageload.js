export default function initialPageLoad(){
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';

    const text = document.createElement('p');
    text.textContent = "Big eaters only pls";

    contentDiv.appendChild(text);
}