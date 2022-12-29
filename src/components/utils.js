export const renderLoading = (config, button) => {
    switch (config) {
        case 'saveOn': {
            button.value = 'Сохранение...';
            break;
        }
        case 'saveOff': {
            button.value = 'Сохранить';
            break;
        }
        case 'deleteOn': {
            button.value = 'Удаление...';
            break;
        }
        case 'deleteOff': {
            button.value = 'Да';
            break;
        }
    }
}