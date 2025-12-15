import router from '@adonisjs/core/services/router'
import openapi from '@foadonis/openapi/services/main'

const HelloController = () => import('#controllers/hello_controller')

router.get('/', [HelloController, 'show'])

if (process.env.NODE_ENV !== 'production') {
  openapi.registerRoutes()
}
