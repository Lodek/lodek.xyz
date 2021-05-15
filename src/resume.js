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
            <p :style="content">
            {{desc}}
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
            'Bootstrap',
            'Angular',
            'Angular Material',
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
At wipro I worked with the development of REST apis using Java and Spring; development of front-end web apps using Angular; setup a CI/CD pipeline to containerize a web app and auto-deploy using GitlabCI; developed automated tests using Java and Selenium; developed a MVP interview web app in Django which was standardized as part of the internal interview process.
    `
    }
})

new Vue({
    el: '#codefiction',
    data: {
        company: 'Code Fiction',
        position: 'Software Developer',
        startDate: 'Oct/2020',
        endDate: 'Jan/2020',
        desc: `
                            Code Fiction is a new company with a limited staff and new projects.
                            As such, I was responsible for configuring the development environment, staging environment and coding user stories.

                            For the development environment I've configured docker and docker-compose files to ensure consistency among developers.
                            As for the staging environment, I applied the knowledge I've acquired with my AWS certification to architect a minimal 
                            - but secure - cloud infrastructure.

                            Futhermore I configured pipelines for different build tools, such as:  Java Maven, Vue and React, thus ensuring that 
                            CI/CD practices were followed.
                            The infrastructure stack was: Gitlab for pipeline runners, Terraform for cloud resource provisioning, docker-compose 
                            as the runtime orchestrator and nginx as a reverse proxy.

                            The development tasks consisted of Java with Spring Boot and Spring MVC for REST APIs. 
                            Aside from the domain specific development tasks, I implemented Single Sign On functionality for the backend,
                            which followed the OpenID Connect standard, allowing users to log in using Google and Facebook.
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

                            At Azion I act primarily as a Django developer, coding new features and improvements for 
                            their main platform.

                            My stay at Azion has been a rich learning experience. Everyday I learn more about what it means to be best in class.
                            During my time at Azion I have improved my own processes regarding coding, learnt more about designing robust and scalable architectures, 
                            SRE practices and processes and the list goes on.

                            I am particularly proud of a two problems I've worked on where I was able to leverage my knowledge of Python
                            features in depth (decorators, metaclasses, namespace particularities) to solve complex problems with as little
                            code refactor as possible.
                            One of the problems I worked was to implement a system of object-permission checking in a Django application.
                            Through Python's decorators, I added behaviors to the Django Queryset class at runtime to execute validations.
                            The motivation behind that was to enforce mandatory checks were made before executing a query or returning an
                            object to the calling code, ensuring that the requester has enough permission to perform the operation.
                            The solution improved the overall code security, but more than that, it did so without requiring a major refactor
                            in the entire code base, which by now is more than 6 years old.
                                `
    }
})



new Vue({el: '#ce'});
new Vue({el: '#phy'})
new Vue({el: '#ccp'})
