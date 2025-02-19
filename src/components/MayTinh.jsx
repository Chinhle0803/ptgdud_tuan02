import React from "react";
import './mayTinh.css'

class Maytinh extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            a: '',
            b: '', 
            phepTinh: '',
            kq: ''
        }
    }
    
    handChange = (event)=> {
        this.setState({phepTinh: event.target.value})
    };

    handChangeA = (event)=> {
        this.setState({a: event.target.value})
    };
    handChangeB = (event)=> {
        this.setState({b: event.target.value})
    };
    onClick = () => {
        const {a,b , phepTinh} = this.state;
        let kq;
        if(phepTinh === '+')
            kq = (parseInt(a) + parseInt(b))
        else  if(phepTinh === '-')
            kq = (parseInt(a) - parseInt(b))
        else if(phepTinh === '*')
            kq =(parseInt(a) * parseInt(b))
        else  if(phepTinh === '/')
            kq = (parseInt(a) / parseInt(b))
        this.setState({kq})
    }
    render(){
        return (
        <>

        {/* <input type="text" name="" id="txtName" onChange={handChange}/>
        <button onChange={handChange}>Input</button>
        <p>{txtName}</p> */}
        <h1>Máy tính</h1>
        <input type="text" placeholder='Nhap a' onChange={this.handChangeA} className="txt"/>
        <br />
        <br />
        <input type="text" placeholder='Nhap b' onChange={this.handChangeB} className='txt'/>
        <br />
        <input type="radio" name='r_btn' value = '+' onChange={this.handChange} className="rad_btn"/>
        <span className="pt">+</span>
        <input type="radio" name='r_btn' value = '-' onChange={this.handChange} className="rad_btn"/>
        <span className="pt">-</span>
        <input type="radio" name='r_btn' value = '*' onChange={this.handChange} className="rad_btn"/>
        <span className="pt">*</span>
        <input type="radio" name='r_btn' value = '/' onChange={this.handChange} className="rad_btn"/>
        <span className="pt">/</span>

        <br />
        <button onClick={this.onClick} className="btn_submit">Giải</button>
        <p className="kq">{this.state.kq}</p>
        </>
        )
    }
}
export default Maytinh