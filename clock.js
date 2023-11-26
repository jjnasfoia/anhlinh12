class Clock {
    constructor(min, sec) {
        this.min = min;
        this.sec= sec;

        document.querySelector("body").innerHTML = this.codeHTML();    }
    render () {
        // +1s
        let  mins = parseInt(this.min);
        let secs  = parseInt(this.secs);
        //
        if (secs  < 59) {
            secs++; 
        } else {
            mins++;
            secs = 0; 
        }

        //add 0 -> num < 10
        if (secs < 10 ) secs  = '0' +secs;
        if (mins < 10 ) secs  = '0' +mins;
        //return 
        this.min  = mins;
        this.sec  = secs;    
    }
    codeHTML  = () => {
        let code  =``;
        code = `<ol>
                 <li  id  = "clock1"></li>
                 <li  id  = "clock2"></li>
                 <li  id  = "clock3"></li>
                 <li  id  = "clock4"></li>
                 <li  id  = "clock5"></li>
                 </ol>`
        return  code;         
    };
    start () { 
        this.render();
        console.log(this.min + ":" + this.sec);

        this.timer = setInterval (()=> {
            this.render ();
            console.log (this.min + ":" + this.sec); 
        }, 1000);
    }
    stop() {
      clearInterval(this.timer)
  }
}

let clock1 = new Clock ("00","00");
document.getElementById("clock1").interHTML = clock1.min+ ":" + clock1.sec;