# 12. Accessible Modal Dialogs

## Introduction
Learn how to create a **modal dialog** with accessible keyboard and screen reader mechanics using the native HTML5 dialog element and experimental inert attribute (with polyfills) and JavaScript focus management. We'll explore how to make a DIV or non-modal dialog into a modal one to contrast the differences. Finally, we'll expose accessibility information for NVDA, Voiceover, JAWS and other screen readers.

For more details on creating accessible dialog content, check out this great article by Marco Zehe, Advanced ARIA Tip #2: [Accessible Modal Dialogs](https://www.marcozehe.de/2015/02/05/advanced-aria-tip-2-accessible-modal-dialogs/)

Used in this lesson:
[Google dialog element polyfill:](https://github.com/GoogleChrome/dialog-polyfill)
[Inert attribute polyfill:](https://github.com/WICG/inert)

## Transcript
Instructor: [00:00] Let's say I wanted to create a **dialog** over this webpage. It has a heading and some links in it, and I'd want to make sure that a keyboard or screen reader user didn't get lost navigating behind the dialog on content that they shouldn't have been able to interact with.

[00:14] To create an accessible modal dialog, let's create a `dialog `element in our `index.html` file. Inside of that dialog, I'll put an `h2` and a generic dialog `titl`e. I'll also put a `button` element with an `ID` of `close-button` and text, just "close."

[00:32] When a user tabs onto that close button, they will be able to actually operate it, and they will know that it closes the dialog. If we go over to Chrome and refresh the page, the dialog's content is not rendered to the page.

[00:44] If we inspect it in the Chrome elements inspector, the CSS comes from the **user agent stylesheet**. **Chrome is the only browser to support the dialog element.** Safari, like other non-Chrome browsers, does not provide the styles and behavior necessary for this element. That's why we see the dialog title and close button rendered to the page.

### Dialog polyfill
[01:01] To fix this, let's get a little help from a **polyfill**. On the command line, I'll run `npm install dialog-polyfill`. I'll do `--save` to save it to package.json. If we go back to our `index.html` file, I need to add a script linking to this dialog polyfill.

[01:18] I'll do script source, point directly to Node modules and dialog-polyfill and dialog-polyfill.js. We also need to add a link to the polyfill stylesheet. In the head, I will add a reference to that, and I will point its href directly at Node modules as well in the dialog-polyfill directory and `dialog-polyfill.css`.

[01:47] If we go over to Safari, you'll see that we now have the same baseline of support for the dialog. If we inspect it, we can see that the CSS comes from the` dialog-polyfill.css`. **To open the dialog, we need to add another button.**

### Button
[02:00] In the main content, let's add a button element, give it an `ID` of `dialog-trigger`, and we'll give it text, `"open dialog."` Now, this button element is going to need some JavaScript. In our JavaScript file, where I've previously set up a native JavaScript DOM content loaded event, I can go and add a couple of selectors, starting with the dialog button.

[02:20] To find this dialog button, we'll do `document.getElementById("dialog-trigger")`. Our second element reference will be the close button, which we will also get with `document.getElementById("close-button")`.

[02:37] Then our dialog, which we can grab with `document.querySelector`. Since there is only one dialog element, we can just reference it directly by its element tag name. We need to register our dialog with the polyfill.

[02:50] We will do `dialogPolyfill.registerDialog` and pass it our dialog reference from above. We then need to add a couple of event handlers to open our dialog. We'll do `dialogButton.addEventListener`. Because it's a button element, we can use a click event. Then we'll do a `dialogButtonHandler`.

[03:10] We'll also set up an event for our close button. `closeButton.addEventListener`, we'll do a click here as well, and then we will pass it a `dialogCloseButtonHandler`. Now, we need to go and define those functions.

[03:24] Let's do `dialogButtonHandler`. We'll give it an event. In case we need to use that event object later, I always like to pass it in. In the `dialogButtonHandler`, we're going to open the dialog using the dialog's polyfilled API.

[03:39] We'll do `dialog.showModal`. That will call the dialogs API and show a modal version of the dialog. We also need to define the close button handler. We'll do `dialogCloseButtonHandler`, and we will do `dialog.close()`.

[03:56] Let's go over to Chrome and see our dialog open. If we tab onto it and I hit the spacebar, you will see that the dialog has opened. It has added a gray layer over the background, and our focus was sent to the close button.

[04:09] If I hit the spacebar, it closes the dialog, but my focus was not sent back to the element that opened the dialog. In our close button handler, we'll say `dialogButton.focus()`. **Now, when we open that dialog, it will open a modal dialog, calling the showModal function, and when we hit close, it will close it, but our focus is sent back to the element that started everything.**

[04:32] **That makes it convenient for a keyboard or screen reader user to know where they are on a webpage.** To inspect the accessibility information of this dialog, let's go back to Safari. We can look at the node inspector, which includes accessibility information.

[04:45] We can see the `role` of `dialog` is exposed, thanks to our dialog polyfill, which bolts on a `role` of `dialog`. Now, eventually, any browser that supported dialogs should get an implicit dialog role, but to help other browsers out, including Safari, we can use this aria role of dialog to expose what the type of element that is.

[05:03] There is no other accessible information for its dialog name, which some screen readers might need to expose what this particular dialog is for. To show you this in action, where that missing accessible name would be a problem, let's go over to my Windows virtual machine, where I have NVDA running in Firefox.

Voice: [05:21] Accessible modal dialogs. Main landmark button, open dialog.

Instructor: [05:25] If I hit tab a few times, I can get onto the open dialog button.

Voice: [05:28] Article title, link heading, level two. Open dialog button.

Instructor: [05:32] I'll hit the spacebar to open the dialog.

Voice: [05:34] Dialog. Close button.

Instructor: [05:36] Our focus was sent to that close button, but nothing in the dialogs content was exposed. We don't know what the dialog's title was, and we don't know what this particular dialog is for, yet our focus is past the dialog content.

### Using arialabelledby to expose Dialog to Screen Reader
[05:48] To make this easier for a screen reader user in NVDA, let's go back to our HTML file, where we will add an `aria-labelledby` attribute, and we'll point it at the `ID` of a `dialogHeading`, which we then go and add on our h2.

[06:02] We will add an `ID` of `dialog-heading`. If we go back to NVDA and refresh...

Voice: [06:07] Accessible modal dialogs.

Instructor: [06:09] Now, if we open the dialog, we'll hear something else.

Voice: [06:12] Dialog title, dialog. Close button.

Instructor: [06:15] Now, our focus is on the close button, but we heard that dialog title exposed, thanks to `aria-labelledby` exposing an accessible name on our dialog. There's one more concept I want to call your attention to before we wrap things up.

[06:27] If we go back to Chrome, and I open this dialog, you'll see that it is modal, so that if I hit `shift-tab`, my focus goes to the browser controls, and not to anything behind the dialog, which is great for a modal layer.

[06:40] There's another variation of the dialog. Instead of `showModal`, if we said `dialog.show`, and we go back to Chrome to open up our dialog, there is now no grayed-out layer behind the dialog. If I hit `shift-tab`, I can get to those links back there.

### Creating Modal or Blocking Contexts using Inert
[06:54] Which, without a little extra care, might be problematic for keyboard or screen reader users. Now, there are patterns for making non-modal dialogs more accessible using skip links and focus traps. In this video, we're focused more on creating modal or blocking contexts.

[07:09] One way to create a blocking context is with the HTML attribute `inert`, which it making its way through the web standards track. **The idea of `inert` is that you can apply it to sibling elements of something that you want to be modal, and it will prevent interaction in that part of the DOM tree.**

[07:27] Back in our document, we're going to prep it a little bit to make this easier to take inert. Let's put a `div`, and we'll give it a `class` of `wrapper`. We're going to put everything other than our dialog inside of this div so it becomes the sibling to our dialog.

[07:43] Both the dialog and the div wrapper are direct children of the body. Now, they really do recommend putting the dialog as a direct child of the body so that you can do this `inert` stuff a lot easier without any DOM walking.

[07:54] In our JavaScript, we need to go and add a reference to this wrapper, so we're going to get the element with `document.querySelector`. I'm going to pass it this wrapper class. Now, there's only one here, but if you were really doing this, you would want to use querySelector all, and then you would need iterate over every instance of that CSS class.

[08:13] To do this quickly in our dialog button handler, I'm going to say `wrapper.setAttribute`, and we'll give it the `inert` attribute. Then for the value, we will just pass an empty string, because the inert attribute is a Boolean attribute, which means that simply its presence will make that subtree inert.

[08:33] Then we want to remove it in our close button handler. We will say `wrapper.removeAttribute`, and we will remove inert. **Now, inert is not yet supported really anywhere, so we need help from another polyfill, which we can get with `npm install wicg-inert`.**

[08:53] **WICG** standing for **Web Incubator Community Group**. We will do `--save` on this one as well. Now, we have our inert polyfill. We need to add it as a script, just like our dialog polyfill. In this one, we will go and point directly to our `wicg-inert` directory.

[09:14] Then that file lives in dist. Let's go check where it lives. It is in dist, and then inert. You could either do inert or inert.min. You might want to combine these polyfill scripts together to reduce HTTP requests, but for this, we will just add that script.

[09:30] Then **now, when we go over to our dialog, and if we open our developer tools, we can see that when the dialog opens, the background has now, has the `inert` attribute added onto it, as well as the `aria-hidden` of true.**

[09:45] **That means that everything inside of that div has been hidden from a screen reader, and anything focusable inside of it is not reachable.** It's just like the `showModal` version of our dialog, except that we have recreated some of that behavior on our own.

[09:59] The non-modal version of our dialog doesn't have the same grayed-out background, but we could recreate that with CSS. It does have the same semantics and it has some focus management. Speaking of focus management, we have a little bit more work to do to bind the escape key on our regular non-modal dialog.

### Keydown - escape key to close
[10:15] We need to go and add an event listener to the document of keydown. That way, when we hit the escape key, we can actually close this thing. I'm also going to abstract our `dialogCloseButtonHandler` code into another function.

[10:32] We'll call this the `closeDialog` function and do all the same things that it needed to close it from the close button and from the escape key. Now, in our `keydownHandler` function, we'll say if the event keycode equals 27, which I happen to know is the escape keycode, then we can say `closeDialog()`.

[10:57] Now, when we open this dialog and we hit the escape key, it will close it, but we lost our focus on the open dialog button. To fix that, we have a bit of a timing issue. We're going to do this the quick and dirty way, using a setTimeout function.

[11:12] We don't need to give it any sort of a delay, we just need to make it wait a tick before it tries to focus. Now, you could probably fix this up to be much more elegant, if you were using React, for example, but this is the quick shortcut to fixing focus management, is to wait a tick using `setTimeout`.

[11:30] Now, our focus is being handled. I can hit the `escape` key and use our dialog, which is built with the native dialog element and the `inert` attribute, which we are working to push through web standards.