class PrintEditionItem {
  constructor(name, releaseDate,pagesCount){
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  fix() {
    this.state =  this._state *1.5;
  }
  set state(stateQuality) {
    if (stateQuality < 0) {
        this._state = 0;
    } else if( stateQuality > 100) {
        this._state = 100;
    } else {
        this._state = stateQuality;
    }
  } 
  get state(){
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
    constructor(type) {
        super(type);
      this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author,name,releaseDate,pagesCount){
    super(name,releaseDate,pagesCount);
      this.author = author;
      this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(type){
        super(type);
        this.type = "novel";
    }
}
class FantasticBook extends Book {
    constructor(type){
        super(type);
        this.type = "fantastic";
    }
}
class DetectiveBook extends Book {
    constructor(type){
        super(type);
        this.type = "detective";
    }
}

class Library {
    constructor(name,books){
        this.name = name;
        this.books = [];
    }
    addBook(book){
     if( book.state > 30){
        this.books.push(book);
     } 
      return this.books;
    }
    findBookBy(type, value) {
      return this.books.filter((element) => element[type] === value) || null;
     }   
    
    giveBookByName(bookName){
     let index = this.books.filter((element)=> element.name === bookName);
      if (index !== -1) {
        return this.books.splice(index,1);
      } else {
        return null;
      }
    } 
}
     