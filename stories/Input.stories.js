import './button.css';


export default {
    title: 'Forms/Input',
};

  const Input = ({}) => {
    return `
        <label for="input--email">E-mail</label>
        <input id="input--email" class="input--default" type="email" autocomplete="email">
    `
  };

export const InputField = Input.bind({});

 