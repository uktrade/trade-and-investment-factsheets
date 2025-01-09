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

<!-- Constants -->
```js
// const stringToCodeMap = {
//   "050096 Food preparation (US)":"050096",
//   "050097 Wine (ERGA OMNES)":"050097",
//   "050120 Sausages (ERGA OMNES)":"050120",
//   "050212 Fruits/Nuts (Turkey)":"050212",
//   "050035 Dried vegetables (ERGA OMNES)": "050035",
//   "050232 Pasta (Turkey)": "050232",
// };
const govuk_colour_palette = ["#12436D", "#28A197", "#801650", "#F46A25", "#3D3D3D", "#A285D1"];
```

<!-- Data -->
```js
// const balanceHistory = await FileAttachment("./data/quota-balance-history.json")
//   .json({typed: true})
//   .then(data => data.map(row => ({
//       'quota__order_number': row.quota__order_number,
//       'date': Date.parse(row.quota_definition__last_allocation_date),
//       'percentage_remaining': (1-row.quota_definition__fill_rate)*100,
//       'quota_start_date': Date.parse(row.quota_definition__validity_start_date),
//       'readable_desc': row.readable_desc,
//   })));
// const separator = '📏';  // Bit of a hack, but it's quite a convenient way to deduplicate
// const startDates = [...new Set(balanceHistory.map(row => row.readable_desc + separator + row.quota_start_date))]
//   .map(row => row.split(separator))
//   .map(([desc, date]) => [desc, new Date(parseInt(date))]);

// const currentVolumes = FileAttachment("./data/quotas-including-current-volumes.csv")
//   .csv({typed: true})
//   .then(data => data.map(row => ({
//     ...row,
//     // Shorten the really long geographical area names
//     quota__geographical_areas: row.quota__geographical_areas.replace(/.*(.\[\d+\]).*/, 'Areas subject to category $1 safeguards')
//   })));
// const currentOpenCriticalVolumes = currentVolumes
//   .then(data => data.filter(row => ['Open', 'Critical'].includes(row.quota_definition__status)));
```

<!-- Input widgets -->
```js
// function govUKCheckboxes(idPrefix, title, values, selected) {
//   const myView = htl.html`
//     <div class="govuk-form-group">
//       <fieldset class="govuk-fieldset">
//         <legend class="govuk-fieldset__legend govuk-!-margin-bottom-0">
//           <h2 class="govuk-!-margin-top-0 govuk-!-margin-bottom-2"><span class="govuk-heading-s govuk-!-margin-bottom-0">
//             ${title}
//           </span></h2>
//         </legend>
//         <div class="govuk-checkboxes" d=ata-module="govuk-checkboxes">
//           ${values.map((value, index) =>
//             htl.html`<div class="govuk-checkboxes__item">
//               <input class="govuk-checkboxes__input" id="${idPrefix}-${index}" name="${idPrefix}--${index}" type="checkbox" value="${value}" checked=${selected.includes(value)}>
//               <label class="govuk-label govuk-checkboxes__label" for="${idPrefix}-${index}">
//                 ${value.replace(/(.+)\((.+)\)/, '$1')}
//                 ${/(.+)\((.+)\)/.test(value) ? htl.html`<br>${value.replace(/(.+)\((.+)\)/, '$2')}` : ``}
//               </label>
//             </div>`
//           )}
//         </div>
//       </fieldset>
//     </div>`;
//   myView.addEventListener('input', () => {
//     myView.value = Array.from(myView.getElementsByTagName('input'))
//       .filter((input) => input.checked)
//       .map((input) => input.value)
//   });
//   myView.value = selected;

//   return myView;
// }

// const quotaInputs = govUKCheckboxes('quotas', 'Quotas to visualise', Object.keys(stringToCodeMap), [Object.keys(stringToCodeMap)[5]]);
// const quotaSelection = Generators.input(quotaInputs);

// const displayLinesInput = govUKCheckboxes('show-dates', 'Display quota renewal dates?', ['Show dates'], ['Show dates']);
// const displayLinesSelection = Generators.input(displayLinesInput);
```

<!-- Charts -->
```js
// function balanceHistoryChart(data, {width}) {
//   return Plot.plot({
//     subtitle: "How the percentage remaining has changed since the start of 2022 for up to six quotas. Data is available only at inconsistent intervals.",
//     width,
//     style: "font-size: 12px;",
//     marginBottom: 40,
//     marginTop: 30,
//     x: {type: "utc", label: "Date of allocation", labelOffset: 40},
//     y: {domain: [0, 100], label: "Percentage remaining"},
//     color: quotaSelection.length ? {
//       domain: quotaSelection,
//       range: govuk_colour_palette,
//       legend: true
//     } : null,
//     marks: [ 
//       Plot.gridY(),
//       Plot.ruleY([0], {stroke: "currentColor"}),
//       Plot.ruleX(['2022-01-01'], {stroke: "currentColor"}),
//       Plot.dot(balanceHistory, {
//         x: "date", y: "percentage_remaining", stroke: "readable_desc", symbol:'asterisk',
//         filter: row => quotaSelection.includes(row['readable_desc']),
//       }),
//       startDates.map(([quota, startDate]) => displayLinesSelection[0] == 'Show dates' && quotaSelection.includes(quota) ? Plot.ruleX({length: 500}, {x:startDate}) : null),
//     ]
//   })
// };

// function remainingChart(data, {width}) {
//   return Plot.plot({
//     subtitle: "The 20 geographical areas that have the highest percentage remaining balance of open and critical quotas.",
//     width,
//     height: 550,
//     style: "font-size: 12px;",
//     marginBottom: 40,
//     x: {grid: true, label: "Percentage remaining", domain: [0, 100], labelOffset: 40},
//     y: {label: null},
//     marks: [
//       Plot.rectX(data, Plot.groupY(
//         {x: (values, b) => {
//           return Math.max(0, 1 - values.map(row => row.quota_definition__balance).reduce((partialSum, a) => partialSum + a, 0) / values.map(row => row.quota_definition__initial_volume).reduce((partialSum, a) => partialSum + a, 0)) * 100
//         }},
//         {y: "quota__geographical_areas", tip: true, sort: {y: "-x", limit: 20}, fill: govuk_colour_palette[0]}
//       )),
//       Plot.ruleX([0]),
//       Plot.axisY({label: null, marginLeft: 300}),
//     ]
//   });
// }
```

<!-- HTML combining all the above -->
<div class="govuk-width-container">
  <h1 class="govuk-heading-l govuk-!-margin-top-7">Trade with Spain, in current prices (ONS)</h1>
  <!-- -->
  <div class="govuk-grid-row  govuk-!-margin-bottom-4">
    <div class="govuk-grid-column-one-half">
      <div class="card" style="min-height: 400px">
        <h2><span class="govuk-heading-s">UK trade with Spain</span></h2>
      </div>
    </div>
    <div class="govuk-grid-column-one-half">
      <div class="card" style="min-height: 400px">
        <h2><span class="govuk-heading-s">UK trade balance with Spain</span></h2>
      </div>
    </div>
  <!-- -->
  </div>
<!-- Closes .govuk-width-container -->
</div>
