export const createInput = ({

}) => {
    const input = document.createElement('input');
    input.type = 'email';
    input.className = 'input--default'


    return input;
}