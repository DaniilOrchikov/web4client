import Swal from "sweetalert2";

export function validate(a1, a2, input) {
    // удаляем все посторонние символы кроме минуса (если отрицательные числа входят в диапазон) и запятой
    input.value = input.value.replace(a1 < 0 ? /[^\d.-]/g : /[^\d.]/g, '')

    // удаляем все минусы которые находяться не в самом начале строки (перед ним есть цифра, запятая или другой минус)
    input.value = input.value.replace(/(?<=\d|-|.)-/g, "")

    // удаляем все запятые, кроме первой
    let parts = input.value.split(".");
    if (parts.length > 2)
        input.value = parts.shift() + "." + parts.join("")

    let value = input.value.replace(",", ".")
    if (value < a1 || value > a2 || isNaN(value)) {
        input.style.borderBottomColor = "red"
        input.style.backgroundColor = "rgba(255, 0, 0, 0.2)"
    } else {
        input.style.borderColor = ""
        input.style.backgroundColor = ""
    }
    return value
}

export function second_validation(a1, a2, input) {
    if (input.value <= a1 || input.value >= a2 || isNaN(input.value) || !input.value) {
        Swal.fire({
            icon: 'error',
            color: '#716add',
            title: "Enter a number in the range (" + a1 + "; " + a2 + ")\n for the field " + input.id,
            customClass: 'alert',
            didOpen: () => {
                document.querySelector('.swal2-container').style.backdropFilter = 'blur(5px)';
            },
            willClose: () => {
                document.querySelector('.swal2-container').style.backdropFilter = 'none';
            },
            backdrop: 'rgba(100,0,0,0.4)'
        })
        return false
    } else {
        return true
    }
}