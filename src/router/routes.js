const routes = [
  {
    path: "/auth",
    component: () => import("pages/login.vue"),
    name: "login",
    meta: { loginRequired: true }
  },
  {
    path: "/",
    component: () => import("layouts/adminLayout.vue"),
    meta: { authRequired: true },
    children: [
      {
        path: "/",
        name: "dashboard",
        component: () => import("pages/admin/SYSTEMOVERVIEW.vue")
      }
    ]
  },
  {
    path: "/",
    component: () => import("layouts/registrarLayout.vue"),
    meta: { authRequired: true },
    children: [
      {
        path: "/registrarCor",
        component: () => import("pages/admin/registrar/cor.vue")
      },
      {
        path: "/registrarStudents",
        component: () => import("pages/admin/registrar/students.vue")
      },
      {
        path: "/registrarPersonnel",
        component: () => import("pages/admin/registrar/personnel.vue")
      },
      {
        path: "/registrarSubjects",
        component: () => import("pages/admin/registrar/subjects.vue"),
        children: [
          {
            path: "/schoolyear",
            component: () =>
              import("components/registrar/subjectsCompo/schoolYear.vue")
          }
        ]
      },
      {
        path: "/registrarPrograms",
        component: () => import("pages/admin/registrar/programs.vue")
      }
    ]
  },
  {
    path: "/",
    component: () => import("layouts/libraryLayout.vue"),
    meta: { authRequired: true },
    children: [
      {
        path: "/libraryCatalog",
        component: () => import("pages/admin/library/catalog.vue")
      },
      {
        path: "/libraryStatistics",
        component: () => import("pages/admin/library/statistics.vue")
      },
      {
        path: "/libraryBorrowers",
        component: () => import("pages/admin/library/borrowers.vue")
      },
      {
        path: "/libraryPenalties",
        component: () => import("pages/admin/library/penalties.vue")
      }
    ]
  },
  {
    path: "/",
    component: () => import("layouts/publicViews/qrcodeLayout.vue"),
    meta: { authRequired: true },
    children: [
      {
        path: "/libraryLoginQR",
        name: "libraryLoginqr",
        component: () => import("pages/qrcodeReader/libraryReader.vue")
      }
    ]
  },
  {
    path: "/nbw",
    component: () => import("pages/publicArea/libraryPublic/NBW.vue")
  },
  {
    path: "/QBelem",
    component: () => import("pages/publicArea/libraryPublic/QBelem.vue")
  },
  {
    path: "/poll",
    component: () => import("pages/publicArea/libraryPublic/pollvote.vue")
  },
  {
    path: "/statLive",
    component: () => import("pages/publicArea/libraryPublic/STATLIVE.vue")
  }
  // {
  //   path: '/libraryLoginQR',
  //   component: () => import('pages/qrcodeReader/libraryReader.vue')
  // }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
