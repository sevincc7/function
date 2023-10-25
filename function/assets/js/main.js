// let arr = []
// function name (a) {
//     for (let i = 0; i < 100; i++) {
//         if (i % a == 0){

//             arr.push(i)

//         }
//     }
//     console.log(arr);
// }

// students arrayinde yasi 20e beraber olan teklebelerin adini consolda yazin



//   function name(age) {
// for (let i = 0; i < students.length; i++) {
//  if (students[i].age==age) {
// console.log(students[i].name  )   
//  }

// }

// }

// name(20)

// function name() {

//     console.log(
//         students.sort((a,b)=>(a.age-b.age))
//     )

// }

students = [
    { name: "Fuad", surname: "Ismayilov", age: 20, group: "SWP102" },
    { name: "Nicat", surname: "Babayev", age: 19, group: "SWP202" },
    { name: "Sevane", surname: "Muradova", age: 18, group: "SWP102" },
    { name: "Leyla", surname: "Kerimova", age: 20, group: "SWP202" },
    { name: "Jale", surname: "Memmedova", age: 20, group: "SWP202" },
];
// students arrayinde yasi 20e beraber ve qrupu SWP202 olanlari SWP202 adli array yaradib ora elave edin
let arr = []


function name() {
    for (let i = 0; i < students.length; i++) {
        if (students[i].age == 20 && students[i].group == 'SWP202') {
            arr.push(students[i])
            console.log(arr);
        }
    }
}
