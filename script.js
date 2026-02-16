console.log("ІНСТРУКЦІЯ:");
console.log("triangle(value1, type1, value2, type2)");
console.log("Типи:");
console.log('"leg" - катет');
console.log('"hypotenuse" - гіпотенуза');
console.log('"adjacent angle" - прилеглий до катета кут');
console.log('"opposite angle" - протилежний до катета кут');
console.log('"angle" - гострий кут при гіпотенузі');

function toRadians(deg) {
    return deg * Math.PI / 180;
}

function toDegrees(rad) {
    return rad * 180 / Math.PI;
}

function isFiniteNumber(x) {
    return typeof x === "number" && isFinite(x);
}

function triangle(value1, type1, value2, type2) {

    if (!isFiniteNumber(value1) || !isFiniteNumber(value2))
        return "Помилка: аргументи повинні бути числами";

    if (value1 <= 0 || value2 <= 0)
        return "Помилка: значення повинні бути більше 0";

    const types = ["leg", "hypotenuse", "adjacent angle", "opposite angle", "angle"];
    if (!types.includes(type1) || !types.includes(type2)) {
        console.log("Неправильні типи аргументів. Перечитайте інструкцію.");
        return "failed";
    }

    let a, b, c, alpha, beta;

    // -------------------------
    // ДВА КАТЕТИ
    // -------------------------
    if (type1 === "leg" && type2 === "leg") {
        a = value1;
        b = value2;
        c = Math.sqrt(a*a + b*b);
        alpha = toDegrees(Math.atan(a/b));
        beta = 90 - alpha;
    }

    // -------------------------
    // КАТЕТ + ГІПОТЕНУЗА
    // -------------------------
    else if (
        (type1 === "leg" && type2 === "hypotenuse") ||
        (type2 === "leg" && type1 === "hypotenuse")
    ) {
        a = (type1 === "leg") ? value1 : value2;
        c = (type1 === "hypotenuse") ? value1 : value2;

        if (a >= c)
            return "Помилка: катет не може бути >= гіпотенузи";

        b = Math.sqrt(c*c - a*a);
        alpha = toDegrees(Math.asin(a/c));
        beta = 90 - alpha;
    }

    // -------------------------
    // ГІПОТЕНУЗА + КУТ
    // -------------------------
    else if (
        (type1 === "hypotenuse" && type2 === "angle") ||
        (type2 === "hypotenuse" && type1 === "angle")
    ) {
        c = (type1 === "hypotenuse") ? value1 : value2;
        alpha = (type1 === "angle") ? value1 : value2;

        if (alpha <= 0 || alpha >= 90)
            return "Помилка: кут повинен бути гострим";

        beta = 90 - alpha;
        a = c * Math.sin(toRadians(alpha));
        b = c * Math.cos(toRadians(alpha));
    }

    // -------------------------
    // КАТЕТ + ПРИЛЕГЛИЙ КУТ
    // -------------------------
    else if (
        (type1 === "leg" && type2 === "adjacent angle") ||
        (type2 === "leg" && type1 === "adjacent angle")
    ) {
        a = (type1 === "leg") ? value1 : value2;
        beta = (type1 === "adjacent angle") ? value1 : value2;

        if (beta <= 0 || beta >= 90)
            return "Помилка: кут повинен бути гострим";

        alpha = 90 - beta;
        b = a * Math.tan(toRadians(beta));
        c = a / Math.cos(toRadians(beta));
    }

    // -------------------------
    // КАТЕТ + ПРОТИЛЕЖНИЙ КУТ
    // -------------------------
    else if (
        (type1 === "leg" && type2 === "opposite angle") ||
        (type2 === "leg" && type1 === "opposite angle")
    ) {
        a = (type1 === "leg") ? value1 : value2;
        alpha = (type1 === "opposite angle") ? value1 : value2;

        if (alpha <= 0 || alpha >= 90)
            return "Помилка: кут повинен бути гострим";

        beta = 90 - alpha;
        c = a / Math.sin(toRadians(alpha));
        b = Math.sqrt(c*c - a*a);
    }

    else {
        console.log("Несумісна пара типів.");
        return "failed";
    }

    // -------------------------
    // Перевірка переповнення
    // -------------------------
    if (!isFinite(a) || !isFinite(b) || !isFinite(c))
        return "Помилка: обчислення призвели до переповнення";

    // -------------------------
    // Гранично малі значення
    // -------------------------
    const EPS = 1e-10;
    if (a < EPS || b < EPS || c < EPS)
        return "Помилка: занадто малі значення сторін";

    console.log("a =", a);
    console.log("b =", b);
    console.log("c =", c);
    console.log("alpha =", alpha);
    console.log("beta =", beta);

    return "success";
}
