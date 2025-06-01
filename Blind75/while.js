var isPalindrome = function(s) {
    let length = s.length;
    let i = 0;
    let j = s.length - 1;
    while( i < j){
    	if(s[i] != s[j]){
      		return false
      }
      i++;
      j--;
    }
    return true
};

console.log(isPalindrome("deifafied"))