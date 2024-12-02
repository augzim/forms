// link for a coutnryList below: 
// https://gist.github.com/incredimike/1469814 

const countryList = [
	"Afghanistan",
	"Albania",
	"Algeria",
	"American Samoa",
	"Andorra",
	"Angola",
	"Anguilla",
	"Antarctica",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Aruba",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas (the)",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda",
	"Bhutan",
	"Bolivia (Plurinational State of)",
	"Bonaire, Sint Eustatius and Saba",
	"Bosnia and Herzegovina",
	"Botswana",
	"Bouvet Island",
	"Brazil",
	"British Indian Ocean Territory (the)",
	"Brunei Darussalam",
	"Bulgaria",
	"Burkina Faso",
	"Burundi",
	"Cabo Verde",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Cayman Islands (the)",
	"Central African Republic (the)",
	"Chad",
	"Chile",
	"China",
	"Christmas Island",
	"Cocos (Keeling) Islands (the)",
	"Colombia",
	"Comoros (the)",
	"Congo (the Democratic Republic of the)",
	"Congo (the)",
	"Cook Islands (the)",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"Curaçao",
	"Cyprus",
	"Czechia",
	"Côte d'Ivoire",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic (the)",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Eswatini",
	"Ethiopia",
	"Falkland Islands (the) [Malvinas]",
	"Faroe Islands (the)",
	"Fiji",
	"Finland",
	"France",
	"French Guiana",
	"French Polynesia",
	"French Southern Territories (the)",
	"Gabon",
	"Gambia (the)",
	"Georgia",
	"Germany",
	"Ghana",
	"Gibraltar",
	"Greece",
	"Greenland",
	"Grenada",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guinea",
	"Guinea-Bissau",
	"Guyana",
	"Haiti",
	"Heard Island and McDonald Islands",
	"Holy See (the)",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran (Islamic Republic of)",
	"Iraq",
	"Ireland",
	"Isle of Man",
	"Israel",
	"Italy",
	"Jamaica",
	"Japan",
	"Jersey",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"Korea (the Democratic People's Republic of)",
	"Korea (the Republic of)",
	"Kuwait",
	"Kyrgyzstan",
	"Lao People's Democratic Republic (the)",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macao",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands (the)",
	"Martinique",
	"Mauritania",
	"Mauritius",
	"Mayotte",
	"Mexico",
	"Micronesia (Federated States of)",
	"Moldova (the Republic of)",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Montserrat",
	"Morocco",
	"Mozambique",
	"Myanmar",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands (the)",
	"New Caledonia",
	"New Zealand",
	"Nicaragua",
	"Niger (the)",
	"Nigeria",
	"Niue",
	"Norfolk Island",
	"Northern Mariana Islands (the)",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Palestine, State of",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines (the)",
	"Pitcairn",
	"Poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"Republic of North Macedonia",
	"Romania",
	"Russian Federation (the)",
	"Rwanda",
	"Réunion",
	"Saint Barthélemy",
	"Saint Helena, Ascension and Tristan da Cunha",
	"Saint Kitts and Nevis",
	"Saint Lucia",
	"Saint Martin (French part)",
	"Saint Pierre and Miquelon",
	"Saint Vincent and the Grenadines",
	"Samoa",
	"San Marino",
	"Sao Tome and Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Sint Maarten (Dutch part)",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"South Georgia and the South Sandwich Islands",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan (the)",
	"Suriname",
	"Svalbard and Jan Mayen",
	"Sweden",
	"Switzerland",
	"Syrian Arab Republic",
	"Taiwan",
	"Tajikistan",
	"Tanzania, United Republic of",
	"Thailand",
	"Timor-Leste",
	"Togo",
	"Tokelau",
	"Tonga",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Turks and Caicos Islands (the)",
	"Tuvalu",
	"Uganda",
	"Ukraine",
	"United Arab Emirates (the)",
	"United Kingdom of Great Britain and Northern Ireland (the)",
	"United States Minor Outlying Islands (the)",
	"United States of America (the)",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Venezuela (Bolivarian Republic of)",
	"Viet Nam",
	"Virgin Islands (British)",
	"Virgin Islands (U.S.)",
	"Wallis and Futuna",
	"Western Sahara",
	"Yemen",
	"Zambia",
	"Zimbabwe",
	"Åland Islands"
];


function manipulateHiddenInput(checkboxElement, hiddenElementId, hiddenElementName, divElementId) {
	let hiddenElement = document.getElementById(hiddenElementId);
	if (checkboxElement.checked) {
		hiddenElement.remove();
	} else if (!document.getElementById(hiddenElementId)) {
		hiddenElement = document.createElement('input');
		hiddenElement.id = hiddenElementId;
		hiddenElement.name = hiddenElementName;
		hiddenElement.type = 'hidden';
		hiddenElement.value = 'no';

		const divElement = document.getElementById(divElementId);
		const firstChild = divElement.firstChild;
		divElement.insertBefore(hiddenElement, firstChild);
	}
}


function checkRetypedPassword() {
    const password = document.getElementById('password');
    const retypedPassword = document.getElementById('retype');
    const errorElement = document.getElementById('error-password');

    if (password.value === retypedPassword.value) {
        errorElement.style.display = 'none';
        return true;
    } else {
        errorElement.style.display = 'block';
        errorElement.textContent = 'Passwords do not match! Please try again.'
        retypedPassword.focus();
        return false;
    }
}


function checkCountry() {
    const country = document.getElementById('country');
    const errorElement = document.getElementById('error-password');

    if (countryList.includes(country.value)) {
        errorElement.style.display = 'none';
        return true;
    } else {
        errorElement.style.display = 'block';
        errorElement.textContent = 'Country must be chosen from the list! Please try again.'
        country.focus();
        return false;
    }
}


function createTable(event) {
    // only one table is allowed on the page
    let table = document.getElementById('table');
    if (table !== null) {
        table.remove();
    } 
    table = document.createElement('table');
    table.id = 'table';
    document.body.appendChild(table);
    table.innerHTML = `
        <thead>
            <tr>
                <th>Name</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody></tbody>
    `;
    const formData = new FormData(event.target); 
    const tableBody = table.getElementsByTagName('tbody')[0]; 

    let rowsHTML = '';
    for (const [name, value] of formData.entries()) {
        rowsHTML += `<tr><td>${name}</td><td>${value}</td></tr>`;
    }
    tableBody.innerHTML = rowsHTML;
}


document.addEventListener('DOMContentLoaded', () => {
    // add country options to a datalist
    const datalist = document.getElementById('countries');
    countryList.forEach(country => {
        const optionElement = document.createElement('option');
        optionElement.value = country;
        datalist.appendChild(optionElement);
    });

	// make checkbox name-value pair be in the table regardless of the user's choice (checked or not)
	const checkboxes = [
		['terms', 'terms-hidden', 'terms', 'div-terms'], 
		['newsletter', 'newsletter-hidden', 'newsletter', 'div-newsletter']
	];
	for (const [checkboxId, hiddenElementId, hiddenElementName, divElementId] of checkboxes) {
		document.getElementById(checkboxId).addEventListener('change', event =>
			manipulateHiddenInput(event.target, hiddenElementId, hiddenElementName, divElementId));
	}

    // add submit-event listener for the form
    const form = document.getElementById('registration');
    form.addEventListener('submit', event => {
        event.preventDefault();
        if (checkRetypedPassword() && checkCountry()) {
            createTable(event);
        }
    });
});
