# 10. Testing for Accessibility with the NVDA Screen Reader on Windows

## Introduction
**NVDA is a popular open source screen reader on Windows** that works well with **Firefox**. It's similar to JAWS, another popular Windows screen reader that works best with IE. But NVDA has no licensing fee plus an open bug tracker, making it great for users as well as developer testing.

In this lesson, you'll learn how to browse a webpage using NVDA's keyboard shortcuts, including headings navigation, skip links, and the Elements List. You'll also learn a bit about Forms Mode and how it impacts screen reader navigation. For more tips, check out the resources below.

### Resources
- [Using NVDA to Emulate Web Accessibility](https://webaim.org/articles/nvda/)
- [NVDA Keyboard Shortcuts](https://dequeuniversity.com/screenreaders/nvda-keyboard-shortcuts)
- [Understanding Screen Reader Interaction Modes](https://tink.uk/understanding-screen-reader-interaction-modes/)
- [Three Things You Should Know Before Using Voiceover for Testing](https://webaim.org/blog/three-things-voiceover/)

### Installing NVDA
If you're on a Windows machine, you can install [NVDA directly](https://www.nvaccess.org/download/). If you're on a Mac or Linux, you could install a Windows virtual machine:
- [Install VirtualBox](https://www.virtualbox.org/wiki/Downloads)
- [Get a Windows VM from Microsoft - I use IE11](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/)
- [Install Firefox - install on the VM!](https://www.mozilla.org/en-US/firefox/new/)
- [Install NVDA](https://www.nvaccess.org/download/)
- [How to Map Your Mac's Capslock Key to a NVDA or JAWS Key in a Windows VM](https://www.marcozehe.de/how-to-map-your-macs-capslock-key-to-a-nvda-or-jaws-key-in-a-windows-virtual-machine/)

## Transcript
[00:00] Today we're going to talk about **testing for accessibility with NVDA, the open source window screen reader.** I recommend that you open NVDA before your browser and it does work best with **Firefox.** To navigate around I'm going to press the `down arrow key` to start reading.

[00:15] Banner, landmark, visited link. Visit the main page. Navigation, navigation, landmark, list with seven items. Visited link, alt plus, shift plus, see main page. Link contents. Link featured content. Link current events. Link alt plus shift plus X random article. Link donate to Wikipedia. Link Wikipedia. Store. Out of list interaction navigation landmark. Heading level three interaction.

[00:37] The `down arrow key` in NVDA will cycle through content such as headings and links. Some of those links may be contained in lists or landmarks, so those groupings are announced as well. If I press the `H key` in NVDA it will cycle through the headings.

[00:52] Tools, navigation, landmark, tools, heading, level three. Print slash export navigation landmark. Print slash export heading level three. In other projects navigation landmark. In other projects heading level three. Languages, navigation, landmark. Languages, heading level three. No next heading.

[01:08] That `H key` will navigate through where I was in the source order. If I wanted to get a better idea of the overall structure of the page, I could use the elements list, which is similar to the rotor in voice over. I can open it using `insert plus F7`.

[01:21] `Insert` being the `NVDA key` that you can map to your caps lock key or something else. Since I have a Windows third-party keyboard I can actually press my `insert key and F7`.

[01:31] Elements list dialogue. Tree view. Languages navigation. 12 of 13. Level zero.

[01:37] The **elements list** has three groupings of links, headings, and landmark types. To cycle through those different types I can press `shift tab`.

[01:45] Type, grouping, landmarks, radio button, check alt plus D.

[01:49] Because these are radio buttons I can use the `arrow keys` to get through each type.

[01:53] Headings, radio button, check alt plus H. Links, radio button, check alt plus K.

[01:59] Let's go back to headings.

[02:01] Headings, radio button, check alt plus H.

[02:04] If I press the `tab` key I can get back to the list and go through each item.

[02:07] Tree view. Level one languages, six of six.

[02:11] On my Windows keyboard if I press the `page up key`, it will take me back to the beginning of the list.

[02:15] Level zero. From today's featured article. One of nine.

[02:18] If I press the `enter key` it will close the elements list and take me to that heading.

[02:22] Main landmark. From today's featured article. Heading level two.

[02:26] From here I could use the `H key` to navigate through headings or the `down arrow` to get through all of the individual items.

[02:31] Link graphic image of Baron Münchhausen by Gustave Dore. Link Baron Münchhausen is a fictional link nobleman created by German writer link Rudolf Erich Raspe in his 1,785.

[02:43] Another thing that's helpful in a screen reader and for keyboard users in general are **skip links.**

[02:47] Navigation, visited link.

[02:49] **The CSS for these skipped links is such that they appear on keyboard focus.** If I press the `enter key` on one of these links it will take my focus to that section.

[02:58] Search link. Search landmark heading level three. Clickable search. Edit alt plus, shift plus, edit button, go.

[03:05] In a screen reader **when your focus is sent to the section it will read all of the items that are in it, including headings or lists or form controls so you know what's in that section.** For **skip links** you'll want to be sure you test them without the screen reader running with the keyboard only.

[03:19] You may need to add `tabindex` of `-1` onto the section you're sending focus to so that it can be focused by script or by skip link.

[03:29] Another helpful way to navigate around would be to use the `F key` to get through **form controls.**

[03:34] Search, edit, search Wikipedia. Alt plus, shift plus, F alt plus, shift plus, F.

[03:38] If I press the `F key` again because we're in browse mode you'll see it will go to the **next form control.*

[03:43] Go button. Go to a page with this exact name if it exists.

[03:46] If I press `shift plus F` I can go back to the *previous form control.*

[03:50] Out of list. Search landmark. Search edit. Search Wikipedia. Alt plus, shift plus, F alt plus, shift plus, F.

[03:55] If I wanted to type in this control because I'm in *browse mode* I would need to get into *focus mode*, which I can trigger with `insert plus space bar`. You'll hear that typewriter sound to notify you that you are now in focus mode and you can type.

[04:08] F, O, X.

[04:11] If I wanted to get back out of focus mode, AKA **forms mode**, I could press `insert plus space bar` again. You hear that ding to tell you that you have exited focus mode. I can press the `F key` now to get to any **form control.**

[04:24] Go button. Go to a page with this exact name if it exists.

[04:26] **These are just a few of the ways a screen reader user might navigate a web page or web application.** They could also navigate by images or tables, all kinds of different ways. I recommend that you print out a quick reference guide, which I've included in the lesson notes.

[04:41] That way you don't have to try and remember absolutely every keyboard command, but you can have it at arm's reach on your desk. It's important to test with screen readers so you know what the experience is like for people who rely on them.

[04:52] **You'll want to include alternative texts for images, semantic structure so people can navigate by headings and landmarks, as well as ensure that controls are interactive and operable from the keyboard and a screen reader.**