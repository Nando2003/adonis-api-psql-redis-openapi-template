import testUtils from '@adonisjs/core/services/test_utils'
import { test } from '@japa/runner'

test.group('HelloController.show', (group) => {
  group.each.setup(() => testUtils.db().withGlobalTransaction())

  test('GET / returns hello world', async ({ client, assert }) => {
    const response = await client.get('/').accept('application/json')
    assert.equal(response.status(), 200)
    assert.deepEqual(response.body(), { hello: 'world' })
  })
})
