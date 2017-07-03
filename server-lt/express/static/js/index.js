(function(exports) {
    exports.$('#btnClick').onclick = function() {
        exports.request({url:'/api/detail'}).then(function(data) {
            var arry = [], item,
                table = exports.$('#table');

            for (var i = 0, l = data.length; i < l; i++) {
                item = data[i];

                arry.push([
                    '<tr>',
                    '   <td>' + item.id + '</td>',
                    '   <td>' + item.name + '</td>',
                    '   <td>' + item.age + '</td>',
                    '   <td>' + item.birth + '</td>',
                    '   <td><a href="modify">编辑</a></td>',
                    '</tr>'
                ].join(''));
            }

            var domFrame = document.createDocumentFragment();
            var div = document.createElement('div');
            domFrame.appendChild(div);

            div.innerHTML = "<table><tbody>" + arry + "</tbody></table>";

            table.removeChild(exports.$('tbody', table));

            table.appendChild(exports.$('tbody', div));
        });
    };
})(window.exports || {});