function validateEmail(email){
    if (/^\w+([\.-]?\w+)*@successive.tech+$/.test(email)){
        return true;
    }else{
        return false;
    }
}

module.exports = { validateEmail }