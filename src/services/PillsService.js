import { db } from '~config/firebase';

const getPills = (name = '') =>
  new Promise(res => {
    db.collection('pills')
      .orderBy('name')
      .startAt(name)
      .endAt(`${name}\uf8ff`)
      .get()
      .then(pills => res({ ok: true, data: pills.docs.map(d => d.data()) }));
  });

export default {
  getPills
};
