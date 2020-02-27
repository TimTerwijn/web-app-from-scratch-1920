# Runescape calculator

## Github pages:
https://timterwijn.github.io/web-app-from-scratch-1920/

## Description
I want to make a Runescape application where you fill in your stats and gear bonuses, then you can search for a monster, powered by the osrsbox.com API, and calculate your hit and evade chance in percentages.

## Logo
![Logo](/img/logo.jpg)

## Table of contents
* [Diagrams](#diagrams)
* [Map, Filter and Reduce example](#map,-filter-and-reduce-example)
* [What API did I use](#what-api-did-I-use)
* [How to use](#how-to-use)
* [Roadmap](#roadmap)
* [License](#license)

## Diagrams
### Actor Diagram
![ActorDiagram](/img/ActorDiagram.PNG)
### Interaction Diagram
![InteractionDiagram](/img/InteractionDiagram.PNG)

## Map, Filter and Reduce example
[Codepen Example](https://codepen.io/timterwijn/pen/QWbdYKW)

<!-- What external data source is featured in your project and what are its properties 🌠 -->
## What API did I use
I made use of **Osrsbox.com**.

name: "Cow",  
attack_level: 1,  
strength_level: 1,  
defence_level: 1,  
magic_level: 1,  
ranged_level: 1,  
attack_magic: 0,  
attack_ranged: 0,  
defence_stab: -21,  
defence_slash: -21,  
defence_crush: -21,  
defence_magic: -21,  
defence_ranged: -21,  

## How to use
Clone or download the repository $ git clone https://github.com/TimTerwijn/web-app-from-scratch-1920.git  
Put code on a server.  
Go to index.html in your browses.  
App will download the data from the API.  
Enter a monster name like: "cow".  
Click on the result (cow) to see his stats.  

## Roadmap
* ~~Search for a monster from the osrsbox.com api.~~
* ~~Visit monster detail page with routes and states.~~
* ~~Improve code with promises.~~
* ~~Add map, filter and reduce functions.~~
* ~~Make use of a Template engine.~~
* Improve MonsterMap algorithm.
* ~~Add local storage support.~~
* Enter own stats.
* Calculate monster and player accuracies.
