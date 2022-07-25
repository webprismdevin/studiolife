export default {
    name: 'link',
    type: 'object',
    fields: [
        {
            name: 'text',
            type: 'string'
        },
        {
            name: 'link',
            description: 'Accepts absolute (https://google.com/) or relative URLs (/about)',
            type: 'string'
        }
    ]
}