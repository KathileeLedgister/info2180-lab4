
function onclickSubmit(event) {

    let queryRequest = new Request('superheroes.php');

    fetch(queryRequest)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(responseText => {
                alert(responseText);
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Error:' + error.message);
            });
    event.stopPropagation();
    event.preventDefault();
}

window.onload = function () {
    let elementBtn = document.getElementById("btnquery");
    elementBtn.addEventListener("click", onclickSubmit);
}