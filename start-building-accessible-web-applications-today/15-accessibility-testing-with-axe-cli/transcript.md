# 15. Accessibility Testing with axe-cli

## Introduction
Testing for accessibility is easy with automated tools like axe-cli. This command-line tool utilizes the open source axe-core JavaScript library to run an audit on any webpage you give it, returning a set of JSON results you can use in your continuous integration environment or regular development workflow.

[axe-cli](https://github.com/dequelabs/axe-cli)
[axe-core](https://github.com/dequelabs/axe-core)
[aXe Chrome](https://chrome.google.com/webstore/detail/axe-web-accessibility-tes/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US)


## Transcript
[00:00] if you're wanting to start testing for accessibility, I have a super helpful tool for you. On the command line, you can run `npm install axe-cli -g`. Once it's installed, I can say `axe www.dequeue.com` and then pass it in a URL.

[00:14] I'll type `www.dequeue.com`. I could also put a comma and then add any number of other URLs, but we'll just run `https://www.deque.com/`. It's using the **Axe core JavaScript library and phantom JS to headless browser** to go hit `https://www.deque.com/`, run Axe's accessibility rules, and then return a result.

```md
[olympiawojcik] Desktop/git/web-accessibility [development] ?? % axe https://www.deque.com/
Running axe-core 3.5.5 in chrome-headless

Testing https://www.deque.com/ ... please wait, this may take a minute.
Tried to inject into a removed iframe. This will not affect the analysis of the rest of the page but you might want to ensure the page has finished updating before starting the analysis.
  0 violations found!

Please note that only 20% to 50% of all accessibility issues can automatically be detected. 
Manual testing is always required. For more information see:
https://dequeuniversity.com/curriculum/courses/testingmethods

```
[00:32] `https://www.deque.com/` has zero accessibility violations, but `axe-cli` is very helpfully reminding us that that doesn't cover all of it. **You still need to test for accessibility manually.** You need to test with the keyboard, make sure you can operate everything. You need to check the quality of your `alt-text` and transcript content and things that require a human to review.

[00:55] But if we go look at another website `https://dequeuniversity.com/demo/mars` that has more accessibility problems such as the smartest commuter website that was built intentionally to test for accessibility, we can go and run Axe CLI against this site by putting AXE, and then I'll paste the URL. It will again use Axe core and phantom to go and hit this website, run its accessibility rules, and then return a result.

```mdx

[olympiawojcik] Desktop/git/web-accessibility [development] ?? % axe https://dequeuniversity.com/demo/mars
Running axe-core 3.5.5 in chrome-headless

Testing https://dequeuniversity.com/demo/mars ... please wait, this may take a minute.
Tried to inject into a removed iframe. This will not affect the analysis of the rest of the page but you might want to ensure the page has finished updating before starting the analysis.

  Violation of "button-name" with 1 occurrences!
    Ensures buttons have discernible text. Correct invalid elements at:
     - .departure-date > .ui-datepicker-trigger:nth-child(4)
    For details, see: https://dequeuniversity.com/rules/axe/3.5/button-name

  Violation of "color-contrast" with 12 occurrences!
    Ensures the contrast between foreground and background colors meets WCAG 2 AA contrast ratio thresholds. Correct invalid elements at:
     - a[href="mars2\.html\?a\=be_bold"] > h3
     - #vap-plan > p:nth-child(3)
     - a[href="mars2\.html\?a\=countdown"] > h3
     - #vap-book > p:nth-child(3)
     - a[href="mars2\.html\?a\=blast_off"] > h3
     - #vap-travel > p:nth-child(3)
     - li:nth-child(1) > .deal-text > h3 > a[href="mars2\.html\?a\=crater_adventure"]
     - li:nth-child(2) > .deal-text > h3 > a[href="mars2\.html\?a\=ice_cream"]
     - li:nth-child(2) > .deal-text > p
     - li:nth-child(3) > .deal-text > h3 > .link
     - li:nth-child(7) > .deal-text > p > a[href="mars2\.html\?a\=free_year"]
     - a[title="Join\ the\ Conversation"][target="_blank"][href="mars2\.html\?a\="]
    For details, see: https://dequeuniversity.com/rules/axe/3.5/color-contrast

  Violation of "duplicate-id-active" with 2 occurrences!
    Ensures every id attribute value of active elements is unique. Correct invalid elements at:
     - #passenger0 > .age-range.wrapper > .traveler-type
     - .active
    For details, see: https://dequeuniversity.com/rules/axe/3.5/duplicate-id-active

  Violation of "duplicate-id-aria" with 1 occurrences!
    Ensures every id attribute value used in ARIA and in labels is unique. Correct invalid elements at:
     - #passenger0 > .youth-age.wrapper > .age
    For details, see: https://dequeuniversity.com/rules/axe/3.5/duplicate-id-aria

  Violation of "duplicate-id" with 10 occurrences!
    Ensures every id attribute value is unique. Correct invalid elements at:
     - .loginnow > .container-fluid-full
     - .loginnow > .container-fluid-full > .container > .span5.pull-left.left-first > .pull-left:nth-child(1)
     - .loginnow > .container-fluid-full > .container > .span5.pull-left.left-first > .pull-left:nth-child(2)
     - .loginnow > .container-fluid-full > .container > .span5.pull-left.left-first > .pull-left:nth-child(2) > form[method="get"][action="\/demo\/mars\/mars2"]
     - .loginnow > .container-fluid-full > .container > .span7.pull-right > .pull-right
     - #left-column > div:nth-child(1)
     - #select-country > input[name="nCountries"][type="hidden"]
     - .middle.widget-container:nth-child(13)
     - .middle.widget-container:nth-child(13) > .interior-container > div:nth-child(3)
     - .ui-datepicker.ui-helper-clearfix.ui-corner-all:nth-child(33)
    For details, see: https://dequeuniversity.com/rules/axe/3.5/duplicate-id

  Violation of "frame-title" with 2 occurrences!
    Ensures <iframe> and <frame> elements contain a non-empty title attribute. Correct invalid elements at:
     - #player
     - #fafbba78
    For details, see: https://dequeuniversity.com/rules/axe/3.5/frame-title

  Violation of "html-has-lang" with 1 occurrences!
    Ensures every HTML document has a lang attribute. Correct invalid elements at:
     - html
    For details, see: https://dequeuniversity.com/rules/axe/3.5/html-has-lang

  Violation of "image-alt" with 4 occurrences!
    Ensures <img> elements have alternate text or a role of none or presentation. Correct invalid elements at:
     - img[src$="seg"]
     - li:nth-child(1) > a[href="mars2\.html\?a\=crater_adventure"] > img[width="\32 10"][height="\31 20"]
     - li:nth-child(8) > a[href="mars2\.html\?a\=crater_adventure"] > img[width="\32 10"][height="\31 20"]
     - li:nth-child(15) > a[href="mars2\.html\?a\=crater_adventure"] > img[width="\32 10"][height="\31 20"]
    For details, see: https://dequeuniversity.com/rules/axe/3.5/image-alt

  Violation of "label" with 3 occurrences!
    Ensures every form element has a label. Correct invalid elements at:
     - .loginnow > .container-fluid-full > .container > .span5.pull-left.left-first > .pull-left:nth-child(2) > form[method="get"][action="\/demo\/mars\/mars2"] > .search[name="query"][placeholder="search"]
     - #time0
     - #passenger0 > .age-range.wrapper > .traveler-type
    For details, see: https://dequeuniversity.com/rules/axe/3.5/label

  Violation of "landmark-one-main" with 1 occurrences!
    Ensures the document has a main landmark. Correct invalid elements at:
     - html
    For details, see: https://dequeuniversity.com/rules/axe/3.5/landmark-one-main

  Violation of "landmark-unique" with 1 occurrences!
    Landmarks must have a unique role or role/label/title (i.e. accessible name) combination. Correct invalid elements at:
     - .loginnow > .container-fluid-full > .container > .span5.pull-left.left-first > .pull-left:nth-child(1)
    For details, see: https://dequeuniversity.com/rules/axe/3.5/landmark-unique

  Violation of "link-name" with 8 occurrences!
    Ensures links have discernible text. Correct invalid elements at:
     - .link[href$="mars\/\#"]
     - li:nth-child(1) > a[href="mars2\.html\?a\=crater_adventure"]
     - li:nth-child(8) > a[href="mars2\.html\?a\=crater_adventure"]
     - li:nth-child(15) > a[href="mars2\.html\?a\=crater_adventure"]
     - .re_ajax_p3 > a[href="mars2\.html\?a\="]
     - .active
     - a[data-text="Why\ Mars\ died"]
     - a[data-text="The\ world\ that\ never\ was"]
    For details, see: https://dequeuniversity.com/rules/axe/3.5/link-name

  Violation of "region" with 30 occurrences!
    Ensures all page content is contained by landmarks. Correct invalid elements at:
     - body > div:nth-child(1)
     - #purposeDisclaimer
     - .loginnow > .container-fluid-full > .container > .span5.pull-left.left-first > .pull-left:nth-child(2) > form[method="get"][action="\/demo\/mars\/mars2"] > .search[name="query"][placeholder="search"]
     - .loginnow > .container-fluid-full > .container > .span5.pull-left.left-first > .pull-left:nth-child(2) > form[method="get"][action="\/demo\/mars\/mars2"] > .control-search[type="submit"]
     - #left-column
     - #widget-controls
     - #route-select > .interior-container > h3
     - #route-type-radio-group
     - #route-type
     - #pass-question-radio-group
     - .middle.widget-container:nth-child(13) > .interior-container > h3
     - #passenger0 > .wrapper:nth-child(1)
     - #passenger0 > .age-range.wrapper
     - #add-traveler
     - #booking-box-submit
     - #video-box > .interior-container
     - #social-bar
     - #footer-book > h4
     - #footer-book > ul
     - #footer-trains > h4
     - #footer-trains > ul
     - #footer-passes > h4
     - #footer-passes > ul
     - #footer-plan > h4
     - #footer-plan > ul
     - #footer-faq > h4
     - #footer-faq > ul
     - #footer-connect > h4
     - #footer-connect > ul
     - #copyright
    For details, see: https://dequeuniversity.com/rules/axe/3.5/region

  Violation of "tabindex" with 4 occurrences!
    Ensures tabindex attribute values are not greater than 0. Correct invalid elements at:
     - #from0
     - #to0
     - #deptDate0
     - #time0
    For details, see: https://dequeuniversity.com/rules/axe/3.5/tabindex

80 Accessibility issues detected.

Please note that only 20% to 50% of all accessibility issues can automatically be detected. 
Manual testing is always required. For more information see:
https://dequeuniversity.com/curriculum/courses/testingmethods

```

[01:17] Depending on the size of the web page, it might take a second to complete, but **this is a great tool that you could put in your continuous integration environment or just in your development workflow.**

[01:28] `axe-cli` returned 51 accessibility issues. If we scroll up, the rules that failed on that web page were button text, so buttons being empty. It will give you the selector of where you can go and find it. It will also give you a URL to go and learn more about how to fix it or **remediate it** as we say in the accessibility world. There's issues with color contrast, and every one of these selectors has a different element that has an issue.

[01:57] If you've ever used the **AXE Chrome browser extension or Firefox extension**, as well, you can go and actually inspect these nodes in the browser. But **this is the same API as the browser extensions but from the command line**, which is super useful.

### Use Axe with different Browsers
[02:13] **Something else we could do is tell it to use a different browser. Say, we wanted to run it with Selenium WebDriver and a real browser instance which would be more like a real user's experience. We could tell Axe CLI to use Chrome, Firefox, Edge, or whatever browser drivers you have installed on your machine.**

[02:30] Let's look at the mars commuter website again. I'll pass it `-b` and `c` for the Chrome browser. We can see it open up Chrome programmatically, run the accessibility audit against the web page, and then return the results on the command line.

### Phantom vs Selenium WebDriver
[02:44] Now, there were a few differences with phantom versus Selenium WebDriver, that's why you definitely want to try and test it in a real browser. I would actually recommend using **Selenium WebDriver** first so that those few issues that might be caused by phantom you're not chasing down.

[03:02] If you want to learn more about the API for `axe-cli`, you can go over to GitHub where you can see all the options, such as passing multiple URLs, running specific rules or specific tags since the rules have different tags. You could save the JSON results that Axe CLI is returning with the use of the Axe core API, scoping the test to look at specific element or exclude elements. Then, you can see the API for passing different browsers.

[03:31] If you want to learn more about Axe core, you can find that on NPM and GitHub, as well, or you can go and look at the entire extensible JavaScript API.

[03:37] That's how you can test for accessibility on the command line using Axe CLI, Selenium WebDriver, and phantom JS. But don't forget to do your manual testing, as well...