class AlarmClock {
    constructor(){
    this.alarmCollection = [];
    this.intervalId = null;
    }

    addClock(time,callback){
    this.time = time;
    this.callback = callback;
    if (!this.time || !this.callback) {//(this.time || this.toAddCLock ===undefinde )- Можно ли так установить проверку ?
     throw new Error ('Отсутствуют обязательные аргументы');
      }
    const existedIndex = this.alarmCollection.findIndex(alarm => alarm.time === time); //как мы здесь понимаем какой контекст будет у свойства time ?
    if(existedIndex !== -1){
        console.warn('Уже присутствует звонок на это же время');
        this.alarmCollection.push({callback,time,canCall:true});
    }
    }
    removeClock(time){
   this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time != time);
    }
    getCurrentFormattedTime(){
     let now = new Date();
     let hours = now.getHours();
     let minutes = now.getMinutes();
     return hours + ":" + minutes;
    }
    start(){
     if (this.intervalId !== null){
    this.intervalId = setInterval(()=>{
      this.alarmCollection.forEach((alarm)=>{
        if(alarm.time === this.getCurrentFormattedTime && canCall === true){
         alarm.canCall = false;  
         alarm.callback(); 
        }
      })  
    })
     } 
     return null;
    }
}