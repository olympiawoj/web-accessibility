# 7. Intro to ARIA

## Introduction
What is this thing called **ARIA?** In this lesson, you'll learn about about **WAI-ARIA**, a.k.a. **Accessible Rich Internet Applications**, **the W3C spec for specifying accessibility information in HTML and SVG.** I cover the basics of applying ARIA roles, states and properties, helpful information for creators of user-interface widgets and component libraries. But it's important to note that you might not need ARIA at all! Before using it, it's important to educate yourself on what ARIA does and doesn't do for you.

## Transcript
00:00 Today we're going to talk about **accessible rich Internet applications, or WAI-ARIA**. _It's a **spec** for a standard set of **attributes** that you can put in your HTML and SVG to **supply accessibility information** in your web pages._

00:14 This lesson builds on with my last one on the intro to the **accessibility tree**, which is related, because _that's the structure exposed by Web browsers for assistive technologies to get access to the information in those web pages._

00:28 It leaves out things like scripts and metatags so that screen readers can focus on the appropriate information out of web pages. Now, you can add to the accessibility tree by writing semantic HTML, however, there is also this thing called ARIA.

### Aria Roles
00:44 I'm going to tell you today about the building blocks of ARIA and how you can use it in your Web applications, starting with the roles. **The `role` is something in ARIA that will specify what an element does -- what is its purpose, what type of an object does it expose from the document object model.**

01:03 There are standard [roles](https://www.w3.org/TR/wai-aria-1.1/#role_definitions) that you can use. You shouldn't make up your own ARIA attributes, because there's a standard set, and anything else won't work.

01:13 It's important also to know a little bit about the type of roles. _**Abstract roles** are basically inheritance roles in ARIA._ Don't use these directly. You wouldn't ever apply an abstract role in your document, but you should absolutely use the **widget roles.**

01:32 You can use the _**composite widget roles**, which are groups of roles that go together_ -- things like menu, which a `menu` needs items to go with it. If you're going to use the widget roles or the composite widget roles, make sure you go read up on it to know what all the requirements are for that role.

01:50 There might be owned roles that have to go with it, that go as a set, or there might be some keyword navigation expectations. If you're going to use these, be sure you read up on it before you do it to know what the gotchas are.

02:04 Most of these roles people have written about extensively, and you can find existing patterns of how to use them.

### Document Structure & Landmark roles
02:10 There's also **document structure roles** and **landmark roles**. If you notice, some of these are a bit similar to **semantic HTML** -- things like list and list item or heading. _These roles give you a programmatic way to specify some of the same information that native HTML would give you._

02:31 Now, the big elephant in the room is that **you should use the native thing first.** You shouldn't even need ARIA unless you're getting to some more advanced level stuff, because you should always use the native counterpart first in your HTML.

02:44 But, we should still be able to learn about it. That's why I'm telling you today.

### States & Properties
02:49 There's roles. There's also states and properties. If we go look at the spec for the states and properties, we can see all of the options. Any time I go to use one of these, I always go and look at the spec from the W3C, because it will tell me how to use one of these, in case I have forgotten.

03:07 There's a lot of details here, but there's some really cool global states and properties, things like `aria-haspopup` or `aria-disabled`, `aria-live`, things like `aria-expanded`, `aria-checked`, useful things if for some reason you are creating your own user-interface widgets and you can't use a native checkbox.

03:29 You better have a good reason, because the native checkbox gives you so much for free. I'll show you a little further in our lesson why it's important to use the native things first, because you end up having to recreate some of the behavior that you would have gotten for free otherwise.

03:45 To apply these in practice, let's go over to Sublime Text, where I have an HTML file, and it's pretty bare. It just has a form tag. It's got a single-button element that has a disabled attribute on it. This `disabled` attribute will make it so the button can't be focused with the keyboard, it prevents pointer events and it grays out the text by default.

04:10 This handy HTML attribute will do a lot for you, but it only works on certain elements. If, for some reason, you were creating a custom element -- and you, again, better have a good reason -- if I put a custom button and I wanted to make it a button, I could say a `role` of button, and it will say, "What does this thing do? Oh, it's a button."

04:33 That will tell assistive technologies that this custom button, custom element, which is essentially a div with a fancy name, is now a button. Any time you're putting a role of button on something, you should ask yourself, "Is it focusable?"

04:45 I can make it focusable by giving it a `tabindex` of `0`. I've got, now, a custom button with a role and it's focusable, but it needs a little bit more. If I wanted to label it, I could use the `aria-label` property. If you watched my earlier lesson on accessible icon buttons, this might be a bit familiar.

05:07 I can use an `aria-label` and say, "This custom button is a close button." And if I wanted absolute feature parity with the native button with the `disabled` attribute, because this is a custom element and the `disabled` attribute will not work on this custom element, I could use `aria-disabled=true`, and now I've got a custom element that's pretty similar to the native one in the form.

05:31 I might need some JavaScript to make sure that it behaves the same way. That's partly why you should start with the native button first, but we have a pretty handy custom button here that is accessible.

05:44 If we go over to the browser, we can see I originally had a native button that was disabled, the text is grayed out, but it is has a role of button, it's disabled, it's awesome. If I refresh we can see our custom button with the X in it for the close button is now here, but if you notice, the text is not grayed out.

06:04 Because the `aria-disabled` attribute is not matched by the user agent or the browser, it doesn't apply that grayed-out style by default.

06:13 If we go over to our CSS, we can make it look more like a native disabled button. If I put a custom button selector for my custom element, and then using the attribute selector I can say `aria-disabled=true` and then I have a selector for the ARIA state for that custom button.

06:34 I can say color=GrayText, if that's what Chrome's user agent style sheet is giving me is this gray text. If I wanted to make it more like a native disabled button, I could say, "`pointer-events=false`." There might be some more styling you could do, but that's, at the bare minimum, will make this button look a lot like a custom one.

06:57 You probably also need to change the `tabindex` to `-1`, if it's actually disabled like this, so that you can't focus on it, but that's an important difference that we should note, is that _`aria-disabled` is only making it disabled in the accessibility tree. It doesn't really change behavior in the Web browser._

07:16 That's an important thing to know about **ARIA, is what it's actually affecting, which is the accessibility information** but not the keyboard, tab board, or it won't remove it from the DOM or anything like that.

07:30 Each ARIA state, if you're going to use it, you'll want to go and read up on what exactly does it do, what elements is it allowed on, are there other attributes or roles that need to go with it and what is the keyboard expectations for it.

07:46 **That's how I use ARIA, is knowing if I can't use a native element for some reason, this is there for you to use, but it's important to know what it does.** If you use the Chrome Accessibility Inspector or similar tools -- there's one in Safari and one in Edge -- that can help you debug this accessibility information and hopefully help you get it right.

