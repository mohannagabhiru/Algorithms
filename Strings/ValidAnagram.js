let word = "anagram"
let rearranged = "anagramh"

function checkAnagram(original, rearranged){
   for (let i =0; i < rearranged.length; i++){
    console.log(original.includes(rearranged[i]));
        if(original.indexOf(rearranged[i]) == -1){
            return "Not an anagram"
        }
   } 
   return "An anagram"
}

console.log(checkAnagram(word, rearranged))