import { db } from '~config/firebase';

const getPills = (name = '') =>
  new Promise(res => {
    db.collection('pills')
      .orderBy('name')
      .startAt(name)
      .endAt(`${name}\uf8ff`)
      .get()
      .then(pills =>
        res({
          ok: true,
          data: pills.docs.map(d => Object.assign(d.data(), { id: d.id }))
        })
      );
  });

export default {
  getPills
};
