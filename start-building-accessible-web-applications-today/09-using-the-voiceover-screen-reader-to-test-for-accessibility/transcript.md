# 9. Using the Voiceover screen reader to test for accessibility

## Introduction
Did you know every Mac comes with a fantastic screen reader built-in? Learn the basics for operating **Voiceover with Safari**, including:
- common key commands
- the web rotor
- and the help menu. 
We'll also set up keyboard tabbing in Safari and OSX's System Preferences, two requirements for accessibility testing that occasionally trip up users. In a future lesson, we'll compare Voiceover to Windows screen readers, since they work quite differently.

##  Resources
- [Apple Voiceover commands and gestures:](https://www.apple.com/voiceover/info/guide/_1131.html)
- [WebAIM Voiceover Tutorial:](http://webaim.org/articles/voiceover/)

## Transcript
00:00 When you first get a new Mac, to develop and test for accessibility, you might need to turn on a few things. If I go to newyorktimes.com without changing anything, and I start to tab through the page, you'll see that I don't get a focus outline when I tab through everything, and as a keyboard user, that makes it impossible to use.
00:19 There's two things that we need to change. 

### Tabbing
1) First, in the **Safari Preferences**, under the **Advanced** section, there's a **checkbox for accessibility to Press Tab to Highlight Each Item on a Web page**. That will make it so you can start tabbing through the page.

2) We also want to go to **System Preferences** under **Keyboard**, and then the **Shortcuts** panel. Under **Full Keyboard Access**, we'll want to change it from **Text Boxes and Lists Only**to **All Controls**.

00:46 Now I can start tabbing through a page and use the Skip Links, and see where I am on the screen. It's really important to test for accessibility with the keyboard, because that's how your users might need to get around.

00:58 That way, you can test what the focus styles look like, make sure you can reach everything on the page that you're supposed to. Without these settings set, you might have a bit of trouble.

### VoiceOver
01:09 For part two, we're going to look at how to use VoiceOver, the screen reader on the Mac platform. It's worth mentioning this isn't the most popular screen reader. There are some on Windows that people use quite a bit more, like JAWS and NVDA, but VoiceOver is a really fantastic tool for developing for accessibility.

01:25 **It works best with Safari.** You can use it with Chrome, but **you will have better results in Safari because of the work that they have done to expose accessibility features in the browser. Apple makes both Safari and VoiceOver, so they work very well together, and that is what users will use the most, so you should test with it.**

01:44 The way that it works is a series of keyboard commands combined together. **To turn on VoiceOver,** you do `command F5`. To do anything else, you hold the **VoiceOver keys**, which are `Control and Option`, along with another key, like `VoiceOver + H` for the **help menu**, or `VoiceOver + U` for the **Web router.**

02:05 There's some examples that we will go and test in a minute, but this works a little differently than Windows screen readers in that instead of the screen readers providing a buffer that all the key, the H key, for example, would go through Headings in JAWS.

02:19 **In VoiceOver, there isn't that buffer layer, and so you use these keyboard combinations to do all of these different things.** There's a really handy Commands and Gestures reference on apple.com that I will link to in the lesson notes, as well as an article from **WebAIM.** It stands for **Web Accessibility In Mind.**

02:38 They have some great tutorials on **using VoiceOver to emulate Web accessibility**. This is important to read if you're new to accessibility testing, because you want to try and test it like a user would, someone who relies on a screen reader would, so no using your mouse.

02:54 **You might even want to turn off your screen all the way, which Lifehack, I used on an airplane to type in my credit card number without having anyone seeing my screen. It was pretty awesome.**

03:05 People rely on screen readers, so we can test them using these commands and gestures. I'm going to turn on VoiceOver with `command F5`, and then show you a couple of the different menus.

03:16 VoiceOver on Safari. Appendix A Commands and Gestures Window. Appendix A Commands and Gestures. HTML content has keyboard focus. You are currently on HTML content. To enter the Web area, press Control-Option-Shift, Down arrow.

03:29 Right now, we are in a **window view,** where the whole window has an outline around it. **To interact with the content, we need to actually drill down into it using key commands.**

03:38 We will take VoiceOver's suggestion to press `Control-Option-Shift`, and `Down arrow` with `Control and Option` being the **VoiceOver keys.**

03:46 Note that if you're on a keyboard that has a function key, you may need to hold the function key in order to get those key commands to work. It ends up being quite a jumble of key commands that you have to hold onto.

03:58 I have a third-party keyboard that doesn't have the function key, so I can just hold Control and Option, but I'm going to do `Control-Option-Shift` and `Down arrow` to start interacting with this page.

04:08 Interact with Appendix A Commands and Gestures. HTML content Heading Level One. Appendix A Commands and Gestures. Interact with Heading Level One. Appendix A Commands and Gestures. Appendix A Commands and Gestures.

### Tabs vs Arrow Keys
04:18 Thanks for that, VoiceOver. **Now that I've drilled down into it one level, I can use the left and right arrow keys to navigate through the static text content.**

04:26 This Appendix lists VoiceOver Commands and Gestures organized into categories. Heading Level Two. General Commands. Use these commands to turn VoiceOver On and Off, get Help, change basic settings, and enable and disable commanders.

04:37 Note, if your keyboard has an FN key, press the FN key when you press a function key. You are currently on a text element inside of HTML content. Use the Heading Level Two General Commands. You are currently on a Heading Level Two inside of HTML content. To exit this Web area, press Control-Option-Shift-Up arrow.

04:52 **Those `Control-Option-Shift Up` and `Down arrows` take you in and out of different pieces of content.** Right now, I'm in the first level, but if I press those same keys again, I can go in further to a specific piece of text and inspect individual words. I'll press `Control-Option-Shift` and `Down arrow` on this heading.

05:11 Interact with Heading Level Two General Commands. General Commands. Interact with text. General Commands. General Commands.

05:19 **At this level, I can use the left and right arrow keys to look at individual words.**

05:23 Commands. General.

05:26 If I press the `Control-Option-Shift` and `Up arrow` keys, it will take me up again to each level.

05:30 Stop interacting with text. You are at General Commands Heading Level One. Appendix A Commands and Gestures. You are currently on a Heading Level, One, inside of HTML content. To exit this Web area, press Control-Option-Shift-Up arrow.

05:42 **So the level above individual words, you can navigate through headings.** If I use the **up and down arrow keys** at this level, I can get through just the headings.

05:51 Heading Level Two General Commands. Heading Level Two Interaction Commands. You are currently on a Heading Level, Two, inside of HTML content. To exit this Web area, press Control-Option-Shift-Up arrow.

06:00 Also at this level, if I use the **left and right arrow keys**, I can get through to content.

06:04 Use these commands to interact with items on the screen. You are currently on a text element inside of HTML content. To exit this Web area, press Control-Option-Shift-Up arrow.

06:13 I want to make you aware that **the Tab key and the arrow keys in this context are completely different, and they do serve different purposes**. 

**The Tab key** will get you to interactive controls like links, buttons, and form controls.

06:25 Link. Assigning VoiceOver Commands to Gestures. You are currently on a link inside of HTML content. To click this link, press Control-Option-Space. To exit this Web area, press Control-Option-Shift-Up arrow.

06:36 You don't need to make the headings and paragraphs and things focusable. I've seen that come up in bug trackers before, where somebody thought that the screen reader user would use Tab to navigate around.

06:47 We have all of these other commands that we can use as screen reader users, so **you only need to make things focusable if they have an action associated with them, like buttons, links, and that sort of stuff.**

06:58 Screen readers can navigate around using **the arrow keys.** Again, you don't need to make those focusable, but if you know these key commands, then you can get around to all of the static page content to figure out what's on a given page.

### Web Roter
07:12 The next thing I want to show you is the **Web Rotor**, which I can open with `Control-Option and U`.

07:18 Headings menu.

07:19 I can go through all of the headings on a page using the **arrow keys**, and...

07:23 Heading Level One. Appendix A Commands and Gestures.

07:25 If I hit the **Enter key**, it will take my focus there and exit the Web Rotor.

07:29 Heading Level One. Appendix A Commands and Gestures. You are currently on a heading level, One, inside of HTML content. To exit this Web area, press Control-Option-Shift-Up arrow.

07:37 If I press `Control-Option and U` again to open the Rotor, we can go through all of the other sections.

07:42 Headings Menu. Tables Menu.

07:44 We can get through **Tables.**

07:46 Windows Spots Menu.

07:46 **Windows Spots**, which I don't know what those are.

07:49 Links Menu.

07:49 **Links.** **What gets populated in the Rotor depends on what's on a given page.**

07:54 No Items in Links Menu.

07:55 If I hit the `Escape` key, I can get out of the Rotor.

07:58 Heading Level One. Appendix A Commands and Gest-...

08:00 And then Command-F5 to turn it off.

### VoiceOver Utility
08:02 The next thing I want to show you is the **VoiceOver Utility**, which you can either get to from **System Preferences** under the **Accessibility tab**, or you can use **Spotlight** quickly to search for **VoiceOver to Utility**, and then under Web and Web Rotor, you can configure what goes into the Web Rotor.

08:18 You can see, I have Landmarks selected, but there weren't any on the page we inspected, so that menu was empty.

### Help Menu
08:24 Next, I want to show you the **Help menu** before we wrap up this video. I'm going to start by turning VoiceOver back on with `Command-F5`.

08:32 VoiceOver on Safari. Appendix A Commands and Gestures Window. Appendix A Commands and Gestures. HTML content has keyboard focus. You are currently on HTML content. To enter the Web area, press Control-Option-Shift-Down arrow.

08:43 If I hold `Control and Option` plus the `H key`, I can bring up the **Help menu.**

08:47 VoiceOver Help Menu. Online Help Control-Option-Question. Commands Help Menu. Control-Option-H-H. Commands Help menu. General menu. You are currently in a VoiceOver menu. This is a list of VoiceOver Menu options.

08:59 To navigate up and down the list, use the **arrow keys**. To choose a menu item, press Return. To close the menu, press Escape. General Menu. You are currently in a VoiceOver menu. This is a list of VoiceOver Menu options.

09:09 To navigate up, actions Control-Option-Command. Stand pronunciation. Bring window to front, Control-Option-Shift-F, click mouse, Control-Option-Shift-Space. Close window, Control-Option-Command-Escape. Close window, Return, yes, Escape, no. Close. Now in "The New York Times." VoiceOver off.

09:25 The Help menu not only gives you shortcuts and ideas of things to use, it will also perform actions. The Help menu is a really great thing to go and play around with. I encourage you to do so, and I encourage you to test with VoiceOver.
