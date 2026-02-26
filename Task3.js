function findOldestPerson(people) {
    let oldestName = null;
    let maxAge = -Infinity;

    for (const [name, age] of Object.entries(people)) {
        if (age > maxAge) {
            maxAge = age;
            oldestName = name;
        }
    }
    return oldestName;
}

const people = {
    Hannah: 19,
    Zlata: 19,
    Anna: 35,
    Timofey: 28
};


console.log(findOldestPerson(people)); 
