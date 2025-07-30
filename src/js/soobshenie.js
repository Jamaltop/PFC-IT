function goToTelegramChat() {
    const userName = encodeURIComponent(document.getElementById("name").value.trim());
    const number = encodeURIComponent(document.getElementById("email").value.trim());
    const message = encodeURIComponent(document.getElementById("message").value.trim());
  
    if (!userName || !message) {
      alert("Заполните все поля!");
      return;
    }
  
    const text = `Имя: ${userName}\nОтзыв: ${message}\nНомер: ${number}`;
  
    
   
    const telegramUsername = "jsscriptdev";
  
    
    const url = `https://t.me/${telegramUsername}?start=feedback&text=${text}`;
  
  
  
   
    window.open(url, "_blank");
  }
  function goToTelegramChattt() {
   
  
   
    const telegramUsername = "jsscriptdev";
  
  
    const url = `https://t.me/${telegramUsername}?start=feedback&text=Привет!%20Я%20хочу%20записаться%20на%20курс!`;
  
   
  
    
    window.open(url, "_blank");
  }
  