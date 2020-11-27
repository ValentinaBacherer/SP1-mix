const usersList = { valentina : "2398ik", manolo: "90ikjfd", carlos : "ik0981"}

const logIn = (name, password) => {
    if( usersList[name] === password ){
        console.log(`Bienvenido ${name}`);
    } else {
        if (usersList[name] === undefined) {
            console.log(`Usuario incorrecto ${name}`);
        } else {
            console.log(`Contraseña incorrecta ${name}`);
        }
    }
}

logIn("valetina", "789");
logIn("valentina", "98790");
logIn("manolo", "90ikjfd");



