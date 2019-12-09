import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons' 

library.add(faFacebookF); 
library.add(faLinkedinIn); 


const CreateSocialMediaBtn = ({link, type}) => {
    const icons = { faFacebookF, faLinkedinIn, faEnvelope };
    const selectedIcon = Object.keys(icons).find(f => f.toLowerCase().includes(type.toLowerCase()));
    console.log(icons, selectedIcon)
    return (<li className="socialBtn"><a href={link}><FontAwesomeIcon icon={icons[selectedIcon]} /></a></li>)

    
}
const Social = ({links: socialMediaLinks}) => {
    return (<ul className="iconbar" >{socialMediaLinks.map(link => <CreateSocialMediaBtn link={link.url} type={link.type} />) }</ul>)
};

export default Social;