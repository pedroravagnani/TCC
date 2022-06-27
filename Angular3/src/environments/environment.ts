// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'tcc-pedrofonseca',
    appId: '1:624022912954:web:1c7964c173c1e63fbba783',
    databaseURL: 'https://tcc-pedrofonseca.firebaseio.com',
    storageBucket: 'tcc-pedrofonseca.appspot.com',
    apiKey: 'AIzaSyANzLoQ7-uEDtomgnvLT7bbF25Mug-9_kA',
    authDomain: 'tcc-pedrofonseca.firebaseapp.com',
    messagingSenderId: '624022912954',
    measurementId: 'G-JRP13RF6Q3',
  },
  production: false
};

export const firebaseConfig = {
  apiKey: 'AIzaSyANzLoQ7-uEDtomgnvLT7bbF25Mug-9_kA',
  authDomain: 'tcc-pedrofonseca.firebaseapp.com',
  databaseURL: 'https://tcc-pedrofonseca.firebaseio.com',
  projectId: 'tcc-pedrofonseca',
  storageBucket: 'tcc-pedrofonseca.appspot.com',
  messagingSenderId: '624022912954'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
