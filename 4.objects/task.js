const student1 = new Student('Юлия', 'женский', 20);
const student2 = new Student('Никита', 'мужской', 21);

function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.hasOwnProperty('marks') === true)  {
    this.marks.push(...marks);
  } else {
    this.marks = [...marks];
  }
}

Student.prototype.getAverage = function () {
 if (this.marks.filter(mark => mark !== undefined).length > 0 ){
    const result = this.marks.reduce((acc,item) => acc + item, 0 );
    const average = result/ this.marks.length;
    return average;
 } else {
    return 0;
 }
}

Student.prototype.exclude = function(reason) {
  if (!this.marks || Object.keys(this.marks).length === 0) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  }
};
  
