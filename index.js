
        // button style
        append.style.background = "blue"
        append.style.color = "white"
        append.style.padding = "10px"
        append.style.border = "none"
        append.style.borderRadius = "10px"
        append.style.boxShadow ="rgb(211 204 204 / 50%) 0px -2px 4px 4px"
        append.style.borderRight = "2px solid #1e1d1d"

        // remove button style
        remove.style.background = "red"
        remove.style.color = "white"
        remove.style.padding = "10px"
        remove.style.border = "none"
        remove.style.borderRadius = "10px"
        remove.style.boxShadow ="rgb(211 204 204 / 50%) 0px -2px 4px 4px"
        remove.style.borderRight = "2px solid #1e1d1d"
        // Notes Styles
        append_Style=document.getElementById('myAppendListItems')
        append_Style.style.listStyleType = "none"
        append_Style.style.color = "Blue"
        append_Style.style.fontSize = "20px"
        // add items 
        function Append() {
            const node = document.createElement("h3")
            const textNode = document.createTextNode(prompt("Enter your Text Here"))
            node.appendChild(textNode)
            document.getElementById('myAppendListItems').appendChild(node)
        }
        // remove childs
        function Remove() {

            // const node = document.createElement("li")
            // const textNode = document.createTextNode(prompt("Enter your Text Here"))
            // node.appendChild(textNode)
            // document.getElementById('myAppendListItems').appendChild(node)

            const list = document.getElementById('myAppendListItems')
            if (list.hasChildNodes) {
                remove=list.removeChild(list.children[0])  
                alert(`Are your Sure you Want to Remove`)
            }
        }        
    