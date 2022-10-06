class Password {
    longitud = 8;
    contraSenia = 'nullnull';

    constructor(passLenght) {
        if (passLenght === undefined) {
            this.contraSenia = 'nullnull'
        } else {

            console.log('AAAAAAA')
            var pass = '';
            var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
                'abcdefghijklmnopqrstuvwxyz0123456789@#$';

            for (var i = 1; i <= passLenght; i++) {
                var char = Math.floor(Math.random()
                    * str.length + 1);


                pass += str.charAt(char)
            }
            this.contraSenia = pass;
            this.longitud = pass.length;

        }
    }
    constructorLongitud(largo) {
        //creamos una password
        if (largo === undefined) {
            this.largo = 8;

            var pass = '';
            var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
                'abcdefghijklmnopqrstuvwxyz0123456789@#$';

            for (i = 1; i <= 8; i++) {
                var char = Math.floor(Math.random()
                    * str.length + 1);

                pass += str.charAt(char)
            }
            return pass;

        } else {
            var pass = '';
            var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
                'abcdefghijklmnopqrstuvwxyz0123456789@#$';

            for (i = 1; i <= largo; i++) {
                var char = Math.floor(Math.random()
                    * str.length + 1);

                pass += str.charAt(char)
            }
            return pass;
        }
    }

    esFuerte() {
        //controlamos que la contraseña cumpla con los elementos requerida para ser fuerte
        var contadorNumeros1;
        var contadorMinuscula1;
        var contadorMayuscula1;

        const contadorMayuscula = this.contraSenia.match(/[A-Z]/g);
        if (contadorMayuscula) {
            contadorMayuscula1 = contadorMayuscula.length;
        } else {
            contadorMayuscula1 = 0;
        }
        const contadorNumeros = this.contraSenia.match(/\d/g);
        if (contadorNumeros) {
            contadorNumeros1 = contadorNumeros.length;
        } else {
            contadorNumeros1 = 0;
        }
        const contadorMinuscula = this.contraSenia.match(/[a-z]/g); if (contadorMinuscula) {
            contadorMinuscula1 = contadorMinuscula.length;
        } else {
            contadorMinuscula1 = 0;
        }


        if (contadorMayuscula1 >= 3 && contadorMinuscula1 >= 2 && contadorNumeros1 >= 4) {
            return true;
        } else {
            return false;
        }
    }



    getContrasenia() {
        return this.contraSenia;
    }

    setLongitud(largo) {
        this.longitud = largo;
    }
}

var passwordOne = new Password(10);
console.log(passwordOne);
console.log(('Es fuerte? '), passwordOne.esFuerte())
