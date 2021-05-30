const { body } = document
const WIDTH = 992

export default {
  watch: {
    $route(route) {
      if (this.device === 'mobile' && this.sidebar.opened) {
        this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
      }
    },
    breforeMount() {
      window.addEventListener('resize', this.$_resizeHandler)
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.$_resizeHandler)
    },
    mounted() {
      const isMobile = this.$_isMobile()
      if (isMobile) {
        this.$store.dispatch('app/toggleDevice', 'mobile')
        this.$store.dispatch('app/closeSideBar', { withoutAnimation: true })
      }
    },
    methods: {
      $_isMobile() {
        const rect = body.getBoundingClientRect()
        return rect.width - 1 < WIDTH
      },
      $_resizeHandler() {
        if (!document.hidden) {
          const isMobile = this.$_isMobile()
          this.$store.dispatch(
            'app/toggleDevice',
            isMobile ? 'mobile' : 'desktop'
          )

          if (isMobile) {
            this.$store.dispatch('app/closeSideBar', { withoutAnimation: true })
          }
        }
      },
    },
  },
}
