
const selectMenu = document.querySelectorAll('.icon-section select');

for(let i=0; i<selectMenu.length;i++){
    for(let countryCode in countries){
        let option = ` <option value="">${countries[countryCode]}</option>`

        selectMenu[i].insertAdjacentHTML('beforeend',option);
    }
}