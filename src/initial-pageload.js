export default function initialPageLoad(){
    const containerDiv = document.getElementById('container');
    const contentDiv = document.createElement('div');
    contentDiv.id = 'content';
    containerDiv.appendChild(contentDiv);
}