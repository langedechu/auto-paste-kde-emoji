const clipboardListener = require("clipboard-event");
import clipboardy from "clipboardy";
import { exec } from "child_process";

// To start listening
clipboardListener.startListening();

var pasted = true;

clipboardListener.on("change", async () => {
  if (pasted === false) return;

  const regex = /\p{Extended_Pictographic}/gu;
  const cbcontent = await clipboardy.read();
  const cbContentMatches = cbcontent.match(regex);

  if (typeof cbContentMatches === "undefined" || !cbContentMatches) {
    return;
  }

  if (cbContentMatches.length < 1) return;

  pasted = false;

  exec(
    "xdotool key Escape Escape && sleep 0.25 && xdotool key ctrl+v",
    (error, stdout, stderr) => {
      if (stdout) console.log(stdout);
      if (stderr) console.error(stderr);
      if (error) return console.error(error);

      pasted = true;
    }
  );
});
