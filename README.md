# React プロジェクトで jest と SonarQube を使います。

React プロジェクトで Jest と SonarQube を使う最小サンプルです。

必要なライブラリ群：

```
npm install --save-dev @testing-library/react
npm install --save-dev @testing-library/jest-dom
npm install --save-dev @testing-library/user-event
npm install --save-dev @types/jest
npm install --save-dev jest
npm install --save-dev @babel/preset-react
npm install --save-dev @babel/preset-env
npm install --save-dev jest-environment-jsdom
```

.babelrc を新規作成

```
++ .babelrc
{
  "presets": ["@babel/preset-react", ["@babel/preset-env", { "targets": { "node": "current" } }]]
}
```

package.json に以下を追記（場所は適当に）

```
++ package.json
"jest":{
  "testEnvironment": "jsdom"
},
```

.eslintrc.cjs に以下を追記（env や rules が既にあれば末尾に追加）

```
++ .eslintrc.cjs
env: { jest: true },

rules: {
  'react/jsx-uses-react': [1],
},
```

テスト実行

```
npm test -- -u
npm test -- --coverage
eslint **/*.js* -f json -o report.json
sonar-scanner
```

アプリ実行

```
npm run dev
```
