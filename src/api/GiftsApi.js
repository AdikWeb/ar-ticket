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
        { id: '4', name: 'Длинное название акции', geo: [], address: 'Жердынбиржерова', description: 'Элементы политического процесса объявлены нарушающими общечеловеческие нормы этики и морали и морали и морали...', photo: 'https://images.unsplash.com/photo-1529736576495-1ed4a29ca7e1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9' },
    ];

    return new Promise((res) => {
        setTimeout(() => {
            res(test)
        }, 1000)
    })
};

