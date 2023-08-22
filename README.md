## Ссылки

[Swagger UI](http://localhost:3000/api) - интерфейс описания API<br />
[pgAdmin](http://localhost:80) - СУБД (email: lozik@tambler.ru, password: qwerty)

## Модули

[Account](http://localhost:3000/account) - модуль для управления аккаунтами<br />
[Transfer](http://localhost:3000/transfer) - модуль для переводов

## .ENV

```shell
POSTGRES_HOST=postgres_container
POSTGRES_USER=postgrebank
POSTGRES_PASSWORD=supersecretkey
POSTGRES_DB=api

PORT=3000
```

## Запуск

```bash
$ docker compose build && docker compose up
```

## Тестирование

```bash
# Получение баланса по счёту
$ curl -H Accept-encoding:application/json http://localhost:3000/account/12

# Создание перевода
$ curl -H Content-type:application/json -d '{"amount": 2}' -X POST http://localhost:3000/transfer/10/12           
```

## Сделать коммит

```bash
# conventional-commit
$ git cz
```

## Структура

```
    .
    ├── src
    |   ├── config
    |      ├── db (настройки для базы данных)
    |      ├── git(настройки для git)
    |   ├── migrations (папка с миграциями)
    |   └── modules
    |      ├── account (модуль аккаунтов)
    |      ├── transfer (модуль переводов)
    |   └── seeders (папка с первоначальными данными для базы)
    ```
