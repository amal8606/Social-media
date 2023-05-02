export class userServices {
  users: any[] = [
    {
      name: 'Emily',

      profile_pic: 'https://randomuser.me/api/portraits/women/65.jpg',

      active: true,

      posts: [
        {
          post_id: 1,
          post_link:
            'https://free4kwallpapers.com/uploads/originals/2019/02/04/unsplash-smile-wallpaper.jpg',
          post_time: '2023-04-26T14:30:00.000Z',
          caption:
            'Cuddle time with my furry best friend! #catsofinstagram #caturday',
        },

        {
          post_id: 2,
          post_link: 'https://loremflickr.com/1200/800?random=456',
          post_time: '2023-04-25T09:15:00.000Z',
        },

        {
          post_id: 3,
          post_link: 'https://loremflickr.com/1200/800?random=178',
          post_time: '2023-04-24T18:45:00.000Z',
        },
      ],
    },

    {
      name: 'Alex',

      profile_pic: 'https://randomuser.me/api/portraits/men/42.jpg',

      active: false,

      posts: [
        {
          post_id: 1,
          post_link:
            'https://images.unsplash.com/photo-1610847499832-918a1c3c6811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
          post_time: '2023-04-26T08:00:00.000Z',
          caption: 'Just enjoying the simple pleasures in life. #catlife #cozy',
        },

        {
          post_id: 2,
          post_link: 'https://loremflickr.com/1200/800?random=123',
          post_time: '2023-04-23T11:30:00.000Z',
        },
      ],
    },

    {
      name: 'Sarah',

      profile_pic: 'https://randomuser.me/api/portraits/women/87.jpg',

      active: true,

      posts: [
        {
          post_id: 1,
          post_link:
            'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGhpbmtpbmd8ZW58MHx8MHx8&w=1000&q=80',
          post_time: '2023-04-25T17:00:00.000Z',
          caption:
            "If you need me, I'll be napping with my kitty. #catnap #snuggles",
        },

        {
          post_id: 2,
          post_link: 'https://loremflickr.com/1200/800?random=258',
          post_time: '2023-04-23T08:45:00.000Z',
        },

        {
          post_id: 3,
          post_link: 'https://loremflickr.com/1200/800?random=159',
          post_time: '2023-04-22T12:15:00.000Z',
        },
      ],
    },

    {
      name: 'David',

      profile_pic: 'https://randomuser.me/api/portraits/men/18.jpg',

      active: true,

      posts: [
        {
          post_id: 1,
          post_link:
            'https://images.unsplash.com/photo-1529619768328-e37af76c6fe5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eSUyMG5pZ2h0fGVufDB8fDB8fA%3D%3D&w=1000&q=80',
          post_time: '2023-04-26T10:30:00.000Z',
          caption:
            'This is what pure happiness looks like. #catlove #felinefriendship',
        },

        {
          post_id: 2,
          post_link: 'https://loremflickr.com/1200/800?random=486',
          post_time: '2023-04-24T20:00:00.000Z',
        },
      ],
    },
  ];
  public photos = [
    {
      id: '1',
      url: 'data:image/jpeg;base64,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',
    },
    {id:'2',
  url:'https://www.xtrafondos.com/wallpapers/vertical/goku-ilustracion-minimalista-6187.jpg'},
  {id:'3',url:'https://container-news.com/wp-content/uploads/2021/04/Picture-1.jpg'},
  {id:'4',url:'https://images3.alphacoders.com/114/1149777.jpg'}
  ];
}
