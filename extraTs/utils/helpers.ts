function validateEmail(email): boolean{
    if (/^\w+([\.-]?\w+)*@successive.tech+$/.test(email)){
        return true;
    }else{
        return false;
    }
}

export { validateEmail }