const rentedCarData = JSON.parse(localStorage.getItem("rentedCar"));

const mainSection = document.querySelector(".main-car-section");
const otherSection = document.querySelector(".other-cars-section");

const otherCars = [
    {
        id: "Crossover",
        ad: "Hyundai Kona 2022",
        img: "https://getcarrental.com/assets/images/hyundai-kona-2021-get-rent-a-car.png",
        priceOne: "95",
        priceTwo: "90",
        priceThree: "80",
        gasoline: "2.0L"
    },
    {
        id: "Crossover",
        ad: "Hyundai Tucson 2021",
        img: "https://getcarrental.com/assets/images/hyundai-tucson-2021-get-rent-a-car.png",
        priceOne: "100",
        priceTwo: "90",
        priceThree: "80",
        gasoline: "2.0L"

    },
    {
        id: "Crossover",
        ad: "Kia Sportage 2021",
        img: "https://getcarrental.com/assets/images/kia-sportage-2021-get-rent-a-car.png",
        priceOne: "120",
        priceTwo: "105",
        priceThree: "90",
        gasoline: "2.0L"

    },
    {
        id: "Crossover",
        ad: "Hyundai Tucson 2023",
        img: "https://getcarrental.com/assets/images/hyundai-tucson-2023-get-rent-a-car.png",
        priceOne: "145",
        priceTwo: "130",
        priceThree: "100",
        gasoline: "2.0L"

    },
    {
        id: "Crossover",
        ad: "Kia Sportage 2023",
        img: "https://getcarrental.com/assets/images/kia-sportage-2023-get-rent-a-car.png",
        priceOne: "145",
        priceTwo: "130",
        priceThree: "100",
        gasoline: "2.0L"

    },
    {
        id: "Crossover",
        ad: "Hyundai Santa Fe 2022",
        img: "https://getcarrental.com/assets/images/hyundai-santafe-2021-get-rent-a-car.png",
        priceOne: "150",
        priceTwo: "130",
        priceThree: "120",
        gasoline: "2.5L"

    },
    {
        id: "Crossover",
        ad: "Kia Sorento 2023",
        img: "https://getcarrental.com/assets/images/kia-sorento-2023-get-rent-a-car.png",
        priceOne: "175",
        priceTwo: "160",
        priceThree: "130",
        gasoline: "2.5L"

    },
    {
        id: "Crossover",
        ad: "Hyundai Venue 2022",
        img: "https://getcarrental.com/assets/images/hyundai-venue-2022.png",
        priceOne: "90",
        priceTwo: "85",
        priceThree: "70",
        gasoline: "1.6L"

    },
    {
        id: "Economy",
        ad: "Kia Cerato 2016",
        img: "https://getcarrental.com/assets/images/kia-cerato-2016-get-rent-a-car.png",
        priceOne: "65",
        priceTwo: "60",
        priceThree: "45",
        gasoline: "1.8L"

    },
    {
        id: "Economy",
        ad: "Kia Forte 2018",
        img: "https://getcarrental.com/assets/images/kia-forte-2018-get-rent-a-car.png",
        priceOne: "70",
        priceTwo: "65",
        priceThree: "55",
        gasoline: "2.0L"

    },
    {
        id: "Economy",
        ad: "Hyundai Elantra 2018",
        img: "https://getcarrental.com/assets/images/hyundai-elantra-2018-get-rent-a-car.png",
        priceOne: "70",
        priceTwo: "65",
        priceThree: "55",
        gasoline: "2.0L"

    },
    {
        id: "Economy",
        ad: "Kia Rio 2021",
        img: "https://getcarrental.com/assets/images/kia-rio-2021-get-rent-a-car.png",
        priceOne: "75",
        priceTwo: "70",
        priceThree: "55",
        gasoline: "2.0L"

    },
    {
        id: "Economy",
        ad: "Hyundai Accent 2021",
        img: "https://getcarrental.com/assets/images/hyundai-accent-2021-get-rent-a-car.png",
        priceOne: "75",
        priceTwo: "70",
        priceThree: "55",
        gasoline: "1.5L"

    },
    {
        id: "Economy",
        ad: "Hyundai Elantra 2020",
        img: "https://getcarrental.com/assets/images/hyundai-elantra-2020-get-rent-a-car.png",
        priceOne: "80",
        priceTwo: "75",
        priceThree: "60",
        gasoline: "1.8L"

    },
    {
        id: "Economy",
        ad: "Hyundai Elantra 2023",
        img: "https://getcarrental.com/assets/images/hyundai-elantra-2023-get-rent-a-car.png",
        priceOne: "95",
        priceTwo: "85",
        priceThree: "75",
        gasoline: "1.6L"

    },
    {
        id: "Economy",
        ad: "Toyota Corolla 2018",
        img: "https://getcarrental.com/assets/images/toyota-corolla-2018-get-rent-a-car.png",
        priceOne: "90",
        priceTwo: "80",
        priceThree: "75",
        gasoline: "1.6L"

    },
    {
        id: "Economy",
        ad: "Toyota Corolla 2023",
        img: "https://getcarrental.com/assets/images/toyota-corolla-2023-get-rent-a-car.png",
        priceOne: "110",
        priceTwo: "100",
        priceThree: "85",
        gasoline: "1.6L"

    },
    {
        id: "Business",
        ad: "Hyundai Sonata 2017",
        img: "https://getcarrental.com/assets/images/hyundai-sonata-2017-white-get-rent-a-car.png",
        priceOne: "80",
        priceTwo: "75",
        priceThree: "65",
        gasoline: "2.4L"

    },
    {
        id: "Business",
        ad: "Kia Optima 2018",
        img: "https://getcarrental.com/assets/images/kia-optima-2018-get-rent-a-car.png",
        priceOne: "90",
        priceTwo: "85",
        priceThree: "75",
        gasoline: "2.0L"

    },
    {
        id: "Business",
        ad: "Hyundai Sonata 2023",
        img: "https://getcarrental.com/assets/images/hyundai-sonata-2022-get-rent-a-car.png",
        priceOne: "145",
        priceTwo: "135",
        priceThree: "95",
        gasoline: "2.0L"

    },
    {
        id: "Business",
        ad: "Kia K5 2023",
        img: "https://getcarrental.com/assets/images/hyundai-sonata-2022-get-rent-a-car.png",
        priceOne: "145",
        priceTwo: "135",
        priceThree: "95",
        gasoline: "1.6L"

    },
    {
        id: "Business",
        ad: "Toyota Camry 2022",
        img: "https://getcarrental.com/assets/images/toyota-camry-2021-get-rent-a-car.png",
        priceOne: "145",
        priceTwo: "135",
        priceThree: "100",
        gasoline: "2.5L"

    },
    {
        id: "Premium",
        ad: "Hyundai Staria 2024",
        img: "https://getcarrental.com/assets/images/hyundai-staria-2022-get-rent-a-car.png",
        priceOne: "190",
        priceTwo: "170",
        priceThree: "150",
        gasoline: "2.5L"

    },
    {
        id: "Premium",
        ad: "Mercedes Benz V-class 2019",
        img: "https://getcarrental.com/assets/images/mercedes-v-class-2019-get-rent-a-car.png",
        priceOne: "250",
        priceTwo: "230",
        priceThree: "180",
        gasoline: "2.0L"

    },
    {
        id: "Premium",
        ad: "Ford Mustang 2020",
        img: "https://getcarrental.com/assets/images/ford-mustang-2020-get-rent-a-car.png",
        priceOne: "250",
        priceTwo: "240",
        priceThree: "160",
        gasoline: "2.3L"

    },
    {
        id: "Premium",
        ad: "BMW G30 5 series 2020",
        img: "https://getcarrental.com/assets/images/bmw-g30-get-rent-a-car-2.png",
        priceOne: "250",
        priceTwo: "220",
        priceThree: "150",
        gasoline: "2.0L"

    },
    {
        id: "Premium",
        ad: "Range Rover Vogue 2017",
        img: "https://getcarrental.com/assets/images/range-rover-vogue-2017-get-rent-a-car.png",
        priceOne: "300",
        priceTwo: "280",
        priceThree: "210",
        gasoline: "3.0L"

    },
    {
        id: "Premium",
        ad: "BMW X5 2022",
        img: "https://getcarrental.com/assets/images/bmw-x5-2022-get-rent-a-car-2.png",
        priceOne: "350",
        priceTwo: "320",
        priceThree: "250",
        gasoline: "3.0L"

    },
    {
        id: "Premium",
        ad: "Mercedes Benz S-class 2019",
        img: "https://getcarrental.com/assets/images/mercedes-s-class-2017-get-rent-a-car.png",
        priceOne: "350",
        priceTwo: "330",
        priceThree: "250",
        gasoline: "3.5L"

    },
    {
        id: "Premium",
        ad: "BMW X7 2022",
        img: "https://getcarrental.com/assets/images/bmw-x7-get-rent-a-car-2.png",
        priceOne: "450",
        priceTwo: "400",
        priceThree: "300",
        gasoline: "3.0L"

    },
    {
        id: "Premium",
        ad: "Range Rover Vogue 2021",
        img: "https://getcarrental.com/assets/images/range-rover-vogue-2020-get-rent-a-car.png",
        priceOne: "450",
        priceTwo: "420",
        priceThree: "300",
        gasoline: "3.0L"

    },
    {
        id: "Premium",
        ad: "Land Rover Defender 2023",
        img: "https://getcarrental.com/assets/images/land-rover-defender-2023.png",
        priceOne: "450",
        priceTwo: "420",
        priceThree: "350",
        gasoline: "2.0L"

    },
    {
        id: "Suv",
        ad: "Toyota Prado 2015-2018",
        img: "https://getcarrental.com/assets/images/toyota-prado-2015-get-rent-a-car.png",
        priceOne: "125",
        priceTwo: "120",
        priceThree: "110",
        gasoline: "2.7L"

    },
    {
        id: "Suv",
        ad: "Toyota Land Cruiser 2015",
        img: "https://getcarrental.com/assets/images/land-crusier-2015-get-rent-a-car.png",
        priceOne: "150",
        priceTwo: "140",
        priceThree: "125",
        gasoline: "4.0L"

    },
    {
        id: "Suv",
        ad: "Mitsubishi Pajero Sport 2022",
        img: "https://getcarrental.com/assets/images/pajero-sport-2022-get-rent-a-car.png",
        priceOne: "170",
        priceTwo: "160",
        priceThree: "130",
        gasoline: "3.0L"

    },
    {
        id: "Suv",
        ad: "Toyota Prado 2020",
        img: "https://getcarrental.com/assets/images/toyota-prado-2020-get-rent-a-car.png",
        priceOne: "220",
        priceTwo: "200",
        priceThree: "170",
        gasoline: "2.7L"

    },

]

if (rentedCarData) {
    mainSection.innerHTML = `
    <div class="main-car-card">
        <div class="car-image">
            <img src="${rentedCarData.img}" alt="${rentedCarData.ad}">
        </div>
        <div class="car-info">
            <h2>${rentedCarData.ad}</h2>
            <p class="car-price">Günlük: ${rentedCarData.priceOne} AZN</p>
            <p>8–20 gün: ${rentedCarData.priceTwo} AZN</p>
            <p>21+ gün: ${rentedCarData.priceThree} AZN</p>
            <p>Benzin: ${rentedCarData.gasoline}</p>
            <button class="rent-btn">Rent Now</button>
        </div>
    </div>
    `;

    otherCars.forEach(car => {
        const card = document.createElement("div");
        card.classList.add("car-card");
        card.innerHTML = `
            <img src="${car.img}" alt="${car.ad}">
            <h3>${car.ad}</h3>
            <p>${car.priceOne} AZN/gün</p>
        `;
        otherSection.appendChild(card);
    });

} else {
    mainSection.innerHTML = `<p style="text-align:center; margin-top:50px;">❌ Hələ heç bir maşın icarəyə götürülməyib.</p>`;
}
