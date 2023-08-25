const theme = {
    containerStyles: {
        backgroundColor: "#323032",
        margin: "0 auto",
        textAlign: "center",
        padding: "30px",
        position: "relative"
    },

    h1: {
        textTransform: "uppercase",
        color: "#44c0b6",
        fontSize: "35px"
    },

    empty: {
        color: "#cf972e",
        fontSize: "20px",
        textTransform: "capitalize"
    },

    box: {
        margin: "40px auto",
        padding: "20px"
    }, 

    searchInput: {
        width: '350px',
        color: 'white',
    },
    
    button: {
        width: '120px',
        padding: '10px',
        marginLeft: "20px",
        backgroundColor: "#219b91",
        transition: ".2s",
        "&:hover": {
            backgroundColor: "#166b64",
        } 
    },

    todo: {
        width: "37%",
        backgroundColor: "#494847",
        textAlign: "left",
        padding: "5px 20px",
        borderLeft: "5px solid #cf972e",
        color: "#bdbdbd",
        margin: "10px auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        wordWrap: "break-word"
    },

    readyTask: {
        textDecoration: "line-through 3px #a1362aaa"
    }
}

export default theme;