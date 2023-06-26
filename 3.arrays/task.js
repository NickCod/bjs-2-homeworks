function compareArrays(arr1, arr2) {
 if (arr1.length !== arr2.length) {
  return false;
 }
 for(let element of arr1)
  if (arr1[element] !== arr2[element]) {
    return false;
  }
 
     return arr1.every((element, index) => element === arr2[index]);
}
   
    let result = compareArrays([1,2,3,4,5,6], [1,2,3,4,5,6]);
   
   console.log(result) 


   const people = [
    {firstName: "Александр", secondName: "Карпов", age: 17, gender: "мужской"},
    {firstName: "Егор", secondName: "Морозов", age: 21, gender: "мужской"},
    {firstName: "Мелисса", secondName: "Леонова", age: 40, gender: "женский"},
    {firstName: "Мелания", secondName: "Савельева", age: 37, gender: "женский"},
    {firstName: "Мария", secondName: "Овчинникова", age: 18, gender: "женский"},
    {firstName: "Марьяна", secondName: "Котова", age: 17, gender: "женский"},
    {firstName: "Фёдор", secondName: "Селезнев", age: 50, gender: "мужской"},
    {firstName: "Георгий", secondName: "Петров", age: 35, gender: "мужской"},
    {firstName: "Даниил", secondName: "Андреев", age: 49, gender: "мужской"},
    {firstName: "Дарья", secondName: "Савельева", age: 25, gender: "женский"},
    {firstName: "Михаил", secondName: "Шаров", age: 22, gender: "мужской"},
    {firstName: "Владислав", secondName: "Давыдов", age: 40, gender: "мужской"},
    {firstName: "Илья", secondName: "Казаков", age: 35, gender: "мужской"},
    {firstName: "Евгений", secondName: "Кузьмин", age: 19, gender: "мужской"},
  ];

  function getUsersNamesInAgeRange(users, gender) {
    const averageAge = users
      .filter(user => user.gender === gender)
      .map(user => user.age)
      .reduce((acc, age, index, arr) => acc + age / arr.length, 0);
    
    return averageAge;
  }
  
  const averageAge = getUsersNamesInAgeRange(people, "мужской");
  console.log(averageAge);