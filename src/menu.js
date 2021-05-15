Vue.component('links-nav', {
    template:
    `
    <nav :style="nav" class="links-nav">
        <div :style="wrapperStyle">
          <a class="text-white" href="http://lodek.xyz" target="_blank">
            <i class="text-white fas fa-home"></i>lodek.xyz
          </a>
          <a class="text-white" href="mailto:gomes.bruno.ac@gmail.com">
            <i class="fas fa-at text-white"></i>gomes.bruno.ac@gmail.com
          </a>
          <a class="text-white" href="http://github.com/lodek" target="_blank">
            <i class="fab fa-github text-white"></i>Lodek
          </a>
          <a class="text-white" href="http://linkedin.com/in/lodek" target="_blank">
            <i class="text-white fab fa-linkedin"></i>Lodek
          </a>
        </div>
    </nav>
    `,
    data: function () {
        return {
            nav: {
                backgroundColor: 'rgba(30, 30, 30, 1)',
                width: '100%',
                paddingTop: '8px',
                paddingBottom: '8px',
            },
            wrapperStyle: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginLeft: '15%',
                marginRight: '15%',
                fontWeight: '550',
                textDecoration: 'none',
            },
        }
    }
});

new Vue({el: '#links'})

