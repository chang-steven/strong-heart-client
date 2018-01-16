
const initialState = {
  badges: [
    {
      name: 'Got Started',
      link: 'http://via.placeholder.com/200x200',
      earned: true,
      date: 321321,
    },
    {
      name: 'Two in a Row',
      link: 'http://via.placeholder.com/200x200',
      earned: false,
      date: 121232,
    },
  ],
  appStaticContent: {
    homeContent: [
      {
        title: 'about',
        content: 'http://via.placeholder.com/400x200',
      },
      {
        title: 'how it works',
        content: 'http://via.placeholder.com/400x200',
      },
      {
        title: 'analysis',
        content: 'http://via.placeholder.com/400x200',
}
    ],
  },
  exerciseLog: [
    {
      date: '1111111',
      duration: 30,
      type: 'tennis'
    },
    {
      date: '321321321',
      duration: 55,
      type: 'basketball'
    },
    {
      date: '1111111',
      duration: 30,
      type: 'tennis'
    },
    {
      date: '321321321',
      duration: 55,
      type: 'basketball'
    },
    {
      date: '1111111',
      duration: 30,
      type: 'tennis'
    },
    {
      date: '321321321',
      duration: 55,
      type: 'basketball'
    },
  ],
};

export const HeartStrongReducer = (state = initialState) => {
  return state;
};
