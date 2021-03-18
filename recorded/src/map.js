import assert, { deepStrictEqual } from 'assert'

export default function mapAPI() {
    const itemObj = { name: 'erickwendel' }
    const itemMap = new Map([
        ['name', 'erickwendel']
    ])

    itemObj.birthDay = '25/04/1995'
    assert.ok(itemObj.birthDay === '25/04/1995')

    itemMap.set('birthDay', '25/04/1995')
    assert.deepStrictEqual(itemMap.get('birthDay'), '25/04/1995')

    assert.ok(itemObj.hasOwnProperty('birthDay'))
    assert.ok(itemMap.has('birthDay'))

    delete itemObj.birthDay
    assert.ok(itemObj.hasOwnProperty('birthDay') === false)

    itemMap.delete('birthDay')
    assert.ok(itemMap.has('birthDay') === false)

    assert.deepStrictEqual(Object.keys(itemObj).length, 1)
    assert.deepStrictEqual(itemMap.size, 1)

    assert.deepStrictEqual(Object.entries(itemObj), [['name', 'erickwendel']])
    assert.deepStrictEqual([...itemMap], [['name', 'erickwendel']])

    for (const [key, value] of Object.entries(itemObj)) {
        assert.deepStrictEqual([key, value], ['name', 'erickwendel'])
    }
    
    for (const [key, value] of itemMap) {
        assert.deepStrictEqual([key, value], ['name', 'erickwendel'])
    }

    Object.keys(itemObj).map(key => delete itemObj[key])
    assert.deepStrictEqual(Object.keys(itemObj), [])

    itemMap.clear()
    assert.deepStrictEqual([...itemMap.keys()], [])

    const t = {
        toString() {
            return 'aeeee'
        }
    }

    assert.deepStrictEqual(String(t), 'aeeee')
    const m = new Map()
    m.set('toString', 'teste')
    assert.deepStrictEqual(String(m), '[object Map]')

    
}