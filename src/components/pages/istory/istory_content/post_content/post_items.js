const PostItems = [
    {

        type: 'textarea',
        cName: 'form-control',
        placeholder:"What's on your mind?",
        rows: "4",
        id:"label"

    },
    {
        label: 'Who can see your post?',
        type: 'select',
        cName: 'form-select col-6',
        id:'select',
        name:"Who can see your post?",
        value_1:'1',
        name_1:"Public (anyone on or off healthyweight)",
        value_2:'2',
        name_2:"Users (only users of healthyweight )",
    },
    {
        label: 'Choose file',
        type: 'file',
        cName: 'custom-file col-6 ',
        id:"filey",

    },

]

export default PostItems;
