import Vue       from 'vue'
import Router    from 'vue-router'
import Home      from './views/Home.vue'
import About     from './views/About.vue'
import Portfolio from './views/Portfolio.vue'
import Contact   from './views/Contact.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about-me',
      name: 'About',
      component: About
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/contact-me',
      name: 'Contact',
      component: Contact
    }
  ]
})
