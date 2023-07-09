class AlarmClock {
    constructor(){
    this.alarmCollection = [];
    this.intervalId = null;
    }

    addClock(time, callback){
    if (!time || !callback) {
     throw new Error ('Отсутствуют обязательные аргументы');
      }
    const existedIndex = this.alarmCollection.findIndex(alarm => alarm.time === time); //как мы здесь понимаем какой контекст будет у свойства time ?
    if(existedIndex !== -1){
        console.warn('Уже присутствует звонок на это же время');
    }
    this.alarmCollection.push({callback,time,canCall:true});
    }
    removeClock(time){
   this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time != time);
    }
    getCurrentFormattedTime(){
      new Date().toLocaleTimeString("ru-Ru", {
        hour: "2-digit",
        minute: "2-digit",
      });
     let now = new Date();
     let hours = now.getHours();
     let minutes = now.getMinutes();
     return hours + ":" + minutes;
    }
    start(){
     if (this.intervalId === null){
    this.intervalId = setInterval(()=>{
      this.alarmCollection.forEach((alarm)=>{
        if(alarm.time === this.getCurrentFormattedTime() && alarm.canCall === true){
         alarm.canCall = false;  
         alarm.callback(); 
        }
      })  
    }, 1000)
     } 
     return null;
    }
    stop(){
       clearInterval(this.intervalId); // ID имеет значение либо true либо false, как происходит взаимодействие ведь очистка интервала должно принимать значение самого интервала ?
       this.intervalId = null;
    }
    resetAllCalls() {
      this.alarmCollection.forEach(alarm => alarm.canCall = true);
    }
    clearAlarms(){
      this.alarmCollection = [];
    }
}