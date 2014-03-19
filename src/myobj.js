var myObj = {
    one: function() {
        return 1;
    },
    two: function() {
        return 2;
    }
}
// 暴露模块
if (typeof window !== 'undefined') {
    window.myObj = myObj;
} else {
    module.exports = myObj;
}