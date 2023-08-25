let url = 'https://disease.sh/v3/covid-19/countries';
let currentPage = 1,
itemsPerPage = 40;
let countryList = []


async function fetchApi (){
    const response = await fetch(url);
    const data = await response.json()
    countryList = data
    console.log(countryList);
}
fetchApi()

async function displayItems(){
    await fetchApi()
    let startIndex = (currentPage - 1) * itemsPerPage,
    endIndex = (startIndex + itemsPerPage ),
    showItems = countryList.slice(startIndex,endIndex)


    showItems.forEach(function (keyList){
        let mainDiv = document.getElementById('mainDiv')
        let innerDiv = document.createElement('innerDiv')
        mainDiv.className = 'mainDiv'
        // mainDiv.style.backgroundColor = 'red'
        // mainDiv.textContent = 'jdd'
        let countryName = document.createElement('h3')
        let countryFlag = document.createElement('img')
        countryName.textContent = `${keyList.country}`
        countryFlag.src = `${keyList.countryInfo.flag}`
        // let countryCases = document.createElement('p')
        innerDiv.append(countryName, countryFlag)
        mainDiv.append(innerDiv)
        
    })

}
displayItems()

let prevBtn = document.getElementById('prevBtn')
let nextBtn = document.getElementById('nextBtn')

