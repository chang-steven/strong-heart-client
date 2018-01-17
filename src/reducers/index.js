
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
  navBarLinks: {

    default: [
      {title: 'about', link: '/about'},
      {title: 'how it works', link: '/how-it-works'},
      {title: 'analysis', link: '/analysis'},
      {title: 'login', link: '/login'}
    ],

    loggedin: [
      {title: 'dashboard', link: '/dashboard'},
      {title: 'about', link: '/about'},
      {title: 'how it works', link: '/how-it-works'},
      {title: 'analysis', link: '/analysis'}
    ],

    dashboard: [
      {title: 'dashboard', link: '/dashboard'},
      {title: 'exercise log', link: '/exercise-log'},
      {title: 'add exercise', link: '/add-exercise'},
      {title: 'badges', link: '/badges'}
    ]
  }
};

export const HeartStrongReducer = (state = initialState) => {
  return state;
};
