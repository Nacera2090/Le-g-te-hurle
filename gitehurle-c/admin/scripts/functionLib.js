//---------- Variable ----------//


//---------- Function ----------//

function goTo(dest){
    window.location.href = dest;
}

function getData(dataKey) {
    const storedData = localStorage.getItem(dataKey);
    const parsedData = JSON.parse(storedData);
    // console.log('Data loaded :', parsedData);
    return parsedData;
};

function saveData(dataKey,data) {
    const key = dataKey;
    localStorage.setItem(key, JSON.stringify(data));
    // console.log('Data saved : ',data );
};


//---------- Call ----------//