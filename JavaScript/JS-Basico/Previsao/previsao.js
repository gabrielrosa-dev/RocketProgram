const apikey = "51d6baff4063de191d129a2d584a2f19"
const lang = "pt_br"
const units = "metric"

const cardEL = document.querySelector(".card")
const iconEL = document.querySelector(".icon")
const tempEL = document.querySelector(".temp")
const locationEL = document.querySelector(".location")
const descriptionEL = document.querySelector(".description")
const detailsEL = document.querySelector(".details")
const searchInput = document.querySelector(".search input")
const searchButton = document.querySelector(".search button")

function callApi() {
    const city = searchInput.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=${units}&lang=${lang}`)
        .then(response => response.json())
        .then(response => {
            try {
                const icon = response.weather[0].icon
                const iconUrl = `https://openweathermap.org/payload/api/media/file/${icon}%402x.png`
                iconEL.src = iconUrl

                tempEL.innerHTML = Math.round(response.main.temp) + "°C"
                locationEL.innerHTML = `<span class="city">${response.name}</span> <span class="country">${response.sys.country}</span>`
                descriptionEL.innerHTML = response.weather[0].description
                detailsEL.innerHTML = `
            <div>
                <span>Min: ${Math.round(response.main.temp_min)}°C</span>
                <span>Max: ${Math.round(response.main.temp_max)}°C</span>
            </div>
            <div>
                <span>Sensação térmica</span>
                <span>${Math.round(response.main.feels_like)}°C</span>
            </div>
            <div>
                <span>Umidade</span>
                <span>${response.main.humidity}%</span>
            </div>
            <div>
                <span>Vento</span>
                <span>${response.wind.speed} km/h</span>
            </div>
        `

                cardEL.classList.add("active")
            } catch (err) {
                console.log(err)
                cardEL.classList.remove("active")
            }
        })
        .catch((err) => {
            console.log(err)
            cardEL.classList.remove("active")
        })
}

searchButton.addEventListener("click", callApi);