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
    countryList.forEach(function (keyList){
        let mainDiv = document.getElementById('mainDiv')
        let innerDiv = document.createElement('innerDiv')
        mainDiv.className = 'mainDiv'
        let countryName = document.createElement('h3')
        let countryFlag = document.createElement('img')
        countryName.textContent = `${keyList.country}`
        countryFlag.src = `${keyList.countryInfo.flag}`
        countryFlag.style.cursor = 'pointer'
        innerDiv.append(countryName, countryFlag)
        mainDiv.append(innerDiv)

    
        mainDiv.addEventListener('click', ()=>{
            countryInfo(keyList)
        })
    
      
        
    })
    function countryInfo(keyList){
        let biggerDiv = document.getElementById('mainDiv')
        biggerDiv.innerHTML = ''
        let imgDiv = document.createElement('innerDiv')
        mainDiv.className = 'biggerDiv'
        let innerCountryFlag = document.createElement('img')
        let innerCountryName = document.createElement('h3')
        let innerCountryPopulation = document.createElement('p')
        innerCountryName.textContent = `${keyList.country}`
        innerCountryPopulation.textContent = `${keyList.population}`
        innerCountryFlag.src = `${keyList.countryInfo.flag}`
        imgDiv.append(innerCountryName, innerCountryFlag, innerCountryPopulation)
        biggerDiv.append(imgDiv)
    }
   
}
displayItems()







