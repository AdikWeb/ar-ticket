//TODO Переделать на запросы к апи
export const LoadGiftsPoint = async (params) => {

    let test = [
        { id: '1', promotion_name: 'Длинное название акции', description: 'Элементы политического процесса объявлены нарушающими общечеловеческие нормы этики и морали и морали и морали...', start: '04 ноября 2020 14:54', end: '04 декабря 2020 14:54', gift_total: '302', gift_found: '146', status: { sys_name: 'launched', label: 'Запущена', color: 'success' } },
        { id: '2', promotion_name: 'Длинное название акции', description: 'Элементы политического процесса объявлены нарушающими общечеловеческие нормы этики и морали и морали и морали...', start: '04 ноября 2020 14:54', end: '04 декабря 2020 14:54', gift_total: '302', gift_found: '146', status: { sys_name: 'launched', label: 'Приостановлена', color: 'dark' } },
        { id: '3', promotion_name: 'Длинное название акции', description: 'Элементы политического процесса объявлены нарушающими общечеловеческие нормы этики и морали и морали и морали...', start: '04 ноября 2020 14:54', end: '04 декабря 2020 14:54', gift_total: '302', gift_found: '146', status: { sys_name: 'launched', label: 'Завершена', color: 'secondary' } },
        { id: '4', promotion_name: 'Длинное название акции', description: 'Элементы политического процесса объявлены нарушающими общечеловеческие нормы этики и морали и морали и морали...', start: '04 ноября 2020 14:54', end: '04 декабря 2020 14:54', gift_total: '302', gift_found: '146', status: { sys_name: 'launched', label: 'Скоро запуск', color: 'info' } },
    ];

    test = [
        { id: '1', name: 'Длинное название акции', geo: [], address: 'Жердынбиржерова', description: 'Элементы политического процесса объявлены нарушающими общечеловеческие нормы этики и морали и морали и морали...', photo: '' },
        { id: '2', name: 'Длинное название акции', geo: [], address: 'Жердынбиржерова', description: 'Элементы политического процесса объявлены нарушающими общечеловеческие нормы этики и морали и морали и морали...', photo: 'https://images.unsplash.com/photo-1529736576495-1ed4a29ca7e1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9' },
        { id: '3', name: 'Длинное название акции', geo: [], address: 'Жердынбиржерова', description: 'Элементы политического процесса объявлены нарушающими общечеловеческие нормы этики и морали и морали и морали...', photo: '' },
        { id: '4', name: 'Длинное название акции', geo: [], address: 'Жердынбиржерова', description: 'Элементы политического процесса объявлены нарушающими общечеловеческие нормы этики и морали и морали и морали...', photo: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg' },
    ];

    return new Promise((res) => {
        setTimeout(() => {
            res(test)
        }, 1000)
    })
};
//TODO Переделать на запросы к апи
export const LoadTypeOfGifts = async (params) => {

    let test = [
        { id: '1', gift_name: 'Название подарка 1', description: 'Элементы политического процесса объявлены нарушающими общечеловеческие нормы этики и морали и морали и морали...', photo: "https://img.freepik.com/free-vector/christmas-new-year-s-day-red-gift-box-white-background-illustration_164911-157.jpg?size=626&ext=jpg" },
        { id: '2', gift_name: 'Название подарка 2', description: 'Элементы политического процесса объявлены нарушающими общечеловеческие нормы этики и морали и морали и морали...', photo: "https://img.freepik.com/free-vector/christmas-new-year-s-day-red-gift-box-white-background-illustration_164911-157.jpg?size=626&ext=jpg" },
        { id: '3', gift_name: 'Название подарка 3', description: 'Элементы политического процесса объявлены нарушающими общечеловеческие нормы этики и морали и морали и морали...', photo: "https://img.freepik.com/free-vector/christmas-new-year-s-day-red-gift-box-white-background-illustration_164911-157.jpg?size=626&ext=jpg" },
        { id: '4', gift_name: 'Название подарка 4', description: 'Элементы политического процесса объявлены нарушающими общечеловеческие нормы этики и морали и морали и морали...', photo: "https://img.freepik.com/free-vector/christmas-new-year-s-day-red-gift-box-white-background-illustration_164911-157.jpg?size=626&ext=jpg" },
        { id: '5', gift_name: 'Название подарка 5', description: 'Элементы политического процесса объявлены нарушающими общечеловеческие нормы этики и морали и морали и морали...', photo: "https://img.freepik.com/free-vector/christmas-new-year-s-day-red-gift-box-white-background-illustration_164911-157.jpg?size=626&ext=jpg" },
    ];

    return new Promise((res) => {
        setTimeout(() => {
            res(test)
        }, 1000)
    })
};


