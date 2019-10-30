/*
* nodeType 元素节点的值是1,属性节点值是2,文本节点值是3(语法是node.nodeType)
*/

/*
* 有元素节点(body,ul,li),文本节点(p,li元素包着的那些),属性节点(title,id,class那些)
* getElementById
* getElementByTagName 返回的是数组(可以使用通配符*)
* getElementsByClassName 这是返回一个数组
* getAttribute 只能通过元素节点对对象调用 ,查询属性用的
* setAttribute 修改元素节点,用来修改属性节点
*/

/*
* childNodes用来获取一个元素的所有子元素,返回数组 childNodes[0]可以写成firstChild,childNodes[node.childNodes.length-1]可以写成lastChild
* nodeValue可以改变文本节点的值 node.nodeValue
*/

/*
* createElement可以创建一个新的元素
* appendChild用来插入节点,使其成为子节点
* createTextNode创建文本节点
* 父元素.insertBefore(新的,目标)把一个新元素插入到一个元素的前面
! document.write()可以把字符串插入到文档中  最好别用
! innerHTML 也最好别用,不过精确,还是使用dom
*/