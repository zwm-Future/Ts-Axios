import axios from '../../src/ts-axios'

// 测试

// 处理 url params传值参数
// axios({
//     method: 'get',
//     url: '/base/get',
//     params: {
//         foo: {
//             bar: 'baz'
//         }
//     }
// })

// 处理 body 参数
// const arr = new Int32Array([21, 31])

// axios({
//     method: 'post',
//     url: '/base/post',
//     data: {
//         a: 1,
//         b: 2
//     }
// })


// axios({
//     method: 'post',
//     url: '/base/buffer',
//     data: arr
// })

// 处理 headers

// axios({
//     method: 'post',
//     url: '/base/post',
//     data: {
//         a: 1,
//         b: 2
//     }
// })

// axios({
//     method: 'post',
//     url: '/base/post',
//     headers: {
//         'content-type': 'application/json;',
//         'a':'1'
//     },
//     data: {
//         a: 1,
//         b: 2
//     }
// })

const paramsString = 'q=URLUtils.searchParams&topic=api'
const searchParams = new URLSearchParams(paramsString)

axios({
    method: 'post',
    url: '/base/post',
    data: searchParams
})
