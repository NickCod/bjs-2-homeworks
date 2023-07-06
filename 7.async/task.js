class AlarmCLock {
    constructor(){
    this.alarmcollection = [];
    this.intervalid;
    }

    addClock(time,toAddCLock){
    this.time = time;
    this.toAddClock = toAddCLock;
    if (this.time || this.toAddCLock === undefined) {//(!this.time || !this.toAddCLock )- Можно ли так установить проверку ?
     throw new Error ('Отсутствуют обязательные аргументы');
      }
    const alarm = {// зачем нам вообще нужен этот объект ?
    time: time,
    toAddCLock: toAddCLock
    };
    const existedIndex = this.alarmcollection.findIndex(alarm => alarm.time === time); //как мы здесь понимаем какой контекст будет у свойства time ?
    if(existedIndex){
        console.warn('Уже присутствует звонок на это же время');
    }
    this.alarmcollection.push(new Array(callback,time,cancall = true));
    }
}