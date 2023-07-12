# GRE Frequent Words Flash Cards 
## Project Overview
The GRE Frequent Words Flash Cards website is designed to help users practice the meanings of words that commonly appear in the GRE exam. It provides a collection of 300 high-frequency word flash cards that users can interact with. The website allows users to mark words they find difficult to remember and provides a review feature to help users become more familiar with those marked words. Additionally, users can install the website as a progressive web application (PWA) on their devices for easy access.

- The website is hosted at: https://gre-flash-cards.netlify.app/

## Features
The GRE Frequent Words Flash Cards website offers the following features:

- 300 High Frequency Words Flash Cards: The website provides a collection of 300 flash cards containing high-frequency words typically encountered in the GRE exam. Users can practice the meanings of these words through interactive flash cards.
- Marking/Unmarking: Users can mark words they find challenging to remember. By marking a word, it becomes easier to focus on and review later.
- Review: The website utilizes the marking feature to help users become more acquainted with difficult words. Marked words will occur more frequently during flash card practice, reinforcing learning and improving retention.
- Install on Your Device: The website can be installed as a progressive web application (PWA) on users' devices. When prompted, users can click the install button to add the website to their home screen, allowing for easy access and offline usage.

## Word Data Management
To add or modify words and their meanings, you can edit either the .docx file or the .json file directly. The following information explains how the word data is managed:

- Word Data Format: The word data is stored in either a .docx (Microsoft Word) file or a .json (JavaScript Object Notation) file.
- Word Data Conversion Script: To convert the .docx file into a .json file, a conversion script is used. The script can be found at https://github.com/mezeru/Key-Value-to-JSON. Whenever the .docx file is updated or modified, the script automatically runs, creating a new .json file with the updated word data.
- Website Usage of JSON File: The GRE Frequent Words Flash Cards website utilizes the generated .json file to prepare and present the flash cards to the users. This ensures that the website reflects the most recent word data.

## Usage Instructions
To use the GRE Frequent Words Flash Cards website effectively, follow these instructions:

- Access the website: Open a web browser and navigate to https://gre-flash-cards.netlify.app/.

- Flash Card Practice: Use the flash cards to practice the meanings of high-frequency words. Flip the cards to reveal the word meaning and test your knowledge.

- Marking/Unmarking Words: If you find a word difficult to remember, click the "Mark" button on the flash card to mark it. The marked words will receive more focus during flash card practice.

- Review Marked Words: To reinforce learning, the website increases the frequency of marked words during flash card practice. Use this feature to become more familiar with challenging words.

- Install as PWA (Progressive Web Application): If prompted, click the install button to add the website as a PWA on your device. This allows you to access the flash cards easily and use them offline.

Conclusion
The GRE Frequent Words Flash Cards website provides an interactive platform for practicing the meanings of high-frequency words commonly found in the GRE exam. With features such as marking, reviewing, and the ability to install as a PWA, the website offers an efficient way to improve vocabulary skills and enhance GRE exam preparation.
