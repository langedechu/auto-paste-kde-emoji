bun install

mkdir ~/.auto-paste-kde-emoji
cp -r ./** ~/.auto-paste-kde-emoji

sudo ln ./auto-paste-kde-emoji.sh /usr/local/bin/auto-paste-kde-emoji
sudo chmod +x /usr/local/bin/auto-paste-kde-emoji
