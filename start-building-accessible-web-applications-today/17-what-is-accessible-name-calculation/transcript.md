# 17. What is Accessible Name Calculation?

## Introduction
What's in a name? In this lesson, I'll explain the concept of naming interactive elements for screen reader users, including forms, buttons, and links. You'll learn how to debug accessible names and descriptions using the Chrome Accessibility Developer Tools (previously a Canary experiment, now in Chrome), using multiple labeling techniques. We'll also listen to the effects of proper accessible names and descriptions in Voiceover and Safari.

For more information and the nitty-gritty browser implementation algorithm, refer to **WAI-ARIA 1.1**:
- https://www.w3.org/TR/wai-aria-1.1/#namecalculation
- https://www.w3.org/TR/accname-1.1/


## Transcript
Instructor: [00:00] If you've never heard of accessible name calculation before, let's talk about how it works. **In the DOM, anything keyboard-focusable element needs a name so that a screen reader user focusing on that element will know what it's for.**

[00:12] Now, it also needs an interactive `role`, but that's outside of the scope of this video. We're going to talk today about **names**. In my first example, I have a search widget with an input and a search button next to it.

### Example 1 - Input/Search button
[00:24] Now, these could really share a label -- they're both for searching -- but neither of them have a label right now. In Chrome developer tools in the elements inspector, to the right of the styles computed event listeners, there's a little context menu, and it has an **accessibility tab now.**

[00:42] I can confirm that there is no accessible name on either of these elements by looking at the Chrome inspector. I could also fire up the screen reader and find that there is no information here. Let's go add some labels to the search widget to make it better.

[00:55] I've got the button element, and it's got an icon. I'm actually going to go and add an `aria-hidden` of `true` to this icon span, because it's not contributing anything to the accessible name. Instead, I'm to add a span with a class of `visually-hidden`.

[01:10] I'm going to give it the word search. Now, this button element has some text content that will supply its label for the word search. It has an ID `search-button`, which comes in pretty handy for my text input next to it.

[01:26] To label that one, I'm going to reuse the text content in the button and say `aria-labelledby.` I'm going to give it a reference to the ID of `search-button`. Now, it's an aria-labelledby on the input. It's going to pull its name from the `visually-hidden` span.

[01:41] If I go back over to Chrome and refresh, now, I can see that the input has an accessible name of `search`, and it's getting it from the `aria-labelledby` attribute. If we go and look at the button next to it, it also has a name of search, but that content is coming from the text children.

[01:58] **Depending on the type of element -- in this case, it's a native button with an implicit role of button -- that means that it can pull its accessible name from its text content.** If you want to learn more about how this all works, accessible name calculation is specified in the **Accessible Rich Internet Application Spec, or WAI-ARIA version 1.1.**

[02:20] Under accessible name calculation, they describe how this works. **The names come from the values that you provide in your markup, whether you're using the aria-label attribute,` aria-labelledby.` If you're doing like this form labeling, or maybe even if you have an image with an `alt` attribute, the `alt` then would supply an accessible name for that image.**

[02:43] `title` is technically a way to add an accessible name, but it has a much lower precedence in the algorithm. When there's multiple techniques to create an accessible name, they have to rank their importance somehow.

[02:55] That is all defined in the **text alternative computation algorithm**, which is in a separate spec. It has a ton of really great information. This is for **browser implementers**, primarily, but if you find bugs with things in a certain browser, you can go back to WAI-ARIA and see how it was intended to be specified, or how it was intended to be implemented.

[03:19] There's `name` and `description`. We'll talk mostly about names today. I'll show you a little bit on descriptions. This also includes text alternatives, like we talked about with image and alt, and whether the text content will become its accessible name depends on the role of that element.

[03:38] We saw `button`. If we had a custom aria `checkbox` with a role of `checkbox`, it could derive its accessible name from text content. It really depends on what type of element you're working with. If we close out of those, I go back over to our demo, we've got a few more examples, I want to work through.

### Example 2- Read More
[03:56] Our next example is a really common one, of a link with the text "`read more`." Now, if you have a bunch of these links, and a bunch of the instances of the words read more, for a blind screen reader user, they're going to wonder, "Read more what?"

[04:11] If they all say read more, it's like it's "read nothing," really. They have to go follow the link to find out. I'm going to show you a technique to how to make this more accessible. I've got this read more span. I'm going to add another span and give it the class of `visually-hidden`.

[04:28] I'm going to say `"read more articles about cute animals."` If a screen reader user lands on this anchor, they will hear `"read more articles about cute animals."` I'm going to go back over the browser. I'm actually going to open this in Safari and fire up VoiceOver, so we can hear this experience so far.

Voice: [04:46] VoiceOver on Safari. Accept, search, edit text, search button, link, articles about cute animals, read more. You are currently on a link. VoiceOver off.

Instructor: [04:57] It read the text in a strange order. There's these two spans in here. The first span wrapping read more doesn't make a difference. For some reason, VoiceOver will reverse the order of these, both in Chrome and Safari.

[05:10] At least in Safari, I'm going to do a little bit of help here with the `aria-labelledby` attribute, and I'm going to give two ID references. We have the first span wrapping read more has an ID of `read-more1`. I'm going to give an ID to the second piece of information.

[05:27] I'm going to say `read-more-label1`, and these are pretty terrible names. You could generate these numbers dynamically. They all need unique IDs. Each ID needs to be unique. In my `aria-labelledby` wrapping both of these spans, I can reference both of these IDs.

[05:45] `read-more1` `read-more-label1`. **I can have multiple ID references, separated by spaces, and they will both combine to become the accessible name of this link. If we go back over here, and I fire up VoiceOver...**

Voice: [06:02] VoiceOver on Safari. Search, edit, search button, link, read more articles about cute animals. VoiceOver off.

Instructor: [06:08] Pretty cool. If we go back over to Chrome and go look at that link in the accessibility inspector, we can see to **it's accessible name is `"read more articles about cute animals."` It's deriving those not anymore from the contents.**

[06:22] You can tell that that exists, but it is being crossed out in favor of the `aria-labelledby` content that says `"read more articles about cute animals.`" **You want to make sure you test this in all of your major browser and assistive technology combinations, remembering that Chrome and VoiceOver are not commonly used by people with disabilities.**

### Example 3 - Dialog polyfill
[06:43] It's really, you could focus on **Safari and VoiceOver, pretty much, on the Mac platform**. If we keep going to our next example, I'm going to show you some stuff inside of a dialog. We have a dialog element. You could polyfill it, because dialog is pretty wide-supported.

[06:59] The thing we really look at here is the pieces inside of this dialog. 
- There's a little icon button to cancel or close. 
- There's a few different form inputs. I can tell that none of these are labeled, because if I click on the labels, it does not forward my focus into the input so a little side effect there of not labeling something.
- We have a little bit of help text down at the bottom that we could use maybe to add a description to this close button.

Let's go back over to our text editor, and we'll fix some of this stuff.

[07:30] We have a dialog element. It has an `open` flag, just so we can see it without having to interact. I'm bolting on a role of `dialog`, just to help expand support. I'm going to add an `aria-label` attribute here, and I'm going to say `newsletter sign-up`.

[07:47] If we had multiple dialogs, we want to be specific about what they are. It also helps expose you're inside of the dialog for newsletter sign-up. Our close button is a custom element, and it has a `role` of `button` and a `tabindex` of `0`.

[08:02] Then it has text content of an `X` character. **The `X` character, for a screen reader user, isn't going to make much sense. They're not going to know that that is for cancel or close, because it's a visual treatment. Instead, I'm going to add an `aria-label` of cancel.**

[08:18] I'm actually going to use the `aria-describedby` property to add a little more context, including this note. It's not the accessible name -- that's cancel -- but we're going to add an accessible description with `aria-describedby`.

[08:32] I'm going to point it to the ID reference of `cancel-note`. We've got a little more information on this custom close button. We also have a number of items inside of a form `fieldset`. `Fieldset` and `legend` are a great way to expose some more information for form controls.

[08:50] In this case, it's an `h2` saying, `"Sign up your favorite friends for a newsletter."` Unfortunately, I have messed up here and added a bunch of `span` elements instead of `labels`. I'm going to go highlight all of these spans wrapping inputs, or supposedly labeling inputs, and I'm going to change them label elements.

[09:08] This first example has a `label` and an input next to each other. The for and ID pairing, we'll group these together. This label of dog will now make the accessible name for this input. The next one is a label wrapping an input and the label text.

[09:24] It still has this explicit `for`-`ID` pairing, which I would highly recommend for broad support. We've got a label there with both the wrapping label element and this `for-ID` pairing. Then lastly, our third one is just an implicit label wrapping the input, which has not quite as wide support.

[09:43] It has another unique item here of a `placeholder`, saying, `e.g., Frank the Lizard`. **A `placeholder` is not enough to provide a label across the board. You really only want to use that for help text. It's like a description.**

[09:56] The `label` here is actually `who else`. Who else of your favorite friends do you want to sign up for a newsletter? It's kind of evil, huh? Lastly, we've got a `submit` button that its accessible name is coming from the `value` attribute on the input itself.

[10:13] If we go back over to our browser, we can go inspect a couple of these items. We've got our close button. I'm going to inspect and look at it in the accessibility inspector. It has a few interesting properties.

[10:27] The name of `cancel`, which is coming from `aria-label`, and it's crossing out the contents, which was that `X `character. It's got a description saying, `"Closing this dialog will cancel your submission."` This is really helpful to see, how did the accessible name calculation, where did it end up?

[10:47] How can we determine the best accessible name for things? This tool is fantastic. Then our form labels now are all labeled, and so on, and so forth. Before we close out, I'm going to go back over to Safari. I'm going to refresh the page, and I'll turn on VoiceOver, so you can hear the effect of all of these labels.

Voice: [11:06] VoiceOver on Safari. Access-, search, edit text, search button, link, read more articles about cute animals, newsletter sign-up web dialog with three items, cancel button. Closing this dialog will cancel your submission.

Instructor: [11:20] We heard the label of `cancel`, and then there was a pause. Then the "`closing this dialog will cancel your submission.`" **That's accessible name and accessible description working together to give a really nice contextual experience.**

Voice: [11:33] Dog, edit text, sign up your favorite friends for our newsletter. Cat, edit text, sign up your favorite friends for our newsletter.

Instructor: [11:40] Here, we're getting the `label` and the `fieldset` `legend` to give a little more context of what this is for. If you had multiple forms -- maybe there's multiple your name fields -- if you have multiple, having unique legends inside of multiple field sets means that each one of those your name fields would give a screen reader user more context about what that...

[12:06] Even though it has a label of your name, it might not be unique enough, in the case of repeated form sections.

Voice: [12:15] Who else? Edit text, e.g., Frank the Lizard. Sign up your favorite friends for our newsletter.

Instructor: [12:20] For this one, we're getting the `label` of who else. We're getting the `placeholder` or `description` of `e.g., Frank the Lizard`. Then that `fieldset` `legend` of "sign up your favorite friends for a newsletter." If you're a screen reader user, this really helps present all of the information you would need to fill in this field without having to go search around the rest of the page.

Voice: [12:41] Submit button, sign up your favorite friends for our newsletter. VoiceOver off.

Instructor: [12:46] **That's how you can label your form fields and apply accessible names to buttons, links, and so forth for all of your keyboard and screen reader interactive elements.**