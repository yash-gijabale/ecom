import React from "react";

class Atm extends React.Component {

constructor(){
    super();
    this.state = {
        users : [
            {
                id: '',
                name: '',
                password: '',
                opening_bal:''
            }
        ],
        data: this.oldData()
    }

}
oldData = () =>{
    
    let getData = JSON.parse(localStorage.getItem('users'))
    // let data = JSON.parse(getData[0])
    // return data
    return getData;


}
openAccount = (e) =>{
    e.preventDefault();
    let userName = document.getElementById('username');
    let password = document.getElementById('password');
    let openingAmt = document.getElementById('opening-amount');
    let inputData = [
        {
            id: 1,
            name: userName.value,
            password: password.value,
            opening_bal: openingAmt.value
        }
    ]
    // let userData = inputData[0]
    let oldData = Object.assign({},JSON.parse(this.oldData()))
    // console.log(oldData)

    let prevData = [...inputData];
    for(let ind in oldData){
        prevData.push(oldData[ind])
    }
    // let tmp = ['h','e'];
    // prevData.push(inputData)
    console.log(prevData)
    // this.setState({users: inputData},()=>{
        // let getOldData =  localStorage.getItem('users')
    //     // console.log(typeof(getOldData));
        
    //     let data = JSON.stringify(this.state.users);
    //     // getOldData.push(data)
    //     let newData = [getOldData, data];
    //     console.log(newData)
        // localStorage.setItem('users',JSON.stringify(prevData));
    //     userName.value = ''
    //     password.value= ''
    //     openingAmt.value= ''
    // })
}

componentDidMount(){
    console.log(this.state.data)
}
componentDidCatch
render(){
    return(
        <div className="container">
            <h1>Hello from Atm !!</h1>

            <div className="opening-form">
                <form>
                <input type="text" placeholder="Enter username" id="username" required/>
                <input type="password" placeholder="Enter password" id="password" required/>
                <input type="number" placeholder="Enter Amount" id="opening-amount" required/>
                <button type="submit" onClick={this.openAccount} >Submit</button>
                </form>
                
            </div>
        </div>
    )
}

}

export default Atm;