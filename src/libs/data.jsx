import {FaHome} from "react-icons/fa"
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter, FaGlobe} from 'react-icons/fa'
import { TbTransferIn } from "react-icons/tb";
import { IoMdRocket } from "react-icons/io";

const loginLinks = [
    { 
      link: "/news",
      icon: <FaGithub />,
      text:"Log in with GitHub"
    },
    { 
      link: "/news",
      icon: <FcGoogle />,
      text:"Log in with Google"
    }
]
const signupLinks = [
    { 
      link: "/news",
      icon: <FaGithub />,
      text:"Sign up with GitHub"
    },
    { 
      link: "/news",
      icon: <FcGoogle />,
      text:"Sign up with Google"
    }
]

const navLinks = [
  {
    id:1,
    url:'/dns_request',
    text:"requête DNS"
  },
  {
    id:2,
    url:'/active_domains',
    text:"Domaines actifs"
  },
  {
    id:3,
    url:'/userhome',
    text:"visit home page"
  }
]
const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <FaBehance />,
  },
  
]
const dashboardData = [
  {
    id:1,
    title: "Getting Started",
    icon: <IoMdRocket />,
    listItems: [{title:"Setup & Installation",
  link:"/account/userhome"}, {title:"Your Authtoken",link:"/account/authtoken"}]
  },
  {
    id:2,
    title: "Tunnels",
    icon:<TbTransferIn />,
    listItems: [{title:"Agents",link:"/account/agents"}]
  },
  
]
const authentificationData = {
  domain:"dev-aq870nmf2gqi3ezg.us.auth0.com",
  clientId:"u8FldhV3ZM2BCUxpe7ljnYxVmv0mRCTZ",
  redirect_uri:"http://localhost:5173"

}
export {social,navLinks,signupLinks,loginLinks, dashboardData, authentificationData}