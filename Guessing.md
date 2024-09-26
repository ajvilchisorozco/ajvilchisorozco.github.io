```mermaid
flowchart TD
Start([Start]) --> Num[num = random number from 1 through 10]
    Num --> Guess[/guess = user input/]
    Guess --> Try{Did you guess right?}
    Try -->|No| Wrong[Guess < num]
    Wrong -->|Yes| Low[Too Low]
    Low --> Guess
    Wrong -->|No| High[Too High]
    High --> Guess
    Try -->|Yes| Win[You're correct]
    Win --> End([End])
```