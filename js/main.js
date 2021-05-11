document.querySelector("#testSubmit").addEventListener("click", horoscope);

function horoscope() {

    //Putting your birthday into the comparison variable horoDate
    const birthDay = document.querySelector("#day").value
    const birthMonth = document.querySelector("#month").value
    const birthYear = document.querySelector("#year").value;
    const horoDate = new Date(birthYear, (birthMonth-1), birthDay);

    //Horoscope start and end dates
    const aquaStart = new Date(birthYear, 0, 20);
    const aquaEnd = new Date(birthYear, 1, 18);

    const piStart = new Date(birthYear, 1, 19);
    const piEnd = new Date(birthYear, 2, 20);

    const arStart = new Date(birthYear, 2, 21);
    const arEnd = new Date(birthYear, 3, 19);

    const taStart = new Date(birthYear, 3, 20);
    const taEnd = new Date(birthYear, 4, 20);

    const gemStart = new Date(birthYear, 4, 21);
    const gemEnd = new Date(birthYear, 5, 20);

    const canStart = new Date(birthYear, 5, 21);
    const canEnd = new Date(birthYear, 6, 22);

    const leoStart = new Date(birthYear, 6, 23);
    const leoEnd = new Date(birthYear, 7, 22);

    const virStart = new Date(birthYear, 7, 23);
    const virEnd = new Date(birthYear, 8, 22);
    
    const libStart = new Date(birthYear, 8, 23);
    const libEnd = new Date(birthYear, 9, 22);

    const scoStart = new Date(birthYear, 9, 23);
    const scoEnd = new Date(birthYear, 10, 21);

    const sagStart = new Date(birthYear, 10, 22);
    const sagEnd = new Date(birthYear, 11, 21);

    const capStart = new Date(birthYear,11,22);
    const capEnd = new Date(birthYear,0,19);
    capEnd.setFullYear(capEnd.getFullYear() + 1);

    //Posting Your Horoscope to the DOM
    if (horoDate > aquaStart && horoDate < aquaEnd){
        console.log('Aqua')
        document.querySelector("#horo_here").innerText = `You are a Aquarius!`
        document.querySelector("#horo_p").innerText=` Be patient with yourself today you as may end up having a tough time managing relationships with those close to you.`
        
    } else if (horoDate > piStart && horoDate < piEnd) {
        console.log('Pi')
        document.querySelector("#horo_here").innerText = `You are a Pisces!`
        document.querySelector("#horo_p").innerText=`Small things will bring you the most happiness today. Take your time and appreciate them!`

    } else if (horoDate > arStart && horoDate < arEnd) {
        console.log('Aries')
        document.querySelector("#horo_here").innerText = `You are a Aries!`
        document.querySelector("#horo_p").innerText=`Keep yourself filled with hope and optimism. A positive mindset will help you handle your worries and bring about better outcomes in life.`

    } else if (horoDate > taStart && horoDate < taEnd){
        console.log('Taurus')
        document.querySelector("#horo_here").innerText = `You are a Taurus!`
        document.querySelector("#horo_p").innerText=`There is an exepected occurance waiting to throw you off your game today. But your calmness and maturity will keep you balanced.`
    
    } else if (horoDate > gemStart && horoDate < gemEnd){
        console.log('Gemini')
        document.querySelector("#horo_here").innerText = `You are a Gemini!`
        document.querySelector("#horo_p").innerText=` Feelings of insecurity may surface today, making you nervous. Try doing something that makes you happy to boost your confidence.`
    
    } else if (horoDate > canStart && horoDate < canEnd){
        console.log('Cancer')
        document.querySelector("#horo_here").innerText = `You are a Cancer!`
        document.querySelector("#horo_p").innerText=`You will be showered with appreciation and praise for your efforts at work. You might even be able to get a promotion or a pay rise today.`
   
    } else if (horoDate > leoStart && horoDate < leoEnd){
        console.log('Leo')
        document.querySelector("#horo_here").innerText = `You are a Leo!`
        document.querySelector("#horo_p").innerText=`New relationships will get a chance to blossom today. Be open to talking with someone you may not know.`
  
    } else if (horoDate > virStart && horoDate < virEnd){
        console.log('Virgo')
        document.querySelector("#horo_here").innerText = `You are a Virgo!`
        document.querySelector("#horo_p").innerText=`You may hit a roadblock today and become stressed. Don't worry, though, as the stress will melt away as you spend time with your loved ones.`
   
    } else if (horoDate > libStart && horoDate < libEnd){
        console.log('Libra')
        document.querySelector("#horo_here").innerText = `You are a Libra!`
        document.querySelector("#horo_p").innerText=`The day may start off on a tense note but by evening, things will be peaceful and calm.`
    
    } else if (horoDate > scoStart && horoDate < scoEnd){
        console.log('Scorpio')
        document.querySelector("#horo_here").innerText = `You are a Scorpio!`
        document.querySelector("#horo_p").innerText=`Your plans for today will see major changes due to an unexpected occurance, but you make progress in everything you had set out to do.`
    
    } else if (horoDate > sagStart && horoDate < sagEnd){
        console.log('Sagittarius')
        document.querySelector("#horo_here").innerText = `You are a Sagittarius!`
        document.querySelector("#horo_p").innerText=`You will look past the criticism coming your way and make progress on your goals and dreams for the future.`
   
    } else if ( (horoDate > capStart.setFullYear(capStart.getFullYear() - 1) && horoDate < capEnd) || (horoDate > capStart && horoDate < capEnd.setFullYear(capEnd.getFullYear() - 1)) ) {
        document.querySelector("#horo_here").innerText = `You are a Capricorn!`
        document.querySelector("#horo_p").innerText=`You will understand the importance of constructive criticism and learn to use it to better yourself.`

     
   
    } else {
        alert('Please enter a date.')
    }
    
}
