import assert from 'assert'

export default function mapAPI() {
    const itemObj = { name: 'erickwendel' }
    const itemMap = new Map([
        ['name', 'erickwendel']
    ])

    itemObj.birthDay = '1995'
    assert.ok(itemObj.birthDay === '1995')

    itemMap.set('birthDay', '1995')
    assert.ok(itemMap.get('birthDay') === '1995')

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
    assert.ok(Object.keys(itemObj), [])

    itemMap.clear()
    assert.ok([...itemMap.keys()], [])
}