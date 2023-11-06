# Auto Paste KDE Emoji (_Picker_)

Hey this program requires Bun to run correctly.

So if it's not already done, download Bun using this shell command:

```bash
curl -fsSL https://bun.sh/install | bash
```

> ### Note
>
> **TL;DR** Bun is a fast an useful JavaScript interpretor.
>
> Bun is another JavaScript compiler. And basically, its only purpose it's to run anything written in any JavaScript (Common, Type, etc...) fast as f\*ck. It supports first-level await statements, import statements and `require()` in the same file... And it got a super powerfull internal API with tons of methods for cryptography, file, etc.

## Get started! 🚀

First, clone this repository.

To install this program, you have to run the `install.sh` script.

```bash
# Make the install script executable
chmod +x ./install.sh

# Then, run it.
./install.sh
```

> ### Note
>
> The installation script will copy this repository content to `~/.auto-paste-kde-emoji`, so you can delete those files after without affecting the actual installation.
>
> And so you know where it's installed if you want to change the program's behaviors! 😄

## And it's done! 🎉 (_almost_)

You can test the program by typing `auto-paste-kde-emoji` in a terminal.

Then, go into your favorite text editor and open the KDE Emoji Picker. If you select an emoji, it will automatically close and paste the emoji on the selected textbox.

If you want it to launch in background everytime you login, make sure to add the following lines in `~/.profile`.

> ### Note
>
> Make sure that you are pasting these to the last lines of the file to avoid any weird behaviors with the `Amp` (`&`) symbol.

```bash
# start auto-paste-kde-emoji in background
auto-paste-kde-emoji &
```
