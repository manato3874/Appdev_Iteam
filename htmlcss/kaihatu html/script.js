// JavaScriptコード
document.addEventListener('DOMContentLoaded', function () {
    // 通知を追加する関数
    function addNotification(text, link) {
      const notificationDiv = document.createElement('div');
      notificationDiv.className = 'notification';
  
      const notificationLink = document.createElement('a');
      notificationLink.href = link;
      notificationLink.className = 'notification-link';
  
      const notificationText = document.createElement('span');
      notificationText.className = 'notification-text';
      notificationText.textContent = text;
  
      notificationLink.appendChild(notificationText);
      notificationDiv.appendChild(notificationLink);
  
      const notificationContainer = document.getElementById('notification-container');
      notificationContainer.appendChild(notificationDiv);
    }
  
    // 通知を追加する例
    addNotification('〇〇がトイレを探しています', 'help.html');
  });
  