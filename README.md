# Geography Quiz | Do you know?!

**Do you know?!** Is a JavaScript game built to allow users to play a game where they can show their knowledge in a quiz based on geography. This game was built to work like an original quiz test and can be played by a single player at the time. 

![the new mockup](https://user-images.githubusercontent.com/96884287/162581586-776c6bc7-eb3d-45c6-8216-4717e10dc5cf.png)

The live website can be found [here](https://vasi012.github.io/Geography_MP2/).


# Features

## Favicon
A site wide favicon will be implemented as **question mark**.

This will provide an image in the tabs header to allow the user to easily identify the website if they have multiple tabs open.

![favicon](https://user-images.githubusercontent.com/96884287/162581652-f0f09be1-afe5-4730-b755-b0f6386bc84c.png)


# 404 page

A 404 page will be implemented and will display if a user navigates to a *broken link*.

The 404 page will allow the user to easily navigate back to the main website if they direct to a broken link / missing page. 
With the need of the browser back button.

![404](https://user-images.githubusercontent.com/96884287/162581690-bb3f47c0-b800-4d70-aeff-cdacff78888b.png)


# Home / Game - page

## Game instructions

 ### The home page has a button which contains the information for this game.

![instructions](https://user-images.githubusercontent.com/96884287/162581715-74aa991e-1b5c-4ad7-97aa-ef5b765082c5.png)


## Game start button

A button will be on the home page that when clicked will direct the user to the main quiz game
This will allow the user to start the game after they read and understand how the game works.

# Geography Game quiz.

The user has 4 different methods of answers where they can choose the correct option. 
If the user selects the right answer, this will receive a point and the right answer will become green.
If the user clicks a wrong answer, the wrong answer will become red and the right answer will be revealed. 

- Preview before a button was selected

![1](https://user-images.githubusercontent.com/96884287/162581761-a39df932-0b46-43c9-8504-17ccafc89562.png)


- Wrong answer was selected, and the right answer will be revealed.

![2](https://user-images.githubusercontent.com/96884287/162581771-0b81dab3-c399-42e6-b440-47c985905a66.png)


- The right Answer was selected.

![3](https://user-images.githubusercontent.com/96884287/162581782-530479a5-c1f6-403b-9531-952b385911e8.png)


# Count score

Underneath every selected answer the user can have an overview over the number of questions he has completed. 
Once the user complete 10/10 questions he will be prompted to the final score.

![questions 110](https://user-images.githubusercontent.com/96884287/162581799-ba96918b-6d8a-42ad-8862-6ca932b73268.png)


# Final score

The final score will be presented to the player and a personal message will be prompted.

![score message](https://user-images.githubusercontent.com/96884287/162581809-1fa3873f-c45a-4b24-9cc2-9603951aafae.png)

  
The final score section has a button which permits every user to start a **new game** where they can achieve a **higher score** than *before*.

![score end](https://user-images.githubusercontent.com/96884287/162581826-5fb2b66e-f390-47e2-9816-dd4d22dda12f.png)

## Features left to implement

- Add the global time to inform the user of the actual time in his time zone.
- Add a timer for each question, where the user has to answer a question in a limited time.
- Animate the questions for a better overview and interactive to the user.
- Game Sounds.

# Wireframes

1. Home page (start page).

![start game](https://user-images.githubusercontent.com/96884287/162581855-670a8484-d299-4bdb-8096-598b3226d324.png)


2. Game page.

![first page wireframe](https://user-images.githubusercontent.com/96884287/162581869-3c8d4d6a-75e4-4404-a8a2-2631cffaa538.png)


3. End game page.

![end page](https://user-images.githubusercontent.com/96884287/162581872-94c3d144-4ca4-4a04-8eb4-d8d4d4611fc9.png)


4. 404 page.

![404 page](https://user-images.githubusercontent.com/96884287/162581883-e07f0e69-9645-4de7-990b-ce7368b29bcd.png)


# Technologies

### HTML 
– The structure of the website was develop using HTML.

### CSS  
- The Website was styled using custom css in an external file style.css.

### JavaScript 
– The game play logic was created using javaScript in 2 different external files.

### GitHub 
– Source code is hosted on GitHub and deployed using GitPod / Git pages.

### Font Awesome 
– Icon obtained from https://fontawesome.com was used within the body element.

### Favicon.io 
– Favicon files were created at https://favicon.io/favicon-converter/

### Balsamiq 
– Wireframes were created using balsamiq from https://balsamiq.com/wireframes/desktop/# 

# Testing

## Responsiveness

All pages were **tested** to ensure **responsiveness** on the screen sizes from **280px** and **upwards** as defined in the *WCAG 2.1* Reflow criteria for responsive design on chrome, edge, Firefox and opera Browsers.

Step to test:

1.	Open browser and navigate to (add link)’Do you know?!’ (Geography quiz).

2.	Open the developer tools (right click and inspect)

3.	Set the responsive and decrease width to 280px

4.	Set the zoom to 50%

5.	Click and drag the responsive window to maximum width.

Expected:

Website is responsive on all screen sizes and no images are pixels or stretched. No horizontal scroll is present. No elements overlap.

Actual:

Website behaves as expected.

Website was also opened on the following devices and no responsive issues were noticed:
-	iPhone 12 PRO 
-	iPhone 13 PRO
-	iPad Pro
-	Oukitel C12 Pro
-	TCL 30 Pro
-	iPhone SE
-	Laptop 
-	Desktop
-	TV via HDMI


# Accessibility

**Wave Accessibility** tool was used throughout development and for final testing of the deployed website to check for any aid accessibility testing.

1. First Page.

![first page](https://user-images.githubusercontent.com/96884287/162582558-6f76e322-3d71-4eb8-b585-d59e0d355c7f.png)

2. Start Page.

![start page](https://user-images.githubusercontent.com/96884287/162582541-73b07c57-e444-4477-8410-cf6adb2dd709.png)

3. Submit Answer

![submit answer](https://user-images.githubusercontent.com/96884287/162582548-7c2add24-0e6f-45fa-8942-e93c31e9adfe.png)

4. 404 Page

![404 erwave](https://user-images.githubusercontent.com/96884287/162582634-e7fc9ccd-4956-4604-b99d-fa15dd1c0c5e.png)


Testing was focused to ensure the following criteria were meet: 

-	All forms have associated labels or aria-labels so that this is read out on a screen reader to users who tab to form inputs.
-	Color contrasts meet a minimum ratio as specified in WCAG 2.1 Contrast Guidelines.
-	Heading levels are not missed or skipped to ensure the importance of content is relayed correctly to the end user.
-	All content is contained within landmarks to ensure ease of use for assistive technology, allowing the user to navigate by page regions.
-	All not textual content had alternative text or titles, so descriptions are read out to screen readers.
-	HTML page lang attribute has been set.
-	Aria properties have been implemented correctly.
-	WCAG 2.1 Coding best practices being followed.
- Manual tests were also performed to ensure the website was accessible as possible and some accessibility issues were identified.

### *Issue #1: If you click one variant of answer and before submitting you changed your mind, the preview button it’s not resetting its color to the initial color.* 

# Navigation Links

Testing was performed to ensure all navigation links on the respective pages, navigated to the correct pages as per design. 
This was done by clicking on the navigation links on each page.

**Navigation link**    **Page to load**
       *Home*             *index.html*


Links on all pages navigate to the correct pages as expected. 

# Footer

The footer was not implemented as the game doesn’t have all the elements implemented. 
The footer will be implemented once the website will be ready to be distributed outside *GitHub* pages.

# Validator Testing

- **HTML** 
No errors were returned when passing through the official W3C validator

- **Home page**

![index page](https://user-images.githubusercontent.com/96884287/162582129-cd34cae2-0d20-4ba9-89b9-4d58ef6d1e4c.png)


- **404 page** 

![404 error page validator](https://user-images.githubusercontent.com/96884287/162582141-10fac8ad-97df-4f76-961f-eeb0d8d6fdd5.png)

- **CSS**
 
No errors were found when passing through the official (Jigsaw) validator

![css validator](https://user-images.githubusercontent.com/96884287/162582160-4cbf663b-9c2c-4c46-9aaf-16f36295e027.png)


- **JavaScript**

No errors were returned when passing through the JShint validator

*JavaScript* (script.js)

![script validator the right one](https://user-images.githubusercontent.com/96884287/162582222-2d1bc0a8-c571-4a8f-9afb-4391e94fd513.png)

  
*JavaScript* (questionnaire.js)

![js questionaire](https://user-images.githubusercontent.com/96884287/162582214-d23b998b-5344-4ed2-a31a-0181142d1b44.png)

- **Lighthouse Report**

![Screenshot 2022-04-09 171549](https://user-images.githubusercontent.com/96884287/162582329-b5ed6cf6-8298-493a-8c64-3e5fbebade7d.png)



# Deployment

The following git commands were used throughout development to push code to the remote repository:

- git add <file> 
 - This command was used to add the file(s) to the staging area before they are committed.
- git commit -m “commit message”  
 - This command was used to commit changes to the local repository queue ready for the final step.
- git push 
  - This command was used to push all committed code to the remote repository on github.

# Deployment to GitHub pages

- The site was deployed to pages. The steps to deploy are as following:
-	In the GitHub repository, navigate to the Settings tab.
-	From the menu on left select 'Pages'.
-	From the source section drop-down menu, select the Branch: main.
-	Click 'Save'.
-	A live link will be displayed in a green banner when published successfully.
- The live link can be found [here](https://vasi012.github.io/Geography_MP2/).

## Clone the Repository Code Locally

  Navigate to the GitHub Repository you want to clone to use locally:
- Click on the code drop down button.
- Click on HTTPS.
-	Copy the repository link to the clipboard.
-	Open your IDE of choice. (git must be installed for the next steps)
-	Type git clone copied-git-url into the IDE terminal.
The project will now be cloned on your local machine for use.
  
  
# Credits
  
1. The ReadMe file has been realized inspiring from https://github.com/Gareth-McGirr/Portfolio-Project-2-Poker-Fun
2. My mentor Daisy McGirr for her guidance and support throughout my project.
3. My colleagues from Slack and the study_group who helped me to find 2 issues and fix them. 
4. To W3Schools a platform that helped me to clarify some not understanding about Js.
5. To Simple Steps Code for the idea of creating this website https://simplestepscode.com/javascript-quiz-tutorial/
6. The Quiz idea was inspired from https://meldissa.github.io/p2-movie-quiz/
