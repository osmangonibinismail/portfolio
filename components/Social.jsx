import Link from "next/link"
import {FaGithub, FaLinkedinIn, FaYoutube, FaTwitter, FaFacebook} from "react-icons/fa"

const socials = [
    {icon: <FaGithub/>, path: 'https://github.com/osmangonibinismail'},
    {icon: <FaLinkedinIn/>, path: 'https://www.linkedin.com/in/osman-goni-3875562b3/'},
    {icon: <FaFacebook/>, path: 'https://www.facebook.com/profile.php?id=100055381909189'},
    {icon: <FaYoutube/>, path: 'https://www.youtube.com/channel/UCHMVgmdGr06d28pssuvZgBg'},
    {icon: <FaTwitter/>, path: ''},
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {
        socials.map((item, index) => {
            return (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            )
        })
    }
    </div>
  )
}

export default Social
