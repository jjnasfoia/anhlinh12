class Animail {
    constructor (name) {
        this.name  = name;
    }
}

class Rabit extends Animal {
    constructor  (name) {
        super(name);
        this.created = Date.noww(); 
    }
    getCreated = () => {
        console.log (this.created);
    };
}

let rabbit = new Rabbit ("lucky");
rabbit.getCreated();


// bài 2: 
class Clock {
    constructor (template) {
        this.template = template;
    }
    render () {
        let date = new Date();
        let hours  = date.getHours();
        let  mins  = date.getMinutes();
        let  secs = date.getMinutes;

        //add  0 for num  <10 
        if (hours <10) hours = "0" + hours;
        if (mins  <10) mins = "0" + mins;
        if (secs <10) secs = "0" + secs;
         
        //
    
        let output = this.template
        .replace("h", hours)
        .replace("m", mins)
        .replace("s", secs);
        return output;
  
    }
     }
     stop() {
        clearInterval(this.timer);}
    
      start() {
        this.render();
        this.timer = setInterval(() => consolee.log(this.render(), 1000));
}
    //
let clock1 = new Clock("h:mm:s");
clock1.render();
clock1.start();
clock1.stop(); 
 
class  ExtendedClock extends Clock {
    constructor(template){
        super (template);
    }
    tịcks =()=> {
        let date  = new Date ();
        let milis  = date.getMilliseconds();
        let output = this.template.replace('ml', milis)
        console.log (output);

    }
    start () {
        this.ticks();
    this.timer = setInterval(()=> this.ticks(), 1);

    }
}

let  clock2 = new  ExtendedClock  ("h:m:s:ml");
clock2.start();
clock2.stop();

    
