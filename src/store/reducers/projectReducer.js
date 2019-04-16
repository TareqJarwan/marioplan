const initState = {
    projects: [
        {id: '1', title: " 1 help me find peach", content: "blah blah blah"},
        {id: '2', title: " 2 help me find peach", content: "blah blah blah"},
        {id: '3', title: " 3 help me find peach", content: "blah blah blah"},
    ]
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('created project error', action.err);
            return state;
        default:
            return state;

    }
};


export default projectReducer;