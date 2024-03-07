window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const functionApiUrl = 'https://azureresumelab.azurewebsites.net/api/GetResumeCounter?code=KQdo3POR2biDSSl96jvWmv2pv_zOc1GhtuC_SzYyyaHQAzFu3GsVRg==';
const localfunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl)
        .then(response => response.json())
        .then(response => {
            console.log("Website called function API.");
            count = response.count;
            document.getElementById("counter").innerText = count;
        })
        .catch(error => {
            console.log(error);
        });
    return count;
};
