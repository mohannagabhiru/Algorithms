  const obj = {
    A: "12",
    B: 23,
    D: [1, 3],
    C: {
      P: 23,
      O: {
        L: 56,
      },
      Q: [1, 2],
    },
  };
  
  const flatObject = (obj, prefix) => {
    let result = {};
  
    for (let x in obj) {
      let currentValue = obj[x];
  
      let newKey;
      if (prefix) {
        newKey = prefix + "." + x;
      } else newKey = x;
  
      if (typeof currentValue === "object") {
        if (Array.isArray(currentValue)) {
          const { ...newValues } = currentValue;
          const newObj = flatObject(newValues, newKey);
          result = { ...result, ...newObj };
        } else {
          const newObj = flatObject(currentValue, newKey);
          result = { ...result, ...newObj };
        }
      } else {
        result = { ...result, [newKey]: currentValue };
      }
    }
  
    return result;
  };
  
  console.log(flatObject(obj));