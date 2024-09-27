import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Root";
import App from "./App";
import OneTheme from "./OneTheme";
import LoginPage from "./LoginPage";
import RegPage from "./Pages/RegPage";
import ThemesPage from "./Pages/ThemesPage";
const data = ["Questions",
        {
          question: "Почему JavaScript не может найти свою кофейную кружку?",
          response: "Undefined",
          ThemeId: 1,
        },
        {
          question: "Почему JavaScript ушел от Java?",
          response: "Объекты",
          ThemeId: 1,
        },
        {
          question: "Что сказал JavaScript, когда не смог найти переменную?",
          response: "ReferenceError",
          ThemeId: 1,
        },
        {
          question: "Как JavaScript отправляет письма?",
          response: "Fetch",
          ThemeId: 1,
        },
        {
          question: "Почему JavaScript не понимает, где находится?",
          response: "Scope",
          ThemeId: 1,
        },
        {
          question: "Что говорит JavaScript, когда программа застревает?",
          response: "Await",
          ThemeId: 1,
        },
        {
          question: "Что говорит JavaScript, когда видит пустую строку?",
          response: "Falsy",
          ThemeId: 1,
        },
        {
          question: "Почему JavaScript боится асинхронности?",
          response: "Callback",
          ThemeId: 1,
        },
        {
          question: "Почему JavaScript не выходит из замкнутого круга?",
          response: "Loop",
          ThemeId: 1,
        },
        {
          question: "Почему JavaScript плохо работает с цифрами?",
          response: "NaN",
          ThemeId: 1,
        },
        {
          question: "☦️👮🏽‍♀️⛓️⚖️🚨🚓🚔👮🐕‍🦺", 
          response: "Владимирский централ", 
          ThemeId: 2,
        },
        {
          question: "🍒🍒🚗", 
          response: "Вишнёвая девятка", 
          ThemeId: 2,
        },
        {
          question: "🌹🌹🌹🌹🌹🎤💔💃", 
          response: "Миллион алых роз", 
          ThemeId: 2,
        },
        {
          question: "🍷🍷🍷", 
          response: "Розовое вино", 
          ThemeId: 2,
        },
        {
          question: "👩‍👦🚶‍♂️🎶", 
          response: "Мама, я танцую",
          ThemeId: 2,
        },
        {
          question: "💃✈️🪂", 
          response: "А я все летала", 
          ThemeId: 2,
        },
        {
          question: "🥃⛩🎶", 
          response: "Рюмка водки на столе", 
          ThemeId: 2,
        },
        {
          question: "💃🥶💦", 
          response: "Тает лёд",
          ThemeId: 2,
        },
        {
          question: "🕺❌⛔", 
          response: "Выхода нет", 
          ThemeId: 2,
        },
        {
          question: "❌🚇", 
          response: "Постой, паровоз", 
          ThemeId: 2,
        },
        {
          question: "Какое дерево украшает каждый Новый год?", 
          response: "Ёлка", 
          ThemeId: 3,
        },
        {
          question: "Что падает с неба зимой?", 
          response: "Снег", 
          ThemeId: 3,
        },
        {
          question: "Какой фрукт ассоциируется с Новым годом?", 
          response: "Мандарин",
          ThemeId: 3,
        },
        {
          question: "Кто приносит подарки на Новый год?", 
          response: "Дедмороз",
          ThemeId: 3,
        },
        {
          question: "Какой напиток открывают под бой курантов?", 
          response: "Шампанское", 
          ThemeId: 3,
        },
        {
          question: "Что запускают в небо в честь праздника?", 
          response: "Фейерверк", 
          ThemeId: 3,
        },
        {
          question: "Какое украшение вешают на верхушку ёлки?", 
          response: "Звезда", 
          ThemeId: 3,
        },
        {
          question: "Что часто поют на новогодних вечеринках?", 
          response: "Караоке", 
          ThemeId: 3,
        },
        {
          question: "Какое слово ассоциируется с вручением на Новый год?", 
          response: "Подарок",
          ThemeId: 3,
        },
        {
          question: "Какой салат традиционно готовят на Новый год?", 
          response: "Оливье", 
          ThemeId: 3,
        }
      ];
      // {
      //   question: "Почему JavaScript не может найти свою кофейную кружку?",
      //   response: "Undefined",
      //   ThemeId: 1,
      // },
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/themes",
        element: <ThemesPage/>,
      },
      {
        path: "/theme/:id",
        element: <OneTheme theme={data}/>,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/reg",
        element: <RegPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
