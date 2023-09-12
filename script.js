let projects = [
    {
        'title':'Javascript Image Cropper',
        'link':'https://rajironman.github.io/image-cropper',
        'skills':['HTML','CSS','Javascript'],
        'description':[

            'Developed a JavaScript image cropper utilizing advanced event tracking techniques for seamless responsiveness.',
            'Supported multiple image input methods: file selection, drag and drop, and image URL.',
            'Utilized closure technique to prevent global scope pollution and ensure code encapsulation.'
        
                ],
        'bg_color':'darkblue',
        'show':'link'
    }
    ,
    {
        'title':'Indian Restaurant',
        'link':'https://rajironman.github.io/indian-restaurant',
        'skills':['HTML','CSS','Javascript','Angular'],
        'description':[
            'Leveraged Angular\'s RouterService to enable smooth navigation and create a single-page application.',
            'Established efficient inter-component communication using Angular Services.'
        ],
        'bg_color':'black',
        'show':'link'
    },
    {
        'title':'Advertising Website',
        'link':'https://raj.epizy.com/ts2',
        'skills':['HTML','CSS','Javascript','PHP','MySQL'],
        'description':[
            'Advertisement details are fetched from the server in JSON format using AJAX.',
            'User credentials are hashed prior to storage in the database and also encrypted at the client side.',
            'Resizing & optimizing the images to reduce file size upto 20kb - 35kb approx.'
                ],
        'bg_color':'black',
        'show':'link'
    },
    {
        'title':'Guessing Number Game',
        'link':'https://rajironman.github.io/guessing-number-game',
        'skills':['HTML','CSS','Javascript','Angular'],
        'description':[
            'Single Page Application is built with the help of Angular Components.',
            '@ViewChild decorator and EventEmitter allow interaction between component hirearchy.'
        ],
        'bg_color':'black',
        'show':'link'
    },
    {
        'title':'Flight Delay Prediction',
        'link':'https://github.com/rajironman/flight_delay_prediction',
        'skills':['Python','Machine Learning','HTML','CSS','Javascript'],
        'description':[
            'Different metrics are used to compare three models trained using Random Forest Classifier , Decision Tree Classifier , ANN. '
        ],
        'bg_color':'black',
    },
]


let projects_section = document.querySelector('#projects')

for(let i=0;i<projects.length;i++){
    addProject(projects[i])
}

function addProject(project){
    console.log(project)
    let project_div = document.createElement('div')
    let project_details_div = document.createElement('div')
    let title_h1 = document.createElement('h1')
    let link_a = document.createElement('a')
    let skills_p = document.createElement('p')
    let description_ul = document.createElement('ul')
    let iframe = document.createElement('iframe')
    let image = document.createElement('img')

    title_h1.innerHTML = project['title']
    link_a.href = project.link
    link_a.innerHTML = 'click to view the project'
    skills_p.innerHTML = 'Skills &nbsp;&nbsp;:&nbsp;&nbsp; ' + (project['skills'].join(' , '))
    for(let i=0;i<project['description'].length;i++){
        let description_point_li = document.createElement('li')
        description_point_li.innerHTML = project['description'][i]
        description_ul.append(description_point_li)
    };

    iframe.src = project.link
    image.src = project.image

    project_details_div.append(title_h1,skills_p,description_ul,link_a)

    let el = [project_details_div]

    if(project.show == 'link')
    el.push(iframe)
    if(project.show == 'image')
    el.push(image)

    if(projects_section.childNodes.length % 2 == 0)
    el.reverse()

    project_div.append(...el)

    // project_div.style.backgroundColor = project.bg_color

    projects_section.append(project_div)
}