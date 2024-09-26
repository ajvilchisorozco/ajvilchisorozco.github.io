---
title: Guessing Game
---
flowchart TD
    start([Start]) --> num[num = RandomNumber(1,10)]
    num --> guess[/guess = user input/]
    guess --> try{Did you guess right?}
    try --> |No| wrong[Guess < num]
    wrong --> |Yes| low[Too Low]
    low --> guess
    wrong |No| high[Too High]
    high --> guess
    try |Yes| win[You're correct]
    win --> end([End])