const routes = [
    {
        path: '/',
        component: () => import('../layouts/DefaultLayout.vue'),
        children: [
            {
                path: '',
                name: 'Home',
                component: () => import('../pages/Home.vue')
            },
            {
                path: "/create-listing",
                component: () => import("/src/components/CreateListing.vue"),
            },
            {
                path: "/listings/:id",
                component: () => import("/src/components/Listing.vue"),
            },
        ]
    },
];

export default routes;