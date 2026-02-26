function groupByLength(strings) {
    const result = {};

    for (const str of strings) {
        const length = str.length;
        if (!result[length]) {
            result[length] = [];
        }
        result[length].push(str);
    }

    return result;
}

const words = ["я", "не", "хочу", "писать", "окр", "да"];
console.log(groupByLength(words));