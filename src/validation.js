import {required, max, min} from "vee-validate/dist/rules";
import {extend} from "vee-validate";

extend("required", {
    ...required,
    message: "Поле обязательно для заполнения"
});

extend("max", {
    ...max,
    message: "Поле должно быть меньше {length} символов"
});

extend("min", {
    ...min,
    message: "Поле должно быть больше {length} символов"
});