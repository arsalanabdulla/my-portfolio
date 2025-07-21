import Link from "next/link";
import {FaYoutube,FaGithub,FaLinkedin,FaFacebook} from "react-icons/fa"

const links=[
    {
        icon:<FaGithub />,
        path:"https://github.com/arsalanabdulla"
    },
        {
        icon:<FaLinkedin />,
        path:"https://iq.linkedin.com/in/arsalan-abdulla-4a55a3141"
    },
        {
        icon:<FaYoutube />,
        path:"https://www.youtube.com/@arsalanabdulla9066"
    },
        {
        icon:<FaFacebook />,
        path:"https://facebook.com/Arsalan.Abdolla"
    },
]
const Socials = ({cStyle,iStyle}) => {
    return <div className={cStyle}>
        {links.map((item,index)=>{
            return (
                <Link key={index} target="_blank" href={item.path} className={iStyle}>{item.icon}</Link>
            )
        })}
    </div>;
}
 
export default Socials;