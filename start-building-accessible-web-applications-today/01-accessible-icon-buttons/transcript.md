# 1. Accessible Icon Buttons


## Introduction
Icon buttons are very common in web applications, yet they often have accessibility problems. Learn how to make your icon buttons accessible to keyboard and screen reader users with HTML, CSS, SVG and ARIA.

## Transcript
[Code](https://codepen.io/cayden-egghead/pen/OKWWqK)
`Command + F5` runs voiceover on a Mac

00:00 A common problem I see on the Web these days is the **inaccessible Icon button**, so today we're going to learn how to **create more accessible buttons using HTML and CSS.** 

I've got 3 buttons on the screen. If I use the keyboard to try and reach them, I can get to the first two but the third one I skip right on by.

00:17 Let's fire up **VoiceOver, the screen reader for Mac**, to see what happens there.

00:24 VoiceOver on Chrome. Help button. Main two items button. Leaving HTML content. VoiceOver off.

00:31 The screen reader counted two buttons, and it couldn't reach the third one, so clearly something is going on there to make it inaccessible. 

If we open up this demo page, we'll see we have two button elements and a div with a class of button.

00:44 There are so many different ways to code an HTML button that I've seen all of these in the wild. 

1) The regular button element with text in it is accessible because:
- it's reachable from a keyboard, and a screen reader, - it has text in it

2) The second element is a button. 
- It's reachable
- But its contents are an i element with some CSS representing an Icon. There's no text in there for a screen reader to know what this element is for. 

3) The third button is a div with some SVG in it
- Iit's not reachable from the keyboard. 
- It doesn't have a role of button, so clearly, that one's not going to work.

01:23 How can we fix these up? 

1) The first button, I'll show you a technique that I use sometimes, which is to
- Add a visually hidden class. If I add a `span` element and give it a class of `visuallyhidden`, and then put the text in it, in my CSS I can paste the `visuallyhidden` class from HTML5 boilerplate that essentially makes texts render to a screen reader, but it's visually hidden from view.
- The next step is we need to put an **ARIA hidden attribute** on the `i` element representing the Icon and give it a true value because this element is purely decorative. It doesn't really make sense for a screen reader. We're providing text instead. Our second button is good to go.

2) We need to work on this third button that's created out of a `div`.
-  The first thing that we need to do, if there's some reason why we can't change it to a native button, we can still make it work.
- **Add a role** - We can add a `role` of button to tell a screen reader what this element is actually for
- **Add a tab index** - Then we can add a `tabindex` value of zero. That means that it will be reachable from a keyboard and a screen reader, but it will be kept in its original tab order.

02:32 Because the Icon artwork is represented in an SVG, a common best practice is to use the title element. We'll put some text in it. The `title` element also needs a unique ID. We'll give it an ID of `svgtitle`. Then, because Chrome actually has a bug in it still, it's been fixed but it hasn't made it into the main release, we need to give this SVG element a little bit of help.

02:59 We're going to add an `aria-labelledby`  attribute and point it to the SVG title. All that means is that this SVG will get the proper mapping so that it will expose this title as its accessible name.

03:13 Now we've got everything we need to create accessible buttons. Let's go back to our browser and open up VoiceOver again.

03:20 VoiceOver on Chrome. Button demo window. Button demo each Help. Button main three items. Help button. Help button. VoiceOver off.

03:30 That's how you can create accessible Icon buttons using HTML and CSS. Be sure to always test with the keyboard and a screen reader, if possible, to know whether your elements are accessible to people with disabilities.