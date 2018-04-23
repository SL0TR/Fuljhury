
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/index') },
      { path: 'company', component: () => import('pages/company') },
      { path: 'factory', component: () => import('pages/factory') },
      { path: 'certifications', component: () => import('pages/certifications') },
      { path: 'product', component: () => import('pages/product') },
      { path: 'contact', component: () => import('pages/contact') }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
