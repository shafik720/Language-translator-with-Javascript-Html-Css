
const selectMenu = document.querySelectorAll('.icon-section select');

for(let i=0; i<selectMenu.length;i++){
    let selected;
    for(let countryCode in countries){
        if(i==0){
            selected = countryCode == 'en-GB' ? 'selected' : '';
        }else if(i==1){
            selected = countryCode == 'bn-IN' ? 'selected' : '';
        }
        let option = ` <option value="${countryCode}" ${selected}>${countries[countryCode]}</option>`;
        selectMenu[i].insertAdjacentHTML('beforeend',option);
    }
}