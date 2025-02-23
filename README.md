deploy https://mi8mto.github.io/React-tic-tac-toe-task-react-redux/

# React + Vite

init
(по списку GitHub )
git init
git add .
git remote add origin "НАШ РЕПОЗИТОРИЙ"
git push -u origin "НАША ВЕТКА"

1. npm install gh-pages --save-dev
2. в package.json в scripts после "dev" add
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist",
3. в vite.config add
   base: '/папку и именем GitHub',
4. git add .
5. git commit -m "comment"
6. git push
7. npm run deploy
8. settings gh-pages
