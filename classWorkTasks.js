// *****Please try to guess, test, and then understand following examples:
// // primitives
// . Number('0x77') === 0x77 // true
// . Number('077') === 077 // false
// . Number(' 12')  //  NaN -> 12
// . isNaN(' ')  // false
// . 0 === +0  //  false -> true
// . +0 === -0  // true
// . 1 / '2'  // 0.5 
// . 1 / 0 // Infinity
// . 0 / 0 // NaN
// . +true  //  1
// . +false // 0
// . +null  // 0
// . +undefined  // NaN 
    let a = {
    valueOf() {
    return 224;
    },
   };
   let b = {
    valueOf() {
    return "hey";
    },
   };
   let c = {
    valueOf() {
    return String("some");
    },
   };
   let d = {
    toString() {
    return 22;
    },
   };
    let e = {}
   let f = {
    toString() {
    return Number(5);
    },
   };
   

// *****binary + operator
// . null + undefined // NaN, - NaN, *NaN, /NaN, %NaN, ==true, ===false, <false, >false, <=false, >=false
// . null + true // 1, - -1, *0, /0, % (1 -> 0), ==false, ===false, <true, >false, >=false, <=true
// . null + false // 0, -0, *0, / NaN, %NaN, ==false, ===false, <false, >false, <= false ->true(լավն էր), >=true
// . undefined + true // NaN, -NaN, *NaN, /NaN, %NaN, ==false, ===false, > false, < false, >false, >=false, <=false
// . undefined + false // NaN, -NaN, *NaN, /NaN, %NaN, ==false, ===false, ><<=>= all false
// . undefined + 5  // NaN, -NaN, *NaN, /NaN, %NaN, =====><<=>= all fasle(because we dont know the VALUE for compaire)
// . true + false // 1, -1, *0, /Infinity, %NaN, ==false, ===false, <false, > true, <=false, >=true
// . true + 2 // 3, --1, *2, /0, %1, ==false, ===false, <true, >false, <=true, >=false
// . false + 4 // 4, --4, *0, /0, %0, ==false, ===false, <true, > false. <=-true, >=false
// . false + NaN // NaN, -NaN, *NaN, /NaN, %NaN, =====<><=>= all false
// . 5 + 3  // 8, -2, *15, / 1.6666666666667, %2 , ==fasle, ===false, <false, >true, ,=false, >=true
// . 5 + NaN // NaN, -NaN, *NaN, /NaN, %NaN, =====<><=>= all false
// . 'hello' + NaN //NaN, -NaN, *NaN, /NaN, %Nan, =====<><=>= all false 
// . 'hello' + a + b + c + d + e + f //
//    +) "hello224heysome22[object Object]5" (-,*,/,% is NaN)
// *****try the same also for binary -, *, /, %, ==, ===, <, >, >=, <= 
//operators as you did for binary + operator

// *****unary - operator
// . -([]) -0
// . -([2]), -2
// . -([2, 3]) NaN
// . -(function() { }) NaN
// . -(a)=-224 // -(b)=NaN // -(c) NaN // -(d)=-22 // -(e)=NaN // -(f)=-5
// test the same also for b, c, d, e and f

//***** try the same also for both postfix and prefix ++ and -- 
//operators as you did for unary - operator
// . --([])  // ReferenceError: Invalid left-hand side expression in prefix operation
// . -([2]), -2 // ReferenceError:
// . -([2, 3]) NaN // ReferenceError:
// . -(function() { }) NaN // ReferenceError:
// . -(a)

// postfix and prefix ++ & -- operators
// . for each one of a, b, c, d, e, f try the following console.log(a, a++, a); &
// console.log(a, ++a, a);
// . do the same also for -- operator
// . TypeError: Assignment to constant variable(I changed 'const' to 'let')
// . ++(a)=225 // ++(b)="hey1" -> NaN // ++(c)=NaN // ++(d)=23, 
// . ++(e)=NaN // ++(f)=6
// . (a)++ = 224 // (b)++ = NaN // (c)++ = NaN // (d)++ = 22 //
// . (e)++ = NaN // (f)++ = 5
// . --(a)=223 // --(b)=NaN //--(c)=NaN // --(d)=21 // --(e)=NaN //--(f)=4
// . (a)-- = 224 // (b)-- = NaN // (c)-- NaN // (d)-- = 22 //
// - (e)-- NaN // (f)-- = 5

// ***** ? operator
// . 1 ? 234 : 32
// . for each one of a, b, c, d, e, f try the following a[a.hasOwnProperty('valueOf') ?
// 'valueOf' : 'toString']()
// a[a.hasOwnProperty('valueOf') ? 'valueOf' : 'toString']() = 224
// b[b.hasOwnProperty('valueOf') ? 'valueOf' : 'toString']() = "hey"
// c[c.hasOwnProperty('valueOf') ? 'valueOf' : 'toString']() = "some"
// d[d.hasOwnProperty('valueOf') ? 'valueOf' : 'toString']() = 22
// e[e.hasOwnProperty('valueOf') ? 'valueOf' : 'toString']() = [object Object]
// f[f.hasOwnProperty('valueOf') ? 'valueOf' : 'toString']() = 5

// *****instanceof operator
// . null instanceof Object)  // false*
// . true instanceof Boolean)  // false*
// . 1 instanceof Number // false*
// . NaN instanceof Number // false*
// . 'hello' instanceof String // false*
// . (function () { }) instanceof Function // true*

// *****in operator
// . 'valueOf' in null  // TypeError: Cannot use 'in' operator to search for 'valueOf' in undefined
// . 'valueOf' in undefined
// . 'valueOf' in true
// . 'valueOf' in 1
// . 'valueOf' in 'toString'

// *****delete operator
// . delete ({}).valueOf  // true*
// . delete 1  // true*
// . delete a.x  // true*
// . a.y = 3; console.log(delete a.y); // true*
// . delete f  // false*
// . delete z // true

console.log(delete z)