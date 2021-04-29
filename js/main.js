

document.querySelector("#testSubmit").addEventListener("click", horoscope);

function horoscope() {
    const birthDay = document.querySelector("#day").value
    const birthMonth = document.querySelector("#month").value
    const birthYear = document.querySelector("#year").value;
    

    /*if (birthDay === "" || birthMonth === ""){
        alert("Please input your birth day or birth month");
        return false;
    } else{
        const horoDate = new Date(birthYear, birthMonth, birthDay);
        return console.log(horoDate);
    } else if (){

    }*/

    /*switch(horoDate){
        case horoDate.getMonth() == 0 || horoDate.getMonth() === 11:
            //Capricon
            document.querySelector("#horo_here").innerText = `You will eat food for dinner`
            break;
        case  horoDate.getMonth() == 0 || horoDate.getMonth() === 11:
            //Aquarius
            document.querySelector("#horo_here").innerText = `Green is your best color`
            break;
        case  horoDate.getMonth() == 0 || horoDate.getMonth() === 11:
            //Leo??
            document.querySelector("#horo_here").innerText = `Lions are cool`
            break;
        default:
            document.querySelector("#horo_here").innerText = `Please put in your birthdate in the afformentied format.`

    }*/

    /*document.querySelector("#horo_here").innerText = `${horoDate} goes here`*/
    
}
