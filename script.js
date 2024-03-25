// Task_1
// --> anonymous function & IIFE
// <-------------------------------------------------------------------------------------------------------------------------->
// 1(a)--> Anonymous

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Odd = function(arr) {
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] % 2 !== 0)
        {
            console.log(arr[i]);
        }
    }
};

Odd(a);

//  1(b)--> IIFE
const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

(function(arr){
    for (let i= 0; i< arr.length; i++)
    {
       if(arr[i]%2!==0)
       {
        console.log(arr[i]);
       }
    }
}
(b));
// <-------------------------------------------------------------------------------------------------------------------------->

// 2(a)--> Anonymous
const d = ["this","is","an","example", "of","code"];

const upper = d.map(function(str) {

  const letters = str.split(" ");
  for (let i = 0; i < letters.length; i++) {
    letters[i] = letters[i][0].toUpperCase() + letters[i].substring(1);
  }
  return letters.join(" ");
});

console.log(upper);

// 2(b)---> IIFE Function
(function(){
const e = ["this","is","an","example", "of","code"];

const upper_1 = e.map(function(str) {

  const letters = str.split(" ");
  for (let i = 0; i < letters.length; i++) {
    letters[i] = letters[i][0].toUpperCase() + letters[i].substring(1);
  }
  return letters.join(" ");
});

console.log(upper_1);
})();
// <-------------------------------------------------------------------------------------------------------------------------->

// 3(a) --> Anonymous
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = function(arr) {
  let total = 0;
  for (let num of arr) {
    total =total + num;
  }
  return total;
};

const result = sum(num);
console.log(result);

//  3(b) -- > IIFE
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
(function(arr) 
{
    let total = 0;
    for (let num of arr) 
    {
      total += num;
    }
    console.log(total);
  })
  (numbers);
// <-------------------------------------------------------------------------------------------------------------------------->

// 4(a) --> Anonymous
const numbers_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const Prime = function(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }

  return true;
};

const primes = [];

for (let i = 0; i < numbers_1.length; i++) {
  if (Prime(numbers_1[i])) {
    primes.push(numbers_1[i]);
  }
}

console.log(primes);

//  4(b) --> IIFE function
(function() {
    const numbers_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  
    const Prime_1 = function(num) {
      if (num <= 1) return false;
      if (num <= 3) return true;
  
      if (num % 2 === 0 || num % 3 === 0) return false;
  
      let i = 5;
      while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
      }
  
      return true;
    };
  
    const primes_1 = [];
  
    for (let i = 0; i < numbers_2.length; i++) {
      if (Prime_1(numbers_2[i])) {
        primes_1.push(numbers_2[i]);
      }
    }
  
    console.log(primes_1);
  })();

 // <-------------------------------------------------------------------------------------------------------------------------->

//  5(a) --> Anonymous
const words = ["mom", "madam", "hello", "tom", "noon", "wow"];

const isPalindrome = function(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }

  return true;
};

const p = [];
for (let word of words) {
  if (isPalindrome(word)) {
    p.push(word);
  }
}

console.log(p);

//  5(b) --> IIFE
(function() {
const words_1 = ["mom", "madam", "hello", "tom", "noon", "wow"];

const isPalindrome_1 = function(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }

  return true;
};

const p_1 = [];
for (let word of words_1) {
  if (isPalindrome_1(word)) {
    p_1.push(word);
  }
}
console.log(p);
})();

// <-------------------------------------------------------------------------------------------------------------------------->

// 6(a)--> Anonymous
const arr1 = [1, 3, 5, 7, 9];
const arr2 = [2, 4, 6, 8, 10];

const getMedian = function(ar1, ar2, n) {
  let i = 0;
  let j = 0;
  let m1 = -1, m2 = -1;

  for (let count = 0; count <= n; count++) {
    if (i === n) {
      m1 = m2;
      m2 = ar2[0];
      break;
    } else if (j === n) {
      m1 = m2;
      m2 = ar1[0];
      break;
    }

    if (ar1[i] <= ar2[j]) {
      m1 = m2;
      m2 = ar1[i];
      i++;
    } else {
      m1 = m2;
      m2 = ar2[j];
      j++;
    }
  }

  return (m1 + m2) / 2;
};

const n = arr1.length;
const median = getMedian(arr1, arr2, n);
console.log(median); 

// 6(b) --> IIFE
(function() {
const arr_1 = [1, 3, 5, 7, 9];
const arr_2 = [2, 4, 6, 8, 10];

const get_Median = function(ar1, ar2, n) {
  let i = 0;
  let j = 0;
  let m1 = -1, m2 = -1;

  for (let count = 0; count <= n; count++) {
    if (i === n) {
      m1 = m2;
      m2 = ar2[0];
      break;
    } else if (j === n) {
      m1 = m2;
      m2 = ar1[0];
      break;
    }

    if (ar1[i] <= ar2[j]) {
      m1 = m2;
      m2 = ar1[i];
      i++;
    } else {
      m1 = m2;
      m2 = ar2[j];
      j++;
    }
  }

  return (m1 + m2) / 2;
};

const n_1 = arr1.length;
const median_1 = get_Median(arr_1, arr_2, n_1);
console.log(median_1); 

})();
// <-------------------------------------------------------------------------------------------------------------------------->

// 7(a)--> Anonymous

const arr = [1, 2, 2, 3, 4, 4, 4, 5, 5, 6, 6, 6, 6];

function removeDuplicates(arr) {
  const unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);        
    }
  }

  return unique;
}

const uniqueArray = removeDuplicates(arr);
console.log( uniqueArray);


// 7(b)--> IIFE
(function() {
const arr_3 = [1, 2, 2, 3, 4, 4, 4, 5, 5, 6, 6, 6, 6];

function removeDuplicates(arr) {
  const unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);        
    }
  }

  return unique;
}

const uniqueArray_1 = removeDuplicates(arr_3);
console.log(uniqueArray_1);
}
)();
// <-------------------------------------------------------------------------------------------------------------------------->

// 8(a) ---> Anonymous
const array_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const k = 9;

const ra = function(arr, r) {
    const n = arr.length;
    r = r % n;

    const reverse = function(start, end) {
        while (start < end) {
            const temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    };

    reverse(0, n - 1);
    reverse(0, r - 1);
    reverse(r, n - 1);

    return arr;
}(array_1.slice(), k);

console.log(ra); 

// 8(b) --> IIFE
(function() {
const array_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const k_1 = 11;

const ra_1 = function(arr, r) {
    const n = arr.length;
    r = r % n;

    const reverse = function(start, end) {
        while (start < end) {
            const temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    };

    reverse(0, n - 1);
    reverse(0, r - 1);
    reverse(r, n - 1);

    return arr;
}
(array_2.slice(), k_1);
console.log(ra_1); 
})();
// <-------------------------------------------------------------------------------------------------------------------------->

//  Task_2
// 1 -->  Arrow Functions

const c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const demo = function(arr){
    for (let i= 0; i< arr.length; i++)
    {
       if(arr[i]%2!==0)
       {
        console.log(arr[i]);
       }
    }
}
demo(c);

// <-------------------------------------------------------------------------------------------------------------------------->

// 2--> Arrow Function
const f = ["this","is","an","example", "of","code"];
const upper_2 = f.map(str => {
    const letters = str.split(" ");
    for (let i = 0; i < letters.length; i++) {
      letters[i] = letters[i][0].toUpperCase() + letters[i].substring(1);
    }
    return letters.join(" ");
});
console.log(upper_2);

// <-------------------------------------------------------------------------------------------------------------------------->

//  3--> Arrow functions
const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum_1 = (arr) => {
    let total = 0;
    for (let num of arr) {
      total += num;
    }
    return total;
  };
  const result_1 = sum_1(numb);
  console.log(result_1);

  // <-------------------------------------------------------------------------------------------------------------------------->

// 4--> Arrow functions
const numbers_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const isPrime_2 = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
};
const primes_2 = [];
for (let i = 0; i < numbers_1.length; i++) {
  if (isPrime_2(numbers_2[i])) {
    primes_2.push(numbers_2[i]);
  }
}
console.log(primes_2);
  
// <-------------------------------------------------------------------------------------------------------------------------->

// 5 --> Arrow Function

const words_2 = ["mom", "madam", "hello", "tom", "noon", "wow"];
const isPalindrome_2 = (str)=> {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}
const p_2 = [];
for (let word of words_2) {
  if (isPalindrome_2(word)) {
    p_2.push(word);
  }
}
console.log(p_2);
