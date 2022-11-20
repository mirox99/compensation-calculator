import Vue from 'vue'
import VueRouter from 'vue-router'

let HomeView = () => import( '../views/HomeView.vue')
let CompensationCalculatorView = () => import( '../views/CompensationCalculatorView.vue')

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
},
    {
        path: '/compensation-calculator',
        name: 'compensationCalculator',
        component: CompensationCalculatorView
    }]

const router = new VueRouter({
    mode: 'history', base: process.env.BASE_URL, routes
})

export default router
