import Vue from 'vue';
import Router from 'vue-router';
/* Lists  main menu */
import Home from '@/components/pages/home/Home';
import Product from '@/components/pages/product/Product';
import Project from '@/components/pages/project/Project';
import Collection from '@/components/pages/collection/Collection';
import Event from '@/components/pages/event/Event';
import About from '@/components/pages/about/About';
import Blog from '@/components/pages/blog/Blog';
import Contact from '@/components/pages/contact/Contact';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TRANG CHỦ',
      component: Home,
    },
    {
      path: '/product',
      name: 'SẢN PHẨM',
      component: Product,
    },
    {
      path: '/project',
      name: 'DỰ ÁN',
      component: Project,
    },
    {
      path: '/collection',
      name: 'BỘ SƯU TẬP',
      component: Collection,
    },
    {
      path: '/event',
      name: 'Event',
      component: Event,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/about',
      name: 'VỀ MIN',
      component: About,
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog,
    },
    {
      path: '/contact',
      name: 'LIÊN HỆ',
      component: Contact,
    },
  ],
});
