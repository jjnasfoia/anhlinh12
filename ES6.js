//function//
function sum1(a, b, c) {
    return a + b + c;
}



const numbers = [1, 2, 3];
console.log(sum.apply(null, numbers));
console.log(sum(...numbers));




// -----------objects---------//
// //const person = {
//     name: 'diep',
//     age: '24',
//     walk: function () { },
//     talk() { consolee.log('talk') }
// };
// person.talk();
// person['name'] = 'ngann';
// const target = 'age';
// person[target] = 14;
// console.log(person.name);
// console.log(person.age);//


// ---------------- this keyword  -----------//




//--------- arrow functions & this -----------//
const  obj={
    name:'diep',
    talk() {
        setTimeout(function(){
        console.log('this',this);
        },10000);
    }
}


// personalbar.talk () // -> because  outside  object  (pass 2 funcs)


const  obj_solves={
    name:'diep',
    talk() {
        var self  = this; //declare a  new  var to save  the  value  of  thiss
        setTimeout(() => console.log("this",self),1000);
    },
};
console.log(obj_solves.talk());


//------------- classes ----------//
class Person { 
   constructor(name) {
    this.name = name;
    }
    walk  () {
        console.log('walk');
        }
} 

const p1 = new Person("diep");
p1.walk();
console.log(p.name);

//------------inheritance-----------//
class  Teacher  extends  Person {
    constructor (name, degree) {
        super(name);
        this.degree  = degreee;

    }
    
    teach(){
        console.log('teach');
    }
}

const  teacher1 = new Teacher ('diep', 'MSc');
console.log(teacher1.walk())