function goToTelegramChat() {
    const userName = encodeURIComponent(document.getElementById("name").value.trim());
    const number = encodeURIComponent(document.getElementById("email").value.trim());
    const message = encodeURIComponent(document.getElementById("message").value.trim());
  
    if (!userName || !message) {
      alert("Заполните все поля!");
      return;
    }
  
    const text = `Имя: ${userName}\nОтзыв: ${message}\nНомер: ${number}`;
  
    // Вместо YOUR_BOT_USERNAME укажи username своего бота или человека (без @)
    // Например: "yussaa22"
    const telegramUsername = "jsscriptdev";
  
    // Ссылка на чат с этим пользователем + текст
    const url = `https://t.me/${telegramUsername}?start=feedback&text=${text}`;
  
    // Если хочешь просто открыть чат с пользователем без текста, то так:
    // const url = `https://t.me/${telegramUsername}`;
  
    // Открываем в новой вкладке
    window.open(url, "_blank");
  }
  function goToTelegramChattt() {
   
  
    // Вместо YOUR_BOT_USERNAME укажи username своего бота или человека (без @)
    // Например: "yussaa22"
    const telegramUsername = "jsscriptdev";
  
    // Ссылка на чат с этим пользователем + текст
    const url = `https://t.me/${telegramUsername}?start=feedback&text=Привет!%20Я%20хочу%20записаться%20на%20курс!`;
  
    // Если хочешь просто открыть чат с пользователем без текста, то так:
    // const url = `https://t.me/${telegramUsername}`;
  
    // Открываем в новой вкладке
    window.open(url, "_blank");
  }
  