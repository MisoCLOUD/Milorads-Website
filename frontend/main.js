window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiUrl = 'https://myportfoliocounter.azurewebsites.net/api/myportfoliocounter?'
const localFunctionApi = 'http://localhost:7071/api/GetPortfolioCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Webiste called function API.");
        count = response.count,
        document.getElementById("count").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}