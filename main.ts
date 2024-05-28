// Question#1 
 
 interface people {
    firstName: string;
    lastName:string;
    id: number;
}

const friends: people[] = [];

let friend1={
    firstName:"Sidra",
    lastName:"Raza",
    id:1
};
let friend2={
    firstName:"Iqra",
    lastName:"Raza",
    id:2
};
let friend3={
    firstName:"Ahmed",
    lastName:"Raza",
    id:3
}
friends.push(friend1,friend2,friend3)
console.log(friends);

// question#2

const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];

const charArray = scrambledArray.map(element => {
    if (typeof element === "string") {
        return element.split("");
    } else {
        return [element.toString()];
    }
});

const desiredOrder = ["I", "am", "a", "student", "of", "GIAIC"];

const rearrangedArray = desiredOrder.map(word => {
    const index = scrambledArray.indexOf(word);
    return charArray[index];
});

const result = rearrangedArray.map(charArray => charArray.join(" "));
console.log(result);
 
// question#3

let invontory=[]
let product1={
    name:"Honda",
    model:2023,
    cost:150000,
    quantity:30
}
let product2={
    name:"corolla",
    model:2023,
    cost:250000,
    quantity:40
}
let product3={
    name:"Sazuki",
    model:2023,
    cost:450000,
    quantity:20
}
invontory.push(product3.quantity)
invontory.push(product1,product2,product3)
console.log(invontory);

// question#4
interface Students{
    name:string;
    senior:boolean;
    assignmentCompleted:boolean;
}

const students:Students[]=[
    {
        name:"Sidra",
        senior:true,
        assignmentCompleted:true
    },
    {
        name:"Iqra",
        senior:false,
        assignmentCompleted:true
    },
    {
        name:"Ahmed",
        senior:true,
        assignmentCompleted:true
    },
    {
        name:"Danish",
        senior:false,
        assignmentCompleted:false
    },

]

function seniorStudentsWithAssignments():Students[]{
   return students.filter((student)=>student.senior&& student.assignmentCompleted)
}

function updateYourClassList():void{
    students.splice(0,students.length,...students.filter((student)=>student.senior||student.assignmentCompleted))

}

console.log(seniorStudentsWithAssignments());
console.log(students);
