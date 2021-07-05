Vue.component('accredidation', {
    props: ['institution', 'name', 'dateRange', 'reference'],
    template:
    `
    <li class="d-flex flex-row justify-content-between">

      <div>
          <i class="fas fa-university"></i>
          <a v-if="reference" :href="reference">
              {{name}} 
          </a>
          <span v-if="!reference">
              {{name}} 
          </span>
          - 
        {{institution}}
      </div>

      <div>
          <div> {{dateRange}} <i class="far fa-calendar-alt"></i> </div>
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
    // fix me homie, this was some nasty html
    template: `
    <li>
        <div class="d-flex flex-row justify-content-between align-items-center">
            <div>
                <h4>{{company}}</h4>
                <h6><b>{{position}}</b></h6>
            </div>

            <div> {{startDate}} - {{endDate}} <i class="far fa-calendar-alt"></i> </div>
        </div>
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
I prototyped a system to structure the company's interview process, which later on was widely adopted by the managers to improve their workflow.
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
The development tasks consisted of REST APIs enabled by Spring Boot (Spring MVC) and the code base was architected following DDD practices.
During that time I implemented a Single Sign On feature which allowed users to login using Google and Facebook.
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
I continously look to improve the existing monolithic system, experimenting with different abstractions leveraging Python's more advanced featured (meta programming, context managers, iterators) to improve code readability and reduce repetition.<br>
I am particularly proud of solution I've worked on where I leveraged in-depth knowledge of Python to fix a security flaw in our application.
The solution proved capable of patching the vulnerability without requiring refactoring the legacy code.
Some other tools and languages I use in order to work with our entire stack are: Grafana, Prometheus, Kibana, Puppet, Nginx, Kubernetes, Docker, GitHub Actions and Rust.
<br>
At Azion I've seen what it means to be best-in-class and it's been a rich learning experience.
`
    }
})



new Vue({el: '#ce'});
new Vue({el: '#phy'})
new Vue({el: '#ccp'})
