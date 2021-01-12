# 3. Building Forms with Accessibility in Mind

## Introduction
Are you building a website or web application that takes user input? Then it's important for you to watch this demo. Learn how to create more accessible forms using basic HTML form labels, fieldsets and legends. You'll even learn a bit about what makes Safari's developer tools pretty awesome.

## Transcript
00:02 Today, I'm going to show you how to create more accessible forms using some pretty basic HTML. This is stuff that people get often wrong, so I wanted to show you how to do it correctly.
00:11 I'm using **Safari** today because it has better support with accessibility and screen readers than Chrome does. Some of these things I will show you, they work best in Safari with VoiceOver on the Mac platform.

00:23 If you go to test them in Chrome, and you see things not working correctly, just know that _for accessibility, and people who actually use VoiceOver, which is not one of the most popular screen readers, but it's nice for development, just know that it should work better in Safari because that is what people really use._

00:39 I'm going to fire up VoiceOver, and I'm going to demo these two text inputs, and a set of radio buttons, and show you how they behave when they aren't labeled, and when they are labeled. With `command-F5`, I'll start up VoiceOver.

01:06 If you could see the demo, but you can also hear it, you could see that the first input, it's got some text to it of your name. That text was announced. The radio buttons did not have actual labels announced, and the third demo input has text next to it as well, just like the first one, but it was not announced.

01:27 What's going on here? If we go and inspect the input using the developer tools in Safari -- and I can try to make these a little bigger -- we can see that the text is just sitting right next to this input. The browser has actually tried to help you.

01:44 It's either VoiceOver or the browser -- I'm not quite sure -- but under the hood, they are trying to make a more accessible web, with good intentions. However, this is really unpredictable.

01:53 Like if we see that first input with the text in front of it, and then we look at a radio button with text right after it, that radio button did not get the same magic treatment from the browser and the screen reader.

02:04 We can't rely on that, nor is it compliant. It also makes it so this text, when we click on it, we don't get it paired with the input, and our focus isn't sent into it, which is what happens when you do properly label it.

02:17 Furthermore, if we look at this text -- and in Safari, there is a pretty handy element inspector for **accessibility** -- we can go into the elements and look at the node. If you scroll all the way down in Safari, you can see the accessibility information exposed.

02:33 It doesn't say that there is any text associated with this. Same with the radio button. It says it's got a role of radio, but it doesn't have any label associated. That's what we heard going on in VoiceOver. To fix these, let's go over to our text editor.

02:51 On the first one, I'm just going to use this technique, called implicit labeling, where you simply wrap the text and the input in a label element. That will now pair those together. Now for our radio buttons, we can do the same thing.

03:07 I'm actually going to do three of these at once. Do these. I have three radio buttons with implicit labels. If we go back to our browser, and I turn on...Actually, we can just go inspect these real quickly, and see the accessibility information now says, "Label, your name."

03:32 If I click on the your name label, you can see my focus is sent into the text input, which is really great for people who have limited dexterity. Similar with the radio buttons, if I click on the label, it will select that radio button.

03:45 If we inspect them in the Safari accessibility inspector, if I go onto the actual input, you can see that it has its label exposed, of dog, cat, and polar bear. This third one is wrapped in a couple of divs. I wanted to show you that, in case your design requires them to be wrapped separately.

04:03 There is still a trick that we can make these work. I'm going to use a label element, but instead of wrapping it implicitly, because they're in separate elements, I need a little more control. I can say, "Label for," the for attribute, and I wrap that text in a label element.

04:22 Then on my input, I give it an ID of hometown. Now that label and the input have been paired together, even though they're in separate elements, so that now, when I go and inspect hometown, and I go to the input, I can see it has been labeled.

04:40 I can click on the label, even though it's in a separate element. My focus is sent into it. It's really nice.

04:47 That is working pretty well. However, there is one more step that we could go. If you notice on these radio buttons for favorite animal, there's some text above it, but it's not being announced with those radio buttons, so a screen reader user misses out on that extra context.

05:02 I'm going to show you a trick. This is another pretty basic HTML thing, however, it's really awesome. If I create a field set element, and then I've got this favorite animal text in a paragraph tag.

05:15 If I change that to a legend -- I could even wrap the paragraph in a legend if I wanted to -- then I can take all of these radio buttons. I close my field set around them. It will change the CSS a little bit, however, now we have these grouped together with some text.

05:39 You could totally restyle this to change it so that the legend doesn't look like this, and the field set doesn't create a border. It is pretty clear to the user that these things are related, and that you're intended to pick one as your favorite animal. If I fire up VoiceOver, too, I'll show you what it sounds like.

06:15 Those radio buttons now, the number of them is announced in Safari. It's nice. There's the two of three, three of three, and then that field set legend has actually been announced as part of that input's information.

06:28 A screen reader user can really get more context about what that was for. I go look at this input. We can see the label is still just polar bear, but the field set and legend expose a little more accessibility information. It's super useful.

06:45 I hope that's been a helpful demo using Safari's accessibility inspector, and some basic HTML. If you do these few things, you will really improve accessibility across the web. Since this is such an easy thing to fix, I hope that you will become an expert at accessible form labeling. 