const ContactItems = [
    {
        label: 'Your Name',
        type: 'text',
        placeholder: 'Enter Your Full Name',
        required: 'true'
    },
    {
        label: 'Your E-mail',
        type: 'email',
        placeholder: 'Enter Your E-mail : HealthyWeight@gmail.com',
        required: 'true'

    },
    {
        label: 'Subject',
        type: 'text',
        placeholder: 'Enter Your Subject',
        required: 'false'
    },
    {
        label: 'Message',
        type: 'textarea',
        placeholder: 'Please Enter Your Message Here',
        required: 'true',
        rows: "4",


    },
]

export default ContactItems;
