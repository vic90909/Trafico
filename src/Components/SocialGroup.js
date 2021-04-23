import React, { Component } from 'react'
import '../CSSComponents/SocialGroup.css'
import facebook from '../images/f.png'
import twitter from '../images/twitter.png'
import instagram from '../images/i.png'
export default class SocialGroup extends Component {
    render() {
        return (
            <div>
                <img className="facebook" onClick={()=>{window.open('https://www.facebook.com')}} src={facebook}/>
                <img className="twitter" onClick={()=>{window.open('https://www.twitter.com')}} src={twitter}/>
                <img className="instagram" onClick={()=>{window.open('https://www.instagram.com')}} src={instagram}/>
            </div>
        )
    }
}
