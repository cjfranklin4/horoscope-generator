

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
        document.querySelector("#horo_here").innerText = `I am an Aqua!`
        Though love may portray a rosy picture for you, today you end up having a tough time managing relationship. Be patient, advises Ganesha.
        
    } else if (horoDate > piStart && horoDate < piEnd) {
        console.log('Pi')
        Small things will give you happiness today. In short, your day after noon time will be easy going and lucky.

    } else if (horoDate > arStart && horoDate < arEnd) {
        console.log('Aries')
        You need to keep yourself filled with hope and optimism. This will help to handle the worries in your mind and bring about better outcomes.


    } else if (horoDate > taStart && horoDate < taEnd){
        console.log('Taurus')
        There is an unexpected occurrence waiting at every bend and turn in your path today. With maturity for sword and mellowness as shield, you will sift through everything that life throws at you.

    } else if (horoDate > gemStart && horoDate < gemEnd){
        console.log('Gemini')
        A feeling of insecurity may upset you, making you restless. Try to divert your mind by reading a self-help book

    } else if (horoDate > canStart && horoDate < canEnd){
        console.log('Cancer')
        Ganesha says higher officials at work will shower you with appreciation and praise for your efforts. You may even be able to get a promotion or a pay rise today.

    } else if (horoDate > leoStart && horoDate < leoEnd){
        console.log('Leo')
        New relationships will get a chance to blossom today.
    } else if (horoDate > virStart && horoDate < virEnd){
        console.log('Virgo')
        In the afternoon, though, you may hit a roadblock, and you will feel stressed out. However, all that stress will melt away in the evening in the company of your near and dear ones.

    } else if (horoDate > libStart && horoDate < libEnd){
        console.log('Libra')
        The day may start off on a tense note but by evening, things will be peaceful and calm

    } else if (horoDate > scoStart && horoDate < scoEnd){
        console.log('Scorpio')
        While the schedule you have planned for today will see some major changes, you will still stick by your decisions resolutely.

    } else if (horoDate > sagStart && horoDate < sagEnd){
        console.log('Sagittarius')
        You will look beyond the criticism coming your way and develop an understanding to aim for a better future.

    } else if (horoDate > capStart && horoDate < capEnd) {
        You will understand the importance of constructive criticism and learn to improve upon your behaviour

    } else {
        alert('Please enter a date.')
    }
    
}
