function Pile(){
    return {
        stack : [],
        push : function(n) {
            this.stack.push(n);
        },
        pop : function() {
            return this.stack.pop();
        }
    }
}

module.exports = Pile;