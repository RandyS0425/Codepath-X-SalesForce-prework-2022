# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Randy Barreda**

Time spent: 6 hours spent in total

Link to project:  https://cheerful-sticky-visitor.glitch.me/

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] High Score Keeper
- [x] Current Score Keeper
- [x] Drop Down Menus (Difficulty,Speed)
- [x] Speed Increaser
- [x] Pattern Size Extended for Higher Difficulty Level
- [x] Volume Controller 


## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
<details open>
<summary>Overall Showcase</summary>
   <img src="http://g.recordit.co/l4pmbJlBTH.gif"width=250>
<br>
</details>

<details open>
<summary> Volume Slider</summary>
<img src="http://g.recordit.co/3UQtVnTdpU.gif"width=250>
   <br>
</details>

<details open>
<summary>Difficulty Drop-down Menu</summary>
 <img src="http://g.recordit.co/TGeWp5M0k0.gif"width=250>
   <br>
   
</details>
<details open>
<summary>Speed Drop-down Menu</summary>
 <img src="http://g.recordit.co/1Q6oEZvGUL.gif"width=250>
   <br>
   
</details>
<details open>
<summary>Speed Drop-down Menu</summary>
 <img src="http://g.recordit.co/921vNbI4sO.gif"width=250>
   <br>

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
    A. W3 Schools (Drop Down menu)
    b. HookAgency(color Schemes)

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
A challenge I encountered while creating this submission occurred when I tried adding bonus features to the application. One of the bonus features that I had difficulty adding was a difficulty option. My idea was to have three different difficulties - Easy, which made users select and remember 4 patterns, Medium, which increased the number of patterns to 6, and Hard which increased the number of patterns to 8. To implement this feature, I created a global variable that stored the number of patterns that should be generated. Then, I created a drop down menu and added a click event that updated the number of patterns variable. When I was creating these function, I accidentally typed “medium” incorrectly so whenever a user tried to play with the medium difficulty, the app would not do anything. This was a very frustrating bug because error was miniscule. To overcome this bug, I first tried to run through the logic of my code to make sure everything was working correctly. After about 20 minutes, I realized that my logic made sense so I went online and looked up how to debug a Javascript application. I ended up finding Google’s developer documentation article (third resource from question one), which was very important because it went over the tools I have as a developer while creating websites. One tool it went over was using the console to read any error messages that may arise. As soon as I opened my console, it showed me the line my error was on and the error message “type error, cannot read properties of undefined.” After looking this error message up, I immediately realized I misspelled one of my element Id’s. I looked that up and my app worked flawlessly after that.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
One question I have about web development after completing my submission is how are companies able to maintain large codebases that have many developers working on them simultaneously. Another question I have has to do with the efficiency of websites. How are companies that get lots of traffic, like Google, able to produce a user’s desired result at lightning speeds? Another question I have is how do large scale companies keep track of the bugs, that may occur in their websites.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
If I had a few more hours to work on this project, one thing I would definitely spend time on is refactoring my code. Throughout the development of this application, I realized I could have used better variable names and abstracted some functions, however, I wanted to have a fully functional application before I went back to fix the code in case I ran out of time. Another thing I would also do is add additional features like giving the player lives or modifying the user interface. One thing that is essential in the year 2022, is a clean UI with more futuristic looks, than the current one. Lastly, a larger variety of levels, and leaderboards with people playing across the globe. 



## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/a093468593c442428639fbb914fab554)


## License

    Copyright Randy Said Barreda Martinez

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
