let projects = [
    {
        'title':'Javascript Image Cropper',
        'link':'https://rajironman.github.io/image-cropper',
        'skills':['HTML','CSS','Javascript'],
        'description':[
            'point 1',
            'point 2',
            'point 3'
        ],
        'bg_color':'darkblue'
    }
    ,
    {
        'title':'Indian Restaurant',
        'link':'https://rajironman.github.io/indian-restaurant',
        'skills':['HTML','CSS','Javascript','Angular'],
        'description':[
            'point 1',
            'point 2',
            'point 3'
        ],
        'bg_color':'black'
    }
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

    project_details_div.append(title_h1,skills_p,description_ul,link_a)

    let el = [iframe,project_details_div]

    if(projects_section.childNodes.length % 2 == 0)
    el.reverse()

    project_div.append(...el)

    // project_div.style.backgroundColor = project.bg_color

    projects_section.append(project_div)
}