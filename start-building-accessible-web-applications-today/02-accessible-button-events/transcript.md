# 2. Accessible Button Events

## Introduction
Often buttons need to be handled by JavaScript, and if done improperly it can lead to accessibility issues. In this lesson you will improve a major news organization's global header with some basic HTML and JavaScript.

## Transcript
00:01 Today, I'm going to tell you about another problem I see quite often on the Web, which is inaccessible buttons. Previously, in our last video, I talked to you about button labels. In this video, we're going to talk about button events, making sure that no matter what type of element you use for a button, it's accessible to a keyboard and screen reader user.
00:21 Today, we're going to look at cnn.com. The header of their website has some interactive items in it. If I go onto their homepage and start tabbing around, there's a link to the home. There's a link on their logo, a live TV link. There's a hamburger button here, but I can't get to it from the keyboard. I can get to a bunch of other things. If I turn on voiceover.

00:45 Voiceover on. Crime. CNN. Breaking news. Latest news and videos. Window. Visit link. Home. Visit link. Slash.

00:51 Logo has no text.

00:52 You are currently on a link. Visit link. Home. Visit link. Live TV. Visit link. They risk it all for this pioneer. Visit link. Index...Voiceover off.

00:59 If you notice, we were tabbing around in voiceover, and I skipped right by the menu. Even though when I hover with my mouse, I get a little hand icon, there's nothing on this element that lets me reach it and use it from a keyboard or a screen reader.

01:13 I've going to zoom in on my dev tools a little bit, and you can see that it's a div with an ID of menu, a class of navMenu and JSNavigationHamburger. If we drill down in there, we can see it's another div inside with some CSS pseudo before and after content.

01:32 That's just setting up the presentation of this div to make it look like a button, but it's only accessible to some users, which is a huge bummer. It should be accessible to all users.

01:43 How could we make this better? Today I'm going to show you how to fix that. We'll go and look at a demo that I've created. This adds on to the last session that we did on accessible icon button labels. This session is more about the events, to fully round out that story of making accessible icon buttons and other buttons.

02:02 In the demo page, I have a native button with an `aria-label` of help. It's an icon button, but it has some screen reader text using the aria-label attribute.

02:14 Then, I have another div that looks a little bit like the CNN hamburger button. It's got an icon of menu, but it's a div. It's just a straight-up div with a CSS class on it, so it's not reachable from the keyboard or a screen reader. It doesn't have a label, either, because theirs didn't.

02:31 Looking at this native button, how can we get these two things to be more alike? Let's go over to our text editor. I'm using Angular 1 today to help me get Bootstrapped with this a little bit quicker, but you could easily do this with native JavaScript or other frameworks.

02:48 I just want to show you how to do it in Angular, since I am working on an Angular project right now, and people often get this wrong. How can we do this right?

02:57 The thing that really needs fixing first is this div, because it's just got a class of button and no semantic meaning or anything on it. The first thing I'm going to do is add a role of button to tell a screen reader or other assistive technology that this element is a button.

03:12 Then, we'll add the `tabindex` attribute with a value of zero so that now I can reach it from a keyboard and a screen reader. We're also going to label it. I'm going to add aria-label of menu.

03:24 You could argue that the label should go underneath the icon. That would help reduce any confusion about what that icon meant. For this, we're just going to make it accessible for basic keyboard and screen reader use by doing these three things.

03:41 Now, we can reach all three of these. If I go to a browser and show you these two buttons, if I go to tab onto them, we can now reach both of them. If I fire a voiceover, you'll hear what they're labeled as.

03:57 Voiceover on. Chrome. Demo window. Help button has focus. Menu button. Help button. You are currently on a button. Voiceover off.

04:03 Now we can reach those buttons, and they're labeled. How can we make these work from the keyboard?

04:09 The first thing I'm going to show you, if you're putting `ng-click` on anything, because we're doing a little Angular demo here, the second that you put `ng-click` on something, you should ask yourself what element are you putting it on, and how are we going to make that accessible?

04:24 For this, it's a native button element, which his handy because we can use ng-click directly on it without other assistance from other JavaScript events. I'm going to add `ng-click` and then doStuff, a method. I'm going to go into our JavaScript controller, and I'm going to add a scope method of `doStuff`. I'll pass in the event object, in case I want to do something with it.

04:52 Now, I can say alert of `doStuff`. When you `ng-click` on this button, it should fire an alert that says, `"Do stuff."`

05:01 Actually, I'm going to go back to our text editor. Just to show you what happens, I'm going to add this ng-click also on our div. You could expect that since we have this role of button and tab index of zero, that by adding `ng-click`, we should be able to fire off that alert from the keyboard, but let's go check it out.

05:24 The first button, start my focus point here. I'm tabbed onto the help button, and I'm going to hit an enter key. I get an alert that says, "Do stuff." I can also hit the space bar, and that will also trigger the ng-click on the native button.

05:42 Now, if I go onto the div button and hit enter or space, if you'll notice, I don't get the same behavior, because it's a div, and **divs do not fire the same events as native buttons, or anchors, or other interactive elements.** We need a little bit more help with this.

06:01 Because it's a div, we have to also add `ng-keydown`. We can fire off that same method, so that way, when you tab onto this div button, and if I tab onto it again and hit the space bar, we'll see we now get the `doStuff` method is firing from the space bar and the keyboard.

06:23 That's how you could make buttons into accessible buttons. I should stress that if you're thinking about making a div into a button, while it is possible and we saw how to do it today, you should always start with a native button because of what you get for free. We saw that with the keydown and click events.

06:39 Those are the same events underneath in native JavaScript, so it's not an Angular-specific thing. It's just when you're binding user input events, you need to ask yourself what element are you putting it on, will it work from the keyboard, and will I need to add a keydown event to make it possible?