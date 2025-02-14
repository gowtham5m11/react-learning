//pascal scading is a convention for naming components in this case captial M
function Message(){
    //returning a jsx element
    var name = "gowtham"
    if (name == "gowtham"){
        return <h1>hello {name}</h1>
    }
    else
        return <h1>this is random {name} </h1>
}
export default Message;