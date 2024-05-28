const friends = [];
let friend1 = {
    firstName: "Sidra",
    lastName: "Raza",
    id: 1
};
let friend2 = {
    firstName: "Iqra",
    lastName: "Raza",
    id: 2
};
let friend3 = {
    firstName: "Ahmed",
    lastName: "Raza",
    id: 3
};
friends.push(friend1, friend2, friend3);
console.log(friends);
let invontory = [];
let product1 = {
    name: "Honda",
    model: 2023,
    cost: 150000,
    quantity: 30
};
let product2 = {
    name: "corolla",
    model: 2023,
    cost: 250000,
    quantity: 40
};
let product3 = {
    name: "Sazuki",
    model: 2023,
    cost: 450000,
    quantity: 20
};
invontory.push(product3.quantity);
invontory.push(product1, product2, product3);
console.log(invontory);
const students = [
    {
        name: "Sidra",
        senior: true,
        assignmentCompleted: true
    },
    {
        name: "Iqra",
        senior: false,
        assignmentCompleted: true
    },
    {
        name: "Ahmed",
        senior: true,
        assignmentCompleted: true
    },
    {
        name: "Danish",
        senior: false,
        assignmentCompleted: false
    },
];
function seniorStudentsWithAssignments() {
    return students.filter((student) => student.senior && student.assignmentCompleted);
}
function updateYourClassList() {
    students.splice(0, students.length, ...students.filter((student) => student.senior || student.assignmentCompleted));
}
console.log(seniorStudentsWithAssignments());
console.log(students);
// const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
// // scrambledArray.forEach((element,index)=>{
// //     if(typeof element !== "string")
//         // scrambledArray[index]=element.toString();
// // })
// let charArray=scrambledArray.map(element=>{
//     if(typeof element ==="string"){
//         return element.split("");
//     }else{
//         return [element.toString()]
//     }
// })
// const desiredOrder=["I","am","a","student","of","GIAIC"];
// const rearrangedAeeay=charArray.filter((charArray,index)=>{
//     return desiredOrder.includes(scrambledArray[index]);
// })
// const result=rearrangedAeeay.map(charArray=>charArray.join(" "))
// console.log(result);
// const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
// const charArray = scrambledArray.map(element => {
//     if (typeof element === "string") {
//         return element.split("");
//     } else {
//         return [element.toString()];
//     }
// });
// const desiredOrder = ["I", "am", "a", "student", "of", "GIAIC"];
// const rearrangedArray = charArray.filter((charArray, index) => {
//     return desiredOrder.includes(scrambledArray[index]);
// });
// const result = rearrangedArray.map(charArray => charArray.join(" "));
// console.log(result);
// const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
// const charArray = scrambledArray.map(element => {
//     if (typeof element === "string") {
//         return element.split("");
//     } else {
//         return [element.toString()];
//     }
// });
// const desiredOrder = ["I", "am", "a", "student", "of", "GIAIC"];
// const rearrangedArray = charArray.filter((chars, index) => {
//     return desiredOrder.includes(scrambledArray[index]);
// });
// const result = rearrangedArray.map(charArray => charArray.join(" "));
// console.log(result);
const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
const charArray = scrambledArray.map(element => {
    if (typeof element === "string") {
        return element.split("");
    }
    else {
        return [element.toString()];
    }
});
const desiredOrder = ["I", "am", "a", "student", "of", "GIAIC"];
const rearrangedArray = desiredOrder.map(word => {
    const index = scrambledArray.indexOf(word);
    return charArray[index];
});
const result = rearrangedArray.map(charArray => charArray.join(""));
console.log(result);
export {};
