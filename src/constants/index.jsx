import logo from '../assets/images/logo.svg'
export const logoIcon = {logo}



export const navItems = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
]

export const footerItems = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
]

// social
import facebook from '../assets/images/icon-facebook.svg'
import instagram from '../assets/images/icon-instagram.svg'
import pinterest from '../assets/images/icon-pinterest.svg'
import twitter from '../assets/images/icon-twitter.svg'

export const contacts = [
    {src:facebook, alt:'facebook'},
    {src:instagram, alt:'instagram'},
    {src:pinterest, alt:'pinterest'},
    {src:twitter, alt:'twitter'},
]

// profile
import emilyProfile from '../assets/images/image-emily.jpg'
import jennieProfile from '../assets/images/image-jennie.jpg'
import thomasProfile from '../assets/images/image-thomas.jpg'

export const testimonials = [
    {
        user: "Emily R.",
        cargo: "Marketing Director",
        text: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
        image: emilyProfile
    },
    {
        user: "Thomas S.",
        cargo: "Chief Operating Officer",
        text: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
        image: thomasProfile
    },
    {
        user: "Jennie F.",
        cargo: "Business Owner",
        text: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
        image: jennieProfile
    },
]

