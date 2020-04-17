class TypeSearch extends React.Component{
    readType(event){
        event.preventDefault();
        let input= document.querySelector("#type");
        fetch("/api/pokemon/typeList/"+input.value)
        .then((res)=>{
            return res.json();
        }).then((processed)=>{
            let reporting =document.querySelector("#reportingArea");

            if(processed.error){
                reporting.innerHTML=processed.error;
            }else{
                console.log(processed);
                processed.forEach(index => {
                    reporting.innerHTML+= "<br> " + index.name;
                });
            }
        });
    }
    render(){
        return(
            <div>
                <form onSubmit={this.readType}>
                    <input id= "type" type="text" placeholder="Pokemon type"/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}
export default TypeSearch;