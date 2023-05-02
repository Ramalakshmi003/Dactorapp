const DoctorsList = [
    {
        id: 1,
        doctorName: 'Dr. Taylor samaro',
        doctorImg: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN3ywOYM_VL4rqLIfKeDJz0vMbZDPOP_bejA&usqp=CAU' },
        role: 'Dental Sargon',
        starRating : {uri : 'https://media.istockphoto.com/id/1360181877/vector/3d-render-stars-isolated-on-white-background-3d-cartoon-icon-of-five-star-for-mobile-app-and.jpg?s=612x612&w=0&k=20&c=89kvWolbOvUQFcjVPveb_IVcztSXhatZTkWXza3dp-Y='},
        heartImage : {uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtx92bUQQeCL28rwlxQ8mq2hETStgc-nnt5g&usqp=CAU'},
        redHeart : {uri : 'https://media.istockphoto.com/id/1193017202/photo/heart-shape.jpg?b=1&s=170667a&w=0&k=20&c=FMo5dum6NvVvbdvPPMXzw32s1jPXge96hl63LNL-U5I='}
    },
    {
        id: 2,
        doctorName: 'Dr. Iker Bureau',
        doctorImg: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7uKys2DE6zUZjLkmJY-SY9eAcasXgW5XVOg&usqp=CAU' },
        role: 'Lung Sargon',
        starRating : {uri : 'https://media.istockphoto.com/id/1360181877/vector/3d-render-stars-isolated-on-white-background-3d-cartoon-icon-of-five-star-for-mobile-app-and.jpg?s=612x612&w=0&k=20&c=89kvWolbOvUQFcjVPveb_IVcztSXhatZTkWXza3dp-Y='},
        heartImage : {uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtx92bUQQeCL28rwlxQ8mq2hETStgc-nnt5g&usqp=CAU'},
        redHeart : {uri : 'https://media.istockphoto.com/id/1193017202/photo/heart-shape.jpg?b=1&s=170667a&w=0&k=20&c=FMo5dum6NvVvbdvPPMXzw32s1jPXge96hl63LNL-U5I='}
    },
    {
        id: 3,
        doctorName: 'Dr. Edwin Carli',
        doctorImg: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsjHXK4Wv3Zw0MjUgzirseL5vqMkvil60O3Q&usqp=CAU' },
        role: 'Kidney Sargon',
        starRating : {uri : 'https://media.istockphoto.com/id/1360181877/vector/3d-render-stars-isolated-on-white-background-3d-cartoon-icon-of-five-star-for-mobile-app-and.jpg?s=612x612&w=0&k=20&c=89kvWolbOvUQFcjVPveb_IVcztSXhatZTkWXza3dp-Y='},
        heartImage : {uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtx92bUQQeCL28rwlxQ8mq2hETStgc-nnt5g&usqp=CAU'},
        redHeart : {uri : 'https://media.istockphoto.com/id/1193017202/photo/heart-shape.jpg?b=1&s=170667a&w=0&k=20&c=FMo5dum6NvVvbdvPPMXzw32s1jPXge96hl63LNL-U5I='}
    },
    {
        id: 4,
        doctorName: 'Dr. Ramdass',
        doctorImg: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOl27bFHbM-byUFgECkB3TgnRGEHmQ_2CBcg&usqp=CAU' },
        role: 'Heart Sargon',
        starRating : {uri : 'https://media.istockphoto.com/id/1360181877/vector/3d-render-stars-isolated-on-white-background-3d-cartoon-icon-of-five-star-for-mobile-app-and.jpg?s=612x612&w=0&k=20&c=89kvWolbOvUQFcjVPveb_IVcztSXhatZTkWXza3dp-Y='},
        heartImage : {uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtx92bUQQeCL28rwlxQ8mq2hETStgc-nnt5g&usqp=CAU'},
        redHeart : {uri : 'https://media.istockphoto.com/id/1193017202/photo/heart-shape.jpg?b=1&s=170667a&w=0&k=20&c=FMo5dum6NvVvbdvPPMXzw32s1jPXge96hl63LNL-U5I='}
    },
    {
        id: 5,
        doctorName: 'Dr. Mary Jebastin',
        doctorImg: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi98mKArVwdsJm_ZLM_6jFkNYwQiUZeZ9wAQ&usqp=CAU' },
        role: 'Nerves Sargon',
        starRating : {uri : 'https://media.istockphoto.com/id/1360181877/vector/3d-render-stars-isolated-on-white-background-3d-cartoon-icon-of-five-star-for-mobile-app-and.jpg?s=612x612&w=0&k=20&c=89kvWolbOvUQFcjVPveb_IVcztSXhatZTkWXza3dp-Y='},
        heartImage : {uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtx92bUQQeCL28rwlxQ8mq2hETStgc-nnt5g&usqp=CAU'},
        redHeart : {uri : 'https://media.istockphoto.com/id/1193017202/photo/heart-shape.jpg?b=1&s=170667a&w=0&k=20&c=FMo5dum6NvVvbdvPPMXzw32s1jPXge96hl63LNL-U5I='}
    },
    {
        id: 6,
        doctorName: 'Dr. George',
        doctorImg: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOl27bFHbM-byUFgECkB3TgnRGEHmQ_2CBcg&usqp=CAU' },
        role: 'Brain Specialist',
        starRating : {uri : 'https://media.istockphoto.com/id/1360181877/vector/3d-render-stars-isolated-on-white-background-3d-cartoon-icon-of-five-star-for-mobile-app-and.jpg?s=612x612&w=0&k=20&c=89kvWolbOvUQFcjVPveb_IVcztSXhatZTkWXza3dp-Y='},
        heartImage : {uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtx92bUQQeCL28rwlxQ8mq2hETStgc-nnt5g&usqp=CAU'},
        redHeart : {uri : 'https://media.istockphoto.com/id/1193017202/photo/heart-shape.jpg?b=1&s=170667a&w=0&k=20&c=FMo5dum6NvVvbdvPPMXzw32s1jPXge96hl63LNL-U5I='}
    },
    {
        id: 7,
        doctorName: 'Dr. Chandrakala',
        doctorImg: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi98mKArVwdsJm_ZLM_6jFkNYwQiUZeZ9wAQ&usqp=CAU' },
        role: 'Eye Specialist',
        starRating : {uri : 'https://media.istockphoto.com/id/1360181877/vector/3d-render-stars-isolated-on-white-background-3d-cartoon-icon-of-five-star-for-mobile-app-and.jpg?s=612x612&w=0&k=20&c=89kvWolbOvUQFcjVPveb_IVcztSXhatZTkWXza3dp-Y='},
        heartImage : {uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtx92bUQQeCL28rwlxQ8mq2hETStgc-nnt5g&usqp=CAU'},
        redHeart : {uri : 'https://media.istockphoto.com/id/1193017202/photo/heart-shape.jpg?b=1&s=170667a&w=0&k=20&c=FMo5dum6NvVvbdvPPMXzw32s1jPXge96hl63LNL-U5I='}
    },
]

export default DoctorsList;