module.exports = {
    username: /^[A-Za-z0-9_-]{3,16}$/,
    password: /^[A-Za-z0-9_-]{6,40}$/,
    firstName: /^[A-Za-z]{3,30}$/,
    lastName: /^[A-Za-z]{3,30}$/,
    phone: /[0-9+()]{3,20}$/,
    email: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    role: ['default', 'moderator', 'admin'],
    serviceType: ['horse walk', 'bulgarian food dinner',
        'folk concert', 'bungee jump', 'Fire-Dancer show',
        'parachute jump', 'Azis concert', 'Veselin Marinov concert',
        'CHALGIA CLUB \"GYUBEK\" all night dancing',
    ],
    imageURL: /^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/i,
    hotelId: /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i,
    price: /(\d+\,\d{1,2})$/g,
    roomType: ['one', 'two', 'three', 'four'],
    description: /^[А-Яа-яA-Za-z0-9," ".!()]{8,300}$/,
    name: /^[А-Яа-яA-Za-z0-9" "_-]{3,30}$/,
    mapURL: /^(https?:\/\/)?([da-z.-]+).([a-z.]{2,6})([/w .-]*)*\/?$/,
    regionType: ['Mountain', 'Valley', 'Sea', 'Forest', 'Field', 'У Перник :)'],
    userId: /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i,
    paymentType: ['Cash', 'Check', 'Credit card', 'Slavery', 'Work', 'В натура'],
    location: /^[А-Яа-яA-Za-z0-9,." "!()]{5,50}$/,
    lattitude: /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/,
    longitude: /^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/,
    eventDate: /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)dd$/,
    personCount: /^[0-9]{1,4}$/,
    startDate: /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)dd$/,
    nightsCount: /^[0-9]{1,2}$/,
    roomId: /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i,
};
