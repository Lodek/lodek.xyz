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
    template: `
    <div v-bind:class="newpage" v-bind:style="component">
        <div v-bind:style="header">
            <div>
                <h4>{{company}}</h4>
                <h6><b>{{position}}</b></h6>
            </div>

            <div> {{startDate}} - {{endDate}} <i class="far fa-calendar-alt"></i> </div>
        </div>

        <p v-html="intro"></p>

        <ul v-bind:style="activitiesStyle">
          <li v-for="activity in activities"> {{activity}} </li>
        </ul>

    </div>
    `,
    props: {
        newpage: {
            default: false,
            type: Boolean
        },
        company: String,
        position: String,
        startDate: String,
        endDate: String,
        intro: String,
        activities: Array
    },
    data: function() {
        return {
            content: {
                marginLeft: '10px',
            },

            component: {
                paddingBottom: '28px',

            },

            activitiesStyle: {
                marginLeft: '18px',
            },

            header: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
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
        intro: `
            Wipro is a Fortune India 500 company with a large IT service providing department.
            During my internship I worked as a fullstack software engineer, which significantly strengthened my skills.
            As a highlight of my time there, I prototyped a system to structure the company's techincal interviewing prodecures.
            The MVP was refined and standardized by the managers as part of the process.
        `,
        activities: [
            'Full stack development using Spring Boot for REST APIs and Angular front end.',
            'Built CI and CD pipelines, from scratch, for Dockerized Java Maven projects and Angular projects.',
            'Django development for an MVC application.',
        ]
    }
})

new Vue({
    el: '#codefiction',
    data: {
        company: 'Code Fiction',
        position: 'Software Developer and DevOps Enabler',
        startDate: 'Oct/2020',
        endDate: 'Jan/2020',
        intro: `
        Codefiction is a technology startup company which provides IT services to their clients.
        While there I worked as a Backend Software Developer, using Spring Boot and helped establish processes.
        I was part of their first development team and I embraced the task of doing the initial infrastructure setup so that the team could start working on the MVP.
        As such I setup CI/CD pipelines and configured our environments such that they followed cloud native practices (container orchestration, gitflow, infrastructure as code).
        This initial setup proved invaluable as it guaranteed consistency among team member and environments.
        Furthermore, it automated processes which empowered the team to focus on the development tasks.
        `,
        activities: [
            'Architecture definition for backend application using DDD.',
            'Development of Backend Enterprise Application REST APIs with Spring Boot.',
            'Using Spring Security, built a Social Authentication scheme leveraging OAuth and OpenID Connect.',
            'Setup and provisioning of VPS and deployment automation.',
            'Configured CI and CD pipelines using: Docker, Terraform, Gitlab CI, Nginx and AWS Services.',
        ]
    }
})

new Vue({
    el: '#azion',
    data: {
        company: 'Azion',
        position: 'Software Developer',
        startDate: 'Jan/2021',
        endDate: 'Present',
        intro: `
        Azion is one of the leading edge computing service providers.
        Their products are technical in nature such as web-application firewalls, load ballancing and content caching.
        <br>
        My primary goals are to improve and add new features to their security products (edge firewall and web application firewal).
        The stack is primarily composed of Django, RPC Python services and parts of their infrastructure such as Nginx. 
        Since a fair ammount of the code base is quite old, I continuously look to improve it and create better abstractions to simplify the existing code.
`,
        activities: [
            'Improvements and bugfixes for the existing Django MVC application',
            'Architecting and implementing new endpoints for the security products REST API.',
            'Proposed several improvements to refactor the old code base.',
            'Worked with various tools to perform my tasks, such as: Grafana, Puppet, Kibana, Clikchouse, Nginx, Naxsi, Docker, Github Actions',
        ]
    }
})



new Vue({el: '#ce'});
new Vue({el: '#phy'})
new Vue({el: '#ccp'})
