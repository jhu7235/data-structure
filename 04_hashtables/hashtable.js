function HashTable(buckets){

    this.numBuckets = buckets || 35;

}

HashTable.prototype.hash = function(word){
    let hashSum = 0;
    for (let i = 0; i < word.length; i++){
        hashSum += word.charCodeAt(i);
    }
    return hashSum % this.numBuckets;

};

HashTable.prototype.set = function(key,val){

    let index = this.hash(key);

    if (typeof key !== "string"){
        throw new TypeError('Keys must be strings');
    } else if (this[index]){

        let bucket = this[index];

        for (let i = 0; i < bucket.length; i++){
            if (bucket[i].key === key){
                bucket[i].value = val;
            } else if (i === bucket.length - 1){
                bucket.push({'key': key, 'value': val});
            }
        }
    } else{
        this[index] = [{'key': key, 'value': val}];
    }

};

HashTable.prototype.get = function(key){
    let bucket = this.hash(key);

    for (let i = 0; i < this[bucket].length; i++){
        if (this[bucket][i].key === key){
            return this[bucket][i].value;
        }
    }
};

HashTable.prototype.hasKey = function(key){

    if (this[this.hash(key)]){
        for (let i = 0; i < this[this.hash(key)].length; i++){
            if (this[this.hash(key)][i].key === key){
                return true;
            }
        }
    }
    return false;
};