//TODO Переделать на запросы к апи
export const LoadGiftsPoint = async (params) => {

    let test = [
        { id: '1', name: 'Как то', geo: [], address: 'Жердынбиржерова', description: 'Элементы политического процесса объявлены нарушающими общечеловеческие нормы этики и морали и морали и морали...', photo: '' },
        { id: '2', name: 'Утром', geo: [], address: 'Жердынбиржерова', description: 'Элементы политического процесса объявлены нарушающими общечеловеческие нормы этики и морали и морали и морали...', photo: 'https://images.unsplash.com/photo-1529736576495-1ed4a29ca7e1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9' },
        { id: '3', name: 'На рвссвете', geo: [], address: 'Жердынбиржерова', description: 'Элементы политического процесса объявлены нарушающими общечеловеческие нормы этики и морали и морали и морали...', photo: '' },
        { id: '4', name: 'Заглянул', geo: [], address: 'Жердынбиржерова', description: 'Элементы политического процесса объявлены нарушающими общечеловеческие нормы этики и морали и морали и морали...', photo: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg' },
    ];

    return new Promise((res) => {
        setTimeout(() => {
            res(test)
        }, 1000)
    })
};

