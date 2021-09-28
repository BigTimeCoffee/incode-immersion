const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function printVowels(string) {
  for(let i = 0; i < vowels.length; i++) {
    if(vowels.includes(string[i])) {
      console.log(string[i]);
    }
  }

}

printVowels('Hello World');
printVowels("kangaroo");
