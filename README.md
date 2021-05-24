# CustomListSv

This library was created with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.14.

## 🌈 Preview

https://github.com/SavuVeronica/Custom-list-sv/blob/master/demo.PNG

## 🚀 Technologies

- Typescript
- Angular
- NPM
- Node.js

## 🤔 Installation

Option 1: Run `npm install custom-list-sv` in the source folder of the project in order to install the custom list component.

Option 2: Run `npm install -g custom-list-sv` in order to install it globally.

## 💡 How To Use

In order to use the list you should include tag `custom-list-sv` in your html file and provide the list of items to the `items` property.

The title of the list should also be provided to the `title` property.

## 🎊 Features

This library creates a custom list with a given set of items.

Takes as input an array of elements with type `string`.

The user can perform the following actions:
- add a new item
- check an existing item
- uncheck an existing item
- delete an item

Can be used to represent lists as : To do lists, Shopping lists, etc.

Events:
- *newItem*
  - triggered when a new item is added to the list
  - retrieves the newly created item: `(index, description)`
- *itemChecked*
  - triggered when an item form the list is checked
  - retrieves the item that is checked: `(index, description, isChecked)`
- *itemUnchecked*
  - triggered when an item from the list is unchecked
  - retrieves the item that was unchecked: `(index, description, isChecked)`
- *itemDeleted*
  - triggered when an item from the list is deleted
  - retrieves the item that was deleted: `(index, description)`


## 👤 Author

🤓 Savu Veronica Alexandra
/ *veronica.alexandra.savu@gmail.com*
