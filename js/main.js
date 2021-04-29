document.querySelector(#submit).addEventListener('click', genHoro);

const genHoro = () => {
    const birthDay = document.querySelector(#day).value;
    const birthMonth = document.querySelector(#month).value;
    /*const birthYear = document.querySelector(#year).value;*/

    switch(birthDate){
        case birthDay:
            //Capricon
            document.querySelector(#horo_here).innerText = `You will eat food for dinner`
            break;
        case:
            //Aquarius
            document.querySelector(#horo_here).innerText = `Green is your best color`
            break;
        case:
            //Leo??
            document.querySelector(#horo_here).innerText = `Lions are cool`
            break;
        default:
            document.querySelector(#horo_here).innerText = `Please put in your birthdate in the afformentied format.`

    }

}