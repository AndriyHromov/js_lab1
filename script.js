console.log("ІНСТРУКЦІЯ:");
console.log("Використовуйте функцію triangle(value1, type1, value2, type2)");
console.log("Можливі типи:");
console.log('"leg" - катет');
console.log('"hypotenuse" - гіпотенуза');
console.log('"adjacent angle" - прилеглий до катета кут');
console.log('"opposite angle" - протилежний до катета кут');
console.log('"angle" - гострий кут (коли задана гіпотенуза)');
console.log("Приклад: triangle(4, 'leg', 8, 'hypotenuse');");

function toRadians(deg) {
    return deg * Math.PI / 180;
}

function toDegrees(rad) {
    return rad * 180 / Math.PI;
}

function triangle(value1, type1, value2, type2) {

    let a, b, c, alpha, beta;

    if (value1 <= 0 || value2 <= 0) {
        return "Помилка: значення повинні бути більше 0";
    }

    // Якщо задано катет і гіпотенузу
    if ((type1 === "leg" && type2 === "hypotenuse") ||
        (type2 === "leg" && type1 === "hypotenuse")) {

        let leg = (type1 === "leg") ? value1 : value2;
        let hyp = (type1 === "hypotenuse") ? value1 : value2;

        if (leg >= hyp) {
            return "Помилка: катет не може бути більшим або рівним гіпотенузі";
        }

        a = leg;
        c = hyp;
        b = Math.sqrt(c * c - a * a);

        alpha = toDegrees(Math.asin(a / c));
        beta = 90 - alpha;
    }

    // Якщо задано два катети
    else if (type1 === "leg" && type2 === "leg") {

        a = value1;
        b = value2;
        c = Math.sqrt(a * a + b * b);

        alpha = toDegrees(Math.atan(a / b));
        beta = 90 - alpha;
    }

    // Якщо задано гіпотенузу і кут
    else if ((type1 === "hypotenuse" && type2 === "angle") ||
             (type2 === "hypotenuse" && type1 === "angle")) {

        let hyp = (type1 === "hypotenuse") ? value1 : value2;
        let angle = (type1 === "angle") ? value1 : value2;

        if (angle <= 0 || angle >= 90) {
            return "Помилка: кут повинен бути гострим (0 < angle < 90)";
        }

        c = hyp;
        alpha = angle;
        beta = 90 - alpha;

        a = c * Math.sin(toRadians(alpha));
        b = c * Math.cos(toRadians(alpha));
    }

    else {
        console.log("Неправильні типи аргументів. Перечитайте інструкцію.");
        return "failed";
    }

    console.log("Результати:");
    console.log("a =", a.toFixed(2));
    console.log("b =", b.toFixed(2));
    console.log("c =", c.toFixed(2));
    console.log("alpha =", alpha.toFixed(2), "°");
    console.log("beta =", beta.toFixed(2), "°");

    return "success";
}

