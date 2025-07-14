# Используем официальный образ Node.js
FROM node:lts

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install --production

# Копируем остальной исходный код
COPY . .

# Открываем порт 3000
EXPOSE 3000

# Запускаем приложение
CMD ["node", "src/app.js"] 