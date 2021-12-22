class HashTable {
    constructor() {
        this.table = new Array(127);
        this.size = 0;
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.table.length;
    }

    set(key, value) {
        const index = this._hash(key);
        this.table[index] = [key, value];
        this.size++;
    }

    get(key) {
        const index = this._hash(key);
        if(this.table[index] && this.table[index].length) {
          return this.table[index];
        } else {
          return "Item not found"
        }
    }

    remove(key) {
        const index = this._hash(key);

        if(this.table[index] && this.table[index].length) {
            this.table[index] = undefined;
            this.size--;
            return true;
        } else {
            return false;
        }
    }
}

const hashTable = new HashTable;
hashTable.set("Pusska", 300);
hashTable.set("Aboba", 100);
hashTable.set("Chinchilla", 300);

console.log(hashTable.get("Pusska"));
console.log(hashTable.get("Aboba"));
console.log(hashTable.get("Chinchilla"));
console.log(hashTable.get("RandomItemThatNotExist"));
