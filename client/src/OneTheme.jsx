
const data = ["Questions",
  {
    id: 1,
    question: "Почему JavaScript не может найти свою кофейную кружку?",
    response: "Undefined",
    ThemeId: 1,
  },
  {
    id: 2,
    question: "Почему JavaScript ушел от Java?",
    response: "Объекты",
    ThemeId: 1,
  },
  {
    id: 3,
    question: "Что сказал JavaScript, когда не смог найти переменную?",
    response: "ReferenceError",
    ThemeId: 1,
  },
  {
    id: 4,
    question: "Как JavaScript отправляет письма?",
    response: "Fetch",
    ThemeId: 1,
  },
  {
    id: 5,
    question: "Почему JavaScript не понимает, где находится?",
    response: "Scope",
    ThemeId: 1,
  },
  {
    id: 6,
    question: "Что говорит JavaScript, когда программа застревает?",
    response: "Await",
    ThemeId: 1,
  },
  {
    id: 7,
    question: "Что говорит JavaScript, когда видит пустую строку?",
    response: "Falsy",
    ThemeId: 1,
  },
  {
    id: 8,
    question: "Почему JavaScript боится асинхронности?",
    response: "Callback",
    ThemeId: 1,
  },
  {
    id: 9,
    question: "Почему JavaScript не выходит из замкнутого круга?",
    response: "Loop",
    ThemeId: 1,
  },
  {
    id: 10,
    question: "Почему JavaScript плохо работает с цифрами?",
    response: "NaN",
    ThemeId: 1,
  },
  {
    id: 11,
    question: "☦️👮🏽‍♀️⛓️⚖️🚨🚓🚔👮🐕‍🦺", 
    response: "Владимирский централ", 
    ThemeId: 2,
  },
  {
    id: 12,
    question: "🍒🍒🚗", 
    response: "Вишнёвая девятка", 
    ThemeId: 2,
  },
  {
    id: 13,
    question: "🌹🌹🌹🌹🌹🎤💔💃", 
    response: "Миллион алых роз", 
    ThemeId: 2,
  },
  {
    id: 14,
    question: "🍷🍷🍷", 
    response: "Розовое вино", 
    ThemeId: 2,
  },
  {
    id: 15,
    question: "👩‍👦🚶‍♂️🎶", 
    response: "Мама, я танцую",
    ThemeId: 2,
  },
  {
    id: 16,
    question: "💃✈️🪂", 
    response: "А я все летала", 
    ThemeId: 2,
  },
  {
    id: 17,
    question: "🥃⛩🎶", 
    response: "Рюмка водки на столе", 
    ThemeId: 2,
  },
  {
    id: 18,
    question: "💃🥶💦", 
    response: "Тает лёд",
    ThemeId: 2,
  },
  {
    id: 19,
    question: "🕺❌⛔", 
    response: "Выхода нет", 
    ThemeId: 2,
  },
  {
    id: 20,
    question: "❌🚇", 
    response: "Постой, паровоз", 
    ThemeId: 2,
  },
  {
    id: 21,
    question: "Какое дерево украшает каждый Новый год?", 
    response: "Ёлка", 
    ThemeId: 3,
  },
  {
    id: 22,
    question: "Что падает с неба зимой?", 
    response: "Снег", 
    ThemeId: 3,
  },
  {
    id: 23,
    question: "Какой фрукт ассоциируется с Новым годом?", 
    response: "Мандарин",
    ThemeId: 3,
  },
  {
    id: 24,
    question: "Кто приносит подарки на Новый год?", 
    response: "Дедмороз",
    ThemeId: 3,
  },
  {
    id: 25,
    question: "Какой напиток открывают под бой курантов?", 
    response: "Шампанское", 
    ThemeId: 3,
  },
  {
    id: 26,
    question: "Что запускают в небо в честь праздника?", 
    response: "Фейерверк", 
    ThemeId: 3,
  },
  {
    id: 27,
    question: "Какое украшение вешают на верхушку ёлки?", 
    response: "Звезда", 
    ThemeId: 3,
  },
  {
    id: 28,
    question: "Что часто поют на новогодних вечеринках?", 
    response: "Караоке", 
    ThemeId: 3,
  },
  {
    id: 29,
    question: "Какое слово ассоциируется с вручением на Новый год?", 
    response: "Подарок",
    ThemeId: 3,
  },
  {
    id: 30,
    question: "Какой салат традиционно готовят на Новый год?", 
    response: "Оливье", 
    ThemeId: 3,
  }
];


import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

function OneTheme({ theme }) {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [result, setResult] = useState(null);
  const [themeId, setThemeId] = useState(1); // default themeId
  const [questionsForTheme, setQuestionsForTheme] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    const questionsForTheme = data.filter((question) => question.ThemeId === themeId);
    setQuestionsForTheme(questionsForTheme);
    setCurrentQuestion(questionsForTheme[0]);
  }, [themeId]);

  const handleAnswerChange = (event) => {
    setUserAnswer(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const correctAnswer = currentQuestion.response;
    const userAnswerLower = userAnswer.toLowerCase();
    const correctAnswerLower = correctAnswer.toLowerCase();
    if (userAnswerLower === correctAnswerLower) {
      setResult(true);
    } else {
      setResult(false);
    }
    setTimeout(() => {
      nextQuestion();
    }, 5000);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questionsForTheme.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentQuestion(questionsForTheme[currentQuestionIndex + 1]);
      setUserAnswer('');
      setResult(null);
    } else {
      alert('Финиш!');
    }
  };

  const handleReturnToQuestion1 = () => {
    setCurrentQuestionIndex(0);
    setCurrentQuestion(questionsForTheme[0]);
    setUserAnswer('');
    setResult(null);
  };

  if (!currentQuestion) {
    return <h1>Ждите</h1>;
  }

  return (
    <div>
      <h1>Тема {themeId}:</h1>
      <h2>{currentQuestion.question}</h2>
      <label>Ответ:</label>
      <input type="text" value={userAnswer} onChange={handleAnswerChange} />
      <button onClick={handleSubmit}>Подтвердить</button>
      {result !== null && (
        <p>
          {result ? 'Правильно!' : 'Неправильно.'}
        Правильный ответ: {currentQuestion.response}
        </p>
      )}
      <button onClick={handleReturnToQuestion1}>Вернуться к первому вопросу</button>
    </div>
  );
};

export default OneTheme;