import React from "react"

const About = React.lazy(() => import('./pages/about'));
const Contact = React.lazy(() => import('./pages/contact'));
const Gallery = React.lazy(() => import('./pages/gallery'));
const Manage = React.lazy(() => import('./pages/manage'));
const PrivateEvents = React.lazy(() => import('./pages/privateEvents'));
const Testimonials = React.lazy(() => import('./pages/testimonials'));
const Store = React.lazy(() => import('./pages/store'));

const Home = About

const routes = [
    {path:'/', exact: true, name: 'Home', component: Home},
    {path:'/about', exact: false, name: 'About Love Eat Local', component: About},
    {path:'/contact', exact: false, name: 'Contact Us', component: Contact},
    {path:'/gallery', exact: false, name: 'Gallery', component: Gallery},
    {path:'/manage', exact: false, name: 'LEL Manager', component: Manage},
    {path:'/store', exact: false, name: 'Provisions Store', component: Store},
    {path:'/privateEvents', exact: false, name: 'Private Events', component: PrivateEvents},
    {path:'/testimonials', exact: false, name: 'Testimonials', component: Testimonials},
]

export default routes;