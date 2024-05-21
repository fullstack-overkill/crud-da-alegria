# Base da arquitetura do cliente

Usando uma arquitetura similar a que utilizei em um back-end (nest.js) recentemente

src/
├── app/
│   ├── core/
│   │   ├── guards/
│   │   ├── interceptors/
│   │   ├── models/
│   │   ├── services/
│   │   └── core.module.ts
│   ├── shared/
│   │   ├── components/
│   │   ├── directives/
│   │   ├── pipes/
│   │   └── shared.module.ts
│   ├── features/
│   │   ├── feature1/
│   │   │   ├── components/
│   │   │   ├── services/
│   │   │   ├── models/
│   │   │   └── feature1.module.ts
│   │   └── feature2/
│   │       ├── components/
│   │       ├── services/
│   │       ├── models/
│   │       └── feature2.module.ts
│   ├── layout/
│   │   └── layout.module.ts
│   ├── pages/
│   │   ├── login/
│   │   │   ├── login.component.ts
│   │   │   ├── login.component.html
│   │   │   ├── login.component.css
│   │   │   └── login.module.ts
│   │   └─ register/
│   │       ├── register.component.ts
│   │       ├── register.component.html
│   │       ├── register.component.css
│   │       └── register.module.ts
│   │
│   ├── app-routing.module.ts
│   ├── app.component.ts
│   ├── app.module.ts
│   └── app.component.html
├── assets/
│   ├── images/
│   ├── styles/
│   └── ... (outros ativos)
├── environments/
│   ├── environment.ts
│   └── environment.prod.ts
├── styles/
│   └── global-styles.css
├── main.ts
└── index.html
