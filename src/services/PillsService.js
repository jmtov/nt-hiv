import { pills } from '~constants/MOCK_DATA';

const getPills = name =>
  new Promise(resolve => {
    const newPills = name ? pills.filter(pill => pill.name.includes(name)) : pills;
    resolve({ ok: true, data: newPills });
  });

export default {
  getPills
};
