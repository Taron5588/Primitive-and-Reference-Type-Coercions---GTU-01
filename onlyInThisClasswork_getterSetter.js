const obj = {
    _name: [], // [name: length]
    get name() {
        return obj._name
    },
    set name(value) {
        const arr = value.split(', ');
        for(item of arr) {
           obj._name.push([item, item.length]); 
        }
    }
}

console.log(obj.name)
obj.name = 'Artak, Artavazd, Samvel'
console.log(obj.name) 