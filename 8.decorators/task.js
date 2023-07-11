function cachingDecoratorNew(func) {
    let cache = [];
    function wrapper(...args) {
        const hash = md5(args); // получаем правильный хеш c помощью функции md5
        let objectInCache = cache.find((item) => item.hash === hash); // ищем элемент, хеш которого равен нашему хешу
        if (objectInCache) { // если элемент найден
            console.log("Из кэша: " + objectInCache.value); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
            return "Из кэша: " + objectInCache.value;
        }
    
        let result = func(...args); // в кеше результата нет — придётся считать
        cache.push({hash, value: result}) ; // добавляем элемент с правильной структурой
        if (cache.length > 5) { 
        cache.shift(); // если слишком много элементов в кеше, надо удалить самый старый (первый) 
        }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;  
    }
    return wrapper;
    }

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId = null; //null = false
  function wrapper (_count, ...args){
    wrapper.count = wrapper.count || 0;
    if(!timeoutId){
        console.log(func(...args)); 
        wrapper.count++;
    } else {
      clearInterval(timeoutId);
    }
    timeoutId = setTimeout(()=> {
        timeoutId = null;
        console.log(func(...args));
    }, delay)
  };
  wrapper.count = 0;
  return wrapper;
}
