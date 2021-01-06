This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### プロジェクトの作成
npx create-react-app name --template redux


## 学んだこと
・ES7 React/Redux/GraphQL/React-Native snippets　をインストールすると、rcfeでファイル名と同じ名前のfunctionを作ってくれる。

#### ・マテリアル UI　を使用
https://material-ui.com/

#### アイコン
https://material-ui.com/components/icons/#icons
アイコンをクリックするとimportがコピペできる。

#### UIの基本的な作り方
1.大きなブロック分け（コンポーネント分け）
2.コンポーネントの中をさらにコンポーネント分け
3.最小コンポーネントごとにjsファイルとcssファイルを用意する

#### firebaseの追加方法
yarn add firebase

#### redux　について
アプリ全体のstateを管理できる

#### firebase系の最後のコマンド
firebase login 
firebase init >> Hosting >> existing projectで現在のプロジェクトを選択
npm run build
firebase deploy

#### firebase hostingを使えばそのままデプロイできる
https://firebase.google.com/docs/hosting/quickstart?hl=ja

#### うまくいかなかったこと
import FlipMove from "react-flip-move";
FlipMoveがうまく再現できなかった。
>　立ち上げ直したらうまくいった

### link
https://linkedin-clone-yt-5be2d.web.app/

### dotenvについて
create-react-app　で作成したprojectなら　.envファイルに
REACT_APP_xxx = "API_KEY"
名前の最初にREACT_APPをつけなければいけない。
パッケージはもともと組み込まれている

## Reduxのdevtool
https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ja
ここからインストール


