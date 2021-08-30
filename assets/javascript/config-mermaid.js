mermaid.initialize({
    'logLevel': 5, // [debug(1)|info(2)|warn(3)|error(4)|fatal(5)]
    'securityLevel': 'strict', //[strict|loose]
    'startOnLoad': true,
    'arrowMarkerAbsolute': false,
    'darkMode': false,
    'theme': 'base', // [default|forest|dark|neutral|null|base]
    "themeCSS": `
        .default { },
        .node rect {
            stroke-width: 0.5px;
        },
    `,
    'themeVariables': {
        'fontFamily': 'Roboto',
        'fontSize': '16px',
        'lineColor': '#000', // connecting line
        'textColor': '#000', // arrow head
        // 'mainBkg': '#fff',
        'primaryColor': '#fff',
        'primaryBorderColor': '#000',
        'primaryTextColor': '#000',
        'secondaryColor': '#fff',
        'secondaryBorderColor': '#fff',
        'secondaryTextColor': '#000',
        'tertiaryColor': '#0f0',
        'tertiaryBorderColor': '#0f0',
        'tertiaryTextColor': '#0f0',
        'noteBkgColor': '#000',
        'noteTextColor': '#000',
        'noteBorderColor': '#000',
        'errorBkgColor': '#f00',
        'errorTextColor': '#f00',
    },
    'flowchart': {
        'diagramPadding': 8,
        'htmlLabels': true,
        'nodeSpacing': 25,
        'rankSpacing': 40,
        'curve': 'basis', // [basis|linear|cardinal]
        'useMaxWidth': true,
        'defaultRenderer': 'dagre-d3', // [dagre-d3|dagre-wrapper]
    },
    'er': {
        'diagramPadding': 20,
        'layoutDirection': 'TB',
        'minEntityWidth': 100,
        'minEntityHeight': 75,
        'entityPadding': 15,
        'stroke': 'gray',
        'fill': 'honeydew',
        'fontSize': 12,
        'useMaxWidth': true,
    },
    'sequence': {
        'diagramMarginX': 50,
        'diagramMarginY': 10,
        'actorMargin': 50,
        'width': 150,
        'height': 65,
        'boxMargin': 10,
        'boxTextMargin': 5,
        'noteMargin': 10,
        'messageMargin': 35,
        'messageAlign': 'center',
        'mirrorActors': true,
        'bottomMarginAdj': 1,
        'useMaxWidth': true,
        'rightAngles': false,
        'showSequenceNumbers': false,
    },
    'gantt': {
        'titleTopMargin': 25,
        'barHeight': 20,
        'barGap': 4,
        'topPadding': 50,
        'leftPadding': 75,
        'gridLineStartPadding': 35,
        'fontSize': 11,
        'fontFamily': '"Open-Sans", "sans-serif"',
        'numberSectionStyles': 4,
        'axisFormat': '%Y-%m-%d',
        'topAxis': false,
    }
});
