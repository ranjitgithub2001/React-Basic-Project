

function custRender(newEle, root){
    const ele=document.createElement(newEle.type)
    ele.innerHTML=newEle.children
    for (const prop in newEle.props) {
        if(prop==='children') continue;
        ele.setAttribute(prop, newEle.props[prop])
    }
    ele.style.backgroundColor='red'
    root.appendChild(ele)
}
 
const root=document.getElementById('root')
const newEle={
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Click here to visit google'
}

custRender(newEle, root)