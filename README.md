# PostEat

PostEat is cross-platform Single Page Application to store recipes, food inspirations and share it with friends based on Angular Library.


Used technologies:
- Angular v15
- Angular Material + custom day/night themes
- Firebase (Google authentication + Realtime Database + Storage)
- NgRx
- Bootstrap

Implemented features:
- login by Google Provider
- upload new avatar ()

Todo features(order is important):
- improve auth store (actions, reducers and effects)
- add auth guard
- add PWA
- add loader
- inspiration: 
  - model + database model
  - form to create and update
  - upload images
  - list of inspirations
  - delete
- recipe:
  - model + database model
  - form to create and update
  - delete
  - upload images
- export inspiration as finished off recipe

Future feature:
- add location of inspiration and shop it on map
- share inspiration and recipes with other users
- export list of necessary products as shopping list to Google Keep
- export recipe as PDF and send via mail or download
- notifications


## Installation

Use the package manager [npm] to install post-eat.

```
npm install
```

## Usage in develop mode

```
npm start
```

## Develop branch

```develop```

## Release version
Currently, there is no deployed stable release version from main branch.

[Here is deployed version from develop branch - under construction](https://post-eat-ee093.web.app/)

## License

[MIT](https://choosealicense.com/licenses/mit/)
