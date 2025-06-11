# 🪨📄✂️ Rock Paper Scissors
Project 2 - Simon Vaz

View live github project +++++++++++++++++++++++++

---

## Table of Contents

- Overview
- User Goals
- Features
- Technologies Used
- Testing
- Bugs
- Future Improvements
- Deployment
- Credits

---

## Overview

Rock Paper Scissors is a fun and interactive browser-based implementation of the classic Rock, Paper, Scissors game built using HTML, CSS and JavaScript. The user plays against the computer in a best-of-10 format. The game keeps track of overall victories over multiple rounds. It runs entirely on the front-end and allows the user 10 rounds per match.

The design is intended to be playful and colourful, using emjois as game tokens and featuring glowing animations to enhance the user engagement. 

![Screenshot of Am I Responsive](assets/images/screenshot_of_amiresponsive.png)

---

## User Goals 

- Play a full game of Rock, Paper, Scissors in a "best out of 10" format.
- Compete against a randomly-generated computer opponent.
- See a clearly styled result after each round
- Track the score and round progression visually.
- View cumulative wins/losses over multiple games. 
- Easily restart the match without refreshing the browser.

---

## Features 

### 1. Game Interface

- **Emoji Buttons**  
  Players choose from 🪨 (rock), 📄 (paper), or ✂️ (scissors) using clickable emoji buttons.

- **Choice Display**  
  Shows both the player's and computer's choices after each round.

- **Responsiveness**  
  Layout adjusts well to different screen sizes, ensuring a smooth user experience.

### 2. Game Flow 

- **Single Round Execution**  
  Clicking a button triggers one round of the game.

- **Computer Logic**  
  The computer randomly selects one of the three options.

- **Round Limiter**  
  After 10 rounds, the game ends automatically, and input is disabled until reset.

### 3. Score Tracking

- **Round-Based Scoring**  
    - Both user and computer scores update in real-time.
    - Score is displayed as: Score - You: X | Computer: Y.

- **Round Counter**  
  Displays the current round as: Round X / 10.

### 4. Result Display and Animation 

- **Immediate Feedback**
  Result text appears after each round:
  - "You win!"
  - "You lose!"
  - "It's a tie!"

- **Color Coding**
  - 💚 Win: Light Green
  - 🔴 Loss: Red
  - 🟡 Tie: Yellow

- **Glowing Animation**  
  The result message gently pulses for added visual feedback.

### 5. Game Restart

- ** Restart Button**
  - Appears only after a full 10-round game.
  - Resets the current round count and scores.
  - Keeps the overall win/loss tally intact.

### 6. Persistant Totals

- **Cumulative Game Wins**
  - Tracks how many full matches (best of 10) the player and the computer have won.
  - Displayed as: Games Won - You: X | Computer: Y
  - Designed to encourage replay and competition.

### 7. Footer

  - The footer section describes to the rules of the game and how to play
  - 

---

## Technologies Used

- **HTML5** – Provides the structure and content of the game interface.
- **CSS3** – Handles layout, styling, animations, and color effects.
- **JavaScript (ES6+)** – Powers the core game logic, scorekeeping, and user interactions.

---

## Testing

The site has been tested across multiple browsers including Chrome, Safari and Edge to ensure cross-browser compatibility. Additionally, it was also tested on various screen sizes to ensure all funtionality is fully responsive. 

## Code Validation

### HTML Validation

![html-checker](assets/images/html-checker.png)



## Deployment 
This site was deployed to Github pages. The steps to deploy are as follows:
- Once code was ready to be pushed to Github, I used the commandsv 'Git add', 'Git commit -m "-"', 'Git push'
- In the Github repository, navigate to the Settings tab
- Select the pages window and fthe source section drop-down menu, select the Master Branch
- Now the page will automatically be refreshed and shown