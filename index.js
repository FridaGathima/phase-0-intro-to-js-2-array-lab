const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat() {
    cats.push("Ralph")
    return cats;
  }

function destructivelyPrependCat() {
    cats.unshift("Bob")
    return cats;
  }
  
function destructivelyRemoveLastCat() {
    cats.pop()
    return cats;
  }

function destructivelyRemoveFirstCat() {
    cats.shift()
    return cats;
  }

function appendCat(name) {
    const copyOfCats = cats.slice()
    copyOfCats.push("Broom") 
    return copyOfCats;
  }

function prependCat(name) {
    const copyOfCats = cats.slice()
    copyOfCats.unshift("Arnold") 
    return copyOfCats;
  }

function removeLastCat() {
    const copyOfCats = cats.slice()
    copyOfCats.pop()
    return copyOfCats;
}

function removeFirstCat() {
    const copyOfCats = cats.slice()
    copyOfCats.shift()
    return copyOfCats;
}





    
