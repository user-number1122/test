import React, { useEffect, useState } from 'react';
function LikeCounter() {
  const [likes, setLikes] = useState(0);
  useEffect(() => {
    // Получаем количество лайков из Local Storage
    const storedLikes = localStorage.getItem('likes');
    if (storedLikes) {
      setLikes(Number(storedLikes)); // Преобразуем строку в число
    }
  }, []);
  const handleLike = () => {
    const newLikes = likes + 1; // Увеличиваем количество лайков
    setLikes(newLikes);
    // Сохраняем обновленное количество лайков в Local Storage
    localStorage.setItem('likes', newLikes);
  };
  return (
    <div className="container">
      <h1>Счетчик</h1>
      <p>Количество лайков: {likes}</p>
      <button onClick={handleLike}>👍 Лайкнуть</button>
    </div>
  );
}
export default LikeCounter;

/*import React, { useState } from 'react'; // Импортируем необходимые библиотеки
function LikeCounter() {
  const [likes, setLikes] = useState(0); // Создаем состояние для лайков
  const handleLike = () => {
    setLikes(likes + 1); // Обновляем состояние
  };
  return (
    <div className="container">
      <h1>Лайки</h1>
      <p>Количество лайков: {likes}</p>
      <button onClick={handleLike}>👍 Лайкнуть</button>
    </div>
  );
}
export default LikeCounter; // Экспортируем компонент LikeCounter
*/
