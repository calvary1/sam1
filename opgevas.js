
function validatePassword(password,retype) {
    //check dat het passwoord niet leeg is
    //check dat het pasword lang genoeg is(10 karakter)
    if (password <10) {
        return false

    }
    //check dat de twee paswoorden hetzelfde  zijn
    if (password != retype) {
        return false
    }

    console.log (validatepassword(""))
    console.log (validatepassword("test"))
    console.log (validatepassword("test", "test"))
    console.log (validatepassword("testtesttesttest", "testtesttesttest"))
    
    
    
}


    console.log ("")
