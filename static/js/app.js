
   
url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

    // 1. Test Subject ID
    function init(){
        let dropdownmenu = d3.select('#selDataset');
        let id = dropdownmenu.property('value');

        d3.json(url).then(function(totaldata){
        let data = totaldata;
        console.log(data);
        let name = data.names;

        // initialise first id value
            name.forEach(menu => 
            {dropdownmenu.append('option').text(menu)})

        barchart(data.names[0]),
        gaugechart(name[0]),
        demographic(name[0]),
        bubblechart(name[0])
    })
};

        // CHANGE subject ID
    function optionChanged(id){
            demographic(id);
            barchart(id);
            bubblechart(id);
            gaugechart(id);
        };
// 
init();
// -----------------------------------------------------


//     // 2. BAR CHARTS

    function barchart(id){

        d3.json(url).then(function(totaldata){

            let data = totaldata;
            let rows = data.samples;
            console.log(rows);

        // EXTRACT TOP 10 IDS
        function testvalue(rows, id){
            
            for (let i=0; i< rows.length; i++){
                row = rows[i];
                
                if (row.id.toString() === id) {
                values = row['sample_values'];
                
                sortvalues = values.sort((a,b) => b-a);
                slicevalues = sortvalues.slice(0,10);
                reversevalue = slicevalues.reverse();
                return reversevalue;
                }
            }
        };

        // Extract Top 10 names with OTU attached
        function testname(rows, id){
            
            for (let j=0; j< rows.length; j++){
                rowj = rows[j];
                
                if (rowj.id.toString() === id) {
                idname = rowj['otu_ids'];
                console.log(idname);

                let otulist = [];
                for (let n=0; n< idname.length; n++){
                    otuname = `OTU ${idname[n]}`;
                    otulist.push(otuname);}
            
                slicename = otulist.slice(0,10);
                reversename = slicename.reverse();
                return reversename;
                }
            }
        };
        
        // Extract Top 10 text labels
        function testtext(rows, id){
            
            for (let m=0; m< rows.length; m++){
                rowm = rows[m];
                
                if (rowm.id.toString() === id) {
                idlabel = rowm['otu_labels'];
                
                slicelabel = idlabel.slice(0,10);
                reverselabel = slicelabel.reverse();
                return reverselabel;
                }
            }
        };
        
        let datax = testvalue(rows,id);
        console.log(datax);

        let datay = testname(rows,id);
        console.log(datay);

        let datatext = testtext(rows,id);
        console.log(datatext);

        // Plot bar chart
        function PlotMetric(datax, datay, datatext, id){
        let trace1 = {
            x: datax,
            y:  datay,
            text: datatext,
            type: "bar",
            orientation: "h"};

            let layout = {
                margin: {
                l: 100,
                r: 100,
                t: 30,
                b: 20}
            };
        let tracedata = [trace1];
        Plotly.newPlot("bar", tracedata, layout);}
        
        PlotMetric(datax, datay, datatext, id);
    })
        };

    // ----------------------------------------------------------------------------------

    // 3. Data for Bubble charts
    function bubblechart(id){

        d3.json(url).then(function(totaldata){
            let data = totaldata;
            let rows = data.samples;

        function allvalues(rows, id){
            
            for (let i=0; i< rows.length; i++){
                row = rows[i];
                
                if (row.id.toString() === id) {
                all_values = row['sample_values'];
                
                return all_values;
                }
            }
        };
       
        function allnames(rows, id){
            
            for (let j=0; j< rows.length; j++){
                rowj = rows[j];
                
                if (rowj.id.toString() === id) {
                all_names = rowj['otu_ids'];

                return all_names;
                }
            }
        };

        function alltext(rows, id){
            
            for (let m=0; m< rows.length; m++){
                rowm = rows[m];
                
                if (rowm.id.toString() === id) {
                all_labels = rowm['otu_labels'];
                
                return all_labels;
                }
            }
        };

        let bubblevalues = allvalues(rows, id);
        console.log(bubblevalues);

        let bubblenames = allnames(rows, id);
        console.log(bubblenames);

        let bubblelabels = alltext(rows, id);

        // Plot Bubble Chart
        function PlotBubble(bubblenames, bubblevalues, bubblelabels, id){

        var trace2 = {
            x: bubblenames,
            y: bubblevalues,
            text: bubblelabels,
            mode: 'markers',
            marker: {
            size: bubblevalues,
            color:bubblenames},
        };
        
        var tracedata2 = [trace2];
        
        var layout = {
            title: 'Bubble Chart of all samples',
            showlegend: false,
            height: 500,
            width: 1300};
        
        Plotly.newPlot('bubble', tracedata2, layout);}

        PlotBubble(bubblenames, bubblevalues, bubblelabels, id);
});
};

//     // -------------------------------------------------------------------------------


    // 4. Metadata
    
    function demographic(id){
        d3.json(url).then(function(data){
            let metadata = data.metadata;

            for (i=0; i<metadata.length; i++){
            demo = metadata[i];

            if(demo.id.toString() === id){
            
            // Only 1 table is needed
            infotab = d3.select("#sample-metadata");
            infotab.html('');

            let table = infotab.append("table");
            let tbody = table.append('tbody');
            
            // Need multiple rows
            Object.entries(demo).forEach(([key, value]) => {
                let row = tbody.append("tr");
                row.append("td").text(`${key}: `);
                row.append("td").text(value);})
        }   
    }
})
   };
    
// --------------------------------------------------------------------

    // 5. Gauge Chart

    function gaugechart(id){
        d3.json(url).then(function(data){
            let metadata = data.metadata;

        function allfrequency(metadata, id){
            
            for (let g=0; g< metadata.length; g++){
                meta = metadata[g];
                
                if (meta.id.toString() === id) {
                all_freq = meta['wfreq'];

                return all_freq;}
            }
        };

        let freq = allfrequency(metadata, id);

        // ------------------------------------------------------------

        function Plotgauge(freq,id){
        var level = 10;

        function gaugePointer(value){
        
        var degrees = 180 - value,
        radius = .4;
        var radians = degrees * Math.PI / 180;
        var x = radius * Math.cos(radians);
        var y = radius * Math.sin(radians);
        
        // Path: may have to change to create a better triangle
        var mainPath = 'M -.0 -0.035 L .0 0.035 L ',
            pathX = String(x),
            space = ' ',
            pathY = String(y),
            pathEnd = ' Z';
        var path = mainPath.concat(pathX,space,pathY,pathEnd);
            
            return path;}
        
        var datagauge = [{ type: 'scatter',
        x: [0], y:[0],
            marker: {size: 18, color:'850000'},
            showlegend: false,
            name: 'frequency',
            text: level,
            hoverinfo: 'name'},
        { values: [90/9, 90/9, 90/9, 90/9, 90/9, 90/9, 90/9, 90/9, 90/9, 90],
        rotation: 90,
        text: ['0-1', '1-2', '2-3', '3-4','4-5', '5-6','6-7','7-8','8-9', ''],
        direction: 'clockwise',      
        textinfo: 'text',
        textposition:'inside',	  
        marker: {colors:['rgba(14, 127, 0, .5)', 'rgba(110, 154, 22, .5)','rgba(110, 154, 22, .5)',
                                'rgba(170, 202, 42, .5)', 'rgba(202, 209, 95, .5)', 'rgba(202, 209, 95, .5)',
                                'rgba(210, 206, 145, .5)', 'rgba(232, 226, 202, .5)','rgba(232, 226, 202, .5)',
                                'rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0)']},
        hole: .5,
        type: 'pie',
        showlegend: false
        }];
        
        var layout = {
        shapes:[{
            type: 'path',
            path: gaugePointer(180*(freq/9)),
            fillcolor: '850000',
            line: {color: '850000'}
            }],
        //title: '<b>Gauge</b> <br> Speed 0-100',
            autosize:true,
        //height: 1000,
        //width: 1000,
        xaxis: {zeroline:false, showticklabels:false,
                    showgrid: false, range: [-1, 1]},
        yaxis: {zeroline:false, showticklabels:false,
                    showgrid: false, range: [-1, 1]},
        
        title: {
                text: "Belly Button Washing Frequency<br>Scrubs per week",
                font: {size:20, font: 'bold'},
                verticalAlign: 'center'}
        };

        Plotly.newPlot('gauge', datagauge, layout);};
        
        Plotgauge(freq,id);
    })
    };




