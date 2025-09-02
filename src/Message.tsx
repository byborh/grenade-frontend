function Message() {
    const name = "Batman"
    if(name)
        return <h1>Hello {name === "Batman" ? "Batman" : "World"} !</h1>
    else
        return <h1>Hello World !</h1>
    }

export default Message