import { createRouter, createWebHistory } from "vue-router";
import ProductsView from "../views/ProductsView.vue";
import HomeView from "../views/HomeView.vue";
import PostView from "../views/PostsView.vue";
import AssignmentsView from "../views/AssignementView.vue";
import UpdatePostView from "../views/UpdatePostView.vue";
const routes = [{
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/products",
        name: "products",
        component: ProductsView,
    },
    {
        path: "/posts",
        name: "posts",
        component: PostView,
    },
    {
        path: "/post/:id",
        name: "post",
        component: UpdatePostView,
    },
    {
        path: "/list",
        name: "list",
        component: AssignmentsView,
    },


];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;