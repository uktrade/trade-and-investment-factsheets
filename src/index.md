---
# Notes to maintainers:
#
# 1. It's probably good to read the following before attempting changes:
#    https://observablehq.com/framework/markdown
#    https://observablehq.com/framework/javascript
#    https://observablehq.com/framework/reactivity
#    https://observablehq.com/@observablehq/htl
#    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
#
# 2. We use quite a lot of HTML to leverage the GOV.UK Design System, more than most Observable
#    Framework examples, which means you probably want to add blank lines for readability. But be
#    careful! In normal HTML this has no effect, but here it runs the risk of being parsed as
#    Markdown, and if too intented will be treated as a code block to display.
#
#    We have worked around this by using empty HTML comments <-- --> to add in some whitespace.

# Title is empty since this is a single page site, and the <title> element will contain the site name
title: 
toc: false
theme: air
---

<!-- HTML combining all the above -->
<div class="govuk-width-container">
<ul class="govuk-list">
  <li><a href="./partners/Spain" class="govuk-link govuk-link--no-visited-state">Spain</a></li>
  <li><a href="./partners/Germany" class="govuk-link govuk-link--no-visited-state">Germany</a></li>
</ul>
<!-- Closes .govuk-width-container -->
</div>
