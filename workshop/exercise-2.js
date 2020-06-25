// Exercise 2
// ----------

const lateComers = ['Felicia', 'Charles', 'Terry'];
const earlyBirds = ['Ellen', 'Jerry', 'Jasmine'];
const totallist = earlyBirds.concat(lateComers);

// console.log(totallist);


const printGuestOrder = (earlyBirds, lateComers) => {
    for (let i = 0; i<totallist.length; i++){
        console.log(`${i+1} - ${totallist[i]}`)
    }
}

printGuestOrder(totallist);