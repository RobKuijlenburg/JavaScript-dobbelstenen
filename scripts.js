function gooi() {
    const dobbelArray = [];
    for (i = 0; i <= 7; i++) {
        let randomNum = (Math.floor(Math.random() * 6)) + 1;
        dobbelArray.push(randomNum);
    }
    console.log(dobbelArray);
    dobbelArray.sort();
    const worp = [];

    // TODO :: deze foreach is overbodig, je kan wat er in gebeurt ook meteen toepassen in de loop hierboven
    // En dat maakt dobbelArray dan ook meteen weer overbodig
    
    // (worp[x] || 0]) keert de waarde van worp[x] terug anders 0
    dobbelArray.forEach(function (x) {
        worp[x] = (worp[x] || 0) + 1;
    });
    console.log(worp);


    // zoekt voor 6 cijfers de geworpen hoeveelheden en keert 0 terug wanneer niet gedefinieerd
    for (y = 1; y <= 6; y++) {
        const tdSelect = 'td' + y;
        // TODO :: gebruik hier dezelfde tactiek als je hierboven bij de forEach doet.
        if (worp[y] === undefined) {
            document.getElementById(tdSelect).innerHTML = '0';
    
        } else {
            document.getElementById(tdSelect).innerHTML = worp[y];
        }
    }
}