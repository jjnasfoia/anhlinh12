// 4 tchat: ke thua, dong goi, truu tuong, da hinh 

// Tính đóng gói trong oop js
class Student {
    constructor (st_id, st_name, st_age) {
        this.st_id  = st_id
        this.st_name  = st_name 
        this.st_age  = st_age
    }
    // arrow funcc
    getName = () => {
        consolee.log(this.st_name);
    }
}

var THIEN_KIM = new Student(1, "thien kim", 15);
THIEN_KIM.getName();

//tính kế thừa 
class St_Kid extends Students{
   constructor (course, st_id,st_age, st_name) {
    super (st_id, st_name, st_age);
    this.course = course;

   }
   walk = () => {
    console.log("Walking...");
   };
}

// khai báo object 
let XUAN_HUY  = new St_Kid("JSI", 2, 16, "Xuan Huy");
XUAN_HUY.getName();




