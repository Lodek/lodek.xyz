Vue.component('skill-item', {
    props: ['skills', 'category'],
    template: `
        <li class="list-unstyled">
            <h3 :style="categoryStyle"> {{ category }} </h3>
            <ul class="list-inline">
                <li 
                  class="list-inline-item" 
                  v-for="skill in skills"
                > {{ skill }} </li>
            </ul>
        </li>`,
    data: function() {
        return {
            categoryStyle: {
                paddingTop: '15px',
            }
        }
    }
})

Vue.component('accredidation', {
    props: ['institution', 'name', 'dateRange', 'reference'],
    template:
    `
    <li>
      <h3> 
          <i class="fas fa-university"></i>
          {{name}} 
      </h3>
      <div :style="nudge">
          <i class="far fa-building"></i> {{institution}}
          <i class="far fa-calendar-alt"></i> {{dateRange}}
          <a v-if="reference" :href="reference">
            <i class="fas fa-certificate text-dark">
            </i>
               Validation
          </a>
      </div>
    </li>
    `,
    data: function() {
        return {
            nudge: {
                paddingLeft: '8px',
            }
        }
    }
})

Vue.component('work-exp', {
    template: `
    <li>
        <h3>{{position}}</h3>
            <i class="far fa-calendar-alt"></i>{{startDate}} - {{endDate}}
            <i class="far fa-building"></i> {{company}}
            <p :style="content" v-html="desc">
            </p>
    </li>
    `,
    props: ['company', 'position', 'startDate', 'endDate', 'desc'],
    data: function() {
        return {
            content: {
                marginLeft: '10px',
            }
        }
    }
})

new Vue({
    el: '#languages',
    data: {
        skills: [
            'Python', 
            'Haskell',
            'C',
            'Rust',
            'Java',
            'JavaScript',
            'TypeScript',
            'HTML/CSS',
            'SQL',
            'Shell'
        ],
        category: 'Languages'
    }
})

new Vue({
    el: '#frameworks',
    data: {
        skills: [
            'Spring Framework',
            'Django',
            'Django REST Framework',
            'Angular',
            'Linux Programming',
        ],
        category: 'Frameworks & Libs'
    }
})

new Vue({
    el: '#tools',
    data: {
        skills: [
            'Docker',
            'Docker Compose',
            'Kubernetes',
            'AWS',
            'Unix',
            'Selenium',
            'Git',
            'GNU Make',
            'Nginx',
            'LaTeX',
            'Puppet',
        ],
        category: 'Tools'
    }
})

new Vue({
    el: '#concepts',
    data: {
        skills: [
            'DevOps',
            'Scrum',
            'Design Patterns',
            'Functional Programming',
            'Object Oriented Programming',
            'MVC Architecture',
            'REST API',
            'Test Automation',
            'Unit Testing',
            'Relational Databases',
            'CI/CD',
            'GitFlow',
            'Micro Service Architecture',
        ],
        category: 'Concepts & Practices'
    }
})

new Vue({
    el: '#wipro',
    data: {
        company: 'Wipro',
        position: 'Software Engineering Intern',
        startDate: 'Nov/2019',
        endDate: 'Jul/2020',
        desc: `
At wipro I worked as a fullstack software engineer. During my stay there I: developed Spring Boot based REST APIs; Single Page Application development with Angular; built CI/CD pipelines - from scratch - for a Dockerized Spring Boot app.
<br>
I am specially proud about an initiative proposed by my supervisor.
I prototyped a system to structure the company's interview process which later on was widely adopted by the managers to improve their workflow.
    `
    }
})

new Vue({
    el: '#codefiction',
    data: {
        company: 'Code Fiction',
        position: 'Software Developer and DevOps Enabler',
        startDate: 'Oct/2020',
        endDate: 'Jan/2020',
        desc: `
I was part of the first development team at Code Fiction, while they were setting up and stablishing processes.
I embraced the task of doing the initial setup so the team could start working on the MVP.
As such I setup CI/CD pipelines and configured our environments such that they followed cloud native practices (container orchestration, gitflow, infrastructure as code).
This initial setup proved invaluable as it guaranteed the application's consistency accross environments and automated processes which empowered the team to focus on the development tasks.
The infrastructure stack was: Docker, Terraform, Docker Compose, Gitlab CI, Nginx and AWS services.
<br>
Although I worked on establishing processes and spreading the DevOps culture, my main role was still of a Software Developer.
The development tasks consisted of REST APIs enabled by Spring Boot (Spring MVC) and the code base was architected following DDD practices 
During that time I implemented a Single Sign One feature which allowed users to login using Google and Facebook.
The authentication flow made use of the OAuth and OpenID Connect standards.
`
    }
})

new Vue({
    el: '#azion',
    data: {
        company: 'Azion',
        position: 'Software Developer',
        startDate: 'Jan/2021',
        endDate: '',
        desc: `
Azion is one of the leading edge computing providers.
Their stack is extensive and cutting edge.

At Azion I work with Django to maintain the legacy MVC system and code new features using an API first approach following REST practices.
Although the main system is written in Django, I work on multiple services, some of which are microservices written in pure Python with an RPC interface.
I continously look to improve the existing monolith, experimenting with different abstractions leveraging Python's more advanced featured (meta programming, context managers, iterators) to improve code readability and reduce repetition.
I am particularly proud of a problem I've worked on where I was able to leverage my in-depth knowledge of Python to fix a security flaw in our application.
The solution was proved capable of patching the security issues without refactoring the legacy code.
Some other tools and languages I use in order to work with our entire stack are: Grafana, Prometheus, Kibana, Puppet, Nginx, Kubernetes, Docker, GitHub Actions and Rust.
<br>
At Azion I've seen what it means to be best-in-class.
My stay has been a rich learning experience and I am proud to have contributed and improved their systems.
`
    }
})



new Vue({el: '#ce'});
new Vue({el: '#phy'})
new Vue({el: '#ccp'})
