const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const window = new BrowserWindow();

  window.loadFile("build/index.html");
  window.on("ready-to-show", () => {
    window.show();
  });
};

app.whenReady().then(createWindow);
app.on("window-all-closed", () => app.quit());

try {
  require("electron-reloader")(module);
} catch (_) {}
