const RegisterItems = [
    {
        label: 'Name',
        type: 'text',
        cName: 'form-control',
        placeholder:"Enter Your Name",
    },
    {
        label: 'E-mail',
        type: 'email',
        cName: 'form-control',
        placeholder:"Enter Your E-mail",
    },
    {
        label: 'Password',
        type: 'password',
        cName: 'form-control',
        placeholder:"Enter Password",
    },
    {
        label: 'Confirm Password',
        type: 'password',
        cName: 'form-control',
        placeholder:"Confirm Password",
    },

    {
        label: 'Select Your Gender',
        type: 'select',
        cName: 'form-select',
        id:"select",
        name:"Gender",
        value_1:'1',
        name_1:"Female",
        value_2:'2',
        name_2:"Male",
    },
    {
        label: 'Age',
        type: 'number',
        cName: 'form-control',
        placeholder:"Enter Your Age",
    },
]
export default RegisterItems;
