
function onclickSubmit(event) {


    do {
        let queryObj = document.getElementById("textInput");
        if (!queryObj.validity.valid) {
            alert("Please enter a valid Avenger Name or Alias");
            break;
        }
        let inputString = queryObj.value;
        inputString = encodeURIComponent(inputString.trim());
        let queryRequest = new Request('superheroes.php?query=' + inputString);
        let svresult = document.getElementById("svresult");

        fetch(queryRequest)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.text();
                })
                .then(responseText => {
                    svresult.innerHTML = responseText;
                })
                .catch((error) => {
                    svresult.innerHTML = "<h4 class=\"queryerror\">"+'Error:' + error.message+"</h4>";
                });
    } while (false);
    event.stopPropagation();
    event.preventDefault();
}

window.onload = function () {
    let elementBtn = document.getElementById("btnquery");
    elementBtn.addEventListener("click", onclickSubmit);
}