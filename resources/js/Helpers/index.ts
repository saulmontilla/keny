import axios, { AxiosError, AxiosResponse } from "axios";
import { FormikHelpers } from "formik";

export const emailValidator = /(((https):\/{2})+(([0-9a-z_-]+\.)+(com|edu|gov|info|net|org|ac|ag|ai|ar|bo|bz|ca|cl|co|cr|dm|do|ec|gd|gp|gs|gt|gy|hn|ht|lc|ms|mx|ni|pa|pe|pm|pr|py|sv|sx|tc|us|uy|vc|ve|vg)(:[0-9]+)?((\/([~0-9a-zA-Z\#\+\%@\.\/_-]+))?(\?[0-9a-zA-Z\+\%@\/&\[\];=_-]+)?)?))\b/;

// AGREGA PUNTOS A LA CEDULA
export const formatInputCedula = (value: any) => {
    if (!isNaN(value)) {
        value = value.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
        value = value.split('').reverse().join('').replace(/^[\.]/, '');
    }
    return value;
}

//export const textoValidator = /^([A-Z]{2,254}[a-zñáéíóú]+[\s]*)+$/;

export const nombreValidator = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ]+$/u;

export const userValidator = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð0-9]+$/u;

export const textoAndNumberValidator = /^[A-Za-z0-9\s]+$/g;

export const regexRif = /^([0-9]{9}$)/g;

export const regexDI = /^([0-9]{6,8}$)/g;

export const regexRIF = /^([CVEJPG]{1}[\-]{1,2})([0-9]{9}$)/g;

export const regexCI = /^([VEP]{1}[\-]{1,2})([0-9]{6,8}$)/g;

export const regexPhoneNumber = /^([1-9]{3})([0-9]{7})/g;

export const regexDate = /^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/;

/** PERMITE */
/** AL MENOS UNA MAYUSCULA, UNA MISNUSCULA, UN NUMERO Y UN CARACTER ESPECIAL CON UN RANGO DE 8-16 CARACTERES */
export const regexPass = /^(?!([0-9]\S)\1{2})(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,16}$/;

export const regexPassLength = /^(?=.{8,16}$).*/;
export const regexPINLength = /^(?=.{4,16}$).*/;
export const regextPassMay = /(?:.*[A-Z]){1,}/;

export const regextPassMin = /(?:.*[a-z]){1,}/;

export const regextPassNum = /(?:.*[0-9]){1,}/;

export const regextConsecutive = /(?:.*[0-9]){1,}/;

export const regextPassCar = /(?:.*[[$@$!%*?&#.$($)$-$_]){1,}/;

export const mobilePhoneRegex = /^(0414|0424|0416|0426|0412)[0-9]{7}/

export const mobilePhone2Regex = /^(0414|0424|0416|0426|0412)[0-9]{7}/

export const nationalPhoneRegex = /^(0212|0241|0243|0246|0247|0248|0251|0254|0255|0258|0261|0269|0271|0273|0274|0276|0281|0285|0287|0291|0293|0295|0414|0424|0416|0426|0412)[0-9]{7}/

export const visaRegex = /^4\d+/

export const masterCardRegex = /^5\d+/

/**
 * 3 caracteres cualquiera consecutivos
 */
export const regexCharacterConsecutive = /(.)\1\1/

export var type = "V-";

export const typeRif = (tr: string) => {
    type = tr;
}

// export const asciiTwo = (a) => { return a.charCodeAt(0); }

export const validateConsecutive = (pass: string) => {

    var cont = 0;
    var cant_consecutivos = 2;
    let error;
    // var ints = ascii(pass.length-1);
    // let array = [...ints];
    let arreglo = [...pass];
    // console.log(ascii(pass.length-1))

    for (var i = 1; i < arreglo.length; i++) {
        if ((arreglo[i]) == arreglo[i - 1]) {
            cont++;
        }
    }
    console.log(cont, cant_consecutivos)
    if (cont >= cant_consecutivos) {
        console.log("err")
        // 1 = CONSIGUIO CONSECUTIVOS DE IZQUIERDA A DERECHA
        error = 'La contraseña no puedes tener caracacteres consecutivos';
    }
    else {
        // SI NO CONSIGUIO CONSECUTIVOS DE IZQUIERDA A DERECHA, BUSCAMOS DE DERECHA A IZQUIERDA
        cont = 1;

        for (var i = arreglo.length - 1; i > 0; i--) {
            // console.log( (arreglo[i] + 1) , (arreglo[i - 1]) )
            if ((arreglo[i] + 1) == arreglo[i - 1]) {
                cont++;
            }
        }

        if (cont >= cant_consecutivos) {
            console.log("err 2")
            // 2 = CONSIGUIO CONSECUTIVOS DE DERECHA A IZQUIERDA
            error = 'La contraseña no puedes tener caracacteres consecutivos';
        }
        // else
        // {
        //     // 0 = NO CONSIGUIO CONSECUTIVOS
        //     return false;
        // }
    }

    return error;
}

// Funcion que compara con el regex la contraseña si no esta vacia
export const validatePass = (pass: string) => {
    let error;
    if (pass) {
        if (!regexPass.test(pass)) {
            error = 'La contraseña no es válida';
        }
    }
    return error;
}

export const validateRegexTlf = (number: string) => {
    return regexPhoneNumber.test(number);
}

export const validateRegexRif = (rif: string) => {
    return regexRIF.test(rif);
}

export const validateRegexCI = (ci: string) => {
    return regexCI.test(ci);
}

export const validateRegexDate = (date: string) => {
    return regexDate.test(date);
}

export const validarRif = (mstring: string, letter: string) => {
    // modificacion
    var string = typeof letter === 'undefined'
        ? type + mstring
        : letter + '-' + mstring

    var error;
    var letra = string.substr(0, 1);
    var regexRif = /^([CVEJPG]{1}[\-]{1,2})([0-9]{9}$)/;
    var consulta = regexRif.test(string);

    if (consulta) {
        var digitos = string.split("").map(digito => Number(digito));
        var digitoEspecial;

        digitos[9] *= 2;
        digitos[8] *= 3;
        digitos[7] *= 4;
        digitos[6] *= 5;
        digitos[5] *= 6;
        digitos[4] *= 7;
        digitos[3] *= 2;
        digitos[2] *= 3;

        // Determinar dígito especial según la inicial del RIF
        // Regla introducida por el SENIAT
        switch (letra) {
            case 'V':
                digitoEspecial = 1;
                break;
            case 'E':
                digitoEspecial = 2;
                break;
            case 'C':
                digitoEspecial = 3;
                break;
            case 'J':
                digitoEspecial = 3;
                break;
            case 'P':
                digitoEspecial = 4;
                break;
            case 'G':
                digitoEspecial = 5;
                break;
            default:
                digitoEspecial = 1
        }

        var suma = (digitos[2] + digitos[3] + digitos[4] + digitos[5] + digitos[6] + digitos[7] + digitos[8] + digitos[9]) + (digitoEspecial * 4);

        var residuo = suma % 11;

        var resta = 11 - residuo;

        var digitoVerificador = (resta >= 10) ? 0 : resta;

        if (digitoVerificador == digitos[10]) {
            return error;
        } else {
            if ((letra == 'E' || letra == 'V') && (string.length == 10 || string.length == 9 || string.length == 11)) { //se valida cedula
                if (string.length == 11) {
                    let regex = /^([VE]{1}[\-]{1,2})([0-9]{9}$)/;
                    consulta = regex.test(string);
                } else {
                    let regex = /^([VE]{1}[\-]{1,2})([0-9]{9}$)/;
                    consulta = regex.test(string);
                }
                // if (consulta) {

                //     return error;
                // }
            }
            error = '- RIF invalido -';
            return error;
        }
    }
    if ((letra == 'E' || letra == 'V') && (string.length == 10 || string.length == 9 || string.length == 11 || string.length == 8)) { //se valida cedula
        if (string.length == 11) {
            let regex = /^([VE]{1}[\-]{1,2})([0-9]{9}$)/;
            consulta = regex.test(string);
        } else {
            let regex = /^([VE]{1}[\-]{1,2})([0-9]{9}$)/;
            consulta = regex.test(string);
        }
        if (consulta) {
            return error;
        }
    }
    error = '- RIF invalido -';
    return error;
}

export const validateInputRif = (value: string) => {

    const regexRif = /^([0-9]{8})([0-9]{1}$)/g
    //const regexRif = /^([0-9]{8})-([0-9]{1}$)/g
    //const regexRif = /^([VEJPGvejpg]{1})-([0-9]{8})-([0-9]{1}$)/
    let error;
    if (!regexRif.test(value)) {
        error = '- El RIF no es valido -';
    }
    return error;
}

export const dateJS = (date: string) => {

    const regexDate = /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/;
    const regexDateII = /^([0-2][0-9]|3[0-1])(\/|-)([1-9]|1[0-2])\2(\d{4})$/;

    if (regexDate.test(date) || regexDateII.test(date)) {
        let fecha = date.split("/");
        return new Date(+fecha[2], +fecha[1], +fecha[0], 0, 0);
    }
    return date;
}

export const formatDate = (value: string) => {

    let fechaJS = dateJS(value);
    let newDate = new Date(
        typeof fechaJS === 'string'
            ? fechaJS + ' 00:00'
            : fechaJS
    )
    let date = null;
    let endYear = newDate.getFullYear();
    let endMonth: number | string = newDate.getMonth() + 1;
    let endDay: number | string = newDate.getDate();
    if (endMonth <= 9) {
        endMonth = "0" + endMonth;
    }
    if (endDay <= 9) {
        endDay = "0" + endDay;
    }
    date = endDay + "/" + endMonth + "/" + endYear;
    return date;
}

export const formatDateII = (value: string) => {

    let newDate = new Date(value);
    let date = null;
    let endYear = newDate.getFullYear();
    let endMonth: number | string = newDate.getMonth() + 1;
    let endDay: number | string = newDate.getDate();

    if (endMonth <= 9) {
        endMonth = "0" + endMonth;
    }
    if (endDay <= 9) {
        endDay = "0" + endDay;
    }
    date = endYear + "-" + endMonth + "-" + endDay;
    return date;
}

export const reformatDate = (value: string) => {

    let dates = value.split("-");
    const year = dates[0];
    const month = dates[1];
    const day = dates[2];

    return `${day}/${month}/${year}`;
}

export const formatDateAndHours = (value: string) => {

    var hours = value.split(" ");
    var date = reformatDate(hours[0]);
    return date + " " + hours[1];
}

/**
 * Formatea una fecha a formato timestamp ingles
 * @param value Valor de la fecha
 * @param notShowTime Indica si se omite el valor del tiempo
 * y mostrar solo la fecha. False por defecto
 * @param differentTime Hora distina a anexar. Ej: 18:00
 */
export const formatDateToTimestamp = (value: Date | string, notShowTime: boolean = false, differentTime: string) => {
    /**
     * Agrega un cero adelante del número si este es 
     * menor a 10
     */
    function addLeadingZero(number: number) {
        return number < 10
            ? `0${number}`
            : number
    }

    let date = typeof value === 'string'
        ? new Date(value)
        : value

    const year = date.getFullYear()
    const month = addLeadingZero(date.getMonth() + 1)
    const day = addLeadingZero(date.getDate())
    const hours = addLeadingZero(date.getHours())
    const minutes = addLeadingZero(date.getMinutes())

    if (notShowTime) {
        return `${year}-${month}-${day}`
    } else {
        if (differentTime) return `${year}-${month}-${day} ${differentTime}`
        else return `${year}-${month}-${day} ${hours}:${minutes}`
    }
}

/**
 * Da formato a un monto a expresion de moneda
 */
export const formatMonto = (monto: number) => {
    return new Intl.NumberFormat("de-DE", {
        style: "decimal",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(monto)
}

export const validateEdad = (date: string) => {
    let error;
    let today = new Date();
    let birthday = new Date(date);
    let edad = today.getFullYear() - birthday.getFullYear();
    let differenceMonths = today.getMonth() - birthday.getMonth();
    let differenceDays = today.getDate() - birthday.getDate();

    if (edad < 18) {

        error = "Tu edad debe ser mayor o igual a 18 años.";

    } else if (edad === 18 && differenceMonths <= 0 && differenceDays < 0) {
        error = "Tu edad debe ser mayor o igual a 18 años";
    }
    return error;
}

/**
 * Valida si un string es solo numérico
 */
export const isNumeric = (value: string, notAllowEmpty = false) => {
    const regex = /^[0-9\b]+$/;
    if (notAllowEmpty) return regex.test(value)
    if (value === '' || regex.test(value)) return true
    return false
}

/**
 * Valida si un string es solo alfabético
 * (incluye espacio y apóstrofe)
 */
export const isAlphabetic = (value: string) => {
    const regex = /^[a-zá-úä-üA-ZÁ-ÚÄ-ÜñÑ'\s]+$/
    if (value === '' || regex.test(value)) return true
    return false
}

/**
 * Valida si un string es alfanumerico
 */
export const isAlphaNumeric = (value: string) => {
    const regex = /^[a-zá-úä-üA-ZÁ-ÚÄ-ÜñÑ0-9\s]+$/
    if (value === '' || regex.test(value)) return true
    return false
}

/**
 * El numero es una cuenta bancaria nacional valida
 */
export const isNationalBankAccount = (account: string) => {
    if (account.length === 0) return false

    account.replace(/-/g, '')
    account.replace(/\s/g, '')

    if (account.length !== 20) return false

    const account_in_array = [...account]
    const account_in_array_numeric = account_in_array.map(number => Number(number))

    //VALIDAR EL PRIMER DIGITO VALIDADOR
    let firstDigit

    const first_sum = account_in_array_numeric[0] * 3 +
        account_in_array_numeric[1] * 2 +
        account_in_array_numeric[2] * 7 +
        account_in_array_numeric[3] * 6 +
        account_in_array_numeric[4] * 5 +
        account_in_array_numeric[5] * 4 +
        account_in_array_numeric[6] * 3 +
        account_in_array_numeric[7] * 2

    const first_modulus = first_sum % 11

    switch (first_modulus) {
        case 0: firstDigit = 1
            break
        case 1: firstDigit = 0
            break
        default: firstDigit = 11 - first_modulus
    }

    if (firstDigit !== account_in_array_numeric[8]) return false

    //VALIDAR EL SEGUNDO DIGITO VALIDADOR
    let secondDigit

    const secondSum = account_in_array_numeric[10] * 5 +
        account_in_array_numeric[11] * 4 +
        account_in_array_numeric[12] * 3 +
        account_in_array_numeric[13] * 2 +
        account_in_array_numeric[14] * 7 +
        account_in_array_numeric[15] * 6 +
        account_in_array_numeric[16] * 5 +
        account_in_array_numeric[17] * 4 +
        account_in_array_numeric[18] * 3 +
        account_in_array_numeric[19] * 2 +
        account_in_array_numeric[4] * 3 +
        account_in_array_numeric[5] * 2 +
        account_in_array_numeric[6] * 7 +
        account_in_array_numeric[7] * 6

    const secondModulus = secondSum % 11

    switch (secondModulus) {
        case 0: secondDigit = 1
            break
        case 1: secondDigit = 0
            break
        default: secondDigit = 11 - secondModulus
    }

    if (secondDigit !== account_in_array_numeric[9]) return false

    return true
}

/**
 * Valida que un documento de identificación sea
 * válido.
 * @param dni Documento de identificación
 * @param onlyRif Se comprobará solamente que sea un rif valido
 * @example isValidDni('J-123456789')
 * @example isValidDni('V-1234567')
 */
export const isValidDni = (dni: string, onlyRif: boolean = false) => {
    const dniUppercased = dni.toUpperCase()
    const dniRegex = /^([CVEJPG]{1}[\-]{1,2})([A-Z0-9]{6,9}$)/
    const rifRegex = /^([CVEJG]{1}[\-]{1,2})([0-9]{9}$)/
    const cedulaRegex = /^([VE]{1}[\-]{1,2})([0-9]{6,8}$)|^([P]-[A-Z0-9]{9})$/

    if (!dniRegex.test(dniUppercased)) return false

    if (rifRegex.test(dniUppercased) || onlyRif) return isValidRif(dniUppercased)

    return cedulaRegex.test(dniUppercased) && !onlyZerosInDni(dniUppercased)
}

/**
 * Comprueba si un documento de identidad esta compuesto
 * unicamente de ceros
 * @param dni Documento de la forma V-1234678 
 */
export const onlyZerosInDni = (dni: string) => {
    const dniSplitted = dni.split('-')
    const numbers = dniSplitted[1]

    return onlyZerosInString(numbers)
}

/**
 * Comprueba si una cadena de caracteres esta compuesta solo de ceros
 */
export const onlyZerosInString = (string: string) => {
    const zerosTrimmed = string.replace(/^0+|0+$/g, "")
    return zerosTrimmed.length === 0
}

/**
 * Valida que un rif sea correcto
 * @param rif RIF de la forma J-00000000000
 */
export const isValidRif = (rif: string) => {
    if (onlyZerosInDni(rif)) return false

    const rifSplitted = rif.split('-')
    const letter = rifSplitted[0]
    const numbers = rifSplitted[1]

    const stringDigits = [...numbers]
    const digits = stringDigits.map(digit => Number(digit))

    digits[0] *= 3
    digits[1] *= 2
    digits[2] *= 7
    digits[3] *= 6
    digits[4] *= 5
    digits[5] *= 4
    digits[6] *= 3
    digits[7] *= 2

    let specialDigit

    switch (letter) {
        case 'V':
            specialDigit = 1;
            break;
        case 'E':
            specialDigit = 2;
            break;
        case 'C':
            specialDigit = 3;
            break;
        case 'J':
            specialDigit = 3;
            break;
        case 'P':
            specialDigit = 4;
            break;
        case 'G':
            specialDigit = 5;
            break;
        default:
            specialDigit = 1
    }

    const sum = digits[0] +
        digits[1] +
        digits[2] +
        digits[3] +
        digits[4] +
        digits[5] +
        digits[6] +
        digits[7] +
        specialDigit * 4

    const modulus = sum % 11
    const substraction = 11 - modulus

    const verifierDigit = substraction >= 10 ? 0 : substraction

    return verifierDigit === digits[8]
}

/**
 * Retorna si el archivo corresponde al tipo especificado
 * @param file
 * @param type tipo de formato de archivo
 */
export const isFileType = (file: File, type: string | string[]) => {
    if (Array.isArray(type)) {
        return type.includes(file.type)
    }
    return file.type === type
}

/**
 * Recibe los errores devueltos por el backend 
 * y los establece en los errores del Formik
 * @param error Errores devueltos por Laravel
 * @param actions Formik Actions
 * @param fieldNames Indica el nombre de los initialValues 
 * que haran match con los nombres de las keys de los errores.
 * {errorKey: 'initialValueName'}
 * 
 * Si no está presente, tomará el nombre de la key del error
 */
export const mapResponseToErrors = async (error: AxiosError<any>, actions: FormikHelpers<any>, fieldNames: any) => {
    if (error.response) {
        interface CustomError {
            formikField: string;
            error: string;
        }

        /**
         * Lista de errores para agregar 
         * a los errores de Formik
         */
        const errorList: CustomError[] = []

        if (typeof fieldNames === 'string') {
            errorList.push({
                formikField: fieldNames,
                error: error.response.data.M
            })
        } else {
            const errorsData = error.response.data.data

            for (let key in errorsData) {
                const errorValue = errorsData[key]
                let field = key

                if (typeof fieldNames === 'object' && fieldNames[key]) {
                    field = fieldNames[key]
                }

                errorList.push({
                    formikField: field,
                    error: errorValue
                })
            }
        }

        errorList.forEach(el => {
            actions.setFieldError(el.formikField, el.error)
        })
    }
}

/**
 * Transforma el tiempo de expiración a milisegundos
 */
export const tokenExpiresInMilliseconds = (expiresIn: number) => {
    return Date.now() + expiresIn * 1000
}

/**
 * Comprueba si el tamaño de un archivo está dentro
 * de los parámetros establecidos
 */
export const isFileSize = (file: File, operator: '<' | '<=' | '>' | '>=' | '=', size: number, unit: 'B' | 'KB' | 'MB' | 'GB') => {
    let fileSize

    switch (unit) {
        case 'B': fileSize = file.size
            break
        case 'KB': fileSize = file.size / 1000
            break
        case 'MB': fileSize = file.size / 1000000
            break
        case 'GB': fileSize = file.size / 1000000000
            break
        default: fileSize = file.size
    }

    switch (operator) {
        case '<': return fileSize < size
        case '<=': return fileSize <= size
        case '=': return fileSize === size
        case '>': return fileSize > size
        case '>=': return fileSize >= size
        default: return fileSize === size
    }
}

/**
 * Agrega y reemplaza la URL actual con un parametro especificado. 
 * (Solo client side)
 * @param param Nombre del parametro
 * @param value Valor del parametro
 * @param urlObject Objeto URL adicional al cual anexarle los filtros
 */
export const setCurrentUrlParam = (param: string, value: string | null, urlObject: URL | null = null) => {
    const currentUrl = window.location.href
    const newUrl = new URL(currentUrl)

    if (value) {
        newUrl.searchParams.set(param, value)
        if (urlObject) urlObject.searchParams.set(param, value)
    } else {
        newUrl.searchParams.delete(param)
        if (urlObject) urlObject.searchParams.delete(param)
    }

    window.history.replaceState(null, '', newUrl.href)
}

/**
 * Devuelve el valor devuelto por una funcion callback.
 * Puede usarse para setear el valor de una variable en un switch
 * @example 
 * const foo = 1
 * const bar = setter(() => {
 *      switch(foo) {
 *          case 1: return 'es uno'
 *          case 2: return 'es dos'
 *          case 3: return 'es tres'
 *      }
 * })
 * // bar = 'es uno'
 */
export function setter<V>(setterFn: () => V) {
    return setterFn()
}

/**
 * Transforma un codigo de moneda ISO a su simbolo y formatea el monto
 * si se define
 */
export function currencyCodeToSymbol(code: string, _amount: number | null = null) {
    const list: Record<string, string> = {
        'VES': 'Bs',
        'USU': '$'
    }

    const symbol = list[code] || 'Bs'
    const amount = _amount !== null ? formatMonto(_amount) : null

    return symbol === 'Bs'
        ? amount + ' ' + symbol
        : symbol + ' ' + amount
}

/**
 * Enmascara un numero de cuenta nacional
 */
export function maskNationalAccount(account: string) {
    return account.substring(0, 4)
        + ' '
        + '*'.repeat(4)
        + ' '
        + account.substring(account.length, account.length - 4)
}

/**
 * Algoritmo de Luhn para validar veracidad de tarjetas de crédito
 * @param value la tarjeta a evaluar
 */
export function isValidCreditCard(value: string) {
    value = value.replace(/\D/g, "");
    if (/[^0-9-\s]+/.test(value)) return false;

    let nums = value.split("").map(Number);

    if (value.length % 2 === 0) {
        nums = nums.map((num, i) => i % 2 === 0 ? num * 2 : num);
    } else {
        nums = nums.map((num, i) => i % 2 === 0 ? num : num * 2);
    }

    nums = nums.map(num => num > 9 ? num - 9 : num);

    const res = nums.reduce((acc, num) => acc += num, 0);
    return (res % 10 === 0);
}

/**
 * Valida si un numero de tarjeta es visa
 */
export function isVisaCard(value: string) {
    return visaRegex.test(value)
}

/**
 * Valida si un numero de tarjeta es master card
 */
export function isMasterCard(value: string) {
    return masterCardRegex.test(value)
}

/**
 * Devuelve la letra del dni
 * @param dni dni de la forma J-123456789-0
 */
export function getDniLetter(dni: string) {
    return dni.split('-')[0]
}

/**
 * Devuelve el numero del dni
 * @param dni dni de la forma J-123456789-0
 */
export function getDniNumber(dni: string) {
    const splitted = dni.split('-')

    if (splitted.length < 2) return ''

    let result = ''

    for (let i = 1; i < splitted.length; i++) {
        result += splitted[i]
    }

    return result
}

/**
 * Transforma un numero local a internacional
 * @param number Numero de telefono. Ej: 04141234567
 * @param countryCode Codigo del pais. Ej: 58 
 * @returns +58-4241234567
 */
export function phoneNumberToInt(number: string, countryCode: number = 58) {
    return '+' + countryCode + '-' + number.substring(1)
}

/**
 * Transforma un numero internacion a local
 * @param number Ej: +58-4241234567
 * @returns 04141234567 withFormat (0414) 123-4567
 */
export function phoneNumberToLocal(number: string, withFormat: boolean = false) {
    const localNumber = number.split('-')[1]
    const completeNumber = '0' + localNumber

    if (withFormat) {
        return formatPhoneNumber(completeNumber)
    } else {
        return completeNumber
    }
}

/**
 * Da formato a un numero de telefono
 * Ej: 04141234567 => (0414) 123-4567
 */
export function formatPhoneNumber(number: string) {
    return '(' +
        number.substring(0, 4) +
        ') ' +
        number.substring(4, 7) +
        '-' +
        number.substring(7, 11)
}

/**
 * Refresca el estado de la session y consulta la informacion del usuario
 */
export const reloadSession = async () => {
    await axios.get('/api/auth/session', {
        params: {
            fetchUser: true
        }
    })
    const event = new Event('visibilitychange');
    document.dispatchEvent(event)
}

/**
 * Devuelve la ruta de la imagen del logo del banco
 */
export function getBankLogoPath(bankCode: string) {
    switch (bankCode) {
        case '0001': return '/images/banks/bcv.png'
        case '0102': return '/images/banks/bancovenezuela.png'
        case '0104': return '/images/banks/venezolanodecredito.png'
        case '0105': return '/images/banks/bancomercantil.png'
        case '0108': return '/images/banks/provincial.png'
        case '0114': return '/images/banks/bancaribe.png'
        case '0115': return '/images/banks/bancoexterior.png'
        case '0116': return '/images/banks/bod.png'
        case '0128': return '/images/banks/bancocaroni.png'
        case '0134': return '/images/banks/banesco.png'
        case '0137': return '/images/banks/sofitasa.png'
        case '0138': return '/images/banks/bancoplaza.png'
        case '0146': return '/images/banks/bangente.png'
        case '0149': return '/images/banks/bancodelpueblosoberano.png'
        case '0151': return '/images/banks/bfc.png'
        case '0156': return '/images/banks/cienbanco.png'
        case '0157': return '/images/banks/bancodelsur.png'
        case '0163': return '/images/banks/bancodeltesoro.png'
        case '0166': return '/images/banks/bav.png'
        case '0168': return '/images/banks/bancrecer.png'
        case '0169': return '/images/banks/mibanco.png'
        case '0171': return '/images/banks/bancoactivo.png'
        case '0172': return '/images/banks/bancamiga.png'
        case '0173': return '/images/banks/bid.png'
        case '0174': return '/images/banks/banplus.png'
        case '0175': return '/images/banks/bicentenario.png'
        case '0177': return '/images/banks/banfanb.png'
        case '0190': return '/images/banks/citibank.png'
        case '0191': return '/images/banks/bnc.png'
        case '0601': return '/images/banks/imcp.png'
        default: return '/images/banks/ubii.svg'
    }
}

/**
 * Devuelve el tipo de tarjeta basado en su numero
 * @see https://stackoverflow.com/questions/72768/how-do-you-detect-credit-card-type-based-on-number
 */
export function getCardType(number: string) {
    const regexs: Record<string, RegExp> = {
        electron: /^(4026|417500|4405|4508|4844|4913|4917)\d+$/,
        maestro: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/,
        dankort: /^(5019)\d+$/,
        interpayment: /^(636)\d+$/,
        unionpay: /^(62|88)\d+$/,
        visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
        mastercard: /^5[1-5][0-9]{14}$/,
        amex: /^3[47][0-9]{13}$/,
        diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
        jcb: /^(?:2131|1800|35\d{3})\d{11}$/
    }

    for (let brand in regexs) {
        if (regexs[brand].test(number)) {
            return brand
        }
    }
}

/**
 * Devuelve la ruta del logo del tipo de tarjeta
 */
export function getCardLogoPath(number: string) {
    const brand = getCardType(number)

    switch (brand) {
        case 'electron': return '/img/banks/cards/electron.png'
        case 'maestro': return '/img/banks/cards/maestro.png'
        case 'dankort': return '/img/banks/cards/dankort.png'
        case 'interpayment': return '/img/banks/cards/interpayment.png'
        case 'unionpay': return '/img/banks/cards/unionpay.png'
        case 'visa': return '/img/banks/cards/visa.png'
        case 'mastercard': return '/img/banks/cards/mastercard.png'
        case 'amex': return '/img/banks/cards/amex.png'
        case 'diners': return '/img/banks/cards/diners.png'
        case 'discover': return '/img/banks/cards/discover.png'
        case 'jcb': return '/img/banks/cards/jcb.png'
        default: return '/img/banks/cards/blank.png'
    }
}

/**
 * Devuelve el nombre del archivo de una respuesta axios Blob
 * @see https://stackoverflow.com/questions/40939380/how-to-get-file-name-from-content-disposition
 */
export function getFileNameFromResponse(response: AxiosResponse) {
    const disposition = response.headers['content-disposition'];

    if (disposition && disposition.indexOf('attachment') !== -1) {
        const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
        const matches = filenameRegex.exec(disposition);

        if (matches != null && matches[1]) {
            return matches[1].replace(/['"]/g, '');
        }
    } else if (disposition && disposition.indexOf('inline') !== -1) {
        var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
        var matches = filenameRegex.exec(disposition);
        if (matches != null && matches[1]) {
            return matches[1].replace(/['"]/g, '');
        }
    }

    return null
}

/**
 * Transforma un numero en string a numero
 * @param {String} string 
 */
export function stringToNumber(string: string) {
    const replacedDots = string.replace(/\./g, '')
    const replacedComma = replacedDots.replace(/,/g, '.')

    return Number(replacedComma)
}

export function getAxiosErrors(e: AxiosError<any>): string[] {
    if (e.response) {
        if (e.response.data) {
            if (Array.isArray(e.response.data)) {
                return e.response.data
            }
            if (typeof e.response.data === 'string') {
                return [e.response.data]
            }
            if (e.response.data.message) {
                return [e.response.data.message]
            }
        }
    }

    return [e.message]
}

export function getQuery() {
    const url = new URL(window.location.href)
    const params = url.searchParams

    const query: Record<string, string> = {}

    params.forEach((value, key) => {
        query[key] = value
    })

    return query
}

/**
 * Antepone 'from_' a cada key de la query
 */
export function forwardQuery() {
    const newQuery: Record<string, string> = {}
    const query = getQuery()

    for (let key in query) {
        newQuery[`from_${key}`] = query[key]
    }

    return newQuery
}

/**
 * Elimina 'from_' a cada key de la query
 */
export function backwardQuery() {
    const newQuery: Record<string, string> = {}
    const query = getQuery()

    for (let key in query) {
        if (key.startsWith('from_')) {
            newQuery[key.replace('from_', '')] = query[key]
        }
    }

    return newQuery
}

export function prependZerosToRif(rif: string) {
    const regex = /[0-9]+/g;

    return rif.replace(regex, (match) => {
        return match.padStart(9, "0");
    });
}

/**
 * Transforma un rif natural a cedula
 */
export function rifToCedula(rif: string) {
    const letter = rif.substring(0, 2)
    const number = rif.substring(2, rif.length - 1)

    if (number.startsWith('0')) {
        return letter + number.substring(1)
    } else {
        return letter + number
    }
}

export function downloadFile(response: AxiosResponse<any>) {
    const fileName = getFileNameFromResponse(response) || 'file'

    const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
    const anchor = document.createElement('a');
    anchor.href = downloadUrl;
    anchor.setAttribute('download', fileName);
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor)
    window.URL.revokeObjectURL(downloadUrl)
}