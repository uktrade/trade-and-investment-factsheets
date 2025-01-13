---
# If the title is empty, the <title> element will contain the site name
title: 
toc: false
theme: air
---

<!-- Initialise govuk-frontend -->
```js
import { initAll } from 'npm:govuk-frontend@5.8.0/dist/govuk/govuk-frontend.min.js'
initAll();
````

<!-- HTML combining all the above -->
<div class="govuk-width-container"><div class="govuk-main-wrapper">
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">
  <span class="govuk-caption-l">Official statistics</span>
  <h1 class="govuk-heading-xl">Trade and investment factsheets</h1>
  <p class="govuk-body-l govuk-!-margin-bottom-0">A snapshot of the UK's trade and investment positions with individual trading and investment partners overseas.</p>
  <!-- -->
  </div>
</div>
<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">
<div class="govuk-grid-row">
  <div class="govuk-grid-column-one-third">
    <h2 class="govuk-heading-m govuk-!-margin-bottom-0">Trading partners</h2>
    <h2 class="taif-partner-letter govuk-heading-m">236</h2>
  </div>
  <div class="govuk-grid-column-two-thirds">
  <!-- -->
  <h2 class="taif-partner-letter govuk-heading-xl govuk-!-margin-top-7 govuk-!-margin-bottom-3">A</h2>
  <ul class="govuk-list taif-partner-list">
    <li><a href="./partners/Afghanistan" class="govuk-link govuk-link--no-visited-state">Afghanistan</a></li>
    <li><a href="./partners/Albania" class="govuk-link govuk-link--no-visited-state">Albania</a></li>
    <li><a href="./partners/Algeria" class="govuk-link govuk-link--no-visited-state">Algeria</a></li>
    <li><a href="./partners/American Samoa" class="govuk-link govuk-link--no-visited-state">American Samoa</a></li>
    <li><a href="./partners/Andorra" class="govuk-link govuk-link--no-visited-state">Andorra</a></li>
    <li><a href="./partners/Angola" class="govuk-link govuk-link--no-visited-state">Angola</a></li>
    <li><a href="./partners/Anguilla" class="govuk-link govuk-link--no-visited-state">Anguilla</a></li>
    <li><a href="./partners/Antarctica" class="govuk-link govuk-link--no-visited-state">Antarctica</a></li>
    <li><a href="./partners/Antigua and Barbuda" class="govuk-link govuk-link--no-visited-state">Antigua and Barbuda</a></li>
    <li><a href="./partners/Argentina" class="govuk-link govuk-link--no-visited-state">Argentina</a></li>
    <li><a href="./partners/Armenia" class="govuk-link govuk-link--no-visited-state">Armenia</a></li>
    <li><a href="./partners/Aruba" class="govuk-link govuk-link--no-visited-state">Aruba</a></li>
    <li><a href="./partners/Australia" class="govuk-link govuk-link--no-visited-state">Australia</a></li>
    <li><a href="./partners/Austria" class="govuk-link govuk-link--no-visited-state">Austria</a></li>
    <li><a href="./partners/Azerbaijan" class="govuk-link govuk-link--no-visited-state">Azerbaijan</a></li>
  </ul>
  <!-- -->
  <hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">
  <!-- -->
  <h2 class="taif-partner-letter govuk-heading-xl govuk-!-margin-bottom-3">B</h2>
  <ul class="govuk-list taif-partner-list">
    <li><a href="./partners/Bahrain" class="govuk-link govuk-link--no-visited-state">Bahrain</a></li>
    <li><a href="./partners/Bangladesh" class="govuk-link govuk-link--no-visited-state">Bangladesh</a></li>
    <li><a href="./partners/Barbados" class="govuk-link govuk-link--no-visited-state">Barbados</a></li>
    <li><a href="./partners/Belarus" class="govuk-link govuk-link--no-visited-state">Belarus</a></li>
    <li><a href="./partners/Belgium" class="govuk-link govuk-link--no-visited-state">Belgium</a></li>
    <li><a href="./partners/Belize" class="govuk-link govuk-link--no-visited-state">Belize</a></li>
    <li><a href="./partners/Benin" class="govuk-link govuk-link--no-visited-state">Benin</a></li>
    <li><a href="./partners/Bermuda" class="govuk-link govuk-link--no-visited-state">Bermuda</a></li>
    <li><a href="./partners/Bhutan" class="govuk-link govuk-link--no-visited-state">Bhutan</a></li>
    <li><a href="./partners/Bolivia" class="govuk-link govuk-link--no-visited-state">Bolivia</a></li>
    <li><a href="./partners/Bonaire, Sint Eustatius and Saba" class="govuk-link govuk-link--no-visited-state">Bonaire, Sint Eustatius and Saba</a></li>
    <li><a href="./partners/Bosnia and Herzegovina" class="govuk-link govuk-link--no-visited-state">Bosnia and Herzegovina</a></li>
    <li><a href="./partners/Botswana" class="govuk-link govuk-link--no-visited-state">Botswana</a></li>
    <li><a href="./partners/Bouvet Island" class="govuk-link govuk-link--no-visited-state">Bouvet Island</a></li>
    <li><a href="./partners/Brazil" class="govuk-link govuk-link--no-visited-state">Brazil</a></li>
    <li><a href="./partners/British Indian Ocean Territory" class="govuk-link govuk-link--no-visited-state">British Indian Ocean Territory</a></li>
    <li><a href="./partners/British Virgin Islands" class="govuk-link govuk-link--no-visited-state">British Virgin Islands</a></li>
    <li><a href="./partners/Brunei" class="govuk-link govuk-link--no-visited-state">Brunei</a></li>
    <li><a href="./partners/Bulgaria" class="govuk-link govuk-link--no-visited-state">Bulgaria</a></li>
    <li><a href="./partners/Burkina Faso" class="govuk-link govuk-link--no-visited-state">Burkina Faso</a></li>
    <li><a href="./partners/Burundi" class="govuk-link govuk-link--no-visited-state">Burundi</a></li>
  </ul>
  <!-- -->
  <hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">
  <!-- -->
  <h2 class="taif-partner-letter govuk-heading-xl govuk-!-margin-bottom-3">C</h2>
  <ul class="govuk-list taif-partner-list">
    <li><a href="./partners/Cambodia" class="govuk-link govuk-link--no-visited-state">Cambodia</a></li>
    <li><a href="./partners/Cameroon" class="govuk-link govuk-link--no-visited-state">Cameroon</a></li>
    <li><a href="./partners/Canada" class="govuk-link govuk-link--no-visited-state">Canada</a></li>
    <li><a href="./partners/Cape Verde" class="govuk-link govuk-link--no-visited-state">Cape Verde</a></li>
    <li><a href="./partners/Cayman Islands" class="govuk-link govuk-link--no-visited-state">Cayman Islands</a></li>
    <li><a href="./partners/Central African Republic" class="govuk-link govuk-link--no-visited-state">Central African Republic</a></li>
    <li><a href="./partners/Chad" class="govuk-link govuk-link--no-visited-state">Chad</a></li>
    <li><a href="./partners/Chile" class="govuk-link govuk-link--no-visited-state">Chile</a></li>
    <li><a href="./partners/China" class="govuk-link govuk-link--no-visited-state">China</a></li>
    <li><a href="./partners/Christmas Island" class="govuk-link govuk-link--no-visited-state">Christmas Island</a></li>
    <li><a href="./partners/Cocos Islands" class="govuk-link govuk-link--no-visited-state">Cocos Islands</a></li>
    <li><a href="./partners/Colombia" class="govuk-link govuk-link--no-visited-state">Colombia</a></li>
    <li><a href="./partners/Comoros" class="govuk-link govuk-link--no-visited-state">Comoros</a></li>
    <li><a href="./partners/Congo (Democratic Republic)" class="govuk-link govuk-link--no-visited-state">Congo (Democratic Republic)</a></li>
    <li><a href="./partners/Congo" class="govuk-link govuk-link--no-visited-state">Congo</a></li>
    <li><a href="./partners/Cook Islands" class="govuk-link govuk-link--no-visited-state">Cook Islands</a></li>
    <li><a href="./partners/Costa Rica" class="govuk-link govuk-link--no-visited-state">Costa Rica</a></li>
    <li><a href="./partners/Croatia" class="govuk-link govuk-link--no-visited-state">Croatia</a></li>
    <li><a href="./partners/Cuba" class="govuk-link govuk-link--no-visited-state">Cuba</a></li>
    <li><a href="./partners/Curacao" class="govuk-link govuk-link--no-visited-state">Curacao</a></li>
    <li><a href="./partners/Cyprus" class="govuk-link govuk-link--no-visited-state">Cyprus</a></li>
    <li><a href="./partners/Czechia" class="govuk-link govuk-link--no-visited-state">Czechia</a></li>
  </ul>
  <!-- -->
  <hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">
  <!-- -->
  <h2 class="taif-partner-letter govuk-heading-xl govuk-!-margin-bottom-3">D</h2>
  <ul class="govuk-list taif-partner-list">
    <li><a href="./partners/Denmark" class="govuk-link govuk-link--no-visited-state">Denmark</a></li>
    <li><a href="./partners/Djibouti" class="govuk-link govuk-link--no-visited-state">Djibouti</a></li>
    <li><a href="./partners/Dominica" class="govuk-link govuk-link--no-visited-state">Dominica</a></li>
    <li><a href="./partners/Dominican Republic" class="govuk-link govuk-link--no-visited-state">Dominican Republic</a></li>
  </ul>
  <!-- -->
  <hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">
  <!-- -->
  <h2 class="taif-partner-letter govuk-heading-xl govuk-!-margin-bottom-3">E</h2>
  <ul class="govuk-list taif-partner-list">
    <li><a href="./partners/East Timor" class="govuk-link govuk-link--no-visited-state">East Timor</a></li>
    <li><a href="./partners/Ecuador" class="govuk-link govuk-link--no-visited-state">Ecuador</a></li>
    <li><a href="./partners/Egypt" class="govuk-link govuk-link--no-visited-state">Egypt</a></li>
    <li><a href="./partners/El Salvador" class="govuk-link govuk-link--no-visited-state">El Salvador</a></li>
    <li><a href="./partners/Equatorial Guinea" class="govuk-link govuk-link--no-visited-state">Equatorial Guinea</a></li>
    <li><a href="./partners/Eritrea" class="govuk-link govuk-link--no-visited-state">Eritrea</a></li>
    <li><a href="./partners/Estonia" class="govuk-link govuk-link--no-visited-state">Estonia</a></li>
    <li><a href="./partners/Eswatini" class="govuk-link govuk-link--no-visited-state">Eswatini</a></li>
    <li><a href="./partners/Ethiopia" class="govuk-link govuk-link--no-visited-state">Ethiopia</a></li>
  </ul>
  <!-- -->
  <hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">
  <!-- -->
  <h2 class="taif-partner-letter govuk-heading-xl govuk-!-margin-bottom-3">F</h2>
  <ul class="govuk-list taif-partner-list">
    <li><a href="./partners/Falkland Islands" class="govuk-link govuk-link--no-visited-state">Falkland Islands</a></li>
    <li><a href="./partners/Faroe Islands" class="govuk-link govuk-link--no-visited-state">Faroe Islands</a></li>
    <li><a href="./partners/Fiji" class="govuk-link govuk-link--no-visited-state">Fiji</a></li>
    <li><a href="./partners/Finland" class="govuk-link govuk-link--no-visited-state">Finland</a></li>
    <li><a href="./partners/France" class="govuk-link govuk-link--no-visited-state">France</a></li>
    <li><a href="./partners/French Polynesia" class="govuk-link govuk-link--no-visited-state">French Polynesia</a></li>
    <li><a href="./partners/French Southern Territories" class="govuk-link govuk-link--no-visited-state">French Southern Territories</a></li>
  </ul>
  <!-- -->
  <hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">
  <!-- -->
  <h2 class="taif-partner-letter govuk-heading-xl govuk-!-margin-bottom-3">G</h2>
  <ul class="govuk-list taif-partner-list">
    <li><a href="./partners/Gabon" class="govuk-link govuk-link--no-visited-state">Gabon</a></li>
    <li><a href="./partners/Georgia" class="govuk-link govuk-link--no-visited-state">Georgia</a></li>
    <li><a href="./partners/Germany" class="govuk-link govuk-link--no-visited-state">Germany</a></li>
    <li><a href="./partners/Ghana" class="govuk-link govuk-link--no-visited-state">Ghana</a></li>
    <li><a href="./partners/Gibraltar" class="govuk-link govuk-link--no-visited-state">Gibraltar</a></li>
    <li><a href="./partners/Greece" class="govuk-link govuk-link--no-visited-state">Greece</a></li>
    <li><a href="./partners/Greenland" class="govuk-link govuk-link--no-visited-state">Greenland</a></li>
    <li><a href="./partners/Grenada" class="govuk-link govuk-link--no-visited-state">Grenada</a></li>
    <li><a href="./partners/Guam" class="govuk-link govuk-link--no-visited-state">Guam</a></li>
    <li><a href="./partners/Guatemala" class="govuk-link govuk-link--no-visited-state">Guatemala</a></li>
    <li><a href="./partners/Guernsey" class="govuk-link govuk-link--no-visited-state">Guernsey</a></li>
    <li><a href="./partners/Guinea Bissau" class="govuk-link govuk-link--no-visited-state">Guinea Bissau</a></li>
    <li><a href="./partners/Guinea" class="govuk-link govuk-link--no-visited-state">Guinea</a></li>
    <li><a href="./partners/Guyana" class="govuk-link govuk-link--no-visited-state">Guyana</a></li>
  </ul>
  <!-- -->
  <hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">
  <!-- -->
  <h2 class="taif-partner-letter govuk-heading-xl govuk-!-margin-bottom-3">H</h2>
  <ul class="govuk-list taif-partner-list">
    <li><a href="./partners/Haiti" class="govuk-link govuk-link--no-visited-state">Haiti</a></li>
    <li><a href="./partners/Heard &amp; McDonald Islands" class="govuk-link govuk-link--no-visited-state">Heard &amp; McDonald Islands</a></li>
    <li><a href="./partners/Honduras" class="govuk-link govuk-link--no-visited-state">Honduras</a></li>
    <li><a href="./partners/Hong Kong SAR" class="govuk-link govuk-link--no-visited-state">Hong Kong SAR</a></li>
    <li><a href="./partners/Hungary" class="govuk-link govuk-link--no-visited-state">Hungary</a></li>
  </ul>
  <!-- -->
  <hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">
  <!-- -->
  <h2 class="taif-partner-letter govuk-heading-xl govuk-!-margin-bottom-3">I</h2>
  <ul class="govuk-list taif-partner-list">
    <li><a href="./partners/Iceland" class="govuk-link govuk-link--no-visited-state">Iceland</a></li>
    <li><a href="./partners/India" class="govuk-link govuk-link--no-visited-state">India</a></li>
    <li><a href="./partners/Indonesia" class="govuk-link govuk-link--no-visited-state">Indonesia</a></li>
    <li><a href="./partners/Iran" class="govuk-link govuk-link--no-visited-state">Iran</a></li>
    <li><a href="./partners/Iraq" class="govuk-link govuk-link--no-visited-state">Iraq</a></li>
    <li><a href="./partners/Ireland" class="govuk-link govuk-link--no-visited-state">Ireland</a></li>
    <li><a href="./partners/Isle of Man" class="govuk-link govuk-link--no-visited-state">Isle of Man</a></li>
    <li><a href="./partners/Israel" class="govuk-link govuk-link--no-visited-state">Israel</a></li>
    <li><a href="./partners/Italy" class="govuk-link govuk-link--no-visited-state">Italy</a></li>
    <li><a href="./partners/Ivory Coast" class="govuk-link govuk-link--no-visited-state">Ivory Coast</a></li>
  </ul>
  <!-- -->
  <hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">
  <!-- -->
  <h2 class="taif-partner-letter govuk-heading-xl govuk-!-margin-bottom-3">J</h2>
  <ul class="govuk-list taif-partner-list">
    <li><a href="./partners/Jamaica" class="govuk-link govuk-link--no-visited-state">Jamaica</a></li>
    <li><a href="./partners/Japan" class="govuk-link govuk-link--no-visited-state">Japan</a></li>
    <li><a href="./partners/Jersey" class="govuk-link govuk-link--no-visited-state">Jersey</a></li>
    <li><a href="./partners/Jordan" class="govuk-link govuk-link--no-visited-state">Jordan</a></li>
  </ul>
  <!-- -->
  <hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">
  <!-- -->
  <h2 class="taif-partner-letter govuk-heading-xl govuk-!-margin-bottom-3">K</h2>
  <ul class="govuk-list taif-partner-list">
    <li><a href="./partners/Kazakhstan" class="govuk-link govuk-link--no-visited-state">Kazakhstan</a></li>
    <li><a href="./partners/Kenya" class="govuk-link govuk-link--no-visited-state">Kenya</a></li>
    <li><a href="./partners/Kiribati" class="govuk-link govuk-link--no-visited-state">Kiribati</a></li>
    <li><a href="./partners/Kosovo" class="govuk-link govuk-link--no-visited-state">Kosovo</a></li>
    <li><a href="./partners/Kuwait" class="govuk-link govuk-link--no-visited-state">Kuwait</a></li>
    <li><a href="./partners/Kyrgyzstan" class="govuk-link govuk-link--no-visited-state">Kyrgyzstan</a></li>
  </ul>
  <!-- -->
  <hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">
  <!-- -->
  <h2 class="taif-partner-letter govuk-heading-xl govuk-!-margin-bottom-3">L</h2>
  <ul class="govuk-list taif-partner-list">
    <li><a href="./partners/Laos" class="govuk-link govuk-link--no-visited-state">Laos</a></li>
    <li><a href="./partners/Latvia" class="govuk-link govuk-link--no-visited-state">Latvia</a></li>
    <li><a href="./partners/Lebanon" class="govuk-link govuk-link--no-visited-state">Lebanon</a></li>
    <li><a href="./partners/Lesotho" class="govuk-link govuk-link--no-visited-state">Lesotho</a></li>
    <li><a href="./partners/Liberia" class="govuk-link govuk-link--no-visited-state">Liberia</a></li>
    <li><a href="./partners/Libya" class="govuk-link govuk-link--no-visited-state">Libya</a></li>
    <li><a href="./partners/Liechtenstein" class="govuk-link govuk-link--no-visited-state">Liechtenstein</a></li>
    <li><a href="./partners/Lithuania" class="govuk-link govuk-link--no-visited-state">Lithuania</a></li>
    <li><a href="./partners/Luxembourg" class="govuk-link govuk-link--no-visited-state">Luxembourg</a></li>
  </ul>
  <!-- -->
  <hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">
  <!-- -->
  <h2 class="taif-partner-letter govuk-heading-xl govuk-!-margin-bottom-3">M</h2>
  <ul class="govuk-list taif-partner-list">
    <li><a href="./partners/Macao SAR" class="govuk-link govuk-link--no-visited-state">Macao SAR</a></li>
    <li><a href="./partners/Madagascar" class="govuk-link govuk-link--no-visited-state">Madagascar</a></li>
    <li><a href="./partners/Malawi" class="govuk-link govuk-link--no-visited-state">Malawi</a></li>
    <li><a href="./partners/Malaysia" class="govuk-link govuk-link--no-visited-state">Malaysia</a></li>
    <li><a href="./partners/Maldives" class="govuk-link govuk-link--no-visited-state">Maldives</a></li>
    <li><a href="./partners/Mali" class="govuk-link govuk-link--no-visited-state">Mali</a></li>
    <li><a href="./partners/Malta" class="govuk-link govuk-link--no-visited-state">Malta</a></li>
    <li><a href="./partners/Marshall Islands" class="govuk-link govuk-link--no-visited-state">Marshall Islands</a></li>
    <li><a href="./partners/Mauritania" class="govuk-link govuk-link--no-visited-state">Mauritania</a></li>
    <li><a href="./partners/Mauritius" class="govuk-link govuk-link--no-visited-state">Mauritius</a></li>
    <li><a href="./partners/Mexico" class="govuk-link govuk-link--no-visited-state">Mexico</a></li>
    <li><a href="./partners/Micronesia" class="govuk-link govuk-link--no-visited-state">Micronesia</a></li>
    <li><a href="./partners/Moldova" class="govuk-link govuk-link--no-visited-state">Moldova</a></li>
    <li><a href="./partners/Mongolia" class="govuk-link govuk-link--no-visited-state">Mongolia</a></li>
    <li><a href="./partners/Montenegro" class="govuk-link govuk-link--no-visited-state">Montenegro</a></li>
    <li><a href="./partners/Montserrat" class="govuk-link govuk-link--no-visited-state">Montserrat</a></li>
    <li><a href="./partners/Morocco" class="govuk-link govuk-link--no-visited-state">Morocco</a></li>
    <li><a href="./partners/Mozambique" class="govuk-link govuk-link--no-visited-state">Mozambique</a></li>
    <li><a href="./partners/Myanmar (Burma)" class="govuk-link govuk-link--no-visited-state">Myanmar (Burma)</a></li>
  </ul>
  <!-- -->
  <hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">
  <!-- -->
  <h2 class="taif-partner-letter govuk-heading-xl govuk-!-margin-bottom-3">N</h2>
  <ul class="govuk-list taif-partner-list">
    <li><a href="./partners/Namibia" class="govuk-link govuk-link--no-visited-state">Namibia</a></li>
    <li><a href="./partners/Nauru" class="govuk-link govuk-link--no-visited-state">Nauru</a></li>
    <li><a href="./partners/Nepal" class="govuk-link govuk-link--no-visited-state">Nepal</a></li>
    <li><a href="./partners/Netherlands" class="govuk-link govuk-link--no-visited-state">Netherlands</a></li>
    <li><a href="./partners/New Caledonia" class="govuk-link govuk-link--no-visited-state">New Caledonia</a></li>
    <li><a href="./partners/New Zealand" class="govuk-link govuk-link--no-visited-state">New Zealand</a></li>
    <li><a href="./partners/Nicaragua" class="govuk-link govuk-link--no-visited-state">Nicaragua</a></li>
    <li><a href="./partners/Niger" class="govuk-link govuk-link--no-visited-state">Niger</a></li>
    <li><a href="./partners/Nigeria" class="govuk-link govuk-link--no-visited-state">Nigeria</a></li>
    <li><a href="./partners/Niue" class="govuk-link govuk-link--no-visited-state">Niue</a></li>
    <li><a href="./partners/Norfolk Islands" class="govuk-link govuk-link--no-visited-state">Norfolk Islands</a></li>
    <li><a href="./partners/North Korea" class="govuk-link govuk-link--no-visited-state">North Korea</a></li>
    <li><a href="./partners/North Macedonia" class="govuk-link govuk-link--no-visited-state">North Macedonia</a></li>
    <li><a href="./partners/Northern Mariana Islands" class="govuk-link govuk-link--no-visited-state">Northern Mariana Islands</a></li>
    <li><a href="./partners/Norway" class="govuk-link govuk-link--no-visited-state">Norway</a></li>
  </ul>
  <!-- -->
  <hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">
  <!-- -->
  <h2 class="taif-partner-letter govuk-heading-xl govuk-!-margin-bottom-3">O</h2>
  <ul class="govuk-list taif-partner-list">
    <li><a href="./partners/Occupied Palestinian Territories" class="govuk-link govuk-link--no-visited-state">Occupied Palestinian Territories</a></li>
    <li><a href="./partners/Oman" class="govuk-link govuk-link--no-visited-state">Oman</a></li>
  </ul>
  <!-- -->
  <hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">
  <!-- -->
  <h2 class="taif-partner-letter govuk-heading-xl govuk-!-margin-bottom-3">P</h2>
  <ul class="govuk-list taif-partner-list">
    <li><a href="./partners/Pakistan" class="govuk-link govuk-link--no-visited-state">Pakistan</a></li>
    <li><a href="./partners/Palau" class="govuk-link govuk-link--no-visited-state">Palau</a></li>
    <li><a href="./partners/Panama" class="govuk-link govuk-link--no-visited-state">Panama</a></li>
    <li><a href="./partners/Papua New Guinea" class="govuk-link govuk-link--no-visited-state">Papua New Guinea</a></li>
    <li><a href="./partners/Paraguay" class="govuk-link govuk-link--no-visited-state">Paraguay</a></li>
    <li><a href="./partners/Peru" class="govuk-link govuk-link--no-visited-state">Peru</a></li>
    <li><a href="./partners/Philippines" class="govuk-link govuk-link--no-visited-state">Philippines</a></li>
    <li><a href="./partners/Pitcairn Islands" class="govuk-link govuk-link--no-visited-state">Pitcairn Islands</a></li>
    <li><a href="./partners/Poland" class="govuk-link govuk-link--no-visited-state">Poland</a></li>
    <li><a href="./partners/Portugal" class="govuk-link govuk-link--no-visited-state">Portugal</a></li>
  </ul>
  <!-- -->
  <hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">
  <!-- -->
  <h2 class="taif-partner-letter govuk-heading-xl govuk-!-margin-bottom-3">Q</h2>
  <ul class="govuk-list taif-partner-list">
    <li><a href="./partners/Qatar" class="govuk-link govuk-link--no-visited-state">Qatar</a></li>
  </ul>
  <!-- -->
  <hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">
  <!-- -->
  <h2 class="taif-partner-letter govuk-heading-xl govuk-!-margin-bottom-3">R</h2>
  <ul class="govuk-list taif-partner-list">
    <li><a href="./partners/Romania" class="govuk-link govuk-link--no-visited-state">Romania</a></li>
    <li><a href="./partners/Russia" class="govuk-link govuk-link--no-visited-state">Russia</a></li>
    <li><a href="./partners/Rwanda" class="govuk-link govuk-link--no-visited-state">Rwanda</a></li>
  </ul>
  <!-- -->
  <hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">
  <!-- -->
  <h2 class="taif-partner-letter govuk-heading-xl govuk-!-margin-bottom-3">S</h2>
  <ul class="govuk-list taif-partner-list">
    <li><a href="./partners/Samoa" class="govuk-link govuk-link--no-visited-state">Samoa</a></li>
    <li><a href="./partners/San Marino" class="govuk-link govuk-link--no-visited-state">San Marino</a></li>
    <li><a href="./partners/Sao Tome and Principe" class="govuk-link govuk-link--no-visited-state">Sao Tome and Principe</a></li>
    <li><a href="./partners/Saudi Arabia" class="govuk-link govuk-link--no-visited-state">Saudi Arabia</a></li>
    <li><a href="./partners/Senegal" class="govuk-link govuk-link--no-visited-state">Senegal</a></li>
    <li><a href="./partners/Serbia" class="govuk-link govuk-link--no-visited-state">Serbia</a></li>
    <li><a href="./partners/Seychelles" class="govuk-link govuk-link--no-visited-state">Seychelles</a></li>
    <li><a href="./partners/Sierra Leone" class="govuk-link govuk-link--no-visited-state">Sierra Leone</a></li>
    <li><a href="./partners/Singapore" class="govuk-link govuk-link--no-visited-state">Singapore</a></li>
    <li><a href="./partners/Sint Maarten" class="govuk-link govuk-link--no-visited-state">Sint Maarten</a></li>
    <li><a href="./partners/Slovakia" class="govuk-link govuk-link--no-visited-state">Slovakia</a></li>
    <li><a href="./partners/Slovenia" class="govuk-link govuk-link--no-visited-state">Slovenia</a></li>
    <li><a href="./partners/Solomon Islands" class="govuk-link govuk-link--no-visited-state">Solomon Islands</a></li>
    <li><a href="./partners/Somalia" class="govuk-link govuk-link--no-visited-state">Somalia</a></li>
    <li><a href="./partners/South Africa" class="govuk-link govuk-link--no-visited-state">South Africa</a></li>
    <li><a href="./partners/South Georgia" class="govuk-link govuk-link--no-visited-state">South Georgia</a></li>
    <li><a href="./partners/South Korea" class="govuk-link govuk-link--no-visited-state">South Korea</a></li>
    <li><a href="./partners/South Sudan" class="govuk-link govuk-link--no-visited-state">South Sudan</a></li>
    <li><a href="./partners/Spain" class="govuk-link govuk-link--no-visited-state">Spain</a></li>
    <li><a href="./partners/Sri Lanka" class="govuk-link govuk-link--no-visited-state">Sri Lanka</a></li>
    <li><a href="./partners/St Kitts and Nevis" class="govuk-link govuk-link--no-visited-state">St Kitts and Nevis</a></li>
    <li><a href="./partners/St Lucia" class="govuk-link govuk-link--no-visited-state">St Lucia</a></li>
    <li><a href="./partners/St Vincent and the Grenadines" class="govuk-link govuk-link--no-visited-state">St Vincent and the Grenadines</a></li>
    <li><a href="./partners/St Helena" class="govuk-link govuk-link--no-visited-state">St Helena</a></li>
    <li><a href="./partners/Sudan" class="govuk-link govuk-link--no-visited-state">Sudan</a></li>
    <li><a href="./partners/Suriname" class="govuk-link govuk-link--no-visited-state">Suriname</a></li>
    <li><a href="./partners/Sweden" class="govuk-link govuk-link--no-visited-state">Sweden</a></li>
    <li><a href="./partners/Switzerland" class="govuk-link govuk-link--no-visited-state">Switzerland</a></li>
    <li><a href="./partners/Syria" class="govuk-link govuk-link--no-visited-state">Syria</a></li>
  </ul>
  <!-- -->
  <hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">
  <!-- -->
  <h2 class="taif-partner-letter govuk-heading-xl govuk-!-margin-bottom-3">T</h2>
  <ul class="govuk-list taif-partner-list">
    <li><a href="./partners/Taiwan" class="govuk-link govuk-link--no-visited-state">Taiwan</a></li>
    <li><a href="./partners/Tajikistan" class="govuk-link govuk-link--no-visited-state">Tajikistan</a></li>
    <li><a href="./partners/Tanzania" class="govuk-link govuk-link--no-visited-state">Tanzania</a></li>
    <li><a href="./partners/Thailand" class="govuk-link govuk-link--no-visited-state">Thailand</a></li>
    <li><a href="./partners/The Bahamas" class="govuk-link govuk-link--no-visited-state">The Bahamas</a></li>
    <li><a href="./partners/The Gambia" class="govuk-link govuk-link--no-visited-state">The Gambia</a></li>
    <li><a href="./partners/Togo" class="govuk-link govuk-link--no-visited-state">Togo</a></li>
    <li><a href="./partners/Tokelau" class="govuk-link govuk-link--no-visited-state">Tokelau</a></li>
    <li><a href="./partners/Tonga" class="govuk-link govuk-link--no-visited-state">Tonga</a></li>
    <li><a href="./partners/Trinidad and Tobago" class="govuk-link govuk-link--no-visited-state">Trinidad and Tobago</a></li>
    <li><a href="./partners/Tunisia" class="govuk-link govuk-link--no-visited-state">Tunisia</a></li>
    <li><a href="./partners/Turkey" class="govuk-link govuk-link--no-visited-state">Turkey</a></li>
    <li><a href="./partners/Turkmenistan" class="govuk-link govuk-link--no-visited-state">Turkmenistan</a></li>
    <li><a href="./partners/Turks and Caicos Islands" class="govuk-link govuk-link--no-visited-state">Turks and Caicos Islands</a></li>
    <li><a href="./partners/Tuvalu" class="govuk-link govuk-link--no-visited-state">Tuvalu</a></li>
  </ul>
  <!-- -->
  <hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">
  <!-- -->
  <h2 class="taif-partner-letter govuk-heading-xl govuk-!-margin-bottom-3">U</h2>
  <ul class="govuk-list taif-partner-list">
    <li><a href="./partners/Uganda" class="govuk-link govuk-link--no-visited-state">Uganda</a></li>
    <li><a href="./partners/Ukraine" class="govuk-link govuk-link--no-visited-state">Ukraine</a></li>
    <li><a href="./partners/United Arab Emirates" class="govuk-link govuk-link--no-visited-state">United Arab Emirates</a></li>
    <li><a href="./partners/United States" class="govuk-link govuk-link--no-visited-state">United States</a></li>
    <li><a href="./partners/Uruguay" class="govuk-link govuk-link--no-visited-state">Uruguay</a></li>
    <li><a href="./partners/United States Outlying Islands" class="govuk-link govuk-link--no-visited-state">United States Outlying Islands</a></li>
    <li><a href="./partners/U.S. Virgin Islands" class="govuk-link govuk-link--no-visited-state">U.S. Virgin Islands</a></li>
    <li><a href="./partners/Uzbekistan" class="govuk-link govuk-link--no-visited-state">Uzbekistan</a></li>
  </ul>
  <!-- -->
  <hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">
  <!-- -->
  <h2 class="taif-partner-letter govuk-heading-xl govuk-!-margin-bottom-3">V</h2>
  <ul class="govuk-list taif-partner-list">
    <li><a href="./partners/Vanuatu" class="govuk-link govuk-link--no-visited-state">Vanuatu</a></li>
    <li><a href="./partners/Vatican City" class="govuk-link govuk-link--no-visited-state">Vatican City</a></li>
    <li><a href="./partners/Venezuela" class="govuk-link govuk-link--no-visited-state">Venezuela</a></li>
    <li><a href="./partners/Vietnam" class="govuk-link govuk-link--no-visited-state">Vietnam</a></li>
  </ul>
  <!-- -->
  <hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">
  <!-- -->
  <h2 class="taif-partner-letter govuk-heading-xl govuk-!-margin-bottom-3">W</h2>
  <ul class="govuk-list taif-partner-list">
    <li><a href="./partners/Wallis and Futuna Islands" class="govuk-link govuk-link--no-visited-state">Wallis and Futuna Islands</a></li>
  </ul>
  <!-- -->
  <hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">
  <!-- -->
  <h2 class="taif-partner-letter govuk-heading-xl govuk-!-margin-bottom-3">Y</h2>
  <ul class="govuk-list taif-partner-list">
    <li><a href="./partners/Yemen" class="govuk-link govuk-link--no-visited-state">Yemen</a></li>
  </ul>
  <!-- -->
  <hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">
  <!-- -->
  <h2 class="taif-partner-letter govuk-heading-xl govuk-!-margin-bottom-3">Z</h2>
  <ul class="govuk-list taif-partner-list">
    <li><a href="./partners/Zambia" class="govuk-link govuk-link--no-visited-state">Zambia</a></li>
    <li><a href="./partners/Zimbabwe" class="govuk-link govuk-link--no-visited-state">Zimbabwe</a></li>
  </ul>
</div>
</div>
<!-- Closes .govuk-width-container and .govuk-main-wrapper -->
</div></div>
