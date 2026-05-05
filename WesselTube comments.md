# WesselTube comments

Over het algemeen ziet het er netjes uit.
Een paar dingen om op te letten:

- ik zie de nodige magic numbers. Bijv. padding op de body om de main content op de juiste plek te krijgen. Dat zou ik iets anders opgelost hebben.
- de header is nu fixed met sidebar en main eronder. ik zou die laatste 2 in een div hebben gestopt en de main een padding hebben gegeven
- in het videogrid kan je voor `grid-template-columns` een `repeat` gebruiken. Nog iets handiger is het gebruik van CSS variabeles.
- in het algemeen: probeer het gebuik van `transition` het liefst te beperken tot dingen als `opacity` en `transform` (translate, scale, rotation). Dit om repaints te beperken. (zie bijv https://web.dev/articles/animations-guide#triggers)
- bij een thumbnail zou de anchor tag om het hele ding moeten zitten. Nu heb je 2x een anchor, 1 om het plaatje, en 1 om de footer. Dat is een beetje vreemd.
- de `video_title` zou een heading moeten zijn, bijv `h3` ipv een paragraph.
- bij de `profile_image`: ook hier zie ik een "magic number", namelijk 24px. Ik denk dat dit 50% zou kunnen zijn.
