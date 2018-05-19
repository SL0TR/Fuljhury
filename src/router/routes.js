
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', name: 'fuljhury', component: () => import('pages/index'), meta: { title: 'Fuljhury' } },
      { path: 'company', name: 'company', component: () => import('pages/company'), meta: { title: 'Company' } },
      { path: 'factory', name: 'factory', component: () => import('pages/factory'), meta: { title: 'Factory' } },
      { path: 'certifications', name: 'certficiations', component: () => import('pages/certifications'), meta: { title: 'Certifications' } },
      { path: 'product', name: 'product', component: () => import('pages/product'), meta: { title: 'Product' } },
      { path: 'contact', name: 'contact', component: () => import('pages/contact'), meta: { title: 'Contact' } }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
