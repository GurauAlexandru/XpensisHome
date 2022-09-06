import avatarAlex from '../assets/avatars/alexAvatar.png';

const users = [
  {
    name: 'Alexandru',
    email: 'alex@m.com',
    password: 'parola',
    avatar: avatarAlex,
    year: {
      2022: {
        august: {
          income: {
            salary: 5000,
            others: [500, 150],
          },
          outcome: {
            bills: {
              electricity: 50,
              gaz: 150,
              morgage: 120,
              rent: 160,
              tv: 39,
              internet: 29,
              phone: 25,
              bank: 865,
              fuel: 500,
            },
            others: [1500, 200],
          },
        },
        iulie: {
          income: {
            salary: 6000,
            others: [200],
          },
          outcome: {
            bills: {
              electricity: 60,
              gaz: 130,
              morgage: 120,
              rent: 150,
              tv: 39,
              internet: 29,
              phone: 25,
              bank: 865,
              fuel: 500,
            },
            others: [1500],
          },
        },
        september: {
          salary: 5200,
        },
      },
    },
  },
  {
    name: 'Ioana',
    email: 'ioana@m.com',
    password: 'parola',
    year: {
      2022: {
        august: {
          income: {
            salary: 3000,
            others: [500],
          },
          outcome: {
            bills: {
              electricity: 50,
              gaz: 150,
              morgage: 120,
              rent: 160,
              tv: 39,
              internet: 29,
              phone: 25,
              bank: 865,
              fuel: 500,
            },
            others: [1500, 200],
          },
        },
        iulie: {
          income: {
            salary: 6000,
            others: [200],
          },
          outcome: {
            bills: {
              electricity: 60,
              gaz: 130,
              morgage: 120,
              rent: 150,
              tv: 39,
              internet: 29,
              phone: 25,
              bank: 865,
              fuel: 500,
            },
            others: [1500],
          },
        },
        september: {
          salary: 5200,
        },
      },
    },
  },
];

export default users;
