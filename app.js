
const selectMenu = document.querySelectorAll('.icon-section select'),
translateBtn = document.querySelector('.container button'),
from = document.querySelector('.left-section textarea'),
to = document.querySelector('.right-section textarea'),
fromValue = document.querySelector('.left-icon-section select'),
toValue = document.querySelector('.right-icon-section select')
;


let url ;

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

translateBtn.addEventListener('click',()=>{
    // console.log(fromValue.value, toValue.value)
    url =  `https://api.mymemory.translated.net/get?q=${from.value}!&langpair=${fromValue.value}|${toValue.value}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        to.value = data.responseData.translatedText;
    });
})