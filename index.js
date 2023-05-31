function pow(num, degree) {
    if (degree !== 1) {
        return num * pow(num, degree - 1);
    } else {
        return num;
    }
}

const num = +prompt('Введіть число, яке потрібно піднести до ступеню.');
const degree = +prompt ('Введіть ступінь в яку потрібно піднести число.')
alert(`Значення числа ${num} в ступені ${degree} дорівнює: ${pow(num, degree)}`);