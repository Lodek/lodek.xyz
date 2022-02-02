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
            During my internship I worked as a fullstack software engineer.
            As a highlight of my time there, I prototyped a system to structure the company's techincal interviewing prodecures.
            The MVP was refined and standardized by the managers as part of the internal process.
        `,
        activities: [
            'Full stack development using Spring Boot for REST APIs and Angular front end.',
            'Built CI and CD pipelines, from scratch, for Dockerized Maven and Angular projects.',
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
        I was part of their first project and I embraced the task of doing the initial infrastructure setup so that the team could start working on the MVP.
        As such I setup CI/CD pipelines and configured our environments such that they followed cloud native practices.
        This initial setup proved invaluable as it guaranteed consistency among team member and environments.
        `,
        activities: [
            'Architecture definition for backend application using DDD.',
            'Development of Backend Enterprise Application REST APIs with Spring Boot.',
            'Implemented an OpenID Connect authentication scheme using Spring Security.',
            'DevOps related tasks such as: CI and CD pipelines, Dockerizing applications, Nginx setup and setup a minimal AWS infrastructure.',
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
        Azion is one of the leading edge computing providers with products such as: Web-Application Firewall, Serverless JS FaaS and CDN.
        I am a member of the Security Products team and have close contact with Azion's Network and Application Firewalls and Digital Certificate Management.
         The security team stack is extensive, composed of Python, Django, C, Lua, Rust, Go, Nginx, OpenResty and Security domain knowledge such as TLS, PKCS#11, X.509 PKI and OpenSSL.
`,
        activities: [
            "Implemented a feature for the Web Application Firewall which scrapes access logs and recommends a configuration to the user. The project leverages Azion's log stream through an ETL approach using Clickhouse. ",
            "Performed extensive research in order to architect a FIPS 140-2 level 3 compliant Digital Certificate storage solution for Azion's edges. This project required technical depth in Nginx, OpenSSL, TLS protocol and the PKCS#11 standard.",
            'Regular use of an extensive stack to perform my tasks, such as: Grafana, Puppet, Kibana, Clikchouse, Nginx, Naxsi, Docker, Github Actions, Linux',
        ]
    }
})



new Vue({el: '#ce'});
new Vue({el: '#phy'})
new Vue({el: '#ccp'})
