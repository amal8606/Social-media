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
          post_link: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGhpbmtpbmd8ZW58MHx8MHx8&w=1000&q=80',
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
          post_link: 'https://images.unsplash.com/photo-1529619768328-e37af76c6fe5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eSUyMG5pZ2h0fGVufDB8fDB8fA%3D%3D&w=1000&q=80',
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
}
