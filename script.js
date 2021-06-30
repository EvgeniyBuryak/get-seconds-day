// Считаем сколько сегодня прошло секунд
function getSecondToday() {
    let today = new Date();

    let before = today.getTime(); // количество секунд сейчас
    today.setHours(0, 0, 0, 0);
    let after = today.getTime(); // количество секунд на начало дня

    /**
     * Разность даст нам количество миллисекунд
     * с начала дня, делим его на 1000 и получаем секунды:
     * */
    let resultDiffrent = (before - after) / 1000;

    return `Секунд прошло с начала дня :${Math.round(resultDiffrent)}`;
}

alert(getSecondToday());

// Считаем сколько секунд осталось до завтра

function getSecondsToTomorrow() {
    let now = new Date();
    
    let tomorrow = new Date(now.getFullYear(), now.getMonth() + 1, 1);

    let diff = tomorrow - now;

    return `Секунд осталось до конца дня :${Math.round(diff / 1000)}`;
}

alert(getSecondsToTomorrow());