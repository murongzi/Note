const a = (...o) => {
    let a = 100;
    
    console.log(o)
    a++;
    return a
}

a(1,2,3);