# SimplestSiteInDocker

## Описание

Простейший сайт на Node.js с регистрацией и авторизацией пользователей, возможностью сохранять текст для каждого пользователя (один текст на пользователя). Все данные хранятся в базе PostgreSQL. Проект предназначен для контейнеризации в Docker и последующего деплоя в облако.

## Основные возможности
- Регистрация и авторизация пользователей
- Защищённая страница для работы с текстом (1-к-1)
- Сохранение и загрузка текста из PostgreSQL
- Сессии через express-session
- Контейнеризация через Docker

## Технологии
- Node.js, Express.js
- PostgreSQL
- bcrypt, dotenv, express-session
- Docker

## Быстрый старт (локально)
1. Установите зависимости:
   ```bash
   npm install
   ```
2. Создайте файл `.env` в корне проекта:
   ```env
   PGHOST=localhost
   PGPORT=5432
   PGDATABASE=simplestdb
   PGUSER=admincola
   PGPASSWORD=ваш_пароль
   ```
3. Запустите сервер:
   ```bash
   node src/app.js
   ```
4. Откройте в браузере:
   - Регистрация: http://localhost:3000/
   - Вход: http://localhost:3000/login.html
   - Страница для текста: http://localhost:3000/text.html

## Docker
(Инструкция по docker будет добавлена после dockerизации) 