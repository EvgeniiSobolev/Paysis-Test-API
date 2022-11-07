module.exports = {
    require: '@babel/register',
    spec: 'test/*.spec.js',
    ignore: 'test/example.spec.js',
    file: 'config/setup.js',
    timeout: 15000,
}