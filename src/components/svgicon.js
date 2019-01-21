import React from 'react'

const getViewBox = name => {
  switch (name) {
    case "machine":
      return "0 0 459.82 459.82";
    case "design":
      return "0 0 470.008 470.008";
    case "cover":
      return "0 0 496 496";
    case "portfolio":
      return "0 0 496 496";
    default:
      return "0 0 32 32";
  }
};

const getPath = (name, props) => {
  switch (name) {
    case "machine":
      return (
        <path
          {...props}
          d="M458.648,213.641l-53.128-53.128c1.471-4.246,4.284-13.429,5.426-24.395c1.9-18.255-1.774-33.442-10.608-44.271
          c0.864-1.96,1.329-4.05,1.397-6.155l12.564-3.165l1.051,6.227c0.33,1.953,2.023,3.335,3.939,3.335c0.221,0,0.445-0.019,0.67-0.057
          l28.453-4.803c2.179-0.368,3.646-2.432,3.279-4.61l-3.325-19.699c-0.177-1.046-0.762-1.979-1.626-2.594
          c-0.865-0.614-1.939-0.859-2.984-0.685l-28.454,4.803c-1.046,0.177-1.979,0.762-2.594,1.626s-0.861,1.938-0.685,2.984l0.938,5.558
          l-12.899,3.249c-1.347-2.756-3.458-5.229-6.49-7.004c-5.664-3.316-12.913-2.987-18.188,0.918c-4.711,3.488-6.936,8.79-6.735,14.015
          l-9.028,2.275l1.955,7.758l9.301-2.344c0.703,1.21,1.554,2.356,2.589,3.392c1.378,1.378,2.946,2.443,4.613,3.234
          c2.981,6.526-0.104,19.573-3.721,29.245l-53.308-53.308c-0.75-0.75-1.768-1.172-2.829-1.172s-2.078,0.422-2.829,1.172
          L194.227,197.21l-15.745-15.745c-0.75-0.75-1.768-1.172-2.829-1.172s-2.078,0.422-2.829,1.172l-4.496,4.496l-4.283-4.284
          l13.39-13.39c1.562-1.562,1.562-4.094,0-5.656l-12.818-12.818c-1.562-1.562-4.095-1.562-5.657,0l-32.438,32.438
          c-1.562,1.562-1.562,4.095,0,5.656l12.818,12.818c0.781,0.781,1.805,1.172,2.829,1.172s2.047-0.391,2.829-1.172l13.39-13.39
          l4.283,4.284l-4.496,4.496c-1.562,1.562-1.562,4.094,0,5.656l7.371,7.371l-24.255,24.256l-2.924-2.924
          c-0.807-0.807-1.921-1.242-3.058-1.165l-16.651,0.956c-0.98,0.056-1.905,0.471-2.599,1.165l-67.491,67.49
          c-0.694,0.693-1.108,1.619-1.165,2.599l-0.955,16.651c-0.065,1.139,0.359,2.251,1.165,3.058l3.45,3.45l-19.049,19.05
          c-1.109,1.109-1.559,2.766-1.017,4.238c1.356,3.677,0.447,7.841-2.309,10.599c-2.689,2.688-6.617,3.621-10.247,2.434
          c-1.836-0.602-3.836,0.196-4.758,1.893l-9.231,16.997c-0.846,1.557-0.566,3.485,0.687,4.737l2.406,2.406l-6.374,6.374
          c-1.562,1.562-1.562,4.095,0,5.657h0c1.562,1.562,4.094,1.562,5.656,0l6.374-6.374l3.45,3.45c0.781,0.781,1.805,1.172,2.829,1.172
          s2.047-0.391,2.829-1.172l50.107-50.107l3.415,3.415c0.785,0.785,1.856,1.233,2.966,1.205c0.042-0.001,0.084-0.003,0.126-0.006
          l16.651-0.955c0.98-0.056,1.905-0.471,2.599-1.165l67.491-67.491c0.694-0.693,1.108-1.619,1.165-2.599l0.956-16.651
          c0.065-1.139-0.359-2.251-1.165-3.058l-2.924-2.924l24.255-24.256l7.371,7.371c0.75,0.75,1.768,1.172,2.829,1.172
          s2.078-0.422,2.829-1.172l14.649-14.649c1.562-1.562,1.562-4.094,0-5.656l-15.745-15.745l1.668-1.668l134.769,134.77
          c0.75,0.75,1.768,1.172,2.829,1.172s2.078-0.422,2.829-1.172l116.67-116.671C460.21,217.736,460.21,215.203,458.648,213.641z
           M441.144,68.197l1.993,11.811l-20.565,3.471l-1.994-11.811L441.144,68.197z M142.17,192.24l-7.162-7.161l26.781-26.78l7.162,7.161
          L142.17,192.24z M19.48,387.652l-6.572-6.571l6.367-11.725c5.498,0.717,11.05-1.117,15.069-5.136
          c4.31-4.311,6.108-10.527,4.902-16.412l17.471-17.471l10.039,10.038L19.48,387.652z M158.929,276.455l-65.335,65.336l-13.34,0.766
          l-25.716-25.717l0.765-13.34l65.336-65.335l13.339-0.766l25.716,25.716L158.929,276.455z M158.039,250.145l-11.09-11.09
          l24.255-24.256l11.09,11.09L158.039,250.145z M198.151,230.432l-31.489-31.489l8.993-8.992l31.489,31.489L198.151,230.432z
           M379.124,79.085c1.672-1.672,3.869-2.508,6.065-2.508s4.394,0.836,6.065,2.508c3.345,3.345,3.345,8.787,0,12.132
          c-3.344,3.344-8.787,3.344-12.131,0C375.78,87.872,375.78,82.429,379.124,79.085z M385.015,122.183
          c2.196-8.264,2.797-15.136,1.819-20.546c2.994-0.296,5.914-1.415,8.417-3.332c13.03,17.688,7.368,44.149,3.895,55.834
          l-18.637-18.637C381.672,132.664,383.532,127.767,385.015,122.183z M406.737,215.948l-68.112,68.112l-37.768-37.768l68.112-68.112
          L406.737,215.948z M322.4,279.149l-4.282,4.282L301.487,266.8l4.282-4.282L322.4,279.149z M328.056,284.805l7.74,7.74
          c0.75,0.75,1.768,1.172,2.829,1.172s2.078-0.422,2.829-1.172l73.769-73.77c1.562-1.562,1.562-4.095,0-5.656l-7.74-7.74l4.282-4.282
          l12.757,12.757l-87.991,87.99l-12.757-12.757L328.056,284.805z M401.826,199.723l-16.631-16.631l4.283-4.282l16.631,16.631
          L401.826,199.723z M379.538,177.435l-7.74-7.74c-0.75-0.75-1.768-1.172-2.829-1.172s-2.078,0.422-2.829,1.172l-73.769,73.77
          c-1.562,1.562-1.562,4.095,0,5.656l7.74,7.74l-4.282,4.282l-29.083-29.083l4.282-4.282l7.74,7.74c0.75,0.75,1.768,1.172,2.829,1.172
          s2.078-0.422,2.829-1.172l73.77-73.77c0.75-0.75,1.171-1.768,1.171-2.828s-0.421-2.078-1.171-2.828l-7.74-7.74l4.282-4.282
          l29.083,29.083L379.538,177.435z M349.71,158.92l-68.113,68.112l-37.768-37.768l68.112-68.111L349.71,158.92z M265.372,222.122
          l-4.282,4.282l-16.631-16.631l4.282-4.282L265.372,222.122z M344.798,142.695l-16.631-16.63l4.283-4.283l16.631,16.631
          L344.798,142.695z M322.511,120.408l-7.74-7.74c-1.563-1.563-4.095-1.562-5.657,0l-73.769,73.769c-1.562,1.562-1.562,4.095,0,5.656
          l7.74,7.74l-4.282,4.282l-20.084-20.084l87.991-87.991l20.084,20.084L322.511,120.408z M339.149,327.483l-131.941-131.94
          l5.854-5.854l120.64,120.641c0.75,0.75,1.768,1.172,2.829,1.172s2.078-0.422,2.829-1.172l93.647-93.647
          c1.562-1.562,1.562-4.095,0-5.656L312.366,90.385l5.856-5.856l131.941,131.94L339.149,327.483z"
        />
      );
    case "design":
      return (
          <g>
            <path
                {...props}
                d="m379.484,158.597c2.929-2.929 2.929-7.678 0-10.606l-.932-.932 58.658-70.729c2.472-2.98 2.269-7.353-0.47-10.091l-.171-.171 13.522-13.522c9.394-9.394 12.238-23.42 7.246-35.733-0.762-1.879-2.252-3.37-4.132-4.132-12.313-4.994-26.34-2.15-35.733,7.245l-13.522,13.522-.171-.171c-2.738-2.739-7.111-2.942-10.091-0.47l-70.728,58.658-.932-.932c-1.406-1.407-3.314-2.197-5.303-2.197s-3.896,0.79-5.303,2.197l-81.717,81.717-57.456,57.456-138.695,138.692c-4.292,4.291-6.655,10.013-6.655,16.11 0,3.761 0.905,7.375 2.601,10.602l-17.038,17.038c-1.407,1.406-2.197,3.314-2.197,5.303s0.79,3.897 2.197,5.303l34.799,34.799c1.464,1.464 3.384,2.197 5.303,2.197s3.839-0.732 5.303-2.197l17.038-17.038c3.227,1.696 6.842,2.601 10.602,2.601 6.098,0 11.82-2.364 16.111-6.655l48.894-48.894c0.016-0.016 89.804-89.803 89.804-89.803l57.451-57.45 81.717-81.717zm-265.208,182.112c-2.929-2.929-7.678-2.929-10.606,0-2.929,2.929-2.929,7.678 0,10.606l30.941,30.941-43.599,43.599c-1.458,1.458-3.413,2.262-5.504,2.262-2.091,0-4.045-0.803-5.503-2.261l-.517-.517c-0.01-0.01-35.326-35.326-35.326-35.326-1.458-1.458-2.261-3.413-2.261-5.504s0.803-4.046 2.261-5.504l48.903-48.903 223.66-223.66 .5,.5c0.017,0.017 46.351,46.352 46.351,46.352l-218.359,218.356-30.941-30.941zm-74.897,65.735l24.193,24.193-11.008,11.008-24.193-24.192 11.008-11.009zm405.015-380.823c1.198,5.852-0.58,11.987-4.911,16.318l-13.522,13.521-11.406-11.406 13.522-13.522c4.331-4.331 10.465-6.111 16.317-4.911zm-46.392,23.093l23.299,23.299-53.402,64.392-34.288-34.289 64.391-53.402z"
            />
            <path
                {...props}
                d="m467.811,422.405l-17.038-17.038c1.696-3.227 2.601-6.842 2.601-10.602 0-6.098-2.363-11.819-6.655-16.11l-127.737-127.737c-2.929-2.929-7.678-2.929-10.606,0-2.929,2.931-2.928,7.678 0,10.606l73.531,73.531-30.942,30.941c-2.928,2.928-2.929,7.675-0.003,10.604 1.467,1.468 3.386,2.2 5.306,2.2 1.919,0 3.839-0.732 5.303-2.197l30.942-30.941 43.599,43.599c3.035,3.035 3.035,7.973 0,11.008l-.517,.517c-0.01,0.01-35.326,35.325-35.326,35.325-3.034,3.035-7.973,3.036-11.008,0l-127.737-127.736c-2.927-2.927-7.673-2.928-10.602-0.004-2.933,2.932-2.933,7.682-0.004,10.61l127.737,127.737c4.442,4.441 10.276,6.662 16.11,6.662 3.648,0 7.297-0.869 10.605-2.606l17.036,17.036c1.406,1.407 3.314,2.197 5.303,2.197s3.897-0.79 5.303-2.197l34.799-34.799c2.929-2.928 2.929-7.677 0-10.606zm-51.11,18.488l24.193-24.193 11.008,11.008-24.192,24.193-11.009-11.008z"
            />
            <path 
                {...props}
                d="m161.64,208.491l-15.618-15.618 46.851-46.851 15.618,15.618c2.928,2.928 7.677,2.929 10.606,0.001 2.93-2.93 2.93-7.679 0.001-10.607l-20.917-20.918c-0.009-0.008-123.454-123.453-123.454-123.453-8.882-8.884-23.337-8.883-32.221,3.55271e-15l-35.844,35.843c-8.883,8.883-8.883,23.337 8.88178e-16,32.221l8.23,8.23c-11.196,12.372-9.401,33.027 4.319,46.746l76.523,76.52c1.464,1.465 3.384,2.197 5.303,2.197s3.839-0.732 5.303-2.197c2.929-2.929 2.929-7.678 0-10.606l-76.523-76.52c-7.684-7.683-9.461-18.992-4.281-25.495l104.571,104.571c0.01,0.01 20.926,20.926 20.926,20.926 1.464,1.464 3.384,2.197 5.303,2.197 1.919,0 3.839-0.732 5.303-2.197 2.93-2.93 2.93-7.679 0.001-10.608zm-144.371-155.379l35.843-35.843c3.035-3.035 7.974-3.035 11.008,0l118.146,118.146-46.851,46.851-118.146-118.146c-3.035-3.035-3.035-7.973-7.10543e-15-11.008z"
            />
          </g>
      );
    case "cover":
      return (
        <g>
            <path
                {...props}
                d="M427.76,121.568l-35.288-25.664C382.16,88.408,376,76.312,376,63.552V0h-16v63.552c0,17.856,8.624,34.792,23.056,45.288     l35.288,25.664c18.568,13.512,29.656,35.28,29.656,58.24V480H333.2l-3.408-7.664C291.448,386.048,272,294.424,272,200h-16     c0,13.344,0.416,26.624,1.176,39.856c-5.52-0.136-11.04-0.384-16.488-0.856l-1.376,15.936c6.264,0.544,12.608,0.808,18.952,0.936     c0.864,10.752,1.984,21.464,3.352,32.128h-22.6c-50.216,0-99.352-13.912-142.12-40.224l-26.88-16.536     c3.32-4.48,6.872-8.816,10.888-12.832l16-16l2.416,1.688c36.6,25.616,79.32,42.536,123.528,48.936l2.288-15.832     c-41.744-6.048-82.08-22.032-116.648-46.216l-0.096-0.072l28.056-28.056c14.744-14.744,26.024-32.992,32.616-52.776     c4.6-13.784,6.936-28.152,6.936-42.688V0h-16v67.392c0,12.824-2.056,25.48-6.112,37.632c-5.816,17.44-15.752,33.52-28.752,46.52     l-55.544,55.544C45.352,231.336,32,263.568,32,297.848c0,15.672,2.832,31.048,8.408,45.696L98.488,496H464V192.744     C464,164.68,450.456,138.072,427.76,121.568z M109.512,480L55.36,337.84C50.48,325.032,48,311.568,48,297.848     c0-18.864,4.632-37.016,13.336-53.176l27.176,16.72C133.8,289.264,185.84,304,239.016,304h24.864     c9.16,60.048,26.28,118.552,51.296,174.832l0.512,1.168H109.512z"
            />
            <path
                {...props}
                d="M299.584,309.76L352,355.632V384h-24v17.808L349.944,448h20.112L392,401.808V384h-24v-28.368l52.416-45.864     c7.36-6.448,11.584-15.752,11.584-25.536c0-15.592-10.568-29.128-26.096-33c-9.952-2.496-20.376-0.384-28.576,5.776L368,264     v-28.688l32-32V152h-19.312L360,172.688L339.312,152H320v51.312l32,32V264l-9.328-6.992c-8.208-6.168-18.624-8.296-28.976-5.672     C298.568,255.112,288,268.64,288,284.232C288,294.016,292.224,303.32,299.584,309.76z M368,187.312l16-16v25.376l-16,16V187.312z      M375.144,400L360,431.88L344.856,400H375.144z M336,196.688v-25.376l16,16v25.376L336,196.688z M317.968,266.752     c1.448-0.36,2.912-0.536,4.368-0.536c3.832,0,7.592,1.232,10.728,3.592L352,284v20h16v-20l18.928-14.192     c4.336-3.248,9.832-4.344,15.504-2.952C410.416,268.848,416,276,416,284.232c0,5.168-2.232,10.088-6.12,13.488L360,341.368     l-49.88-43.648c-3.888-3.4-6.12-8.312-6.12-13.488C304,276,309.584,268.848,317.968,266.752z"    
            />
        </g>
      );
    case "portfolio":
      return (
          <g>
            <path
                {...props}
                d="M432,88h-20.528l-22.72,37.872L365.544,64h-27.088l-23.2,61.872L292.528,88H272v88h160V88z M416,160H288v-48.456     L307.472,144h18.072l24-64h4.912l24,64h18.072L416,111.544V160z"
            />
            <path 
                {...props}
                d="M185.368,155.312c-12.088-2.416-24.408,1.168-33.368,9.496V124l22.4-16.8c6.008-4.504,9.6-11.68,9.6-19.2V48h-19.312     L144,68.688L123.312,48H104v40c0,7.52,3.592,14.696,9.6,19.192l22.4,16.8V164.8c-8.96-8.32-21.288-11.904-33.368-9.496     C84.88,158.864,72,174.584,72,192.68v2.848c0,10.168,3.96,19.744,11.16,26.944l52.84,52.84V296h-24v18.424L137.048,352h13.896     L176,314.424V296h-24v-20.688l52.84-52.84c7.192-7.2,11.16-16.776,11.16-26.944v-2.848     C216,174.584,203.12,158.864,185.368,155.312z M152,83.312l16-16V88c0,2.504-1.192,4.896-3.2,6.4L152,104V83.312z      M123.192,94.392c-2-1.496-3.192-3.888-3.192-6.392V67.312l16,16V104L123.192,94.392z M158.392,312L144,333.576L129.616,312     H158.392z M200,195.528c0,5.904-2.304,11.456-6.472,15.632L144,260.688l-49.52-49.52c-4.176-4.184-6.48-9.728-6.48-15.64v-2.848     c0-10.496,7.472-19.616,17.768-21.68c1.448-0.288,2.904-0.432,4.344-0.432c5.808,0,11.432,2.288,15.624,6.48L136,187.312V216h16     v-28.688l10.264-10.264c5.24-5.232,12.704-7.496,19.968-6.048C192.528,173.064,200,182.176,200,192.68V195.528z"
            />
            <path 
                {...props}
                d="M464,16V0H32v16H0v448h184.808c3.712,18.232,19.88,32,39.192,32h48c19.32,0,35.48-13.768,39.192-32H496V16H464z M48,16     h192v368h16V16h192v400H256v-16h-16v16H48V16z M480,448H296v8c0,13.232-10.768,24-24,24h-48c-13.232,0-24-10.768-24-24v-8H16V32     h16v400h432V32h16V448z"
            />
            <path 
                {...props}
                d="M288,360c0,13.232,10.768,24,24,24h80c13.232,0,24-10.768,24-24v-24.048c10.336-13.8,16-30.712,16-47.952     c0-21.808-8.616-42.176-24.248-57.376c-15.632-15.184-36.232-23.072-58.08-22.592c-43.08,1.224-77.92,37.312-77.672,80.44     c0.104,17.328,5.624,33.688,16,47.496V360z M350.128,224.032c0.632-0.024,1.264-0.032,1.888-0.032     c16.76,0,32.528,6.384,44.576,18.104C409.112,254.256,416,270.56,416,288c0,14.776-4.92,28.664-14.224,40.176L400,330.384V360     c0,4.416-3.592,8-8,8h-16v-32h-16v32h-16v-32h-16v32h-16c-4.408,0-8-3.584-8-8v-29.616l-1.776-2.2     c-9.216-11.408-14.136-25.168-14.224-39.808C287.808,254.464,316.256,224.992,350.128,224.032z" 
            />
            <path 
                {...props}
                d="M320,304c13.232,0,24-10.768,24-24s-10.768-24-24-24s-24,10.768-24,24S306.768,304,320,304z M320,272     c4.408,0,8,3.584,8,8c0,4.416-3.592,8-8,8c-4.408,0-8-3.584-8-8C312,275.584,315.592,272,320,272z"
            />
            <path 
                {...props}
                d="M384,304c13.232,0,24-10.768,24-24s-10.768-24-24-24s-24,10.768-24,24S370.768,304,384,304z M384,272     c4.408,0,8,3.584,8,8c0,4.416-3.592,8-8,8c-4.408,0-8-3.584-8-8C376,275.584,379.592,272,384,272z" 
            />
          </g>
      );
    default:
      return <path />;
  }
};

const SVGIcon = ({
  name = "",
  style = {},
  fill = "#000",
  viewBox = "",
  width = "100%",
  className = "",
  height = "100%"
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox || getViewBox(name)}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    {getPath(name, { fill })}
  </svg>
);

export default SVGIcon;
