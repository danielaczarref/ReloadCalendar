# Reload Calendar

This application developed on React Native framework in which you can find JavaScript/TypeScript development and CSS empowered components. All components were developed in TypeScript in the search to get its parameters strongly typed and, consequently, with certainty of its correct use.

## General Info 
- Fonts: Roboto and Roboto-Bold
- All components and pages were developed with styled-components
- All components follow the WCAG - Web Content Accessibility Guidelines - requirements
- For all gray scale found on this application's styles, since I'm not familiar with a large amount of color palette, I used a very helpful website: https://coolors.co/. Not only it provided me the gray scales I was looking for, but also helped me to name them. Very helpful indeded.

Make sure you run the following commands before testing:
```
yarn
react-native run-android
yarn start
```

## Avatar
Atom component developed in order to show user's profile picture and, in case there aren't any, display user's inicials.

### Avatar's Props
- name: this prop allow us to receive user name as String and display the first and last initials of their name in case there aren't any image source;
    Ex.: My name "Daniela Carvalho" will be showed as "DC".
- onPress:: this prop allow us to receive a function/action when pressed on Avatar's touch area, which could be used to redirect our user to, for example, a profile/settings page;
- source: this props allow us to receive the image source as string. Once is loaded, it will be displayed on Avatar;
- accessibilityLabel: in case you don't use this parameter, it will be spoken a default label, but it could be used to inform our visual disable user about, for example, redirection to profile page once Avatar is pressed.

## Button
Atom component developed to perform an action once it is pressed/clicked

### Button Props
- label: will receive a String to display the button's function purpose. In this application, on home page, it's label is "Apply";
- onPress: this prop allow us to receive a function/action when the button is pressed;
- accessibilityLabel: could be used to inform our visual disable user about what will happen once the button is clicked.

## Header
Molecule component used to display main application informations to user. It'll receive all Avatar's parameters, for example. In this application, it won't perform any action but it could be improved to redirect for chat history, user profile page, and even home page -- by all means, it could receive three different onPress props. But, for now, it's been using only Avatar's ones.

P.S.: Besides the calender itself, which I could not accomplish its level of development neccessary for all date threatments, it was the component in which I spent the biggest amount of time trying to perform as it should.

