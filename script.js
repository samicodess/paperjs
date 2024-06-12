window.importMap = {
  imports: {
    "@material/web/": "https://esm.run/@material/web/",
  },
};

import { PaperJSInterpreter } from "https://unpkg.com/paperjs/import.min.js";
import "@material/web/all.js";
import { styles as typescaleStyles } from "@material/web/typography/md-typescale-styles.js";

document.adoptedStyleSheets.push(typescaleStyles.styleSheet);

const paperjs = {
  div: {
    class: "container",
    styles:
      "justify-content: center;display: flex;align-items: center;height: 100%;width: 100%;top: 0;left: 0;right: 0;bottom:0;position: fixed;",
    "md-outlined-text-field": [
      {
        type: "email",
        placeholder: "Email",
        required: true,
      },
      {
        type: "password",
        styles: "margin-left: 12px",
        placeholder: "Enter Your Password",
        required: true,
      },
    ],
    "md-outlined-button": [
      {
        styles: "margin-left: 16px;",
        value: "Submit",
        alert: "Congrats, you have entered them succesfuly",
        target: "_blank",
      },
    ],
  },
};

PaperJSInterpreter.interpret(paperjs);
