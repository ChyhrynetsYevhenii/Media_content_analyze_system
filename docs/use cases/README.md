# Модель прецедентів

# Загальна діаграма

Наведені основні можливості для кожної с груп користувачів.

@startuml  

    actor "Користувач" as User  
    actor "Адміністратор" as Admin  
    
    User  --|> Admin 

    usecase "Реєстрація" as Registration  
    usecase "Авторизація" as Login  
    usecase "Пошук" as Search  
    usecase "Редагування профілю" as Edit  
    usecase "Управління джерелами" as Sources  
    usecase "Допомога" as Help  

    usecase "Додавання джерела інформації" as AddSource  
    usecase "Права користувачів" as Rights  
    usecase "Отримання статистики" as Statistic  
    
    User -u-> Registration
    User -u-> Login
    User -l-> Search  
    User -d-> Edit  
    User --> Help  
    User -r-> Sources  

    Admin -d-> AddSource  
    Admin -d-> Rights  
    Admin -l-> Statistic  
@enduml

Інші можливості користувача

@startuml

    actor "Користувач" as User #black

    usecase "Допомога" as Help
    usecase "До системи" as SystemHelp
    usecase "До адміністратора" as AdminHelp

    usecase "Управління джерелами" as Sources
    usecase "Додати" as Add
    usecase "Видалити доданий текст" as Remove
    usecase "Прийняти зміни" as Accept
    usecase "Скасувати зміни" as Cancel 

    AdminHelp .u.> Help
    SystemHelp .d.> Help

    Add .l.> Sources
    Remove .u.> Sources
    Accept .d.> Sources
    Cancel .d.> Sources  

    User -l-> Help
    User -r-> Sources
@enduml

# Реєстрація
ID: USER.REG

НАЗВА: Реєстрація нового облікового запису

УЧАСНИКИ: Користувач, Система

ПЕРЕДУМОВИ: Користувач не зареєстрований у системі

РЕЗУЛЬТАТ: Створено новий обліковий запис та надано доступ до нього користувачу

ВИКЛЮЧНІ СИТУАЦІЇ:

    Обліковий запис з такими даними реєстрації вже існує.

@startuml

    |%lightblue|Користувач| 
        start
        #TECHNOLOGY;line:black;text:black :Користувач натискає кнопку \nдля реєстрації;
    |#aliceblue|Система|
        %darken("aliceblue", 6);line:black;text:black :Система отримує запит \nна реєстрацію;
        %darken("aliceblue", 6);line:black;text:black :Система надсилає форму \nреєстрації;
    |%lightblue("TECHNOLOGY", 7)|Користувач|
        #TECHNOLOGY;line:black;text:black :Користувач вводить логін, \nелектронну пошту та пароль;
        #TECHNOLOGY;line:black;text:black :Користувач натискає кнопку \nвідправки даних;
    |#aliceblue|Система|
        %darken("aliceblue", 6);line:black;text:black :Система отримує дані;
        %darken("aliceblue", 6);line:black;text:black :Зареєстровано обліковий \nзапис;
        note right #ffaaaa
            <b> user.reg_err1
        end note
        %darken("aliceblue", 6);line:black;text:black :Система оповіщує \nпро успішне створення \nоблікового запису;
    |%lightblue("TECHNOLOGY", 7)|Користувач| 
        stop
@enduml

# Авторизація
ID: USER.LOGIN

НАЗВА: Авторизація користувача в обліковий запис

УЧАСНИКИ: Користувач, Система

ПЕРЕДУМОВИ: Користувач має бути зареєстрований у системі

РЕЗУЛЬТАТ: Отримання доступу до свого облікового запису

ВИКЛЮЧНІ СИТУАЦІЇ:

    Користувач не зареєстрований на сайті.
    
@startuml

    |%lightblue("TECHNOLOGY", 7)|Користувач| 
        start
        #TECHNOLOGY;line:black;text:black :Користувач натискає кнопку \nвходу в обліковий запис;
    |#aliceblue|Система|
        %darken("aliceblue", 6);line:black;text:black :Система отримує запит \nна авторизацію;
        %darken("aliceblue", 6);line:black;text:black :Система надсилає форму \nдля авторизації;
    |%lightblue("TECHNOLOGY", 7)|Користувач|
        #TECHNOLOGY;line:black;text:black :Користувач вводить дані \nдля входу;
        #TECHNOLOGY;line:black;text:black :Користувач відправляє дані;
    |#aliceblue|Система|
        %darken("aliceblue", 6);line:black;text:black :Система отримує дані користувача;
        %darken("aliceblue", 6);line:black;text:black :Система валідує дані користувача;
        note right #ffaaaa
            <b> user.login_err1
        end note
        %darken("aliceblue", 6);line:black;text:black :Система надає користувачу \nдоступ до його облікового \nзапису;
    |%lightblue("TECHNOLOGY", 7)|Користувач| 
        #TECHNOLOGY;line:black;text:black :Користувач отримує доступ \nдо облікового запису;
        stop
@enduml

# Допомога користувачу

ID: USER.HELP

НАЗВА: Допомога користувачу

УЧАСНИКИ: Користувач, Система

ПЕРЕДУМОВИ: Користувач виконав авторизацію в системі та потребує допомоги

РЕЗУЛЬТАТ: Користувач отримує інформацію про роботу з системою

ВИКЛЮЧНІ СИТУАЦІЇ:

    Система не змогла ідентифікувати запит або не знає вирішення цієї проблеми користувача.
    
@startuml

    |%lightblue("TECHNOLOGY", 7)|Користувач| 
        start
        #TECHNOLOGY;line:black;text:black :Користувач натискає кнопку "Help";
    |#aliceblue|Система|
        %darken("aliceblue", 6);line:black;text:black :Отримує запит на допомогу;
        %darken("aliceblue", 6);line:black;text:black :Система надає користувачу \nформу для заповнення;
    |%lightblue("TECHNOLOGY", 7)|Користувач|
        #TECHNOLOGY;line:black;text:black :Користувач отримує доступ \nдля заповнення форми;
        #TECHNOLOGY;line:black;text:black :Користувач вписує своє питання;
        #TECHNOLOGY;line:black;text:black :Користувач надсилає заповнену \nформу системі;
    |#aliceblue|Система|
        %darken("aliceblue", 6);line:black;text:black :Система аналізує проблему \nза ключовими словами;
        note right #ffaaaa
            <b> user.help_err1
        end note
        %darken("aliceblue", 6);line:black;text:black :Система надсилає необхідну \nдовідку;
    |%lightblue("TECHNOLOGY", 7)|Користувач| 
        #TECHNOLOGY;line:black;text:black :Користувач отримує довідку \nта ознайомлюється з нею;
        stop
@enduml

# Запит на пошук та аналіз медіа-контенту

ID: USER.SEARCH

НАЗВА: Збереження тексту до бази даних

УЧАСНИКИ: Користувач, Система

ПЕРЕДУМОВИ: Користувач виконав авторизацію в системі

РЕЗУЛЬТАТ:  Вивід результату повного аналізу шуканого медіа-контенту

ВИКЛЮЧНІ СИТУАЦІЇ:

    Користувач некоректно ввів пошуковий запит або інформація за запитом не знайдена.
    
@startuml

    |%lightblue("TECHNOLOGY", 7)|Користувач| 
        start
        #TECHNOLOGY;line:black;text:black :Натискає на кнопку "Search";
    |#aliceblue|Система|
        %darken("aliceblue", 6);line:black;text:black :Cистема відкриває форму на заповнення фільтрів для пошуку інформаці;
        %darken("aliceblue", 6);line:black;text:black :Система відправляє форму заповнення;
    |%lightblue("TECHNOLOGY", 7)|Користувач|
        #TECHNOLOGY;line:black;text:black :Користувач отримує доступ \nдля заповнення форми;
        #TECHNOLOGY;line:black;text:black :Користувач заповнює форму пошуку інформації;
        #TECHNOLOGY;line:black;text:black :Користувач надсилає заповнену \nформу системі;
    |#aliceblue|Система|
        %darken("aliceblue", 6);line:black;text:black :истема звіряє дані з форми фільтрації з даними в БД;
        note right #ffaaaa
            <b> user.help_err1
        end note
        %darken("aliceblue", 6);line:black;text:black :Система здійснює пошук інформації;
    |%lightblue("TECHNOLOGY", 7)|Користувач| 
        #TECHNOLOGY;line:black;text:black :Користувач отримує інформацію;
        stop
@enduml

# Адміністратор

# Додавання джерела інформації

ID: ADMIN.NEWSOURSE

НАЗВА: Додавання джерела інформації

УЧАСНИКИ: Адміністратор, Система

ПЕРЕДУМОВИ: Адміністратор має право на додання джерел

РЕЗУЛЬТАТ: Додавання джерел інформації у системі

ВИКЛЮЧНІ СИТУАЦІЇ:

    Нові джерела не пройшли перевірку.
    
@startuml

    |%lightblue("TECHNOLOGY", 11)|Адміністратор|
        start
        %lightblue("TECHNOLOGY", 7);line:black;text:black :Адміністратор натискає кнопку \nдодання нового джерела інформації;
    |#aliceblue|Система|
        %darken("aliceblue", 6);line:black;text:black :Система надає форму для \nдодання нового джерела;
    |%lightblue("TECHNOLOGY", 11)|Адміністратор|
        %lightblue("TECHNOLOGY", 7);line:black;text:black :Адміністратор надає посилання \nна джерело;
        %lightblue("TECHNOLOGY", 7);line:black;text:black :Адміністратор надає опис джерела;
    |#aliceblue|Система|
        %darken("aliceblue", 6);line:black;text:black :Джерело проходить перевірку;
        note right #ffaaaa
            <b> admin.nsrc_err1
        end note
    |%lightblue("TECHNOLOGY", 11)|Адміністратор|
        %lightblue("TECHNOLOGY", 7);line:black;text:black :Адміністратор налаштовує \nфільтри для пошуку джерела;
    |#aliceblue|Система|
        %darken("aliceblue", 6);line:black;text:black :Система додає нове джерело;
    |%lightblue("TECHNOLOGY", 11)|Адміністратор| 
        stop
@enduml

# Допомога адміністратора 

ID: ADMIN.HELP

НАЗВА:  Виклик адміністратора

УЧАСНИКИ: Користувач, Адміністратор, Система

ПЕРЕДУМОВИ: У користувача виникла проблема вирішення якої не може забезпечити система

РЕЗУЛЬТАТ: Адміністратор надає рішення проблеми користувача

ВИКЛЮЧНІ СИТУАЦІЇ:

    Користувач не зміг встановити зв'язок з адміністратором

@startuml

    |%lightblue("TECHNOLOGY", 11)|Користувач|
        start
        %lightblue("TECHNOLOGY", 7);line:black;text:black :Натискає на кнопку \nдопомоги адміністратора;
        %lightblue("TECHNOLOGY", 7);line:black;text:black :Вказує на проблему \nадміністратору;
    |#aliceblue|Система|
        %darken("aliceblue", 6);line:black;text:black :Система нажсилає запит адміністратору;
    |%lightblue("TECHNOLOGY", 11)|Адміністратор|
        %lightblue("TECHNOLOGY", 7);line:black;text:black :Адміністратор отримує запит \nвід користувача;
        %lightblue("TECHNOLOGY", 7);line:black;text:black :Адміністратор знаходить відповідь \nна запит користувача;
        %lightblue("TECHNOLOGY", 7);line:black;text:black :Адміністратор надсилає відповідь \nкористувачу;
    |#aliceblue|Користувач|
        %darken("aliceblue", 6);line:black;text:black : Отримує відповідь на свій \nзапит;
        stop
@enduml

# Надання прав користувачам

ID: ADMIN.ARIGHTS

НАЗВА: Надання прав користувачам

УЧАСНИКИ: Користувач, Адміністратор, Система

ПЕРЕДУМОВИ: Користувач потребує додаткові права

РЕЗУЛЬТАТ: Користувач отримує додаткові права

ВИКЛЮЧНІ СИТУАЦІЇ:

    Користувача не було знайдено в системі або користувачу уже має додаткові права.
@startuml

    |%lightblue("TECHNOLOGY", 7)|Користувач| 
        start
        #TECHNOLOGY;line:black;text:black :Користувач надає запит \nна отримання додаткових прав;
        note left #ffaaaa
            <b> admin.arights_err1
        end note
    |%lightblue("TECHNOLOGY", 11)|Адміністратор|
        %lightblue("TECHNOLOGY", 7);line:black;text:black :Адміністратор отримує запит \nна додання прав;
        %lightblue("TECHNOLOGY", 7);line:black;text:black :Адміністратор надає додаткові \nправа користувачу;
        note right #ffaaaa
            <b> admin.arights_err2
        end note
    |%lightblue("TECHNOLOGY", 7)|Користувач|
        #TECHNOLOGY;line:black;text:black :Користувач отримує додаткові \nправа;
    |%lightblue("TECHNOLOGY", 11)|Адміністратор|
        %lighten("TECHNOLOGY", 7);line:black;text:black :Адміністратор завершує взаємодію;
    |%lightblue("TECHNOLOGY", 7)|Користувач| 
        stop
@enduml

# Отримання статистики

ID: ADMIN.STAT

НАЗВА: Отримання статистики користувачів за проміжок часу

УЧАСНИКИ: Адміністратор, Система

ПЕРЕДУМОВИ: Адміністратор має право доступу до статистики

РЕЗУЛЬТАТ: Адміністратор отримує статистичні дані

ВИКЛЮЧНІ СИТУАЦІЇ:

Система не змогла зібрати статистику за певний проміжок часу (код помилки: admin.stat_err1)
@startuml

    |%lightblue("black", 11)|Адміністратор|
        start
        %lightblue("black", 7);line:black;text:black :Адміністратор обирає проміжок \nчасу для збору даних;
        %lightblue("black", 7);line:black;text:black :Адміністратор робить запит \nна статистику на обраний час;
    |#aliceblue|Система|
        %lightblue("aliceblue", 6);line:black;text:black :Система отримує запит;
        %lightblue("aliceblue", 6);line:black;text:black :Система шукає дані за \nобраний проміжок часу;
        note right #ffaaaa
            <b> admin.stat_err1
        end note
        %darken("aliceblue", 6);line:black;text:black :Система надає дані;
    |%lightblue("pink", 11)|Адміністратор|
        %lightblue("pink", 7);line:black;text:black :Адміністратор отримує дані \nу відповідь на запит;
        %lightblue("pink", 7);line:black;text:black :Адміністратор проводить аналіз \nданих;
        stop
@enduml
