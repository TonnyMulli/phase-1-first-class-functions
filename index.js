function receivesAFunction(callback){
    callback()
}
function callback(){
    console.log('You are amazing')
}

function returnsANamedFunction(){
    return receivesAFunction;

}

function returnsAnAnonymousFunction(){
    return function(){
        
    };
}