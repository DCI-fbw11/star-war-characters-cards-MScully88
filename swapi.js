
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let dataRequest;
let returnedData;


// Button 1 (Jedi)

btn1.onclick = function () {
   
   // URL function
    dataRequest = new XMLHttpRequest();

    function rnd() {
        let number = Math.floor(Math.random() * 88 + 1);
        return (number);
    };
    dataRequest.open('Get', 'https://swapi.co/api/people/' + rnd() + '/.json');

   // Data return/display
    dataRequest.onload = function () {
        if (dataRequest.status === 200) {
            returnedData = JSON.parse(dataRequest.responseText);
            document.getElementById('li1').innerHTML = `Name : ${returnedData.name}`.replace(/\b\w/g, l => l.toUpperCase());
            document.getElementById('li2').innerHTML = `Gender : ${returnedData.gender}`.replace(/\b\w/g, l => l.toUpperCase());
            document.getElementById('li3').innerHTML = `Height : ${returnedData.height}`.replace(/\b\w/g, l => l.toUpperCase());
            document.getElementById('li4').innerHTML = `Mass : ${returnedData.mass}`.replace(/\b\w/g, l => l.toUpperCase());
            document.getElementById('li5').innerHTML = `Birth Year : ${returnedData.birth_year}`.replace(/\b\w/g, l => l.toUpperCase());
        } else
            alert('Failed to get data.')
    };
    dataRequest.send();       
};


// Button 2 (Sith)

btn2.onclick = function () {
    // URL function
    dataRequest = new XMLHttpRequest();

    function rnd() {
        let number = Math.floor(Math.random() * 88 + 1);
        return (number);
    };
    dataRequest.open('Get', 'https://swapi.co/api/people/' + rnd() + '/.json');

   // Data return/display
    dataRequest.onload = function () {
        if (dataRequest.status === 200) {
            returnedData = JSON.parse(dataRequest.responseText);
            document.getElementById('li6').innerHTML = `Name : ${returnedData.name}`.replace(/\b\w/g, l => l.toUpperCase());
            document.getElementById('li7').innerHTML = `Gender : ${returnedData.gender}`.replace(/\b\w/g, l => l.toUpperCase());
            document.getElementById('li8').innerHTML = `Height : ${returnedData.height}`.replace(/\b\w/g, l => l.toUpperCase());
            document.getElementById('li9').innerHTML = `Mass : ${returnedData.mass}`.replace(/\b\w/g, l => l.toUpperCase());
            document.getElementById('li10').innerHTML = `Birth Year : ${returnedData.birth_year}`.replace(/\b\w/g, l => l.toUpperCase());
        } else
            alert('Failed to get data.')
    }; 
    dataRequest.send();
};


