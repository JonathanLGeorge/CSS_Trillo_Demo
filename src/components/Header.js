import React, { Component } from 'react'

export class Header extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             value: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    render() {
        return (
            <header>
                <img src="" alt="trillo logo" class="logo"></img>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />        
                    </label>
                    <input type="submit" value="Submit" />
                </form>

                <nav class="user-nav">
                    <div class="user-nav__icon-box">
                        <svg class="user-nav__icon">
                            
                        </svg>
                        <span class="user-nav__notification">7</span>
                    </div>
                    <div class="user-nav__icon-box">
                        <svg class="user-nav__icon"/>
                            
                        <span class="user-nav__notification">13</span>
                    </div>
                    <div class="user-nav__user">
                        <img src="img/user.jpg" alt="User photo" class="user-nav__user-photo"/>
                        <span class="user-nav__user-name">Jonas</span>
                    </div>
                </nav>
            </header>
            
        )
    }
}

export default Header
