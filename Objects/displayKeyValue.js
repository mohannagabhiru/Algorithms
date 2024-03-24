let data = {
    name: {
        name: {
            test: {
                name: "abc",
                age: 23
            }
        }
    },
    age: {
        name: {
            test: {
                name: "xyz",
                age: 52
            }
        }
    }
}

const getKeyValue = (obj) => {
    for (let item in obj) {
        if (typeof obj[item] != "object") {
            console.log('[' + item + ':' + obj[item] + ']')
        } else {
            getKeyValue(obj[item])
        }
    }
}
getKeyValue(data)