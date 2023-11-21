class RandomizedSet {
    constructor(public obj = {}) {
        this.obj = obj;
    }

    insert(val: number): boolean {
       if(this.obj[val]) return false  
       this.obj[val] = true;
       return true;
    }
}

var objs = new RandomizedSet()
var param_1 = objs.insert(1);
console.log(objs.obj);

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */