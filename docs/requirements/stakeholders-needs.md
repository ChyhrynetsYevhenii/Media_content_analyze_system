# Запити зацікавлених осіб

## Вступ

Даний розділ містить короткий огляд необхідних інструментів для виконання цілей системи.

### Мета

Ціль данного проекту створення надійного і зручного інструменту для аналізу медіа-контенту.

### Контекст

Документ впроваджує технічне завдання системи, вимоги надійності та функціоналу, взаємодію між користувачем, системою та адміністратором.


### Основні визначення та скорочення

База даних - це організована структура, яка призначена для зберігання, зміни та обробки взаємозалежної інформації, переважно великих обсягів; це сукупність даних, організованих відповідно до концепції, яка описує характеристику цих даних і взаємозв'язки між їх елементами. В загальному випадку база даних містить схеми, таблиці, подання, збережені процедури та інші об'єкти.

Аналіз – це процес розбиття складної теми або предмета на менші частини з метою кращого його розуміння.

Медіа – це засоби комунікації або інструменти, що використовуються для зберігання та передачі інформації або даних. Цей термін відноситься до компонентів індустрії масової комунікації, таких як друковані ЗМІ, видавнича справа, новинні ЗМІ, фотографія, кіно, мовлення (радіо і телебачення), цифрові медіа та реклама.

ЗМІ - Засоби масової інформації стосуються різноманітних засобів масової інформації, які охоплюють широку аудиторію через засоби масової інформації.Трансляції передають інформацію в електронному вигляді через такі засоби масової інформації, як фільми, радіо, музичні записи або телебачення. Цифрові медіа включають як Інтернет, так і мобільну масову комунікацію.

Цифрові медіа — це будь-які носії, які закодовані в машиночитаючих форматах. Цифрові медіа можуть бути: створені, переглянуті, поширені, змінені і збережені на цифрових електронних пристроях.

### Посилання <a id="links"></a>
[[1] Wikipedia - База даних](https://uk.wikipedia.org/wiki/%D0%91%D0%B0%D0%B7%D0%B0_%D0%B4%D0%B0%D0%BD%D0%B8%D1%85)

[[2] Wikipedia - Аналіз](https://uk.wikipedia.org/wiki/%D0%90%D0%BD%D0%B0%D0%BB%D1%96%D0%B7)

[[3] Wikipedia - Медіа](https://uk.wikipedia.org/wiki/%D0%9C%D0%B5%D0%B4%D1%96%D0%B0)

[[4] Wikipedia - ЗМІ](https://uk.wikipedia.org/wiki/%D0%97%D0%B0%D1%81%D0%BE%D0%B1%D0%B8_%D0%BC%D0%B0%D1%81%D0%BE%D0%B2%D0%BE%D1%97_%D1%96%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D1%96%D1%97)

[[5] Wikipedia - Цифрові медіа](https://uk.wikipedia.org/wiki/%D0%A6%D0%B8%D1%84%D1%80%D0%BE%D0%B2%D1%96_%D0%BC%D0%B5%D0%B4%D1%96%D0%B0)



## Короткий зміст

1. [Характеристика ділових процесів](#characteristic)  
2. [Короткий огляд продукту](#survey)
3. [Функціональність](#functionality)
4. [Практичність](#practicality)
5. [Надійність](#reliability)
6. [Продуктивність](#productivity)
7. [Експлутаційна придатність](#serviceability)

## Характеристика ділових процесів <a id="characteristic"></a>

Учасниками процесу є користувач, система та адміністратор. У цьому розділі наведені сценарії взаємодії користувача, системи та адміністратора, які можуть виникати при роботі.
## Користувач

#### **РЕЄСТРАЦІЯ**

ID: USER.REG

НАЗВА: Реєстрація нового облікового запису

УЧАСНИКИ: Користувач, Система

ПЕРЕДУМОВИ: Користувач не зареєстрований у системі

РЕЗУЛЬТАТ: Створено новий обліковий запис та надано доступ до нього користувачу

ВИКЛЮЧНІ СИТУАЦІЇ: Обліковий запис з такими даними реєстрації вже існує.

**ОСНОВНИЙ СЦЕНАРІЙ:**

1) Користуавч використовує кнопку «Реєстрація» для початку реєстрації
2) Система генерує форму реєстрації для створення нового облікового запису
3) Користувач вводить реєстраційні дані (логін, пошту та пароль)
4) Система реєструє обліковий запис з даними, отриманими від користувача.
5) Користувач отримує повідомлення від системи про успішне створення нового облікового запису

#### **АВТОРИЗАЦІЯ**

ID: USER.LOGIN

НАЗВА: Авторизація користувача в обліковий запис

УЧАСНИКИ: Користувач, Система

ПЕРЕДУМОВИ: Користувач має бути зареєстрований у системі

РЕЗУЛЬТАТ: Отримання доступу до свого облікового запису

ВИКЛЮЧНІ СИТУАЦІЇ: Користувач не зареєстрований на сайті.

**ОСНОВНИЙ СЦЕНАРІЙ:**

1) Користувач вводить дані для входу в систему
2) Система проводить перевірку правильності введених користувачем даних для авторизації
3) Система дозволяє користувачеві отримати доступ до його особистого облікового запису

#### **ЗВЕРНЕННЯ ЗА ДОПОМОГОЮ**

ID: USER.HELP

НАЗВА: Допомога користувачу

УЧАСНИКИ: Користувач, Система

ПЕРЕДУМОВИ: Користувач виконав авторизацію в системі та потребує допомоги

РЕЗУЛЬТАТ: Користувач отримує інформацію про роботу з системою

ВИКЛЮЧНІ СИТУАЦІЇ: Система не змогла ідентифікувати запит або не знає вирішення цієї проблеми користувача.

**ОСНОВНИЙ СЦЕНАРІЙ:**

1) Користувач натискає на кнопку звернення до системи
2) Система надає користувачу форму для заповнення
3) Користувач отримує доступ для заповнення форми
4) Користувач вписує текст свого питання
5) Користувач надсилає заповнену форму системі
6) Система аналізує проблему користувача за ключовими словами
7) Система надсилає користувачу необхідну довідку
8) Користувач отримує довідку та ознайомлюється з нею

#### **ЗАПИТ НА ЗНАХОДЖЕННЯ ДАНИХ**

ID: USER.SEARCH

НАЗВА: Збереження тексту до бази даних

УЧАСНИКИ: Користувач, Система

ПЕРЕДУМОВИ: Користувач виконав авторизацію в системі

РЕЗУЛЬТАТ:  Вивід результату повного аналізу шуканого медіа-контенту

ВИКЛЮЧНІ СИТУАЦІЇ: Користувач некоректно ввів пошуковий запит або інформація за запитом не знайдена.

**ОСНОВНИЙ СЦЕНАРІЙ:**

1) Користувач налаштовує фільтри та відправляє запит на пошук
2) Система проводить пошук по базам даних відповідно фільтрам та запиту
3) Система проводить аналіз знайдених даних
4) Система створює результат відповідно аналізу
5) Система виводить результат на екран користувача

## Адміністратор

#### **НОВЕ ДЖЕРЕЛО**

ID: ADMIN.NEWSOURSE

НАЗВА: Додавання джерела інформації

УЧАСНИКИ: Адміністратор, Система

ПЕРЕДУМОВИ: Адміністратор має право на додання джерел

РЕЗУЛЬТАТ: Додавання джерел інформації у системі

ВИКЛЮЧНІ СИТУАЦІЇ: Нові джерела не пройшли перевірку.

**ОСНОВНИЙ СЦЕНАРІЙ:**

1) Адміністратор натискає на кнопку, щоб додати нове джерело інформації.
2) Система надає форму для введення даних нового джерела.
3) Адміністратор вводить посилання на джерело.
4) Адміністратор надає опис джерела.
5) Джерело проходить перевірку на правильність введення даних.
6) Адміністратор налаштовує фільтри для зручного пошуку джерела.
7) Система додає нове джерело до бази даних.

#### **НАДАННЯ ПРАВ**

ID: ADMIN.ARIGHTS

НАЗВА: Надання прав користувачам

УЧАСНИКИ: Користувач, Адміністратор, Система

ПЕРЕДУМОВИ: Користувач потребує додаткові права

РЕЗУЛЬТАТ: Користувач отримує додаткові права

ВИКЛЮЧНІ СИТУАЦІЇ: Користувача не було знайдено в системі або користувачу уже має додаткові права.

**ОСНОВНИЙ СЦЕНАРІЙ:**

1) Користувач запитує про надання додаткових прав.
2) Адміністратор отримує запит на додання прав від користувача.
3) Адміністратор надає додаткові права користувачеві.
4) Користувач отримує додаткові права від адміністратора.
5) Адміністратор завершує процес надання додаткових прав із користувачем.
  
#### **СТАТИСТИКА**    
    
ID: ADMIN.STAT

НАЗВА: Отримання статистики користувачів за проміжок часу

УЧАСНИКИ: Адміністратор, Система

ПЕРЕДУМОВИ: Адміністратор має право доступу до статистики

РЕЗУЛЬТАТ: Адміністратор отримує статистичні дані

ВИКЛЮЧНІ СИТУАЦІЇ: Система не змогла зібрати статистику за певний проміжок часу (код помилки: admin.stat_err1)

**ОСНОВНИЙ СЦЕНАРІЙ:**

1) Адміністратор визначає період, за який потрібно зібрати статистичні дані.
2) Адміністратор надсилає запит на отримання статистики за визначений період.
3) Система отримує запит на статистику від адміністратора.
4) Система шукає дані за вказаний період.
5) Система надає зібрані дані.
6) Адміністратор отримує відповідь зі зібраними статистичними даними.
7) Адміністратор проводить аналіз над отриманими даними.

## Короткий огляд продукту <a id="survey"></a>

Media content analysis system - це сервіс, який дозволяє користувачам шукати та отримувати необхідну інформацію з різних джерел медіа. Критерії пошуку встановлюються користувачем, що дозволяє йому сортувати інформацію за датою, часом, популярністю та джерелом. Крім того, система надає можливість зберігати інформацію для подальшого використання.

## Функціональність <a id="functionality"></a>

# Користувач може
@startuml

    Створювати та використовувати власний обліковий запис
    Створювати запити на пошук та аналіз інформації
    Використовувати фільтри та сортувати надану інформацію
    Створювати запити до адміністратора
    Переглядати результати пошуку
    Не хвилюватись за власну безпеку
@enduml

# Адміністратор може
@startuml

    Керувати джерелами
    Керувати правами користувачів
    Надавати допомогу
    Передивлятись історію запитів
    Система надає відповідні можливості користувачам через інтуїтивно зрозумілий інтерфейс.
@enduml
  

## Практичність <a id="practicality"></a>

Дана система повинна бути легкою та зрозумілою у використанні, ефективно обробляти запити користувачів та забезпечувати зручний та наочний відображення результатів.

## Надійність <a id="reliability"></a>

Система повинна забезпечувати безпеку, конфіденційність та цілісність зібраних та оброблених даних, які мають бути доступними лише адміністраторам. Для зберігання такої інформації мають бути створені окремі бази даних. Система повинна мати захист від технічних помилок, включаючи фізичний захист обладнання. У разі непередбачуваної неполадки система має зберігати найбільш актуальні дані. Періодичне резервне копіювання має бути реалізовано для забезпечення додаткової надійності системи.

## Продуктивність <a id="productivity"></a>

Ефективність роботи системи залежить від кількості інформації, яку вона отримує та обробляє, а також від кількості запитів, які отримує від користувачів.


## Експлуатаційна придатність <a id="serviceability"></a>

Система повинна використовувати сучасні технології з огляду на їхню тривалий термін підтримки. Будь-які виявлені помилки в системі повинні негайно виправлятися. Розробка проекту повинна бути здійснена з урахуванням можливості додавання нових технологій та функцій. Також регулярно слід проводити оптимізацію коду.
