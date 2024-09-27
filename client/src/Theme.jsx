import React from "react";
import { Link } from "react-router-dom";

function Theme({ theme, setTheme }) {
      // {
      //   question: "Почему JavaScript не может найти свою кофейную кружку?",
      //   response: "Undefined",
      //   ThemeId: 1,
      // },
  return (
    <div>
      <Link to={`/theme/${theme.ThemeId}`}>
      </Link>
    </div>
  );
}

export default Theme;
