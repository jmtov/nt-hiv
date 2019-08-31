const admin = require('firebase');

admin.initializeApp({
  projectId: 'nt-hiv',
  databaseURL: 'https://nt-hiv.firebaseio.com'
});

export const db = admin.firestore();
