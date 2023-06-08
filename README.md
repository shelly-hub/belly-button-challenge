# belly-button-challenge

## Project Aim

To utilise Javascript with combination of HTML to make an interactive dashboard to explore Belly Button Biodiversity datasets.

## Project desciption
This dataset involves in using data variable called OTU stands for operational taxonomic units which are a small handful of microbial species.
This challenge involves making 3 separate graphs, 1 table and 1 dropdown OTU ids interface.

The result of this challenge can be seen in the Chrome webpage after this repository is been deployed. 

### Advantages of Javascript:
 - Within good network covergae, javascript code can run very fast within the Browser
 - Java enhances user interfaces as it can provides many interactive experience such as drop down menu as in this challenge.
 
### Disadvantages of Javascript:
- Can be quite complex, not very easy to understand
- Can only be used in major popular Browsers such as Google Chrome

## Project Method
Dataset given is in Json format.Javascript D3 library is to be used to open the JSON link.

JSON link:

url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

D3 function:

d3.json(url).then(function(){});

(id):
For all integer used in javascript, needs to change object (id) to string (.tostring()) when doing a comparison value

### Horizontal Bar Chart
    - The code to create bar chart is created under a function called function barchart(id).
    - From the datasets, extract "otu_ids" as y- axis, "sample_values" as x-axis, and "otu_labels" as labels in hovertext under samples
    - Extracted datasets are sorted in descending order of sample_values (from Top values to lowest)
    - Only Top 10 sample values are taken
    - Results need to be in reverse order for horizontal bar chart 
    - Each otu_ids in integer value needs to be attached with "OTU" using Javascript for loop method
    - Plotly.newPlot is used to plot horizontal bar chart under orientation: "h"

### Bubble Chart
    - The code to create bubble chart is created under a function called function bubblechart(id).
    - From the datasets, extract "otu_ids" as x - axis, "sample_values" as y-axis, and "otu_labels" as text in hovertext
    - All extracted datasets are sorted in descending order of sample_values (from Top values to lowest)
    - The size of bubbles is correspondent to sample_values under mode: "marker" size
    - The color of bubbles is correspondent to otu_ids

### Gauge Chart
    - The code to create gauge chart is created under a function called function gaugechart(id).
    - From the datasets, extract the "wfreq" as washed frequency values under metadata
    - To create gauge charts, gauge values and pointer needs to be split into 9 sections with 9 labels text inside the gauge
    - Gauge pointer needs to start from clockwise direction

### Demographic
    - The code to create metadata is created under a function called function demographic(id).
    - From the datasets, extract the whole demographic information under metadata
    - To show demographic info into the dashboard, needs to insert data into HTML using Javacript
    - Identify the HTML element that responsible for demographic info square box which is id = "sample-metadata"
    - To add in multiple rows of data, need to insert HTML elements: "table", "tbody", "tr" and "td"
    - Display each keys and values pair by using Object.entries().forEach() function
    - To avoid above HTML codes pile up every time id is changing, needs to add .html(" ") in the code script.

### Initial page setup and dropdown menu
     - The code to create initial setup page and drop down menu is created under a function called function init()
     - To create drop down menu, needs to identify the HTML element that responsible for Test Subject ID no square box which is id = "selDataset"
     - A list of subject id is available directly in dataset under names
     - Utilising .forEach function to loop through above list for each Ids and appears in drop down menu by insert HTML elements: "option"
     - Insert each above functions with first id value to create initial page outlook
     - After closing this function, call init(); to run the code

### To activate dropdown menu
    - The code to execute the drop down menu is created under a function called function optionChanged(id)
    - This function name is directly under HTML element "on change = optionChanged(this.value)" to execute drop down menu

### Deployment
 - Go to Chrome page, insert: shelly-hub.github.io/belly-button-challenge

## References
Bubble Charts in JavaScript.(). Plotly| Graphing Libraries. Retrieved on: 01/06/2023, from <https://plotly.com/javascript/bubble-charts/>

Plotly Experiemnts - ScatterPlots. (14/03/2019). Towards Data Science. Retrieved on: 01/06/2023, from <https://towardsdatascience.com/plotly-experiments-scatterplots-e08f16fb1a17>

Animations on gauge needle  - ascotto (1/04/2017). Plotly. Retrieved on: 02/06/2023, from<https://community.plotly.com/t/animations-on-gauge-needle/5804>

Setting the Title, Legend Entries, and Axis Titles in JavaScript.(2023). plotly. Retrieved on: 02/06/2023, from<https://plotly.com/javascript/figure-labels/>

Array.prototype.find().(2023).mdn web docs. Retrieved on: 02/06/2023, from<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find>

How to iterate (keys, values) in JavaScript? [duplicate] - WELCOME TO 2020 *Drools in ES6*(2/4/2020). Stack Overflow. Retrieved on 06/06/2023, from<https://stackoverflow.com/questions/34913675/how-to-iterate-keys-values-in-javascript>

'data.forEach is not a function' when loading csv in d3.js(27/08/2020).Stack Overflow. Retrieved on: 07/06/2023, from <https://stackoverflow.com/questions/63624508/data-foreach-is-not-a-function-when-loading-csv-in-d3-js>

Javascript onchange with select element(05/01/2018). Stack Overflow. Retrieved on: 07/06/2023, from <https://stackoverflow.com/questions/48107324/javascript-onchange-with-select-element>

How to select a value in a select dropdown with JavaScript?.(15/11/2011). Stack Overflow. Retrieved on: 08/06/2023, from<https://stackoverflow.com/questions/8140862/how-to-select-a-value-in-a-select-dropdown-with-javascript>

JavaScript data types and data structures  - Beware of "stringly-typing" your code!.(2023). mdn web docs. Retrieved on: 09/06/2023, from<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#type_coercion>

JavaScript String toString(2023).W3 Schools.Retrieved on: 09/06/2023, from<https://www.w3schools.com/jsref/jsref_tostring_string.asp>
