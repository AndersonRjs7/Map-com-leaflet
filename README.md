# Template React Webpack v5


# Criar um arquivo .babelrc na raiz do projeto e adicionar as sequintes linhas de códigos:
{
  "presets": [
      "@babel/preset-react",
      "@babel/preset-env"
  ],
  "plugins": [
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-transform-react-jsx"
  ]
}

# Criar um segundo arquivo .env-local na raiz do projeto e adicionar as sequintes linhas de códigos:
REACT_APP_MAPBOX_TOKEN="pk.eyJ1IjoiYW5kZXJzb25kc202NzYiLCJhIjoiY2wwcHRoa3E0MjMzNjNicDdpMmJkYWs4diJ9.HKzkYGIu0aaSrgDugkcdAA"
R="pk.eyJ1IjoiYW5kZXJzb25kc202NzYiLCJhIjoiY2wwcHRoa3E0MjMzNjNicDdpMmJkYWs4diJ9.HKzkYGIu0aaSrgDugkcdAA"


# Projeto usando:
* Webpack v5
* Babel
* SASS para estilos
