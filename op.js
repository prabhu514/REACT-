export default class DerivedState extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={myName:"Panvith"}
    }

    shouldComponentUpdate()
    {
        return false;
    }
   changeName=()=>{ this.setState({myName: "Deepan"});  }

    render()
    {
        return(
            <>
            <p>My name is {this.state.myName}</p>
            <button type='button' onClick={this.changeName}>Click me</button>
            </>
        )
    }
}
Manoj R2:29 PM
export default class Header extends React.Component {
   constructor(props)
   {
    super(props)
    this.state={myName:"Abhishek"}
   }

   componentDidMount()
   {
    setTimeout(()=>{this.setState({myName:"Sachin"})},5000)
   }

   getSnapshotBeforeUpdate(pProps,pState)
   {
    document.getElementById("id1").innerHTML="Before updating my name is "+pState.myName;
   }
componentDidUpdate()
   {
    document.getElementById("id2").innerHTML="After Updating my name is "+this.state.myName
   }
   render()
   {
    return(
        <>
        My name is {this.state.myName}
        <div id="id1"></div>
        <div id="id2"></div>
        </>
    )
   }
}